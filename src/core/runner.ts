/**
 * Benchmark runner - executes tests and collects results
 */

import type { BenchmarkResult, RunOptions, CategoryResults, LibraryTestResult } from './types';
import type { Category } from './category';

export class BenchmarkRunner {
  private category: Category;

  constructor(category: Category) {
    this.category = category;
  }

  /**
   * Run all benchmarks
   */
  async run(options?: RunOptions): Promise<CategoryResults> {
    const results: LibraryTestResult[] = [];
    const timestamp = new Date().toISOString();

    const groups = this.category.getGroups();
    const libraries = this.category.getLibraries();

    // Filter groups if specified
    const groupsToRun = options?.filter?.groups
      ? groups.filter((g) => options.filter!.groups!.includes(g.id))
      : groups;

    // Filter libraries if specified
    const librariesToRun = options?.filter?.libraries
      ? libraries.filter((l) => options.filter!.libraries!.includes(l.id))
      : libraries;

    console.log(`📊 Running ${groupsToRun.length} groups across ${librariesToRun.length} libraries\n`);

    // Run tests for each group
    for (const group of groupsToRun) {
      console.log(`\n📦 Group: ${group.title}`);

      const tests = group.getTests();

      // Filter tests if specified
      const testsToRun = options?.filter?.tests
        ? tests.filter((t) => options.filter!.tests!.includes(t.name))
        : tests;

      // Run each test
      for (const test of testsToRun) {
        console.log(`\n  Testing: ${test.name}`);

        // Run test for each library
        for (const library of librariesToRun) {
          // Skip if library doesn't implement this test
          if (!library.hasImplementation(test)) {
            console.log(`    ${library.displayName}: [not implemented]`);
            continue;
          }

          try {
            const result = await this.measurePerformance(library, test);

            results.push({
              library: library.id,
              test: test.name,
              group: group.id,
              result,
            });

            console.log(
              `    ${library.displayName}: ${result.opsPerSecond.toLocaleString()} ops/sec` +
              ` (${result.meanTime.toFixed(3)}ms avg)`
            );
          } catch (error) {
            console.error(`    ❌ ${library.displayName} failed:`, error);
          }
        }
      }
    }

    return {
      category: this.category.id,
      timestamp,
      results,
    };
  }

  /**
   * Measure performance of a library on a specific test
   */
  private async measurePerformance(
    library: any,
    test: any
  ): Promise<BenchmarkResult> {
    const iterations = 1000;
    const warmupIterations = 100;
    const times: number[] = [];

    // Warmup
    for (let i = 0; i < warmupIterations; i++) {
      await library.execute(test);
    }

    // Actual measurements
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      await library.execute(test);
      const end = performance.now();
      times.push(end - start);
    }

    // Calculate statistics
    const meanTime = times.reduce((a, b) => a + b, 0) / times.length;
    const opsPerSecond = 1000 / meanTime;

    // Calculate variance
    const variance =
      times.reduce((sum, time) => sum + Math.pow(time - meanTime, 2), 0) / times.length;

    // Calculate P99
    const sortedTimes = [...times].sort((a, b) => a - b);
    const p99Index = Math.floor(times.length * 0.99);
    const p99 = sortedTimes[p99Index];

    return {
      name: test.name,
      opsPerSecond,
      meanTime,
      variance,
      p99,
      samples: iterations,
    };
  }
}
