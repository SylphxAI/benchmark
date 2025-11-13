/**
 * Yup Library Implementation
 */

import { category, tests } from '../index';

const yupLib = category.registerLibrary({
  id: 'yup',
  displayName: 'Yup',
  packageName: 'yup',
  githubUrl: 'https://github.com/jquense/yup',
  description: 'Dead simple Object schema validation',

  setup: {
    createStore: () => {
      // TODO: Initialize your library here
      return null;
    },
  },
});

yupLib.implement(tests.simpleTest, async (ctx) => {
  // TODO: Implement your test logic here
  return true;
});
