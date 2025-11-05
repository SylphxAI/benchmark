import { makeAutoObservable } from 'mobx';

export class MobXStore {
  count = 0;
  nested = { value: 0 };
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  get doubled() {
    return this.count * 2;
  }

  increment() {
    this.count++;
  }

  setNested(value: number) {
    this.nested.value = value;
  }

  addUser(user: any) {
    this.users.push(user);
  }
}

export const mobxStore = new MobXStore();

export const mobxActions = {
  increment: () => mobxStore.increment(),
  setNested: (value: number) => mobxStore.setNested(value),
  addUser: (user: any) => mobxStore.addUser(user),
  getDoubled: () => mobxStore.doubled,
  getNested: () => mobxStore.nested,
  getUsers: () => mobxStore.users
};