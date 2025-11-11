/**
 * Test registry for 11-batching-native group
 * Only for libraries with native batching support (MobX, Valtio, Solid)
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
  skip?: (store: any) => boolean;
}

export const TESTS = {
  BATCH_UPDATES: {
    name: 'Batch Updates (x10)',
    skip: (store) => !store.batchUpdate10,
    execute: (store) => {
      store.batchUpdate10();
    }
  },
  BATCH_UPDATES_100: {
    name: 'Batch Updates (x100)',
    skip: (store) => !store.batchUpdate100,
    execute: (store) => {
      store.batchUpdate100();
    }
  },
  BATCH_NESTED: {
    name: 'Nested Batch Updates',
    skip: (store) => !store.batchNestedUpdate,
    execute: (store) => {
      store.batchNestedUpdate();
    }
  },
  BATCH_WITH_READ: {
    name: 'Batch with Reads',
    skip: (store) => !store.batchWithReads,
    execute: (store) => {
      store.batchWithReads();
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type BatchingTestKey = keyof typeof TESTS;
