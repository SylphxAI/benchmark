/**
 * Zustand Library Registration
 *
 * Example of how to register a state management library
 */

import { createStore } from 'zustand/vanilla';
import { registerLibrary, registerTest } from '@core/registry';
import type { TestContext } from '@core/types';

// ============================================================================
// Library Registration
// ============================================================================

interface ZustandStore {
  counter: number;
  increment: () => void;
}

registerLibrary<ReturnType<typeof createStore<ZustandStore>>>({
  category: 'state-management',
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
// Test Registrations
// ============================================================================

// Simple Read Test
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'Simple Read',

  test: (ctx: TestContext<ReturnType<typeof createStore<ZustandStore>>>) => {
    const value = ctx.store.getState().counter;
  },
});

// High-Frequency Read Test
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'High-Frequency Read (1000x)',

  test: (ctx: TestContext<ReturnType<typeof createStore<ZustandStore>>>) => {
    for (let i = 0; i < 1000; i++) {
      const value = ctx.store.getState().counter;
    }
  },
});

// Simple Increment Test
registerTest({
  category: 'state-management',
  group: '02-write',
  name: 'Simple Increment',

  test: (ctx: TestContext<ReturnType<typeof createStore<ZustandStore>>>) => {
    ctx.store.getState().increment();
  },
});

// Burst Updates Test
registerTest({
  category: 'state-management',
  group: '02-write',
  name: 'Burst Updates (100x)',

  test: (ctx: TestContext<ReturnType<typeof createStore<ZustandStore>>>) => {
    for (let i = 0; i < 100; i++) {
      ctx.store.getState().increment();
    }
  },
});
