/**
 * Test registry for 08-async-reactive group
 * Only Jotai and Zen support true reactive async (auto-recomputation)
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => Promise<any>;
  skip?: (store: any) => boolean;
}

export const TESTS = {
  ASYNC_READ: {
    name: 'Async Computed Read',
    skip: (store) => !store.getAsyncValue,
    execute: async (store) => {
      return await store.getAsyncValue();
    }
  },
  ASYNC_WITH_UPDATE: {
    name: 'Async Computed with Dependency Update',
    skip: (store) => !store.getAsyncValue || !store.increment,
    execute: async (store) => {
      store.increment();
      return await store.getAsyncValue();
    }
  },
  CHAINED_ASYNC: {
    name: 'Chained Async Computed',
    skip: (store) => !store.getChainedAsyncValue || !store.increment,
    execute: async (store) => {
      store.increment();
      return await store.getChainedAsyncValue();
    }
  },
  COMPLEX_ASYNC: {
    name: 'Complex Async Dependencies',
    skip: (store) => !store.getComplexAsyncValue || !store.increment,
    execute: async (store) => {
      store.increment();
      return await store.getComplexAsyncValue();
    }
  },
  CONCURRENT_ASYNC: {
    name: 'Concurrent Async Reads',
    skip: (store) => !store.getAsyncValue || !store.getChainedAsyncValue || !store.getComplexAsyncValue,
    execute: async (store) => {
      return await Promise.all([
        store.getAsyncValue(),
        store.getChainedAsyncValue(),
        store.getComplexAsyncValue()
      ]);
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type AsyncReactiveTestKey = keyof typeof TESTS;
