// Simple test to validate the fix
import { bench, describe } from 'vitest';
import {
  reduxActionsV2,
  zustandActionsV2,
  jotaiActionsV2,
  mobxActionsV2,
  valtioActionsV2,
  preactActionsV2,
  solidActionsV2,
  zenActionsV2
} from './src/stores';

describe('Test Fix', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.increment();
  });

  bench('Zustand', () => {
    zustandActionsV2.increment();
  });

  bench('Jotai', () => {
    jotaiActionsV2.increment();
  });

  bench('MobX', () => {
    mobxActionsV2.increment();
  });

  bench('Valtio', () => {
    valtioActionsV2.increment();
  });

  bench('Preact Signals', () => {
    preactActionsV2.increment();
  });

  bench('Solid Signals', () => {
    solidActionsV2.increment();
  });

  bench('Zen', () => {
    zenActionsV2.increment();
  });
});