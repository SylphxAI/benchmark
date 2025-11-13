/**
 * Joi Library Implementation
 */

import { category, tests } from '../index';

const joiLib = category.registerLibrary({
  id: 'joi',
  displayName: 'Joi',
  packageName: 'joi',
  githubUrl: 'git://github.com/hapijs/joi',
  description: 'Object schema validation',

  setup: {
    createStore: () => {
      // TODO: Initialize your library here
      return null;
    },
  },
});

joiLib.implement(tests.simpleTest, async (ctx) => {
  // TODO: Implement your test logic here
  return true;
});
