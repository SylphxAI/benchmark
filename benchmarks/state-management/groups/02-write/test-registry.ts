/**
 * Test registry for 02-write group
 * Centralized test definitions ensure consistency across all libraries
 */

export interface TestDefinition {
  name: string;
  code: (store: any) => void | any;
}

export const TESTS = {
  SINGLE_UPDATE: {
    name: 'Single Update',
    code: (store) => {
      store.increment();
    }
  },
  BATCH_UPDATE_X10: {
    name: 'Batch Update (x10)',
    code: (store) => {
      for (let i = 0; i < 10; i++) {
        store.increment();
      }
    }
  },
  BATCH_UPDATE_X100: {
    name: 'Batch Update (x100)',
    code: (store) => {
      for (let i = 0; i < 100; i++) {
        store.increment();
      }
    }
  },
  BATCH_UPDATE_X1000: {
    name: 'Batch Update (x1000)',
    code: (store) => {
      for (let i = 0; i < 1000; i++) {
        store.increment();
      }
    }
  },
  BATCH_UPDATE_X10000: {
    name: 'Batch Update (x10000)',
    code: (store) => {
      for (let i = 0; i < 10000; i++) {
        store.increment();
      }
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type WriteTestKey = keyof typeof TESTS;
