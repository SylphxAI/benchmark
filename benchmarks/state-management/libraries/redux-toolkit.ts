/**
 * Redux Toolkit Library Implementation
 */

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { category, tests } from '../index';

// ============================================================================
// Redux Toolkit Store Setup
// ============================================================================

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// ============================================================================
// Register Library
// ============================================================================

const reduxToolkit = category.registerLibrary<ReturnType<typeof configureStore>>({
  id: 'redux-toolkit',
  displayName: 'Redux Toolkit',
  packageName: '@reduxjs/toolkit',
  githubUrl: 'https://github.com/reduxjs/redux-toolkit',
  description: 'The official, opinionated, batteries-included toolset for efficient Redux development',

  setup: {
    createStore: () => {
      return configureStore({
        reducer: {
          counter: counterSlice.reducer,
        },
      });
    },
  },

  features: ['devtools', 'middleware'],
});

// ============================================================================
// Implement Tests
// ============================================================================

reduxToolkit.implement(tests.simpleRead, (ctx) => {
  const value = ctx.store.getState().counter.count;
});

reduxToolkit.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.getState().counter.count;
  }
});

reduxToolkit.implement(tests.simpleIncrement, (ctx) => {
  ctx.store.dispatch(counterSlice.actions.increment());
});

reduxToolkit.implement(tests.burstUpdates, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.dispatch(counterSlice.actions.increment());
  }
});
