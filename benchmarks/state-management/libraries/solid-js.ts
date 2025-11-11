/**
 * Solid.js Signals Library Implementation
 */

import { createSignal, createMemo } from 'solid-js';
import { category, tests } from '../index';

// ============================================================================
// Solid.js Store Setup
// ============================================================================

interface SolidStore {
  getCount: () => number;
  setCount: (value: number | ((prev: number) => number)) => void;
  doubled: () => number;
}

// ============================================================================
// Register Library
// ============================================================================

const solidJs = category.registerLibrary<SolidStore>({
  id: 'solid-js',
  displayName: 'Solid Signals',
  packageName: 'solid-js',
  githubUrl: 'https://github.com/solidjs/solid',
  description: 'Fine-grained reactivity primitive from Solid.js for building performant UIs',

  setup: {
    createStore: () => {
      const [count, setCount] = createSignal(0);
      const doubled = createMemo(() => count() * 2);
      return { getCount: count, setCount, doubled };
    },
  },

  features: ['signals', 'fine-grained'],
});

// ============================================================================
// Implement Tests
// ============================================================================

solidJs.implement(tests.simpleRead, (ctx) => {
  const value = ctx.store.getCount();
});

solidJs.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.getCount();
  }
});

solidJs.implement(tests.simpleIncrement, (ctx) => {
  ctx.store.setCount((prev) => prev + 1);
});

solidJs.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.setCount((prev) => prev + 1);
  }
});
