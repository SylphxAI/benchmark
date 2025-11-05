import { create } from 'zustand';

export const zustandStore = create((set, get) => ({
  count: 0,
  doubled: 0,
  nested: { value: 0 },
  users: [],
  increment: () => set((state) => ({
    count: state.count + 1,
    doubled: (state.count + 1) * 2
  })),
  setNested: (value: number) => set((state) => ({
    nested: { ...state.nested, value }
  })),
  addUser: (user: any) => set((state) => ({
    users: [...state.users, user]
  })),
  getDouble: () => get().count * 2
}));

export const zustandActions = {
  increment: () => zustandStore.getState().increment(),
  setNested: (value: number) => zustandStore.getState().setNested(value),
  addUser: (user: any) => zustandStore.getState().addUser(user),
  getDoubled: () => zustandStore.getState().getDouble(),
  getNested: () => zustandStore.getState().nested,
  getUsers: () => zustandStore.getState().users
};