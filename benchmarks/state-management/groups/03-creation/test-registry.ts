/**
 * Test registry for 03-creation group
 * Tests store creation overhead with different initial states
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  EMPTY_STORE: {
    name: 'Empty Store Creation',
    method: 'createEmptyStore',
    execute: (store) => {
      // Create a minimal store instance
      return store.createEmptyStore();
    }
  },
  SMALL_INITIAL_X10: {
    name: 'Small Initial State (10 items)',
    method: 'createStoreWithItems',
    execute: (store) => {
      // Create store with 10 items
      return store.createStoreWithItems(10);
    }
  },
  MEDIUM_INITIAL_X100: {
    name: 'Medium Initial State (100 items)',
    method: 'createStoreWithItems',
    execute: (store) => {
      // Create store with 100 items
      return store.createStoreWithItems(100);
    }
  },
  LARGE_INITIAL_X1000: {
    name: 'Large Initial State (1000 items)',
    method: 'createStoreWithItems',
    execute: (store) => {
      // Create store with 1000 items
      return store.createStoreWithItems(1000);
    }
  },
  XLARGE_INITIAL_X10000: {
    name: 'XLarge Initial State (10000 items)',
    method: 'createStoreWithItems',
    execute: (store) => {
      // Create store with 10000 items
      return store.createStoreWithItems(10000);
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type CreationTestKey = keyof typeof TESTS;
