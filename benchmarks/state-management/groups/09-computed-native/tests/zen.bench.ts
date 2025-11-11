/**
 * 09-computed-native - Zen
 * Native computed values (computed)
 */

import { bench, describe } from 'vitest';
import {
  zenCountStore,
  zenDoubledStore,
  zenLevel3Computed
} from '../../../src/stores/zen-store';

describe('09-computed-native - Zen', () => {
  bench('Native Computed', () => {
    zenCountStore.value = Math.random();
    zenDoubledStore.value;
  });

  bench('Chained Computed', () => {
    zenCountStore.value = Math.random();
    zenLevel3Computed.value;
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      zenCountStore.value = i;
      zenDoubledStore.value;
    }
  });
});
