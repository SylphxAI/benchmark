/**
 * Jotai Library Registration
 *
 * Example of how to register a state management library
 */

import { atom, createStore } from 'jotai';
import { registerLibrary, registerTest } from '@core/registry';
import type { TestContext } from '@core/types';

// ============================================================================
// Library Registration
// ============================================================================

interface JotaiStore {
  store: ReturnType<typeof createStore>;
  counterAtom: ReturnType<typeof atom<number>>;
}

registerLibrary<JotaiStore>({
  category: 'state-management',
  id: 'jotai',
  displayName: 'Jotai',
  packageName: 'jotai',
  githubUrl: 'https://github.com/pmndrs/jotai',
  description: 'Primitive and flexible state management for React',

  setup: {
    createStore: () => {
      const store = createStore();
      const counterAtom = atom(0);

      return {
        store,
        counterAtom,
      };
    },

    cleanup: (store) => {
      // Jotai doesn't require explicit cleanup
    },
  },

  features: ['computed-native', 'async-reactive'],
});

// ============================================================================
// Test Registrations
// ============================================================================

// Simple Read Test
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'Simple Read',
  description: 'Read a single counter value',

  test: (ctx: TestContext<JotaiStore>) => {
    const { store, counterAtom } = ctx.store;
    const value = store.get(counterAtom);
  },
});

// High-Frequency Read Test
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'High-Frequency Read (1000x)',
  description: 'Read value 1000 times',

  test: (ctx: TestContext<JotaiStore>) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 1000; i++) {
      const value = store.get(counterAtom);
    }
  },
});

// Simple Increment Test
registerTest({
  category: 'state-management',
  group: '02-write',
  name: 'Simple Increment',
  description: 'Increment counter once',

  test: (ctx: TestContext<JotaiStore>) => {
    const { store, counterAtom } = ctx.store;
    store.set(counterAtom, (prev) => prev + 1);
  },
});

// Burst Updates Test
registerTest({
  category: 'state-management',
  group: '02-write',
  name: 'Burst Updates (100x)',
  description: 'Increment counter 100 times rapidly',

  test: (ctx: TestContext<JotaiStore>) => {
    const { store, counterAtom } = ctx.store;
    for (let i = 0; i < 100; i++) {
      store.set(counterAtom, (prev) => prev + 1);
    }
  },
});
