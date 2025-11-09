/**
 * Comprehensive Vitest Benchmark Suite for State Management Libraries
 * Version 2 - Complete Coverage of Real-world Scenarios
 */

import { bench, describe } from 'vitest';
import {
  reduxActionsV2,
  zustandActionsV2,
  jotaiActionsV2,
  mobxActionsV2,
  valtioActionsV2,
  preactActionsV2,
  solidActionsV2,
  zenActionsV2
} from './stores';

// ============================================================================
// FOUNDATION TESTS
// ============================================================================

describe('Store Creation', () => {
  bench('Redux Toolkit', () => {
    reduxActions.createStore();
  });

  bench('Zustand', () => {
    zustandActions.createStore();
  });

  bench('Jotai', () => {
    jotaiActions.createStore();
  });

  bench('MobX', () => {
    mobxActions.createStore();
  });

  bench('Valtio', () => {
    valtioActions.createStore();
  });

  bench('Preact Signals', () => {
    preactActions.createStore();
  });

  bench('Solid Signals', () => {
    solidActions.createStore();
  });

  bench('Zen', () => {
    zenActions.createStore();
  });
});

describe('Simple Increment', () => {
  bench('Redux Toolkit', () => {
    reduxActions.increment();
  });

  bench('Zustand', () => {
    zustandActions.increment();
  });

  bench('Jotai', () => {
    jotaiActions.increment();
  });

  bench('MobX', () => {
    mobxActions.increment();
  });

  bench('Valtio', () => {
    valtioActions.increment();
  });

  bench('Preact Signals', () => {
    preactActions.increment();
  });

  bench('Solid Signals', () => {
    solidActions.increment();
  });

  bench('Zen', () => {
    zenActions.increment();
  });
});

// ============================================================================
// READ/WRITE PERFORMANCE TESTS
// ============================================================================

describe('High Frequency Read', () => {
  bench('Redux Toolkit', () => {
    for (let i = 0; i < 1000; i++) {
      reduxActions.getDoubled();
    }
  });

  bench('Zustand', () => {
    for (let i = 0; i < 1000; i++) {
      zustandActions.getDoubled();
    }
  });

  bench('Jotai', () => {
    for (let i = 0; i < 1000; i++) {
      jotaiActions.getDoubled();
    }
  });

  bench('MobX', () => {
    for (let i = 0; i < 1000; i++) {
      mobxActions.getDoubled();
    }
  });

  bench('Valtio', () => {
    for (let i = 0; i < 1000; i++) {
      valtioActions.getDoubled();
    }
  });

  bench('Preact Signals', () => {
    for (let i = 0; i < 1000; i++) {
      preactActions.getDoubled();
    }
  });

  bench('Solid Signals', () => {
    for (let i = 0; i < 1000; i++) {
      solidActions.getDoubled();
    }
  });

  bench('Zen', () => {
    for (let i = 0; i < 1000; i++) {
      zenActions.getDoubled();
    }
  });
});

describe('Burst Updates', () => {
  bench('Redux Toolkit', () => {
    for (let i = 0; i < 100; i++) {
      reduxActions.increment();
    }
  });

  bench('Zustand', () => {
    for (let i = 0; i < 100; i++) {
      zustandActions.increment();
    }
  });

  bench('Jotai', () => {
    for (let i = 0; i < 100; i++) {
      jotaiActions.increment();
    }
  });

  bench('MobX', () => {
    for (let i = 0; i < 100; i++) {
      mobxActions.increment();
    }
  });

  bench('Valtio', () => {
    for (let i = 0; i < 100; i++) {
      valtioActions.increment();
    }
  });

  bench('Preact Signals', () => {
    for (let i = 0; i < 100; i++) {
      preactActions.increment();
    }
  });

  bench('Solid Signals', () => {
    for (let i = 0; i < 100; i++) {
      solidActions.increment();
    }
  });

  bench('Zen', () => {
    for (let i = 0; i < 100; i++) {
      zenActions.increment();
    }
  });
});

// ============================================================================
// ARRAY/COLLECTION OPERATIONS TESTS
// ============================================================================

describe('Array Splice Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Zustand', () => {
    zustandActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Jotai', () => {
    jotaiActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('MobX', () => {
    mobxActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Valtio', () => {
    valtioActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Preact Signals', () => {
    preactActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Solid Signals', () => {
    solidActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Zen', () => {
    zenActions.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });
});

