#!/usr/bin/env node
/**
 * Single Library Benchmark Script
 * Runs benchmarks for a specific library and saves results independently
 *
 * Usage: npx tsx benchmark-single-library.ts <library-key> <category-path>
 * Example: npx tsx benchmark-single-library.ts jotai benchmarks/state-management
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

interface LibraryBenchmarkResult {
  library: string;
  libraryKey: string;
  version: string;
  lastRun: string;
  groups: Record<string, any>;
}

interface VersionTracker {
  libraries: {
    [name: string]: {
      current: string;
      latest: string;
      lastUpdated: string;
    };
  };
}

interface LibraryMetadata {
  libraries: {
    [key: string]: {
      displayName: string;
      npm: string;
      url: string;
    };
  };
}

async function benchmarkSingleLibrary(libraryKey: string, categoryPath: string) {
  const versionsPath = join(categoryPath, 'versions.json');
  const metadataPath = join(categoryPath, 'library-metadata.json');
  const resultsDir = join(categoryPath, 'results');
  // Sanitize library key for filename (replace / and @ with -)
  const safeLibraryKey = libraryKey.replace(/@/g, '').replace(/\//g, '-');
  const outputPath = join(resultsDir, `${safeLibraryKey}-benchmark.json`);

  console.log(`\n🎯 Benchmarking ${libraryKey}...\n`);

  // Load metadata
  if (!existsSync(metadataPath)) {
    console.error(`❌ library-metadata.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  const libInfo = metadata.libraries[libraryKey];

  if (!libInfo) {
    console.error(`❌ Library ${libraryKey} not found in library-metadata.json`);
    process.exit(1);
  }

  // Load versions
  if (!existsSync(versionsPath)) {
    console.error(`❌ versions.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const versionInfo = versions.libraries[libraryKey];

  if (!versionInfo) {
    console.error(`❌ Version info for ${libraryKey} not found in versions.json`);
    process.exit(1);
  }

  const displayName = libInfo.displayName;
  const currentVersion = versionInfo.current;

  // Convert display name to same format as split script uses
  const testFileLibraryName = displayName.toLowerCase().replace(/\s+/g, '-').replace(/@/g, '').replace(/\//g, '-');

  console.log(`📚 Library: ${displayName}`);
  console.log(`📦 Version: ${currentVersion}`);
  console.log(``);

  // Run benchmarks for this specific library
  console.log(`⏳ Running benchmarks (this may take several minutes)...\n`);

  const groupsPath = join(categoryPath, 'groups');
  const groupResults: Record<string, any> = {};

  try {
    // Get all test files for this library across all groups
    const groups = readdirSync(groupsPath).filter((dir: string) => {
      const fullPath = join(groupsPath, dir);
      return statSync(fullPath).isDirectory() && /^\d{2}-/.test(dir);
    });

    // Run benchmark for this library using file path pattern (not -t filter)
    const testPattern = `groups/*/tests/${testFileLibraryName}.bench.ts`;
    const benchCmd = `npx vitest bench --run --reporter=json --outputFile=.vitest-results.json "${testPattern}"`;

    console.log(`📝 Running tests: ${testPattern}\n`);

    execSync(benchCmd, {
      cwd: categoryPath,
      stdio: ['inherit', 'pipe', 'inherit'],
      encoding: 'utf-8'
    });

    console.log(`\n✅ Benchmarks completed for ${displayName}`);

    // Read the JSON results from vitest
    const vitestResultsPath = join(categoryPath, '.vitest-results.json');

    if (existsSync(vitestResultsPath)) {
      const vitestResults = JSON.parse(readFileSync(vitestResultsPath, 'utf-8'));

      // Process results and save per-group
      console.log(`\n📊 Processing results...`);

      for (const groupDir of groups) {
        const groupTestPath = join(groupsPath, groupDir, 'tests', `${testFileLibraryName}.bench.ts`);

        if (existsSync(groupTestPath)) {
          // Extract results for this group from vitest output
          const groupResult = extractGroupResults(vitestResults, groupDir, testFileLibraryName);

          if (groupResult) {
            // Save to groups/{group}/results/{library}.json
            const groupResultsDir = join(groupsPath, groupDir, 'results');
            if (!existsSync(groupResultsDir)) {
              mkdirSync(groupResultsDir, { recursive: true });
            }

            const groupResultPath = join(groupResultsDir, `${testFileLibraryName}.json`);
            writeFileSync(groupResultPath, JSON.stringify(groupResult, null, 2));

            groupResults[groupDir] = groupResult;
            console.log(`  ✓ Saved ${groupDir}/results/${testFileLibraryName}.json`);
          }
        }
      }

      // Clean up vitest results file
      if (existsSync(vitestResultsPath)) {
        execSync(`rm ${vitestResultsPath}`, { cwd: categoryPath });
      }
    }

    console.log(`\n✓ Processed results for ${Object.keys(groupResults).length} groups`);

  } catch (error) {
    console.error(`\n❌ Benchmark failed for ${displayName}:`, error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }

  // Create library benchmark result
  const result: LibraryBenchmarkResult = {
    library: displayName,
    libraryKey: libraryKey,
    version: currentVersion,
    lastRun: new Date().toISOString(),
    groups: groupResults
  };

  // Ensure results directory exists
  if (!existsSync(resultsDir)) {
    mkdirSync(resultsDir, { recursive: true });
  }

  // Save to results/[library]-benchmark.json
  writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`\n💾 Saved results to ${outputPath}`);
  console.log(`\n✨ Done!\n`);
}

/**
 * Extract group results from vitest JSON output
 */
function extractGroupResults(vitestResults: any, groupName: string, libraryKey: string): any | null {
  if (!vitestResults || !vitestResults.testResults) return null;

  // Find test results for this group's test file
  const testFileSuffix = `groups/${groupName}/tests/${libraryKey}.bench.ts`;

  const groupTestResults = vitestResults.testResults.find((result: any) =>
    result.name && result.name.endsWith(testFileSuffix)
  );

  if (!groupTestResults || !groupTestResults.assertionResults) return null;

  // Convert vitest format to our benchmark format
  const benchmarks = groupTestResults.assertionResults.map((assertion: any) => ({
    id: assertion.fullName || assertion.title,
    name: assertion.title,
    hz: assertion.hz || 0,
    rme: assertion.rme || 0,
    mean: assertion.mean || 0,
    p75: assertion.p75 || 0,
    p99: assertion.p99 || 0,
    p995: assertion.p995 || 0,
    p999: assertion.p999 || 0,
    samples: assertion.samples || []
  }));

  return {
    files: [
      {
        filepath: groupTestResults.name,
        groups: [
          {
            fullName: `${groupName} - ${libraryKey}`,
            benchmarks
          }
        ]
      }
    ]
  };
}

// Main execution
const libraryKey = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!libraryKey) {
  console.error('Usage: npx tsx benchmark-single-library.ts <library-key> [category-path]');
  console.error('Example: npx tsx benchmark-single-library.ts jotai benchmarks/state-management');
  process.exit(1);
}

benchmarkSingleLibrary(libraryKey, categoryPath).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
