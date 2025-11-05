import { createSignal, createMemo } from 'solid-js';

export const [solidCountSignal, setSolidCount] = createSignal(0);
export const solidDoubledSignal = createMemo(() => solidCountSignal() * 2);
export const [solidNestedSignal, setSolidNested] = createSignal({ value: 0 });
export const [solidUsersSignal, setSolidUsers] = createSignal([]);

export const solidActions = {
  increment: () => setSolidCount(c => c + 1),
  setNested: (value: number) => setSolidNested({ value }),
  addUser: (user: any) => setSolidUsers(users => [...users, user]),
  getDoubled: () => solidDoubledSignal(),
  getNested: () => solidNestedSignal(),
  getUsers: () => solidUsersSignal()
};