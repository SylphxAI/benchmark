/**
 * Zustand Library Implementation
 */

import { createStore } from 'zustand/vanilla';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface ZustandStore {
  counter: number;
  increment: () => void;
}

// ============================================================================
// Register Library
// ============================================================================

const zustand = category.registerLibrary<ReturnType<typeof createStore<ZustandStore>>>({
  id: 'zustand',
  displayName: 'Zustand',
  packageName: 'zustand',
  githubUrl: 'https://github.com/pmndrs/zustand',
  description: 'A small, fast and scalable state management solution',

  setup: {
    createStore: () => {
      return createStore<ZustandStore>((set) => ({
        counter: 0,
        increment: () => set((state) => ({ counter: state.counter + 1 })),
      }));
    },
  },

  features: ['selectors', 'middleware'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

zustand.implement(tests.simpleRead, (ctx) => {
  const value = ctx.store.getState().counter;
});

zustand.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.getState().counter;
  }
});

zustand.implement(tests.simpleIncrement, (ctx) => {
  ctx.store.getState().increment();
});

zustand.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.getState().increment();
  }
});
