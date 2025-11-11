/**
 * 03-creation - MobX
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('03-creation - MobX', () => {
  bench(TEST_NAMES.CREATION.STORE_CREATION, () => {
    // Store creation is handled by setup
  });
});
