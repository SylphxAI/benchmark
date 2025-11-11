/**
 * 01-read - Preact Signals
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { preactActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = preactActionsV2;

describe('01-read - Preact Signals', () => {
  bench(TEST_NAMES.READ.SIMPLE_READ, () => {
    store.increment();
    return store.getCount();
  });

  bench(TEST_NAMES.READ.HIGH_FREQ_READ_X10, () => {
    for (let i = 0; i < ITERATIONS.X10; i++) {
      store.getCount();
    }
  });

  bench(TEST_NAMES.READ.HIGH_FREQ_READ_X100, () => {
    for (let i = 0; i < ITERATIONS.X100; i++) {
      store.getCount();
    }
  });

  bench(TEST_NAMES.READ.HIGH_FREQ_READ_X1000, () => {
    for (let i = 0; i < ITERATIONS.X1000; i++) {
      store.getCount();
    }
  });

  bench(TEST_NAMES.READ.HIGH_FREQ_READ_X10000, () => {
    for (let i = 0; i < ITERATIONS.X10000; i++) {
      store.getCount();
    }
  });
});
