# 🎯 Benchmark Hub - Object-Reference Based Framework

## Overview

Type-safe benchmark framework using **object references instead of strings** for maximum safety and IDE support.

**Key Innovation**: Groups and Tests are objects, not strings. No more typos, full IDE autocomplete, refactor-safe!

---

## 🎨 The Problem We Solved

### Old Approach (String-based)
```typescript
❌ library.registerTest({
  group: '01-read',       // 打錯字？
  name: 'Simple Read',    // 改了這裡，忘記改其他地方？
  test: ...
});
```

**Problems:**
- ❌ No compile-time checking
- ❌ Easy to make typos
- ❌ Refactoring breaks things silently
- ❌ No IDE autocomplete
- ❌ No "Go to Definition"

### New Approach (Object-reference based)
```typescript
✅ const simpleRead = group.createTest({ name: 'Simple Read' });
✅ library.implement(simpleRead, (ctx) => {
  // Type-safe!
  // IDE autocomplete!
  // Refactor-safe!
});
```

**Benefits:**
- ✅ Compile-time type checking
- ✅ IDE autocomplete
- ✅ Go to definition
- ✅ Rename symbol = auto update everywhere
- ✅ Impossible to reference wrong test

---

## 📁 Architecture

```
project/
├── src/core/                    # Framework (can be published as package)
│   ├── types.ts                # Type definitions
│   ├── category.ts             # Category class
│   ├── group.ts                # Group class
│   ├── test.ts                 # Test class
│   ├── library.ts              # Library class
│   ├── runner.ts               # Benchmark runner
│   └── index.ts                # Exports
│
└── benchmarks/
    ├── state-management/        # Independent category
    │   ├── package.json        # Own dependencies (jotai, zustand, ...)
    │   ├── node_modules/       # Own node_modules
    │   ├── index.ts            # Category definition
    │   └── libraries/
    │       ├── jotai.ts        # Library + all tests
    │       └── zustand.ts
    │
    └── immutability/            # Independent category
        ├── package.json        # Own dependencies (immer, mutative, ...)
        └── ...
```

**Key Principle**: Each category is independent with its own dependencies!

---

## 🚀 API

### Step 1: Create Category + Groups + Tests

```typescript
// benchmarks/state-management/index.ts
import { createCategory } from '../../src/core';

// 1. Create category
export const category = createCategory({
  id: 'state-management',
  name: 'State Management',
  description: '...',
  emoji: '🗃️',
});

// 2. Create groups (returns object references!)
export const groups = {
  read: category.createGroup({
    id: '01-read',
    title: 'Read Operations',
    type: 'universal',
  }),

  write: category.createGroup({
    id: '02-write',
    title: 'Write Operations',
    type: 'universal',
  }),
};

// 3. Create tests (returns object references!)
export const tests = {
  simpleRead: groups.read.createTest({
    name: 'Simple Read',
    description: 'Read a single counter value',
  }),

  simpleIncrement: groups.write.createTest({
    name: 'Simple Increment',
    description: 'Increment counter once',
  }),
};
```

### Step 2: Register Library + Implement Tests

```typescript
// benchmarks/state-management/libraries/jotai.ts
import { atom, createStore } from 'jotai';
import { category, tests } from '../index';

interface JotaiStore {
  store: ReturnType<typeof createStore>;
  counterAtom: ReturnType<typeof atom<number>>;
}

// Register library
const jotai = category.registerLibrary<JotaiStore>({
  id: 'jotai',
  displayName: 'Jotai',
  packageName: 'jotai',
  githubUrl: 'https://github.com/pmndrs/jotai',

  setup: {
    createStore: () => {
      const store = createStore();
      const counterAtom = atom(0);
      return { store, counterAtom };
    },
  },
});

// Implement tests using object references!
jotai.implement(tests.simpleRead, (ctx) => {
  //             ↑ Object reference, not string!
  //             ↑ IDE autocomplete works!
  //             ↑ Ctrl+Click to jump to definition!
  const { store, counterAtom } = ctx.store;
  const value = store.get(counterAtom);
});

jotai.implement(tests.simpleIncrement, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (v) => v + 1);
});
```

### Step 3: Run Benchmarks

