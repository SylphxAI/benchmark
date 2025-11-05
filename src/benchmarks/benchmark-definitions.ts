import {
  reduxActions,
  zustandActions,
  jotaiActions,
  mobxActions,
  valtioActions,
  preactActions,
  solidActions
} from '../stores';

export interface BenchmarkTest {
  name: string;
  category: string;
  fn: () => void;
}

export interface LibraryBenchmark {
  library: string;
  tests: BenchmarkTest[];
}

// Test data for array operations
const testUser = { id: 1, name: 'Test User' };

export const benchmarkLibraries: LibraryBenchmark[] = [
  {
    library: 'Redux Toolkit',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => reduxActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => reduxActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => reduxActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => reduxActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  },
  {
    library: 'Zustand',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => zustandActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => zustandActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => zustandActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => zustandActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  },
  {
    library: 'Jotai',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => jotaiActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => jotaiActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => jotaiActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => jotaiActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  },
  {
    library: 'MobX',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => mobxActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => mobxActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => mobxActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => mobxActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  },
  {
    library: 'Valtio',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => valtioActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => valtioActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => valtioActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => valtioActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  },
  {
    library: 'Preact Signals',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => preactActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => preactActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => preactActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => preactActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  },
  {
    library: 'Solid Signals',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => solidActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => solidActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => solidActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => solidActions.addUser({ ...testUser, id: Math.random() })
      }
    ]
  }
];

export const benchmarkCategories = ['Simple Increment', 'Computed Access', 'Nested Update', 'Array Push'];