describe('Large Array Sort', () => {
  bench('Redux Toolkit', () => {
    reduxActions.sortUsers('name');
  });

  bench('Zustand', () => {
    zustandActions.sortUsers('name');
  });

  bench('Jotai', () => {
    jotaiActions.sortUsers('name');
  });

  bench('MobX', () => {
    mobxActions.sortUsers('name');
  });

  bench('Valtio', () => {
    valtioActions.sortUsers('name');
  });

  bench('Preact Signals', () => {
    preactActions.sortUsers('name');
  });

  bench('Solid Signals', () => {
    solidActions.sortUsers('name');
  });

  bench('Zen', () => {
    zenActions.sortUsers('name');
  });
});

describe('Array Find Operations', () => {
  const targetId = Math.floor(Math.random() * 1000);

  bench('Redux Toolkit', () => {
    reduxActions.findUser(targetId);
  });

  bench('Zustand', () => {
    zustandActions.findUser(targetId);
  });

  bench('Jotai', () => {
    jotaiActions.findUser(targetId);
  });

  bench('MobX', () => {
    mobxActions.findUser(targetId);
  });

  bench('Valtio', () => {
    valtioActions.findUser(targetId);
  });

  bench('Preact Signals', () => {
    preactActions.findUser(targetId);
  });

  bench('Solid Signals', () => {
    solidActions.findUser(targetId);
  });

  bench('Zen', () => {
    zenActions.findUser(targetId);
  });
});

// ============================================================================
// DEEP NESTED STATE TESTS
// ============================================================================

describe('Deep Object Creation', () => {
  bench('Redux Toolkit', () => {
    reduxActions.createDeepObject();
  });

  bench('Zustand', () => {
    zustandActions.createDeepObject();
  });

  bench('Jotai', () => {
    jotaiActions.createDeepObject();
  });

  bench('MobX', () => {
    mobxActions.createDeepObject();
  });

  bench('Valtio', () => {
    valtioActions.createDeepObject();
  });

  bench('Preact Signals', () => {
    preactActions.createDeepObject();
  });

  bench('Solid Signals', () => {
    solidActions.createDeepObject();
  });

  bench('Zen', () => {
    zenActions.createDeepObject();
  });
});

describe('10-Level Nested Update', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setTenLevelNested(Math.random());
  });

  bench('Zustand', () => {
    zustandActions.setTenLevelNested(Math.random());
  });

  bench('Jotai', () => {
    jotaiActions.setTenLevelNested(Math.random());
  });

  bench('MobX', () => {
    mobxActions.setTenLevelNested(Math.random());
  });

  bench('Valtio', () => {
    valtioActions.setTenLevelNested(Math.random());
  });

  bench('Preact Signals', () => {
    preactActions.setTenLevelNested(Math.random());
  });

  bench('Solid Signals', () => {
    solidActions.setTenLevelNested(Math.random());
  });

  bench('Zen', () => {
    zenActions.setTenLevelNested(Math.random());
  });
});

describe('Deep Read Access', () => {
  bench('Redux Toolkit', () => {
    reduxActions.getDeepValue();
  });

  bench('Zustand', () => {
    zustandActions.getDeepValue();
  });

  bench('Jotai', () => {
    jotaiActions.getDeepValue();
  });

  bench('MobX', () => {
    mobxActions.getDeepValue();
  });

  bench('Valtio', () => {
    valtioActions.getDeepValue();
  });

  bench('Preact Signals', () => {
    preactActions.getDeepValue();
  });

  bench('Solid Signals', () => {
    solidActions.getDeepValue();
  });

  bench('Zen', () => {
    zenActions.getDeepValue();
  });
});

// ============================================================================
// COMPUTED/DERIVED STATE TESTS
// ============================================================================

describe('Complex Computed Chain', () => {
  bench('Redux Toolkit', () => {
    reduxActions.getComplexComputed();
  });

  bench('Zustand', () => {
    zustandActions.getComplexComputed();
  });

  bench('Jotai', () => {
    jotaiActions.getComplexComputed();
  });

  bench('MobX', () => {
    mobxActions.getComplexComputed();
  });

  bench('Valtio', () => {
    valtioActions.getComplexComputed();
  });

  bench('Preact Signals', () => {
    preactActions.getComplexComputed();
  });

  bench('Solid Signals', () => {
    solidActions.getComplexComputed();
  });

  bench('Zen', () => {
    zenActions.getComplexComputed();
  });
});

