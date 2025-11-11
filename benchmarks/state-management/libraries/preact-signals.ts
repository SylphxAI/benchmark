/**
 * Preact Signals Library Implementation
 */

import { signal, computed } from '@preact/signals-core';
import { category, tests } from '../index';

// ============================================================================
// Preact Signals Store Setup
// ============================================================================

interface SignalsStore {
  count: ReturnType<typeof signal<number>>;
  doubled: ReturnType<typeof computed<number>>;
}

// ============================================================================
// Register Library
// ============================================================================

const preactSignals = category.registerLibrary<SignalsStore>({
  id: 'preact-signals',
  displayName: 'Preact Signals',
  packageName: '@preact/signals',
  githubUrl: 'https://github.com/preactjs/signals',
  description: 'Fast and reactive signals for Preact and React with automatic dependency tracking',

  setup: {
    createStore: () => {
      const count = signal(0);
      const doubled = computed(() => count.value * 2);
      return { count, doubled };
    },
  },

  features: ['signals', 'computed-native'],
});

// ============================================================================
// Implement Tests
// ============================================================================

preactSignals.implement(tests.simpleRead, (ctx) => {
  const value = ctx.store.count.value;
});

preactSignals.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.count.value;
  }
});

preactSignals.implement(tests.simpleIncrement, (ctx) => {
  ctx.store.count.value += 1;
});

preactSignals.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.count.value += 1;
  }
});
