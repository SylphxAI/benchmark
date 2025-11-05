import { signal, computed as preactComputed } from '@preact/signals';

export const preactCountSignal = signal(0);
export const preactDoubledSignal = preactComputed(() => preactCountSignal.value * 2);
export const preactNestedSignal = signal({ value: 0 });
export const preactUsersSignal = signal([]);

export const preactActions = {
  increment: () => preactCountSignal.value++,
  setNested: (value: number) => preactNestedSignal.value = { value },
  addUser: (user: any) => preactUsersSignal.value = [...preactUsersSignal.value, user],
  getDoubled: () => preactDoubledSignal.value,
  getNested: () => preactNestedSignal.value,
  getUsers: () => preactUsersSignal.value
};