#!/usr/bin/env bun

/**
 * Hybrid Weighting System for Benchmarks
 *
 * Combines two levels of weighting:
 * 1. Category-level weights (manual, based on functional importance)
 * 2. Test-level weights (automatic, based on variance)
 *
 * This balances:
 * - Usage frequency (data-driven via variance)
 * - Functional importance (expert judgment)
 *
 * Methodology improvement targeting 90+/100 credibility.
 */

import type {
  LibraryBenchmark,
  BenchmarkResult,
} from './generate-simple-readme';

// ========================================
// Category Weight Configuration
// ========================================

/**
 * Category-level weights based on functional importance
 *
 * Rationale:
 * - basic-read (35%): Most common operation in real apps
 * - reactivity-patterns (15%): Core state management functionality (increased from data-driven 5.9%)
 * - performance-stress (15%): Critical for high-load scenarios
 * - advanced-operations (15%): Complex use cases
 * - basic-write (10%): Less frequent but important
 * - real-world (5%): Integration scenarios
 * - async-operations (5%): Specialized patterns
 */
export const CATEGORY_WEIGHTS: Record<string, number> = {
  'basic-read': 0.35,
  'reactivity-patterns': 0.15,
  'performance-stress': 0.15,
  'advanced-operations': 0.15,
  'basic-write': 0.10,
  'real-world': 0.05,
  'async-operations': 0.05,
};

// Validate category weights sum to 1.0
const categoryWeightSum = Object.values(CATEGORY_WEIGHTS).reduce((a, b) => a + b, 0);
if (Math.abs(categoryWeightSum - 1.0) > 0.001) {
  throw new Error(`Category weights must sum to 1.0, got ${categoryWeightSum}`);
}

// ========================================
// Test Group Classification
// ========================================

function classifyTestGroup(testName: string): string {
  const lower = testName.toLowerCase();

  if (lower.includes('read') && !lower.includes('async')) {
    return 'basic-read';
  }
  if (lower.includes('write') && !lower.includes('async')) {
    return 'basic-write';
  }
  if (lower.includes('computed') || lower.includes('chain') || lower.includes('fanout') || lower.includes('diamond')) {
    return 'reactivity-patterns';
  }
  if (lower.includes('stress') || lower.includes('extreme') || lower.includes('high-frequency') || lower.includes('moderate')) {
    return 'performance-stress';
  }
  if (lower.includes('shallow') || lower.includes('deep') || lower.includes('nested')) {
    return 'advanced-operations';
  }
  if (lower.includes('async')) {
    return 'async-operations';
  }
  if (lower.includes('todo') || lower.includes('form') || lower.includes('counter')) {
    return 'real-world';
  }

  // Default to advanced operations
  return 'advanced-operations';
}

// ========================================
// Hybrid Weight Calculation
// ========================================

export interface HybridTestWeight {
  testName: string;
  category: string;

  // Within-category test weight (variance-based)
  categoryTestWeight: number;  // Sums to 1.0 within category

  // Overall hybrid weight
  hybridWeight: number;  // Category weight × category test weight

  // For comparison
  categoryWeight: number;  // Manual category weight
  rawVarianceWeight: number;  // Pure variance-based weight (for comparison)

  // Variance metrics
  p90Factor: number;
  rawWeight: number;
}

function percentile90(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil(sorted.length * 0.9) - 1;
  return sorted[Math.max(0, index)];
}

