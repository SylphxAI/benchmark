import { configureStore, createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    doubled: 0,
    nested: { value: 0 },
    users: []
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.doubled = state.count * 2;
    },
    setNested: (state, action) => {
      state.nested.value = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    }
  }
});

export const reduxStore = configureStore({
  reducer: { counter: reduxSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const reduxActions = {
  increment: () => reduxStore.dispatch(reduxSlice.actions.increment()),
  setNested: (value: number) => reduxStore.dispatch(reduxSlice.actions.setNested(value)),
  addUser: (user: any) => reduxStore.dispatch(reduxSlice.actions.addUser(user)),
  getDoubled: () => reduxStore.getState().counter.doubled,
  getNested: () => reduxStore.getState().counter.nested,
  getUsers: () => reduxStore.getState().counter.users
};