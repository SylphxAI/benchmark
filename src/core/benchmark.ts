/**
 * Benchmark runner - executes tests and collects results
 */

import { bench, describe } from 'vitest';
import type {
  BenchmarkOptions,
  BenchmarkResult,
  CategoryResults,
  TestContext,
} from './types';
import { registry } from './registry';

export class BenchmarkRunner {
  /**
   * Run benchmarks for a category
   */
  async runCategory(categoryId: string, options: BenchmarkOptions = {}): Promise<CategoryResults> {
    const category = registry.getCategory(categoryId);
    if (!category) {
      throw new Error(`Category '${categoryId}' not found`);
    }

    const libraries = registry.getCategoryLibraries(categoryId);
    if (libraries.length === 0) {
      throw new Error(`No libraries registered for category '${categoryId}'`);
    }

    console.log(`\\n🚀 Running benchmarks for: ${category.name}\\n`);

    const results: CategoryResults = {};

    // Run tests for each group
    for (const group of category.groups) {
      // Skip if filtering by specific group
      if (options.group && group.id !== options.group) {
        continue;
      }

      console.log(`\\n📦 Group: ${group.title}`);

      const groupTests = registry.getGroupTests(categoryId, group.id);
      if (groupTests.length === 0) {
        console.warn(`   ⚠️  No tests found for group '${group.id}'`);
        continue;
      }

      results[group.id] = {};

      // Run each test
      for (const testReg of groupTests) {
        console.log(`   Testing: ${testReg.name}`);

        results[group.id][testReg.name] = {};

        // Run test for each library
        for (const library of libraries) {
          // Skip if filtering by specific library
          if (options.library && library.id !== options.library) {
            continue;
          }

          try {
            const result = await this.runSingleTest(categoryId, group.id, testReg.name, library.id);
            results[group.id][testReg.name][library.id] = result;
            console.log(`      ${library.displayName}: ${result.opsPerSecond.toLocaleString()} ops/sec`);
          } catch (error) {
            console.error(`      ❌ ${library.displayName} failed:`, error);
          }
        }
      }
    }

    return results;
  }

  /**
   * Run a single test for a single library
   */
  async runSingleTest(
    categoryId: string,
    groupId: string,
    testName: string,
    libraryId: string
  ): Promise<BenchmarkResult> {
    const testReg = registry.getTest(categoryId, groupId, testName);
    const libraryReg = registry.getLibrary(categoryId, libraryId);

    if (!testReg) {
      throw new Error(`Test '${testName}' not found in group '${groupId}'`);
    }

    if (!libraryReg) {
      throw new Error(`Library '${libraryId}' not found in category '${categoryId}'`);
    }

    // Initialize library if needed
    if (libraryReg.setup.init) {
      await libraryReg.setup.init();
    }

    // Create store instance
    const store = await libraryReg.setup.createStore();

    // Create test context
    const ctx: TestContext = {
      library: {
        id: libraryReg.id,
        displayName: libraryReg.displayName,
        packageName: libraryReg.packageName,
        githubUrl: libraryReg.githubUrl,
        category: libraryReg.category,
      },
      store,
      cleanup: libraryReg.setup.cleanup ? () => libraryReg.setup.cleanup!(store) : undefined,
    };

    // Run the benchmark using Vitest bench
    const results = await this.measurePerformance(() => testReg.test(ctx));

    // Cleanup
    if (ctx.cleanup) {
      await ctx.cleanup();
    }

    return results;
  }

  /**
   * Measure performance of a function
   */
  private async measurePerformance(fn: () => void | Promise<void>): Promise<BenchmarkResult> {
    const iterations = 1000;
    const warmupIterations = 100;
    const times: number[] = [];

    // Warmup
    for (let i = 0; i < warmupIterations; i++) {
      await fn();
    }

    // Actual measurements
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      await fn();
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
      name: '', // Will be filled by caller
      opsPerSecond,
      meanTime,
      variance,
      p99,
      samples: iterations,
    };
  }

  /**
   * Generate Vitest benchmark suite
   * This creates a .bench.ts file that can be run with vitest
   */
  generateVitestSuite(categoryId: string, groupId: string): string {
    const category = registry.getCategory(categoryId);
    const libraries = registry.getCategoryLibraries(categoryId);
    const tests = registry.getGroupTests(categoryId, groupId);

    if (!category || libraries.length === 0 || tests.length === 0) {
      throw new Error('Invalid category, group, or no tests/libraries registered');
    }

    const imports: string[] = [];
    const suites: string[] = [];

    // Generate imports
    imports.push("import { bench, describe } from 'vitest';");

    // Generate test suites
    for (const test of tests) {
      suites.push(`describe('${test.name}', () => {`);

      for (const library of libraries) {
        suites.push(`  bench('${library.displayName}', async () => {`);
        suites.push(`    // Test implementation for ${library.displayName}`);
        suites.push(`  });`);
      }

      suites.push(`});\\n`);
    }

    return imports.join('\\n') + '\\n\\n' + suites.join('\\n');
  }
}

// Singleton instance
export const benchmarkRunner = new BenchmarkRunner();
