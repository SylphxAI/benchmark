/**
 * Reactive Async State Tests
 * Tests true reactive async capabilities - automatic recomputation when dependencies change
 *
 * Note: Only libraries with native reactive async support participate in these tests.
 * Most state libraries require manual async handling and do not support reactive async atoms.
 */

import { bench, describe } from 'vitest';
import { atom, createStore } from 'jotai';

// ============================================================================
// JOTAI - Only library with native reactive async support
// ============================================================================

const jotaiStore = createStore();

// Base atoms that async atoms depend on
const jotaiBaseAtom = atom(0);
const jotaiDataAtom = atom({ id: 1, value: 100 });

// Reactive async atom - automatically recomputes when dependencies change
const jotaiAsyncAtom = atom(async (get) => {
  const value = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return value * 2;
});

// Chained async atoms - multi-level async dependencies
const jotaiAsyncLevel1 = atom(async (get) => {
  const value = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return value + 10;
});

const jotaiAsyncLevel2 = atom(async (get) => {
  const level1 = await get(jotaiAsyncLevel1);
  await new Promise(resolve => setTimeout(resolve, 0));
  return level1 * 2;
});

// Complex async atom - depends on object
const jotaiComplexAsync = atom(async (get) => {
  const data = get(jotaiDataAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return {
    id: data.id,
    computed: data.value * 3,
    timestamp: Date.now()
  };
});

// Multiple concurrent async atoms
const jotaiAsync1 = atom(async (get) => {
  const v = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return v * 2;
});

const jotaiAsync2 = atom(async (get) => {
  const v = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return v * 3;
});

const jotaiAsync3 = atom(async (get) => {
  const v = get(jotaiBaseAtom);
  await new Promise(resolve => setTimeout(resolve, 0));
  return v * 4;
});

// ============================================================================
// BENCHMARKS
// ============================================================================

describe('Reactive Async - Basic', () => {
  bench('Reactive Async Read - Jotai', async () => {
    // Change dependency
    jotaiStore.set(jotaiBaseAtom, Math.random());
    // Async atom automatically invalidates and recomputes
    await jotaiStore.get(jotaiAsyncAtom);
  });
});

describe('Reactive Async - Chained Dependencies', () => {
  bench('Async Chain (2 levels) - Jotai', async () => {
    // Change base dependency
    jotaiStore.set(jotaiBaseAtom, Math.random());
    // Both levels automatically recompute
    await jotaiStore.get(jotaiAsyncLevel2);
  });
});

describe('Reactive Async - Complex Objects', () => {
  bench('Complex Async Object - Jotai', async () => {
    // Change object dependency
    jotaiStore.set(jotaiDataAtom, { id: Math.floor(Math.random() * 1000), value: Math.random() * 1000 });
    // Async computation triggers
    await jotaiStore.get(jotaiComplexAsync);
  });
});

describe('Reactive Async - Concurrent', () => {
  bench('Concurrent Async (3 atoms) - Jotai', async () => {
    // Change shared dependency
    jotaiStore.set(jotaiBaseAtom, Math.random());
    // All 3 async atoms invalidate and can be computed concurrently
    await Promise.all([
      jotaiStore.get(jotaiAsync1),
      jotaiStore.get(jotaiAsync2),
      jotaiStore.get(jotaiAsync3)
    ]);
  });
});

// ============================================================================
// NOTES
// ============================================================================

/**
 * Why only Jotai?
 *
 * Reactive async requires the library to:
 * 1. Track dependencies inside async computations (like computed values)
 * 2. Automatically invalidate async results when dependencies change
 * 3. Re-run async computations on next read (lazy) or immediately (eager)
 *
 * Library Support Status:
 * ✅ Jotai - Native async atoms with full dependency tracking
 * ❌ Zustand - Manual async, no reactive tracking
 * ❌ Redux Toolkit - RTK Query is separate, not reactive atoms
 * ❌ MobX - Has `flow` but not reactive async (manual trigger)
 * ❌ Valtio - Proxy-based, no async support
 * ❌ Preact Signals - No async signals
 * ❌ Solid Signals - createResource is framework-level, not core signals
 * ❌ Zen - karma is async task runner, not reactive
 *
 * This is a feature completeness test. Libraries without reactive async
 * support are missing an important capability for modern applications.
 */
