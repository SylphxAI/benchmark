/**
 * Immutability Library Benchmarks
 * Comparing performance of different immutability libraries
 */

import { bench, describe } from 'vitest';
import { produce } from 'immer';
import { create } from 'mutative';
import { Map as ImmutableMap, List as ImmutableList, fromJS } from 'immutable';
import update from 'immutability-helper';
import Seamless from 'seamless-immutable';
import { craft } from '@sylphx/craft';

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
const largeArray = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i * 2 }));

// ============================================================================
// Simple Object Update
// ============================================================================
describe('Simple Object Update', () => {
  bench('Immer', () => {
    const result = produce(simpleObject, draft => {
      draft.count += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(simpleObject, draft => {
      draft.count += 1;
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(simpleObject, draft => {
      draft.count += 1;
    });
  });

  bench('Immutable.js', () => {
    const map = ImmutableMap(simpleObject);
    const result = map.set('count', map.get('count') + 1);
  });

  bench('Immutability Helper', () => {
    const result = update(simpleObject, {
      count: { $set: simpleObject.count + 1 }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(simpleObject);
    const result = obj.set('count', obj.count + 1);
  });

  bench('Native Spread', () => {
    const result = { ...simpleObject, count: simpleObject.count + 1 };
  });
});

// ============================================================================
// Nested Object Update
// ============================================================================
describe('Nested Object Update', () => {
  bench('Immer', () => {
    const result = produce(nestedObject, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(nestedObject, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(nestedObject, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Immutable.js', () => {
    const map = fromJS(nestedObject);
    const result = map.setIn(['user', 'profile', 'age'], map.getIn(['user', 'profile', 'age']) + 1);
  });

  bench('Immutability Helper', () => {
    const result = update(nestedObject, {
      user: {
        profile: {
          age: { $set: nestedObject.user.profile.age + 1 }
        }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(nestedObject);
    const result = obj.setIn(['user', 'profile', 'age'], obj.user.profile.age + 1);
  });

  bench('Native Spread', () => {
    const result = {
      ...nestedObject,
      user: {
        ...nestedObject.user,
        profile: {
          ...nestedObject.user.profile,
          age: nestedObject.user.profile.age + 1
        }
      }
    };
  });
});

// ============================================================================
// Array Push
// ============================================================================
describe('Array Push', () => {
  const arr = [1, 2, 3, 4, 5];

  bench('Immer', () => {
    const result = produce(arr, draft => {
      draft.push(6);
    });
  });

  bench('Mutative', () => {
    const result = create(arr, draft => {
      draft.push(6);
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(arr, draft => {
      draft.push(6);
    });
  });

  bench('Immutable.js', () => {
    const list = ImmutableList(arr);
    const result = list.push(6);
  });

  bench('Immutability Helper', () => {
    const result = update(arr, {
      $push: [6]
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(arr);
    const result = list.concat([6]);
  });

  bench('Native Spread', () => {
    const result = [...arr, 6];
  });
});

// ============================================================================
// Array Remove
// ============================================================================
describe('Array Remove', () => {
  const arr = [1, 2, 3, 4, 5];

  bench('Immer', () => {
    const result = produce(arr, draft => {
      draft.splice(2, 1);
    });
  });

  bench('Mutative', () => {
    const result = create(arr, draft => {
      draft.splice(2, 1);
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(arr, draft => {
      draft.splice(2, 1);
    });
  });

  bench('Immutable.js', () => {
    const list = ImmutableList(arr);
    const result = list.delete(2);
  });

  bench('Immutability Helper', () => {
    const result = update(arr, {
      $splice: [[2, 1]]
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(arr);
    const result = list.filter((_, i) => i !== 2);
  });

  bench('Native Filter', () => {
    const result = arr.filter((_, i) => i !== 2);
  });
});

// ============================================================================
// Array Update
// ============================================================================
describe('Array Update', () => {
  const arr = [{ id: 1, value: 10 }, { id: 2, value: 20 }, { id: 3, value: 30 }];

  bench('Immer', () => {
    const result = produce(arr, draft => {
      draft[1].value = 25;
    });
  });

  bench('Mutative', () => {
    const result = create(arr, draft => {
      draft[1].value = 25;
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(arr, draft => {
      draft[1].value = 25;
    });
  });

  bench('Immutable.js', () => {
    const list = fromJS(arr);
    const result = list.setIn([1, 'value'], 25);
  });

  bench('Immutability Helper', () => {
    const result = update(arr, {
      1: {
        value: { $set: 25 }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(arr);
    const result = list.setIn([1, 'value'], 25);
  });

  bench('Native Map', () => {
    const result = arr.map((item, i) =>
      i === 1 ? { ...item, value: 25 } : item
    );
  });
});

// ============================================================================
// Deep Nested Update
// ============================================================================
describe('Deep Nested Update (5 levels)', () => {
  const deepObject = {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              value: 0
            }
          }
        }
      }
    }
  };

  bench('Immer', () => {
    const result = produce(deepObject, draft => {
      draft.level1.level2.level3.level4.level5.value += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(deepObject, draft => {
      draft.level1.level2.level3.level4.level5.value += 1;
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(deepObject, draft => {
      draft.level1.level2.level3.level4.level5.value += 1;
    });
  });

  bench('Immutable.js', () => {
    const map = fromJS(deepObject);
    const result = map.setIn(
      ['level1', 'level2', 'level3', 'level4', 'level5', 'value'],
      map.getIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value']) + 1
    );
  });

  bench('Immutability Helper', () => {
    const result = update(deepObject, {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: {
                value: { $set: deepObject.level1.level2.level3.level4.level5.value + 1 }
              }
            }
          }
        }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(deepObject);
    const result = obj.setIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value'],
      obj.level1.level2.level3.level4.level5.value + 1);
  });

  bench('Native Spread', () => {
    const result = {
      ...deepObject,
      level1: {
        ...deepObject.level1,
        level2: {
          ...deepObject.level1.level2,
          level3: {
            ...deepObject.level1.level2.level3,
            level4: {
              ...deepObject.level1.level2.level3.level4,
              level5: {
                ...deepObject.level1.level2.level3.level4.level5,
                value: deepObject.level1.level2.level3.level4.level5.value + 1
              }
            }
          }
        }
      }
    };
  });
});

// ============================================================================
// Large Array Update
// ============================================================================
describe('Large Array Update (1000 items)', () => {
  bench('Immer', () => {
    const result = produce(largeArray, draft => {
      draft[500].value += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(largeArray, draft => {
      draft[500].value += 1;
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(largeArray, draft => {
      draft[500].value += 1;
    });
  });

  bench('Immutable.js', () => {
    const list = fromJS(largeArray);
    const result = list.setIn([500, 'value'], list.getIn([500, 'value']) + 1);
  });

  bench('Immutability Helper', () => {
    const result = update(largeArray, {
      500: {
        value: { $set: largeArray[500].value + 1 }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(largeArray);
    const result = list.setIn([500, 'value'], list[500].value + 1);
  });

  bench('Native Map', () => {
    const result = largeArray.map((item, i) =>
      i === 500 ? { ...item, value: item.value + 1 } : item
    );
  });
});

// ============================================================================
// Multiple Updates
// ============================================================================
describe('Multiple Updates (3 changes)', () => {
  bench('Immer', () => {
    const result = produce(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
      draft.user.profile.address.city = 'San Francisco';
    });
  });

  bench('Mutative', () => {
    const result = create(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
      draft.user.profile.address.city = 'San Francisco';
    });
  });

  bench('Sylph Craft', () => {
    const result = craft(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
      draft.user.profile.address.city = 'San Francisco';
    });
  });

  bench('Immutable.js', () => {
    const map = fromJS(nestedObject);
    const result = map
      .setIn(['user', 'profile', 'name'], 'Jane')
      .setIn(['user', 'profile', 'age'], 25)
      .setIn(['user', 'profile', 'address', 'city'], 'San Francisco');
  });

  bench('Immutability Helper', () => {
    const result = update(nestedObject, {
      user: {
        profile: {
          name: { $set: 'Jane' },
          age: { $set: 25 },
          address: {
            city: { $set: 'San Francisco' }
          }
        }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(nestedObject);
    const result = obj
      .setIn(['user', 'profile', 'name'], 'Jane')
      .setIn(['user', 'profile', 'age'], 25)
      .setIn(['user', 'profile', 'address', 'city'], 'San Francisco');
  });

  bench('Native Spread', () => {
    const result = {
      ...nestedObject,
      user: {
        ...nestedObject.user,
        profile: {
          ...nestedObject.user.profile,
          name: 'Jane',
          age: 25,
          address: {
            ...nestedObject.user.profile.address,
            city: 'San Francisco'
          }
        }
      }
    };
  });
});
