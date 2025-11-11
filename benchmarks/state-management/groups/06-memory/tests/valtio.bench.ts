/**
 * 06-memory - Valtio
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { valtioActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = valtioActionsV2;

describe('06-memory - Valtio', () => {
  bench(TEST_NAMES.MEMORY.LARGE_STATE_READ, () => {
    return store.getCount();
  });

  bench(TEST_NAMES.MEMORY.LARGE_STATE_UPDATE, () => {
    store.increment();
  });
});