export function calculateHybridWeights(
  libraries: LibraryBenchmark[]
): Map<string, HybridTestWeight> {
  if (libraries.length === 0) {
    return new Map();
  }

  const testNames = libraries[0].results.map(r => r.test);

  // ========================================
  // Step 1: Calculate variance-based weights within each category
  // ========================================

  interface TestVarianceData {
    testName: string;
    category: string;
    p90Factor: number;
    rawWeight: number;
  }

  const testVarianceData: TestVarianceData[] = [];

  for (const testName of testNames) {
    const testResults = libraries
      .map(lib => lib.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    const opsValues = testResults.map(r => r.opsPerSecond);
    const fastest = Math.max(...opsValues);

    // Calculate slowdown factors
    const factors = opsValues.map(ops => {
      if (ops === 0) return 100;
      return fastest / ops;
    });

    // 90th percentile of factors
    const p90Factor = percentile90(factors);
    const rawWeight = 1 / p90Factor;

    const category = classifyTestGroup(testName);

    testVarianceData.push({
      testName,
      category,
      p90Factor,
      rawWeight,
    });
  }

  // ========================================
  // Step 2: Normalize weights within each category
  // ========================================

  const categories = [...new Set(testVarianceData.map(t => t.category))];
  const categoryTestWeights = new Map<string, Map<string, number>>();

  for (const category of categories) {
    const categoryTests = testVarianceData.filter(t => t.category === category);
    const sumRawWeights = categoryTests.reduce((sum, t) => sum + t.rawWeight, 0);

    const weights = new Map<string, number>();
    for (const test of categoryTests) {
      weights.set(test.testName, test.rawWeight / sumRawWeights);
    }

    categoryTestWeights.set(category, weights);
  }

  // ========================================
  // Step 3: Calculate hybrid weights (category × test)
  // ========================================

  const hybridWeights = new Map<string, HybridTestWeight>();

  // Also calculate pure variance weights for comparison
  const totalRawWeight = testVarianceData.reduce((sum, t) => sum + t.rawWeight, 0);

  for (const testData of testVarianceData) {
    const { testName, category, p90Factor, rawWeight } = testData;

    const categoryWeight = CATEGORY_WEIGHTS[category] || 0;
    const categoryTestWeight = categoryTestWeights.get(category)?.get(testName) || 0;
    const hybridWeight = categoryWeight * categoryTestWeight;
    const rawVarianceWeight = rawWeight / totalRawWeight;

    hybridWeights.set(testName, {
      testName,
      category,
      categoryTestWeight,
      hybridWeight,
      categoryWeight,
      rawVarianceWeight,
      p90Factor,
      rawWeight,
    });
  }

  return hybridWeights;
}

// ========================================
// Weighted Geometric Mean (same as before)
// ========================================

export function weightedGeometricMean(
  scores: number[],
  weights: number[]
): number {
  if (scores.length !== weights.length) {
    throw new Error('Scores and weights must have same length');
  }

  let weightedProduct = 1;
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i] === 0 ? 0.01 : scores[i];
    weightedProduct *= Math.pow(score, weights[i]);
  }

  return weightedProduct;
}

// ========================================
// CLI Tool
// ========================================

