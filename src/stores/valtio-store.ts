import { proxy } from 'valtio';

export const valtioStore = proxy({
  count: 0,
  nested: { value: 0 },
  users: [],
  get doubled() {
    return this.count * 2;
  },
  increment() {
    this.count++;
  },
  setNested(value: number) {
    this.nested.value = value;
  },
  addUser(user: any) {
    this.users.push(user);
  }
});

export const valtioActions = {
  increment: () => valtioStore.increment(),
  setNested: (value: number) => valtioStore.setNested(value),
  addUser: (user: any) => valtioStore.addUser(user),
  getDoubled: () => valtioStore.doubled,
  getNested: () => valtioStore.nested,
  getUsers: () => valtioStore.users
};