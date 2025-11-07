/**
 * Router Library Benchmarks
 * Comparing performance of different React router libraries
 */

import { bench, describe } from 'vitest';
import {
  matchReactRoutes,
  matchWouterRoute,
  matchZenRoute,
  initializeZenRoutes,
} from './routers';

// Initialize Zen Router
initializeZenRoutes();

// Test paths for benchmarking
const testPaths = {
  static: '/',
  simple: '/about',
  dynamic: '/users/123',
  nested: '/users/123/posts',
  deepNested: '/users/123/posts/456',
  wildcard: '/blog/2024/01/my-post',
  optional: '/products/electronics/phones',
  optionalMissing: '/products/electronics',
};

describe('Static Route Matching', () => {
  const path = '/';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Simple Route Matching', () => {
  const path = '/about';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Dynamic Route Matching (1 param)', () => {
  const path = '/users/123';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Nested Dynamic Routes (2 params)', () => {
  const path = '/users/123/posts/456';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Wildcard Route Matching', () => {
  const path = '/blog/2024/01/my-post';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Optional Parameter Route (with param)', () => {
  const path = '/products/electronics/phones';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Optional Parameter Route (without param)', () => {
  const path = '/products/electronics';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});

describe('Mixed Route Matching (realistic usage)', () => {
  const paths = [
    '/',
    '/about',
    '/users/123',
    '/users/456/posts',
    '/users/789/posts/101',
    '/blog/some/deep/path',
    '/products/electronics/phones',
  ];

  bench('React Router', () => {
    for (const path of paths) {
      matchReactRoutes(path);
    }
  });

  bench('Wouter', () => {
    for (const path of paths) {
      matchWouterRoute(path);
    }
  });

  bench('Zen Router', () => {
    for (const path of paths) {
      matchZenRoute(path);
    }
  });
});

describe('Sequential Route Matching (worst case)', () => {
  // Test matching the last route in the list repeatedly
  const path = '/products/electronics/phones';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});