```typescript
// benchmarks/state-management/index.ts
async function main() {
  // Import libraries (they register themselves)
  await import('./libraries/jotai');
  await import('./libraries/zustand');

  // Print summary
  category.printSummary();

  // Validate
  const validation = category.validate();
  if (!validation.valid) {
    console.error('Validation failed:', validation.errors);
    process.exit(1);
  }

  // Run benchmarks
  const results = await category.run();
  console.log('Benchmarks completed!');
}
```

```bash
cd benchmarks/state-management
bun install
bun run index.ts
```

---

## ✅ Benefits of Object References

### 1. IDE Autocomplete
```typescript
library.implement(tests.|)  // Press Ctrl+Space
                      ↑
              Shows all available tests:
              - tests.simpleRead
              - tests.simpleIncrement
              - tests.burstUpdates
              - ...
```

### 2. Go to Definition
```typescript
library.implement(tests.simpleRead, ...)
                        ↑
                  Ctrl+Click jumps to:

const simpleRead = groups.read.createTest({
  name: 'Simple Read',
  description: '...'
});
```

### 3. Refactor Safe
```typescript
// Rename symbol: simpleRead → basicRead
// ✅ All references auto-update
// ✅ No broken strings
// ✅ Compile-time verification
```

### 4. Type Safety
```typescript
// Wrong category's test
const otherTest = otherCategory.tests.someTest;
library.implement(otherTest, ...);
// ❌ Compile Error! Test from different category!
```

### 5. Impossible to Typo
```typescript
// String-based (OLD)
registerTest({ group: '01-raed', name: '...' })  // ❌ Typo!

// Object-based (NEW)
library.implement(tests.simpleRead, ...)  // ✅ Impossible to typo!
```

---

## 📊 Comparison

### Adding a New Test

**Before (String-based):**
```typescript
// In groups-config.json
{
  "01-read": {
    "benchmarks": [
      { "name": "New Test" }  // Add here
    ]
  }
}

// In library file
registerTest({
  group: '01-read',     // ❌ Must type exact string
  name: 'New Test',     // ❌ Must match exactly
  test: ...
});
```

**After (Object-based):**
```typescript
// In index.ts
export const tests = {
  newTest: groups.read.createTest({ name: 'New Test' })
  //       ↑ Object created once
};

// In library file
library.implement(tests.newTest, ...)
//                      ↑ IDE autocomplete!
```

---

## 🎓 Usage Guide

### For Category Authors

1. **Create category package**:
```bash
mkdir benchmarks/my-category
cd benchmarks/my-category
bun init -y
```

2. **Install framework** (once published):
```bash
bun add @benchmark-hub/core
```

3. **Define category**:
```typescript
// index.ts
import { createCategory } from '@benchmark-hub/core';

export const category = createCategory({ ... });
export const groups = { ... };
export const tests = { ... };
```

4. **Add libraries**:
```typescript
// libraries/my-lib.ts
import { category, tests } from '../index';

const lib = category.registerLibrary({ ... });
lib.implement(tests.someTest, ...);
```

5. **Run**:
```bash
bun run index.ts
```

### For Library Implementers

Just create ONE file per library:

```typescript
// libraries/new-library.ts
import { category, tests } from '../index';

const lib = category.registerLibrary({
  id: 'new-library',
  displayName: 'New Library',
  packageName: 'new-library',
  githubUrl: '...',
  setup: {
    createStore: () => { /* ... */ }
  }
});

// Implement all tests
lib.implement(tests.test1, ...);
lib.implement(tests.test2, ...);
lib.implement(tests.test3, ...);
```

Done! Framework handles everything else.

---

## 🏗️ Architecture Principles

1. **Framework = Tool**: Core provides API, not implementations
2. **Categories = Independent**: Each has own dependencies
3. **Objects > Strings**: Type-safe references everywhere
4. **One File per Library**: Registration + all tests together
5. **Validation**: Runtime checks ensure consistency

---

## 📦 Publishing Framework

Once stable, publish core as npm package:

```json
{
  "name": "@benchmark-hub/core",
  "version": "1.0.0",
  "exports": {
    ".": "./src/core/index.ts"
  }
}
```

Then categories use it:
```typescript
import { createCategory } from '@benchmark-hub/core';
```

---

## 🎉 Summary

**Old Way**: Strings everywhere, no type safety, easy to break

**New Way**: Object references, full type safety, impossible to break

**Result**:
- ✅ IDE autocomplete
- ✅ Go to definition
- ✅ Rename symbol
- ✅ Compile-time checking
- ✅ Refactor-safe
- ✅ No typos possible

**Developer Experience: 10/10** 🚀
