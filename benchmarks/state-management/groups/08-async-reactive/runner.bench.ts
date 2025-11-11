/**
 * 08-async-reactive - Universal Benchmark Runner
 * Only tests libraries with native reactive async support
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';
import { TESTS } from './test-registry';

const targetLibrary = process.env.BENCH_LIBRARY;
const libraries = targetLibrary
  ? LIBRARIES.filter(lib => lib.name === targetLibrary)
  : LIBRARIES;

libraries.forEach(({ name, actions }) => {
  describe(name, () => {
    Object.values(TESTS).forEach(test => {
      if (test.skip && test.skip(actions)) {
        return; // Skip if library doesn't support reactive async
      }

      bench(test.name, async () => {
        await test.execute(actions);
      });
    });
  });
});
