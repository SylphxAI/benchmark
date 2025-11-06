/**
 * Advanced Features Benchmarks
 * Comparing advanced features like JSON Patches, Map/Set, etc.
 * Only includes libraries that support these features
 */

import { bench, describe } from 'vitest';
import { produce, produceWithPatches, applyPatches as immerApplyPatches, enablePatches, enableMapSet } from 'immer';
import { create as mutativeCreate } from 'mutative';
import { craft, craftWithPatches, applyPatches as craftApplyPatches } from '@sylphx/craft';

// ASSUMPTION: Enable Immer plugins (required for advanced features)
enablePatches();
enableMapSet();

// Test data
const simpleObject = { count: 0, name: 'test', value: 100 };
const nestedObject = {
  user: {
    profile: {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA'
      }
    }
  }
};

// ============================================================================
// JSON Patches - Generate Patches
// ============================================================================
describe('JSON Patches - Generate', () => {
  bench('Immer', () => {
    const [nextState, patches, inversePatches] = produceWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
  });

  bench('Craft', () => {
    const [nextState, patches, inversePatches] = craftWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
  });
});

// ============================================================================
// JSON Patches - Apply Patches
// ============================================================================
describe('JSON Patches - Apply', () => {
  // Pre-generate patches
  const [_, immerPatches] = produceWithPatches(nestedObject, draft => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });

  const [__, craftPatches] = craftWithPatches(nestedObject, draft => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });

  bench('Immer', () => {
    const result = immerApplyPatches(nestedObject, immerPatches);
  });

  bench('Craft', () => {
    const result = craftApplyPatches(nestedObject, craftPatches);
  });
});

// ============================================================================
// JSON Patches - Full Roundtrip (Generate + Apply)
// ============================================================================
describe('JSON Patches - Roundtrip', () => {
  bench('Immer', () => {
    const [nextState, patches] = produceWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
    const recreated = immerApplyPatches(nestedObject, patches);
  });

  bench('Craft', () => {
    const [nextState, patches] = craftWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
    const recreated = craftApplyPatches(nestedObject, patches);
  });
});

// ============================================================================
// Map Operations - Set
// ============================================================================
describe('Map - Set Operation', () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }]
    ])
  };

  bench('Immer', () => {
    const result = produce(mapState, draft => {
      draft.users.set('charlie', { name: 'Charlie', age: 35 });
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(mapState, draft => {
      draft.users.set('charlie', { name: 'Charlie', age: 35 });
    });
  });

  bench('Craft', () => {
    const result = craft(mapState, draft => {
      draft.users.set('charlie', { name: 'Charlie', age: 35 });
    });
  });
});

// ============================================================================
// Map Operations - Update Nested Value
// ============================================================================
describe('Map - Update Nested Value', () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }]
    ])
  };

  bench('Immer', () => {
    const result = produce(mapState, draft => {
      const bob = draft.users.get('bob');
      if (bob) bob.age = 31;
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(mapState, draft => {
      const bob = draft.users.get('bob');
      if (bob) bob.age = 31;
    });
  });

  bench('Craft', () => {
    const result = craft(mapState, draft => {
      const bob = draft.users.get('bob');
      if (bob) bob.age = 31;
    });
  });
});

// ============================================================================
// Set Operations - Add
// ============================================================================
describe('Set - Add Operation', () => {
  const setState = {
    tags: new Set(['javascript', 'typescript'])
  };

  bench('Immer', () => {
    const result = produce(setState, draft => {
      draft.tags.add('react');
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(setState, draft => {
      draft.tags.add('react');
    });
  });

  bench('Craft', () => {
    const result = craft(setState, draft => {
      draft.tags.add('react');
    });
  });
});

// ============================================================================
// Set Operations - Delete
// ============================================================================
describe('Set - Delete Operation', () => {
  const setState = {
    tags: new Set(['javascript', 'typescript', 'react'])
  };

  bench('Immer', () => {
    const result = produce(setState, draft => {
      draft.tags.delete('javascript');
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(setState, draft => {
      draft.tags.delete('javascript');
    });
  });

  bench('Craft', () => {
    const result = craft(setState, draft => {
      draft.tags.delete('javascript');
    });
  });
});

// ============================================================================
// Large Map Operations
// ============================================================================
describe('Map - Large (100 items)', () => {
  const largeMapState = {
    users: new Map(
      Array.from({ length: 100 }, (_, i) => [
        `user${i}`,
        { name: `User ${i}`, age: 20 + i }
      ])
    )
  };

  bench('Immer', () => {
    const result = produce(largeMapState, draft => {
      draft.users.set('newUser', { name: 'New User', age: 25 });
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(largeMapState, draft => {
      draft.users.set('newUser', { name: 'New User', age: 25 });
    });
  });

  bench('Craft', () => {
    const result = craft(largeMapState, draft => {
      draft.users.set('newUser', { name: 'New User', age: 25 });
    });
  });
});

// ============================================================================
// Large Set Operations
// ============================================================================
describe('Set - Large (100 items)', () => {
  const largeSetState = {
    tags: new Set(Array.from({ length: 100 }, (_, i) => `tag${i}`))
  };

  bench('Immer', () => {
    const result = produce(largeSetState, draft => {
      draft.tags.add('newTag');
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(largeSetState, draft => {
      draft.tags.add('newTag');
    });
  });

  bench('Craft', () => {
    const result = craft(largeSetState, draft => {
      draft.tags.add('newTag');
    });
  });
});

// ============================================================================
// Undo/Redo with Inverse Patches
// ============================================================================
describe('Undo/Redo - Inverse Patches', () => {
  bench('Immer', () => {
    // Do operation
    const [nextState, patches, inversePatches] = produceWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });

    // Undo (apply inverse)
    const undone = immerApplyPatches(nextState, inversePatches);
  });

  bench('Craft', () => {
    // Do operation
    const [nextState, patches, inversePatches] = craftWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });

    // Undo (apply inverse)
    const undone = craftApplyPatches(nextState, inversePatches);
  });
});