describe('Computed Invalidation', () => {
  bench('Redux Toolkit', () => {
    reduxActions.invalidateComputed();
  });

  bench('Zustand', () => {
    zustandActions.invalidateComputed();
  });

  bench('Jotai', () => {
    jotaiActions.invalidateComputed();
  });

  bench('MobX', () => {
    mobxActions.invalidateComputed();
  });

  bench('Valtio', () => {
    valtioActions.invalidateComputed();
  });

  bench('Preact Signals', () => {
    preactActions.invalidateComputed();
  });

  bench('Solid Signals', () => {
    solidActions.invalidateComputed();
  });

  bench('Zen', () => {
    zenActions.invalidateComputed();
  });
});

// ============================================================================
// SUBSCRIPTION/REACTION TESTS
// ============================================================================

describe('Subscription Cascade', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setupSubscriptionCascade();
  });

  bench('Zustand', () => {
    zustandActions.setupSubscriptionCascade();
  });

  bench('Jotai', () => {
    jotaiActions.setupSubscriptionCascade();
  });

  bench('MobX', () => {
    mobxActions.setupSubscriptionCascade();
  });

  bench('Valtio', () => {
    valtioActions.setupSubscriptionCascade();
  });

  bench('Preact Signals', () => {
    preactActions.setupSubscriptionCascade();
  });

  bench('Solid Signals', () => {
    solidActions.setupSubscriptionCascade();
  });

  bench('Zen', () => {
    zenActions.setupSubscriptionCascade();
  });
});

describe('Reaction Performance', () => {
  bench('Redux Toolkit', () => {
    reduxActions.triggerReaction();
  });

  bench('Zustand', () => {
    zustandActions.triggerReaction();
  });

  bench('Jotai', () => {
    jotaiActions.triggerReaction();
  });

  bench('MobX', () => {
    mobxActions.triggerReaction();
  });

  bench('Valtio', () => {
    valtioActions.triggerReaction();
  });

  bench('Preact Signals', () => {
    preactActions.triggerReaction();
  });

  bench('Solid Signals', () => {
    solidActions.triggerReaction();
  });

  bench('Zen', () => {
    zenActions.triggerReaction();
  });
});

// ============================================================================
// LARGE SCALE TESTS
// ============================================================================

describe('Multi-Store Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActions.multiStoreOperation();
  });

  bench('Zustand', () => {
    zustandActions.multiStoreOperation();
  });

  bench('Jotai', () => {
    jotaiActions.multiStoreOperation();
  });

  bench('MobX', () => {
    mobxActions.multiStoreOperation();
  });

  bench('Valtio', () => {
    valtioActions.multiStoreOperation();
  });

  bench('Preact Signals', () => {
    preactActions.multiStoreOperation();
  });

  bench('Solid Signals', () => {
    solidActions.multiStoreOperation();
  });

  bench('Zen', () => {
    zenActions.multiStoreOperation();
  });
});

describe('Memory Allocation', () => {
  bench('Redux Toolkit', () => {
    reduxActions.allocateLargeState();
  });

  bench('Zustand', () => {
    zustandActions.allocateLargeState();
  });

  bench('Jotai', () => {
    jotaiActions.allocateLargeState();
  });

  bench('MobX', () => {
    mobxActions.allocateLargeState();
  });

  bench('Valtio', () => {
    valtioActions.allocateLargeState();
  });

  bench('Preact Signals', () => {
    preactActions.allocateLargeState();
  });

  bench('Solid Signals', () => {
    solidActions.allocateLargeState();
  });

  bench('Zen', () => {
    zenActions.allocateLargeState();
  });
});

// ============================================================================
// SPECIALIZED SCENARIOS
// ============================================================================

describe('Form State Management', () => {
  bench('Redux Toolkit', () => {
    reduxActions.updateFormField('email', 'test@example.com');
  });

  bench('Zustand', () => {
    zustandActions.updateFormField('email', 'test@example.com');
  });

  bench('Jotai', () => {
    jotaiActions.updateFormField('email', 'test@example.com');
  });

  bench('MobX', () => {
    mobxActions.updateFormField('email', 'test@example.com');
  });

  bench('Valtio', () => {
    valtioActions.updateFormField('email', 'test@example.com');
  });

  bench('Preact Signals', () => {
    preactActions.updateFormField('email', 'test@example.com');
  });

  bench('Solid Signals', () => {
    solidActions.updateFormField('email', 'test@example.com');
  });

  bench('Zen', () => {
    zenActions.updateFormField('email', 'test@example.com');
  });
});

