/**
 * 02-write - Zustand
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { zustandActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = zustandActionsV2;

describe('02-write - Zustand', () => {
  bench(TEST_NAMES.WRITE.SINGLE_UPDATE, () => {
    store.increment();
  });

  bench(TEST_NAMES.WRITE.BATCH_UPDATE_X10, () => {
    for (let i = 0; i < ITERATIONS.X10; i++) {
      store.increment();
    }
  });

  bench(TEST_NAMES.WRITE.BATCH_UPDATE_X100, () => {
    for (let i = 0; i < ITERATIONS.X100; i++) {
      store.increment();
    }
  });

  bench(TEST_NAMES.WRITE.BATCH_UPDATE_X1000, () => {
    for (let i = 0; i < ITERATIONS.X1000; i++) {
      store.increment();
    }
  });

  bench(TEST_NAMES.WRITE.BATCH_UPDATE_X10000, () => {
    for (let i = 0; i < ITERATIONS.X10000; i++) {
      store.increment();
    }
  });
});
