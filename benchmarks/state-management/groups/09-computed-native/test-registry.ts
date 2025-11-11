/**
 * Test registry for 09-computed-native group
 * Only for libraries with native computed support
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
  skip?: (store: any) => boolean;  // Return true to skip this library
}

export const TESTS = {
  NATIVE_COMPUTED: {
    name: 'Native Computed',
    skip: (store) => !store.readComputedCached || !store.updateComputed,
    execute: (store) => {
      store.updateComputed();
    }
  },
  CHAINED_COMPUTED: {
    name: 'Chained Computed',
    skip: (store) => !store.readChainedComputed || !store.updateComputed,
    execute: (store) => {
      store.updateComputed();
      store.readChainedComputed();
    }
  },
  COMPUTED_UPDATES: {
    name: 'Computed Updates',
    skip: (store) => !store.updateComputed || !store.readComputedCached,
    execute: (store) => {
      for (let i = 0; i < 100; i++) {
        store.updateComputed();
        store.readComputedCached();
      }
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type ComputedTestKey = keyof typeof TESTS;
