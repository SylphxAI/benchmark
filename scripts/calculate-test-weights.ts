#!/usr/bin/env bun
/**
 * Calculate test weights based on performance variance
 *
 * Following krausest/js-framework-benchmark methodology:
 * - Calculate slowdown factors for each test across all libraries
 * - Use 90th percentile of factors as weight basis
 * - Tests with high variance get lower weights
 * - Tests with low variance get higher weights
 */

interface BenchmarkResult {
  test: string;
  group: string;
  opsPerSecond: number;
  meanTime: number;
  variance: number;
  p99: number;
  samples: number;
}

interface LibraryBenchmark {
  library: string;
  libraryId: string;
  version: string;
  timestamp: string;
  results: BenchmarkResult[];
}

interface TestWeight {
  testName: string;
  group: string;
  p90Factor: number;
  rawWeight: number;
  normalizedWeight: number;
}

/**
 * Calculate the 90th percentile of an array
 */
function percentile90(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.floor(sorted.length * 0.9);
  return sorted[index];
}

/**
 * Calculate test weights based on performance variance across libraries
 *
 * @param libraries - All library benchmark results
 * @returns Map of test name to normalized weight
 */
export function calculateTestWeights(
  libraries: LibraryBenchmark[]
): Map<string, number> {
  if (libraries.length === 0) {
    return new Map();
  }

  const testWeights: TestWeight[] = [];

  // Get all unique test names
  const testNames = libraries[0].results.map(r => r.test);

  for (const testName of testNames) {
    // Collect results for this test from all libraries
    const testResults = libraries
      .map(lib => lib.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    if (testResults.length === 0) continue;

    // Get the test group
    const group = testResults[0].group;

    // Calculate slowdown factors: fastest / current
    const opsValues = testResults.map(r => r.opsPerSecond);
    const fastest = Math.max(...opsValues);

    // Skip tests where all implementations are equally fast (unlikely but possible)
    if (fastest === 0) continue;

    const factors = opsValues.map(ops => {
      // Avoid division by zero
      if (ops === 0) return 100; // Extremely slow, high factor
      return fastest / ops;
    });

    // Calculate 90th percentile of factors
    const p90Factor = percentile90(factors);

    // Weight = 1 / p90Factor
    // Tests with large variance (high p90Factor) get lower weight
    // Tests with small variance (low p90Factor) get higher weight
    const rawWeight = 1 / p90Factor;

    testWeights.push({
      testName,
      group,
      p90Factor,
      rawWeight,
      normalizedWeight: 0, // Will be calculated after
    });
  }

  // Normalize weights so they sum to 1.0
  const sumRawWeights = testWeights.reduce((sum, tw) => sum + tw.rawWeight, 0);

  for (const tw of testWeights) {
    tw.normalizedWeight = tw.rawWeight / sumRawWeights;
  }

  // Create the final map
  const weightsMap = new Map<string, number>();
  for (const tw of testWeights) {
    weightsMap.set(tw.testName, tw.normalizedWeight);
  }

  return weightsMap;
}

/**
 * Get detailed test weight information for reporting
 */
export function getTestWeightDetails(
  libraries: LibraryBenchmark[]
): TestWeight[] {
  if (libraries.length === 0) {
    return [];
  }

  const testWeights: TestWeight[] = [];
  const testNames = libraries[0].results.map(r => r.test);

  for (const testName of testNames) {
    const testResults = libraries
      .map(lib => lib.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    if (testResults.length === 0) continue;

    const group = testResults[0].group;
    const opsValues = testResults.map(r => r.opsPerSecond);
    const fastest = Math.max(...opsValues);

    if (fastest === 0) continue;

    const factors = opsValues.map(ops => (ops === 0 ? 100 : fastest / ops));
    const p90Factor = percentile90(factors);
    const rawWeight = 1 / p90Factor;

    testWeights.push({
      testName,
      group,
      p90Factor,
      rawWeight,
      normalizedWeight: 0,
    });
  }

  const sumRawWeights = testWeights.reduce((sum, tw) => sum + tw.rawWeight, 0);

  for (const tw of testWeights) {
    tw.normalizedWeight = tw.rawWeight / sumRawWeights;
  }

  return testWeights;
}

/**
 * Calculate weighted geometric mean score for a library
 *
 * @param scores - Array of normalized scores (0-100)
 * @param weights - Array of weights (should sum to 1.0)
 * @returns Weighted geometric mean score
 */
export function weightedGeometricMean(
  scores: number[],
  weights: number[]
): number {
  if (scores.length !== weights.length) {
    throw new Error('Scores and weights arrays must have the same length');
  }

  if (scores.length === 0) {
    return 0;
  }

  // WGM = (s₁^w₁ × s₂^w₂ × ... × sₙ^wₙ)^(1/Σw)
  // Since weights are normalized (Σw = 1), simplifies to:
  // WGM = (s₁^w₁ × s₂^w₂ × ... × sₙ^wₙ)

  let weightedProduct = 1;

  for (let i = 0; i < scores.length; i++) {
    // Handle zero scores by treating them as very small values
    const score = scores[i] === 0 ? 0.01 : scores[i];
    weightedProduct *= Math.pow(score, weights[i]);
  }

  return weightedProduct;
}

// CLI interface for testing
if (import.meta.main) {
  const { readFileSync, readdirSync } = await import('fs');
  const { join } = await import('path');

  const resultsPath = process.argv[2] || 'benchmarks/state-management/results';

  console.log(`📊 Calculating test weights from: ${resultsPath}\n`);

  // Load library results
  const libraries: LibraryBenchmark[] = [];
  const libraryDirs = readdirSync(resultsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const libraryId of libraryDirs) {
    const libraryDir = join(resultsPath, libraryId);
    const testFiles = readdirSync(libraryDir)
      .filter(f => f.endsWith('.json'))
      .sort();

    if (testFiles.length === 0) continue;

    const testResults: BenchmarkResult[] = [];
    let libraryName = '';
    let packageName = '';
    let timestamp = '';

    for (const testFile of testFiles) {
      const testData = JSON.parse(readFileSync(join(libraryDir, testFile), 'utf-8'));

      if (!libraryName) {
        libraryName = testData.library;
        packageName = testData.packageName;
        timestamp = testData.timestamp;
      }

      testResults.push({
        test: testData.test,
        group: testData.group,
        opsPerSecond: testData.result.opsPerSecond,
        meanTime: testData.result.meanTime,
        variance: testData.result.variance,
        p99: testData.result.p99,
        samples: testData.result.samples,
      });
    }

    libraries.push({
      library: libraryName,
      libraryId,
      version: packageName,
      timestamp,
      results: testResults,
    });
  }

  console.log(`✓ Loaded ${libraries.length} libraries\n`);

  // Calculate weights
  const weights = getTestWeightDetails(libraries);

  // Sort by weight (descending)
  weights.sort((a, b) => b.normalizedWeight - a.normalizedWeight);

  // Print results
  console.log('Test Weights (Based on 90th Percentile of Performance Variance)\n');
  console.log('┌─────────────────────────────────────────────────┬──────────────┬────────────┬───────────┐');
  console.log('│ Test                                            │ 90% Factor   │ Raw Weight │ Norm Wt   │');
  console.log('├─────────────────────────────────────────────────┼──────────────┼────────────┼───────────┤');

  for (const tw of weights) {
    const testName = tw.testName.padEnd(47);
    const p90 = tw.p90Factor.toFixed(2).padStart(12);
    const raw = tw.rawWeight.toFixed(4).padStart(10);
    const norm = (tw.normalizedWeight * 100).toFixed(2).padStart(8) + '%';

    console.log(`│ ${testName} │ ${p90} │ ${raw} │ ${norm} │`);
  }

  console.log('└─────────────────────────────────────────────────┴──────────────┴────────────┴───────────┘');

  // Summary statistics
  const avgWeight = 1 / weights.length;
  const maxWeight = Math.max(...weights.map(w => w.normalizedWeight));
  const minWeight = Math.min(...weights.map(w => w.normalizedWeight));

  console.log('\n📈 Summary:');
  console.log(`- Tests: ${weights.length}`);
  console.log(`- Equal weight would be: ${(avgWeight * 100).toFixed(2)}% each`);
  console.log(`- Highest weight: ${(maxWeight * 100).toFixed(2)}%`);
  console.log(`- Lowest weight: ${(minWeight * 100).toFixed(2)}%`);
  console.log(`- Weight ratio: ${(maxWeight / minWeight).toFixed(1)}:1`);

  // Group by category
  console.log('\n📊 Weights by Category:');
  const byCategory = new Map<string, TestWeight[]>();
  for (const tw of weights) {
    if (!byCategory.has(tw.group)) {
      byCategory.set(tw.group, []);
    }
    byCategory.get(tw.group)!.push(tw);
  }

  for (const [category, tests] of byCategory.entries()) {
    const categoryWeight = tests.reduce((sum, tw) => sum + tw.normalizedWeight, 0);
    console.log(`- ${category}: ${(categoryWeight * 100).toFixed(1)}%`);
  }
}
