/**
 * Test registry for 10-selectors group
 * Only for libraries with native selector support (Zustand, Valtio, Redux)
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
  skip?: (store: any) => boolean;
}

export const TESTS = {
  SIMPLE_SELECTOR: {
    name: 'Simple Selector',
    skip: (store) => !store.selectCount,
    execute: (store) => {
      return store.selectCount();
    }
  },
  DERIVED_SELECTOR: {
    name: 'Derived Selector',
    skip: (store) => !store.selectDoubled,
    execute: (store) => {
      return store.selectDoubled();
    }
  },
  NESTED_SELECTOR: {
    name: 'Nested Selector',
    skip: (store) => !store.selectNested,
    execute: (store) => {
      return store.selectNested();
    }
  },
  ARRAY_SELECTOR: {
    name: 'Array Selector',
    skip: (store) => !store.selectUsers,
    execute: (store) => {
      return store.selectUsers();
    }
  },
  MEMOIZED_SELECTOR: {
    name: 'Memoized Selector',
    skip: (store) => !store.selectMemoized,
    execute: (store) => {
      for (let i = 0; i < 100; i++) {
        store.selectMemoized();
      }
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type SelectorTestKey = keyof typeof TESTS;