if (import.meta.main) {
  const fs = await import('fs/promises');
  const path = await import('path');

  // Find benchmark results from new structure (results/<library>/*.json)
  const benchmarkDir = process.argv[2] || './benchmarks/state-management';
  const resultsPath = path.join(benchmarkDir, 'results');

  try {
    // Load all library results
    const libraryDirs = await fs.readdir(resultsPath);
    const libraries: LibraryBenchmark[] = [];

    for (const libDir of libraryDirs) {
      const libPath = path.join(resultsPath, libDir);
      const stat = await fs.stat(libPath);
      if (!stat.isDirectory()) continue;

      // Read all JSON files in library directory
      const files = await fs.readdir(libPath);
      const jsonFiles = files.filter(f => f.endsWith('.json'));

      const results: BenchmarkResult[] = [];
      for (const file of jsonFiles) {
        const filePath = path.join(libPath, file);
        const content = JSON.parse(await fs.readFile(filePath, 'utf-8'));

        // Extract result data from new format
        const result: BenchmarkResult = {
          test: content.test,
          group: content.group,
          opsPerSecond: content.result?.opsPerSecond || 0,
          meanTime: content.result?.meanTime || 0,
          variance: content.result?.variance || 0,
          p99: content.result?.p99 || 0,
          samples: content.result?.samples || 0,
        };

        results.push(result);
      }

      if (results.length > 0) {
        libraries.push({
          library: libDir,
          libraryId: libDir,
          version: results[0].version || 'unknown',
          timestamp: results[0].timestamp || new Date().toISOString(),
          results: results,
        });
      }
    }

    const hybridWeights = calculateHybridWeights(libraries);

    console.log('\n╔════════════════════════════════════════════════════════════════╗');
    console.log('║        Hybrid Weight System (Category × Test Weights)         ║');
    console.log('╚════════════════════════════════════════════════════════════════╝\n');

    // Group by category
    const categories = [...new Set([...hybridWeights.values()].map(w => w.category))];

    for (const category of categories) {
      const categoryWeightValue = CATEGORY_WEIGHTS[category] || 0;
      const categoryTests = [...hybridWeights.values()]
        .filter(w => w.category === category)
        .sort((a, b) => b.hybridWeight - a.hybridWeight);

      console.log(`\n📦 ${category.toUpperCase()}`);
      console.log(`   Category Weight: ${(categoryWeightValue * 100).toFixed(1)}%`);
      console.log('   ─────────────────────────────────────────────────────────────');

      for (const weight of categoryTests) {
        console.log(`   ${weight.testName}`);
        console.log(`      Within-category: ${(weight.categoryTestWeight * 100).toFixed(2)}%`);
        console.log(`      Hybrid: ${(weight.hybridWeight * 100).toFixed(2)}%`);
        console.log(`      Pure variance: ${(weight.rawVarianceWeight * 100).toFixed(2)}%`);
        console.log(`      P90 factor: ${weight.p90Factor.toFixed(2)}`);
        console.log('');
      }
    }

    // Summary comparison
    console.log('\n╔════════════════════════════════════════════════════════════════╗');
    console.log('║                    Weight System Comparison                    ║');
    console.log('╚════════════════════════════════════════════════════════════════╝\n');

    const sorted = [...hybridWeights.values()].sort((a, b) => b.hybridWeight - a.hybridWeight);

    console.log('Top 10 Tests by Hybrid Weight:\n');
    console.log('Test Name                          | Hybrid  | Variance | Category');
    console.log('-----------------------------------|---------|----------|----------');

    for (let i = 0; i < Math.min(10, sorted.length); i++) {
      const w = sorted[i];
      const name = w.testName.padEnd(34);
      const hybrid = `${(w.hybridWeight * 100).toFixed(1)}%`.padStart(7);
      const variance = `${(w.rawVarianceWeight * 100).toFixed(1)}%`.padStart(8);
      const cat = w.category.padEnd(10);
      console.log(`${name} | ${hybrid} | ${variance} | ${cat}`);
    }

    console.log('\n\nBottom 5 Tests by Hybrid Weight:\n');
    console.log('Test Name                          | Hybrid  | Variance | Category');
    console.log('-----------------------------------|---------|----------|----------');

    const bottom = sorted.slice(-5).reverse();
    for (const w of bottom) {
      const name = w.testName.padEnd(34);
      const hybrid = `${(w.hybridWeight * 100).toFixed(1)}%`.padStart(7);
      const variance = `${(w.rawVarianceWeight * 100).toFixed(1)}%`.padStart(8);
      const cat = w.category.padEnd(10);
      console.log(`${name} | ${hybrid} | ${variance} | ${cat}`);
    }

    // Category summary
    console.log('\n\n╔════════════════════════════════════════════════════════════════╗');
    console.log('║                      Category Distribution                      ║');
    console.log('╚════════════════════════════════════════════════════════════════╝\n');

    console.log('Category               | Manual Weight | Actual Tests | Avg Test Weight');
    console.log('-----------------------|---------------|--------------|----------------');

    for (const category of categories) {
      const catWeight = CATEGORY_WEIGHTS[category] || 0;
      const catTests = [...hybridWeights.values()].filter(w => w.category === category);
      const avgTestWeight = catTests.length > 0
        ? catTests.reduce((sum, w) => sum + w.hybridWeight, 0) / catTests.length
        : 0;

      const catName = category.padEnd(22);
      const manual = `${(catWeight * 100).toFixed(1)}%`.padStart(13);
      const count = catTests.length.toString().padStart(12);
      const avg = `${(avgTestWeight * 100).toFixed(2)}%`.padStart(15);

      console.log(`${catName} | ${manual} | ${count} | ${avg}`);
    }

    console.log('\n');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}
