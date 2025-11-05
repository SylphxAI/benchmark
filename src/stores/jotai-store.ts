import { atom, createStore } from 'jotai';

export const jotaiStore = createStore();
export const jotaiCountAtom = atom(0);
export const jotaiDoubledAtom = atom(get => get(jotaiCountAtom) * 2);
export const jotaiNestedAtom = atom({ value: 0 });
export const jotaiUsersAtom = atom([]);

export const jotaiActions = {
  increment: () => jotaiStore.set(jotaiCountAtom, c => c + 1),
  setNested: (value: number) => jotaiStore.set(jotaiNestedAtom, { value }),
  addUser: (user: any) => jotaiStore.set(jotaiUsersAtom, users => [...users, user]),
  getDoubled: () => jotaiStore.get(jotaiDoubledAtom),
  getNested: () => jotaiStore.get(jotaiNestedAtom),
  getUsers: () => jotaiStore.get(jotaiUsersAtom)
};