describe('Optimistic Update', () => {
  bench('Redux Toolkit', () => {
    reduxActions.optimisticUpdate();
  });

  bench('Zustand', () => {
    zustandActions.optimisticUpdate();
  });

  bench('Jotai', () => {
    jotaiActions.optimisticUpdate();
  });

  bench('MobX', () => {
    mobxActions.optimisticUpdate();
  });

  bench('Valtio', () => {
    valtioActions.optimisticUpdate();
  });

  bench('Preact Signals', () => {
    preactActions.optimisticUpdate();
  });

  bench('Solid Signals', () => {
    solidActions.optimisticUpdate();
  });

  bench('Zen', () => {
    zenActions.optimisticUpdate();
  });
});

describe('Undo/Redo Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActions.undo();
  });

  bench('Zustand', () => {
    zustandActions.undo();
  });

  bench('Jotai', () => {
    jotaiActions.undo();
  });

  bench('MobX', () => {
    mobxActions.undo();
  });

  bench('Valtio', () => {
    valtioActions.undo();
  });

  bench('Preact Signals', () => {
    preactActions.undo();
  });

  bench('Solid Signals', () => {
    solidActions.undo();
  });

  bench('Zen', () => {
    zenActions.undo();
  });
});

describe('Batch State Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActions.batchComplexState();
  });

  bench('Zustand', () => {
    zustandActions.batchComplexState();
  });

  bench('Jotai', () => {
    jotaiActions.batchComplexState();
  });

  bench('MobX', () => {
    mobxActions.batchComplexState();
  });

  bench('Valtio', () => {
    valtioActions.batchComplexState();
  });

  bench('Preact Signals', () => {
    preactActions.batchComplexState();
  });

  bench('Solid Signals', () => {
    solidActions.batchComplexState();
  });

  bench('Zen', () => {
    zenActions.batchComplexState();
  });
});

// ============================================================================
// EDGE CASES AND ERROR HANDLING
// ============================================================================

describe('Null Value Handling', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setNullValue();
  });

  bench('Zustand', () => {
    zustandActions.setNullValue();
  });

  bench('Jotai', () => {
    jotaiActions.setNullValue();
  });

  bench('MobX', () => {
    mobxActions.setNullValue();
  });

  bench('Valtio', () => {
    valtioActions.setNullValue();
  });

  bench('Preact Signals', () => {
    preactActions.setNullValue();
  });

  bench('Solid Signals', () => {
    solidActions.setNullValue();
  });

  bench('Zen', () => {
    zenActions.setNullValue();
  });
});

describe('Undefined Value Handling', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setUndefinedValue();
  });

  bench('Zustand', () => {
    zustandActions.setUndefinedValue();
  });

  bench('Jotai', () => {
    jotaiActions.setUndefinedValue();
  });

  bench('MobX', () => {
    mobxActions.setUndefinedValue();
  });

  bench('Valtio', () => {
    valtioActions.setUndefinedValue();
  });

  bench('Preact Signals', () => {
    preactActions.setUndefinedValue();
  });

  bench('Solid Signals', () => {
    solidActions.setUndefinedValue();
  });

  bench('Zen', () => {
    zenActions.setUndefinedValue();
  });
});

// ============================================================================
// ASYNC AND PROMISE-BASED TESTS
// ============================================================================

describe('Async State Loading', () => {
  bench('Redux Toolkit', async () => {
    await reduxActions.loadAsyncData();
  });

  bench('Zustand', async () => {
    await zustandActions.loadAsyncData();
  });

  bench('Jotai', async () => {
    await jotaiActions.loadAsyncData();
  });

  bench('MobX', async () => {
    await mobxActions.loadAsyncData();
  });

  bench('Valtio', async () => {
    await valtioActions.loadAsyncData();
  });

  bench('Preact Signals', async () => {
    await preactActions.loadAsyncData();
  });

  bench('Solid Signals', async () => {
    await solidActions.loadAsyncData();
  });

  bench('Zen', async () => {
    await zenActions.loadAsyncData();
  });
});

describe('Concurrent Async Operations', () => {
  bench('Redux Toolkit', async () => {
    await reduxActions.concurrentAsync();
  });

  bench('Zustand', async () => {
    await zustandActions.concurrentAsync();
  });

  bench('Jotai', async () => {
    await jotaiActions.concurrentAsync();
  });

  bench('MobX', async () => {
    await mobxActions.concurrentAsync();
  });

  bench('Valtio', async () => {
    await valtioActions.concurrentAsync();
  });

  bench('Preact Signals', async () => {
    await preactActions.concurrentAsync();
  });

  bench('Solid Signals', async () => {
    await solidActions.concurrentAsync();
  });

  bench('Zen', async () => {
    await zenActions.concurrentAsync();
  });
});