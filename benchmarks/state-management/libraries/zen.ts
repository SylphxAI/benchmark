/**
 * Zen Library Implementation
 */

import { zen, get, set } from '@sylphx/zen';
import { category, tests } from '../index';

// ============================================================================
// Zen Store Setup
// ============================================================================

interface ZenStore {
  count: ReturnType<typeof zen<number>>;
}

// ============================================================================
// Register Library
// ============================================================================

const zenLib = category.registerLibrary<ZenStore>({
  id: 'zen',
  displayName: 'Zen',
  packageName: '@sylphx/zen',
  githubUrl: 'https://github.com/SylphxAI/zen',
  description: 'Minimal and fast state management with signal-based reactivity',

  setup: {
    createStore: () => {
      const count = zen(0);
      return { count };
    },
  },

  features: ['signals', 'minimal'],
});

// ============================================================================
// Implement Tests
// ============================================================================

zenLib.implement(tests.simpleRead, (ctx) => {
  const value = get(ctx.store.count);
});

zenLib.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = get(ctx.store.count);
  }
});

zenLib.implement(tests.simpleIncrement, (ctx) => {
  set(ctx.store.count, (prev) => prev + 1);
});

zenLib.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    set(ctx.store.count, (prev) => prev + 1);
  }
});
