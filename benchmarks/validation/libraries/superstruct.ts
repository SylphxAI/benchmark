/**
 * Superstruct Library Implementation
 */

import { category, tests } from '../index';

const superstructLib = category.registerLibrary({
  id: 'superstruct',
  displayName: 'Superstruct',
  packageName: 'superstruct',
  githubUrl: 'git://github.com/ianstormtaylor/superstruct',
  description: 'A simple and composable way to validate data in JavaScript (and TypeScript).',

  setup: {
    createStore: () => {
      // TODO: Initialize your library here
      return null;
    },
  },
});

superstructLib.implement(tests.simpleTest, async (ctx) => {
  // TODO: Implement your test logic here
  return true;
});
