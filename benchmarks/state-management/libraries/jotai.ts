/**
 * Jotai Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { atom, createStore } from 'jotai';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface JotaiStore {
  store: ReturnType<typeof createStore>;
  counterAtom: ReturnType<typeof atom<number>>;
}

// ============================================================================
// Register Library
// ============================================================================

const jotai = category.registerLibrary<JotaiStore>({
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
  },

  features: ['computed-native', 'async-reactive'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

jotai.implement(tests.simpleRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  const value = store.get(counterAtom);
});

jotai.implement(tests.highFrequencyRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  for (let i = 0; i < 1000; i++) {
    const value = store.get(counterAtom);
  }
});

jotai.implement(tests.simpleIncrement, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
});

jotai.implement(tests.burstUpdates, (ctx) => {
  const { store, counterAtom } = ctx.store;
  for (let i = 0; i < 100; i++) {
    store.set(counterAtom, (prev) => prev + 1);
  }
});
