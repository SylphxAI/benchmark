# Contributing to Benchmark Framework

Welcome! This guide will help you add new benchmark categories to the framework.

## Table of Contents

- [Quick Start](#quick-start)
- [Step-by-Step Tutorial](#step-by-step-tutorial)
- [Common Pitfalls](#common-pitfalls)
- [Best Practices](#best-practices)
- [CLI Commands](#cli-commands)
- [Architecture Overview](#architecture-overview)

---

## Quick Start

Adding a new benchmark category is now fully automated with the `scaffold` command:

```bash
# Example: Create a fetch libraries benchmark
bun run benchmark scaffold fetch axios ky wretch ofetch --emoji "🌐"

# The command will:
# 1. Fetch latest versions from npm ✅
# 2. Extract metadata (description, GitHub URL) ✅
# 3. Generate all boilerplate files ✅
# 4. Install dependencies ✅
```

That's it! You'll have a complete category structure ready to implement.

---

## Step-by-Step Tutorial

### 1. Scaffold Your Category

```bash
bun run benchmark scaffold <category-id> <library1> <library2> ... [options]
```

**Options:**
- `--name <name>` - Custom display name (default: auto-generated from ID)
- `--description <desc>` - Custom description (default: auto-generated)
- `--emoji <emoji>` - Category emoji (default: 📦)

**Example:**
```bash
bun run benchmark scaffold http-clients axios ky fetch \
  --name "HTTP Client Libraries" \
  --description "Performance comparison of HTTP client libraries" \
  --emoji "🌐"
```

This creates:
```
benchmarks/http-clients/
├── package.json              # Dependencies with latest versions
├── library-metadata.json     # Library info (auto-fetched from npm)
├── index.ts                  # Category structure
└── libraries/
    ├── axios.ts              # Library implementation template
    ├── ky.ts                 # Library implementation template
    └── fetch.ts              # Library implementation template
```

### 2. Define Your Tests

Edit `benchmarks/<category>/index.ts` to define test cases:

```typescript
export const groups = {
  basic: category.createGroup({
    id: '01-basic',
    title: 'Basic Operations',
    description: 'Simple request/response patterns',
    type: 'universal',
  }),

  advanced: category.createGroup({
    id: '02-advanced',
    title: 'Advanced Features',
    description: 'Complex scenarios and edge cases',
    type: 'universal',
  }),
};

export const tests = {
  // Basic group tests
  simpleGet: groups.basic.createTest({
    name: 'Simple GET Request',
    description: 'Fetch JSON data from an endpoint',
  }),

  simplePost: groups.basic.createTest({
    name: 'Simple POST Request',
    description: 'Send JSON payload',
  }),

  // Advanced group tests
  concurrentRequests: groups.advanced.createTest({
    name: 'Concurrent Requests',
    description: 'Make 10 parallel requests',
  }),
};
```

### 3. Implement Library Tests

Edit each file in `benchmarks/<category>/libraries/`:

```typescript
// libraries/axios.ts
import axios from 'axios';
import { category, tests } from '../index';

const axiosLib = category.registerLibrary({
  id: 'axios',
  displayName: 'Axios',
  packageName: 'axios',
  githubUrl: 'https://github.com/axios/axios',
  description: 'Promise-based HTTP client',

  setup: {
    // Initialize your library instance
    createStore: () => axios.create({
      baseURL: 'https://api.example.com',
      timeout: 5000,
    }),
  },
});

// Implement test cases
axiosLib.implement(tests.simpleGet, async (ctx) => {
  const response = await ctx.store.get('/users');
  return response.data;
});

axiosLib.implement(tests.simplePost, async (ctx) => {
  const response = await ctx.store.post('/users', { name: 'John' });
  return response.data;
});

axiosLib.implement(tests.concurrentRequests, async (ctx) => {
  const requests = Array.from({ length: 10 }, () =>
    ctx.store.get('/users')
  );
  await Promise.all(requests);
});
```

### 4. Run Your Benchmarks

```bash
cd benchmarks/<category>
bun run benchmark
```

Or from the root:
```bash
bun run benchmark run <category>
```

### 5. Generate Documentation

```bash
# Measure bundle sizes
bun run benchmark measure-sizes <category>

# Generate README
bun run benchmark generate-readme <category>

# Or do both at once
bun run benchmark update-all
```

---

## Common Pitfalls

### ⚠️ Pitfall #1: Circular Dependency Error

**Error:**
```
ReferenceError: Cannot access 'category' before initialization
```

**Cause:**
Using static `import` statements at the top level causes libraries to be loaded before the category is fully initialized.

**❌ WRONG:**
```typescript
// index.ts
export const category = createCategory({...});
export const tests = {...};

// ❌ Static import at top level
import './libraries/axios';
import './libraries/ky';

// This will fail!
await category.run();
```

**✅ CORRECT:**
```typescript
// index.ts
export const category = createCategory({...});
export const tests = {...};

async function main() {
  // ✅ Dynamic imports in async function
  await import('./libraries/axios');
  await import('./libraries/ky');

  await category.run();
}

if (import.meta.main) {
  main();
}
```

**Why?** Dynamic imports ensure libraries are loaded *after* category/tests are fully defined.

---

### ⚠️ Pitfall #2: Using Unstable External Services

**Problem:** Using services like `httpbin.org` can cause flaky benchmarks due to 502 errors.

**Solutions:**
1. **Mock responses** for simple cases
2. **Local test server** for realistic scenarios
3. **Localhost endpoints** for stable benchmarks

**Example:**
```typescript
// Use a local endpoint
const API_BASE = 'http://localhost:3000';

// Or mock the response
axiosLib.implement(tests.simpleGet, async (ctx) => {
  // Mock implementation for testing
  return { success: true, data: [] };
});
```

---

### ⚠️ Pitfall #3: Not Handling Errors Properly

Some libraries throw on 4xx/5xx, others return error objects. Handle both:

```typescript
// Libraries that throw
axiosLib.implement(tests.handleError, async (ctx) => {
  try {
    await ctx.store.get('/status/404');
  } catch (error) {
    return true; // Successfully handled
  }
  return false;
});

// Libraries that return errors
fetchLib.implement(tests.handleError, async (ctx) => {
  const response = await ctx.store('/status/404');
  return !response.ok; // Return true if error handled
});
```

---

### ⚠️ Pitfall #4: Forgetting to Install Dependencies

After scaffolding, make sure dependencies are installed:

```bash
cd benchmarks/<category>
bun install
```

The scaffold command does this automatically, but if you modify `package.json`, re-run `bun install`.

---

## Best Practices

### 1. Test Naming

Use clear, descriptive names:

```typescript
// ✅ Good
tests.concurrentRequests: 'Concurrent Requests (10x)'
tests.errorHandling: 'Handle 404 Error'
tests.largePayload: 'Upload 10MB File'

// ❌ Bad
tests.test1: 'Test 1'
tests.foo: 'Foo'
tests.bar: 'Bar'
```

### 2. Group Organization

Organize tests into logical groups:

```typescript
groups.basic: 'Basic Operations'        // Simple, common use cases
groups.advanced: 'Advanced Features'    // Complex scenarios
groups.errors: 'Error Handling'         // Edge cases and errors
groups.performance: 'Performance'       // High-load scenarios
```

### 3. Store Pattern

Use `createStore()` to initialize library instances:

```typescript
setup: {
  createStore: () => {
    // Initialize once, reuse across tests
    return libraryInstance.create({
      baseURL: 'https://api.example.com',
      timeout: 5000,
    });
  },
}
```

The store is available in all tests as `ctx.store`.

### 4. Test Implementation

Keep tests focused and consistent:

```typescript
// ✅ Good - Focused, single responsibility
axiosLib.implement(tests.simpleGet, async (ctx) => {
  const response = await ctx.store.get('/users');
  return response.data;
});

// ❌ Bad - Too much logic, side effects
axiosLib.implement(tests.simpleGet, async (ctx) => {
  console.log('Starting test...');
  const response = await ctx.store.get('/users');
  console.log('Response:', response);
  const processed = processData(response.data);
  return processed;
});
```

### 5. Library Metadata

Provide complete metadata for better documentation:

```json
{
  "libraries": {
    "axios": {
      "name": "Axios",
      "displayName": "Axios",
      "npm": "axios",
      "url": "https://github.com/axios/axios",
      "description": "Promise-based HTTP client",
      "color": "#5A29E4"
    }
  }
}
```

The scaffold command auto-generates this from npm!

---

## CLI Commands

### Core Commands

```bash
# Run benchmarks for a category
bun run benchmark run <category>

# Create new category (auto-generates everything!)
bun run benchmark scaffold <category> <lib1> <lib2> ...

# Measure bundle sizes
bun run benchmark measure-sizes [category]

# Generate README files
bun run benchmark generate-readme [category]

# Check for library updates
bun run benchmark check-updates <category>

# Update sizes and READMEs
bun run benchmark update-all
```

### Examples

```bash
# Create new category
bun run benchmark scaffold fetch axios ky wretch --emoji "🌐"

# Run benchmarks
bun run benchmark run fetch

# Measure sizes for all categories
bun run benchmark measure-sizes

# Measure sizes for specific category
bun run benchmark measure-sizes fetch

# Full update (sizes + READMEs)
bun run benchmark update-all
```

---

## Architecture Overview

### Directory Structure

```
benchmarks/
├── <category>/
│   ├── package.json              # Dependencies
│   ├── library-metadata.json     # Library information
│   ├── index.ts                  # Category, groups, tests
│   └── libraries/
│       ├── <library1>.ts         # Library implementation
│       ├── <library2>.ts
│       └── ...
```

### File Responsibilities

#### `index.ts` - Category Definition
- Define category metadata (id, name, emoji)
- Create test groups
- Define test cases
- Main entry point with dynamic imports

#### `libraries/<library>.ts` - Library Implementation
- Register library with framework
- Initialize library instance in `createStore()`
- Implement all test cases

#### `library-metadata.json` - Library Information
- Display names, colors, URLs
- Used for README generation
- Auto-populated by scaffold command

#### `package.json` - Dependencies
- Library dependencies with version pins
- Auto-populated with latest versions by scaffold

---

## Test Categories

### Universal Tests
Tests that work in all environments:

```typescript
category.createGroup({
  type: 'universal',  // Runs everywhere
});
```

### Environment-Specific Tests
For browser-only or Node-only tests:

```typescript
category.createGroup({
  type: 'browser',  // Browser only
});

category.createGroup({
  type: 'node',     // Node.js only
});
```

---

## Getting Help

- **Pain Points Documentation**: See `PAIN_POINTS.md` for known issues
- **Examples**: Check existing categories (`benchmarks/state-management`, `benchmarks/router`)
- **CLI Help**: Run `bun run benchmark help`

---

## Summary

1. **Use the scaffold command** - It automates 90% of the work
2. **Watch out for circular dependencies** - Use dynamic imports in `main()`
3. **Keep tests focused** - One test = one responsibility
4. **Handle errors properly** - Different libraries have different patterns
5. **Generate docs** - Run `update-all` when done

With the new scaffold command, creating a benchmark category takes ~5 minutes instead of ~30! 🚀
