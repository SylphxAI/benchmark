/**
 * 09-computed-native - Universal Benchmark Runner
 * IoC/DI pattern with conditional execution based on library capabilities
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';
import { TESTS } from './test-registry';

// Support per-library filtering via env var
const targetLibrary = process.env.BENCH_LIBRARY;
const libraries = targetLibrary
  ? LIBRARIES.filter(lib => lib.name === targetLibrary)
  : LIBRARIES;

// Run tests for each library
libraries.forEach(({ name, actions }) => {
  describe(name, () => {
    Object.values(TESTS).forEach(test => {
      // Skip if library doesn't support this feature
      if (test.skip && test.skip(actions)) {
        return; // Skip this test for this library
      }

      bench(test.name, () => {
        test.execute(actions);
      });
    });
  });
});
