/**
 * Valtio Library Implementation
 */

import { proxy } from 'valtio';
import { category, tests } from '../index';

// ============================================================================
// Valtio Store Setup
// ============================================================================

interface CounterState {
  count: number;
}

// ============================================================================
// Register Library
// ============================================================================

const valtio = category.registerLibrary<CounterState>({
  id: 'valtio',
  displayName: 'Valtio',
  packageName: 'valtio',
  githubUrl: 'https://github.com/pmndrs/valtio',
  description: 'Proxy-based state management library that makes state usage simple',

  setup: {
    createStore: () => {
      return proxy<CounterState>({ count: 0 });
    },
  },

  features: ['proxy-based'],
});

// ============================================================================
// Implement Tests
// ============================================================================

valtio.implement(tests.simpleRead, (ctx) => {
  const value = ctx.store.count;
});

valtio.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.count;
  }
});

valtio.implement(tests.simpleIncrement, (ctx) => {
  ctx.store.count += 1;
});

valtio.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.count += 1;
  }
});
