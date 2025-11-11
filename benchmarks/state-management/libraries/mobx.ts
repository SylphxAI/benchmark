/**
 * MobX Library Implementation
 */

import { makeAutoObservable } from 'mobx';
import { category, tests } from '../index';

// ============================================================================
// MobX Store Setup
// ============================================================================

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  setCount(value: number) {
    this.count = value;
  }
}

// ============================================================================
// Register Library
// ============================================================================

const mobx = category.registerLibrary<CounterStore>({
  id: 'mobx',
  displayName: 'MobX',
  packageName: 'mobx',
  githubUrl: 'https://github.com/mobxjs/mobx',
  description: 'Simple, scalable state management with transparent reactive programming',

  setup: {
    createStore: () => {
      return new CounterStore();
    },
  },

  features: ['auto-tracking', 'computed'],
});

// ============================================================================
// Implement Tests
// ============================================================================

mobx.implement(tests.simpleRead, (ctx) => {
  const value = ctx.store.count;
});

mobx.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.count;
  }
});

mobx.implement(tests.simpleIncrement, (ctx) => {
  ctx.store.increment();
});

mobx.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.increment();
  }
});
