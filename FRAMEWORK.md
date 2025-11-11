# 🎯 Benchmark Hub - Unified Framework

## Overview

A type-safe, centralized benchmark framework that simplifies adding libraries and tests.

**Key Innovation**: Register everything from root `src/` directory - no need to navigate multiple folders or edit JSON files.

---

## 🎨 The Problem We Solved

### Before (Old Approach)

Adding a new library required:
1. Edit `benchmarks/{category}/library-metadata.json` - add metadata
2. Edit `benchmarks/{category}/features.json` - add feature support
3. Edit `benchmarks/{category}/groups-config.json` - update groups
4. Create `benchmarks/{category}/groups/{group}/benchmark.bench.ts` - write tests
5. Repeat for every group
6. Run benchmarks from category directory
7. Hope everything is consistent

**Problems:**
- ❌ Scattered across 4+ files and multiple folders
- ❌ No type safety
- ❌ Easy to miss updates
- ❌ Duplicated setup code
- ❌ Hard to maintain

### After (New Approach)

Adding a new library:
1. Create ONE file: `src/libraries/{library}.ts`
2. Register library
3. Register tests
4. Done ✅

**Benefits:**
- ✅ Single source of truth
- ✅ Full TypeScript type safety
- ✅ Centralized in root `src/`
- ✅ Shared setup code
- ✅ Auto-validated

---

## 📁 New Structure

```
src/
├── core/                       # Framework core
│   ├── types.ts               # All type definitions
│   ├── registry.ts            # Central registration system
│   ├── benchmark.ts           # Benchmark runner
│   └── index.ts               # Core exports
│
├── categories/                 # Category definitions
│   ├── state-management.ts    # Category config + groups
│   ├── immutability.ts
│   ├── router.ts
│   └── css-frameworks.ts
│
├── libraries/                  # Library registrations + tests
│   ├── jotai.ts               # Jotai: register + all tests
│   ├── zustand.ts             # Zustand: register + all tests
│   ├── mobx.ts
│   └── ...
│
├── index.ts                    # Main entry point
└── cli.ts                      # CLI tool
```

**Key Principle**: Each library = ONE file containing:
- Library registration
- All its tests
- Shared setup/cleanup code

---

## 🚀 API

### 1. Register Category

Define category with groups and features:

```typescript
// src/categories/state-management.ts
import { registerCategory } from '@core/registry';

registerCategory({
  id: 'state-management',
  name: 'State Management',
  emoji: '🗃️',

  groups: [
    {
      id: '01-read',
      title: 'Read Operations',
      type: 'universal',
      benchmarks: [
        { name: 'Simple Read', pattern: 'Simple Read', description: '...' }
      ]
    }
  ],

  performanceTiers: [ /* ... */ ],
  features: { /* ... */ }
});
```

### 2. Register Library + Tests

One file per library:

```typescript
// src/libraries/jotai.ts
import { registerLibrary, registerTest } from '@core/registry';
import { atom, createStore } from 'jotai';

// 1. Register the library
registerLibrary({
  category: 'state-management',
  id: 'jotai',
  displayName: 'Jotai',
  packageName: 'jotai',
  githubUrl: 'https://github.com/pmndrs/jotai',

  setup: {
    createStore: () => {
      const store = createStore();
      const counterAtom = atom(0);
      return { store, counterAtom };
    }
  }
});

// 2. Register all tests for this library
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'Simple Read',
  test: (ctx) => {
    const value = ctx.store.store.get(ctx.store.counterAtom);
  }
});

registerTest({
  category: 'state-management',
  group: '02-write',
  name: 'Simple Increment',
  test: (ctx) => {
    ctx.store.store.set(ctx.store.counterAtom, (v) => v + 1);
  }
});
```

### 3. Run Benchmarks

```bash
# List all registered items
bun run src/cli.ts --list

# Validate registry
bun run src/cli.ts --validate

# Run all benchmarks
bun run src/cli.ts

# Run specific category
bun run src/cli.ts --category state-management

# Run specific group
bun run src/cli.ts --category state-management --group 01-read

# Run specific library
bun run src/cli.ts --category state-management --library jotai
```

---

## 🎯 Key Features

### 1. Type Safety

Full TypeScript support with type inference:

```typescript
interface JotaiStore {
  store: ReturnType<typeof createStore>;
  counterAtom: ReturnType<typeof atom<number>>;
}

registerLibrary<JotaiStore>({ /* ... */ });

registerTest({
  test: (ctx: TestContext<JotaiStore>) => {
    // ctx.store is fully typed!
    ctx.store.store.get(ctx.store.counterAtom);
  }
});
```

### 2. Centralized Registry

Single source of truth:
- Categories → Defines structure
- Libraries → Implementation
- Tests → Benchmarks

All validated at runtime!

### 3. Simple API

Only 3 functions needed:
- `registerCategory()` - Define category
- `registerLibrary()` - Add library
- `registerTest()` - Add test

### 4. Flexible

Easy to:
- Add new library → Create one file
- Add new test → Call `registerTest()`
- Add new category → Create category file
- Remove library → Delete one file

---

## 📊 Comparison

### Adding a Library

**Old Way:**
```
1. cd benchmarks/state-management/
2. Edit library-metadata.json
3. Edit features.json
4. Edit groups-config.json
5. cd groups/01-read/
6. Create benchmark.bench.ts
7. cd ../02-write/
8. Create benchmark.bench.ts
9. cd ../03-creation/
10. Create benchmark.bench.ts
... (repeat for 15 groups)
```

**New Way:**
```
1. Create src/libraries/mobx.ts
2. Add registerLibrary() + registerTest() calls
3. Done ✅
```

### Code Comparison

**Old Way (Scattered):**
```
benchmarks/state-management/
├── library-metadata.json         ← Edit here
├── features.json                 ← Edit here
├── groups-config.json            ← Edit here
└── groups/
    ├── 01-read/
    │   └── benchmark.bench.ts    ← Duplicate setup
    ├── 02-write/
    │   └── benchmark.bench.ts    ← Duplicate setup
    └── 03-creation/
        └── benchmark.bench.ts    ← Duplicate setup
```

**New Way (Centralized):**
```typescript
// src/libraries/mobx.ts
registerLibrary({ /* once */ });
registerTest({ /* test 1 */ });
registerTest({ /* test 2 */ });
registerTest({ /* test 3 */ });
// All in one file ✅
```

---

## 🛠️ Development Workflow

### Adding a New Library

1. Create `src/libraries/{name}.ts`:

```typescript
import { registerLibrary, registerTest } from '@core/registry';

registerLibrary({
  category: 'state-management',
  id: 'new-lib',
  displayName: 'New Lib',
  packageName: 'new-lib',
  githubUrl: 'https://github.com/...',

  setup: {
    createStore: () => {
      // Initialize library
      return storeInstance;
    }
  }
});

// Register all tests
registerTest({ /* ... */ });
registerTest({ /* ... */ });
```

2. Import in `src/index.ts`:

```typescript
import './libraries/new-lib';
```

3. Test:

```bash
bun run src/cli.ts --validate
bun run src/cli.ts --library new-lib
```

### Adding a New Test

Just add `registerTest()` call in library file:

```typescript
// src/libraries/existing-lib.ts
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'New Test Pattern',
  test: (ctx) => {
    // Test implementation
  }
});
```

---

## 🎓 Migration Guide

To migrate existing benchmarks:

1. **Category**: Copy groups from `groups-config.json` to `src/categories/{category}.ts`
2. **Libraries**: For each library:
   - Create `src/libraries/{library}.ts`
   - Copy metadata from `library-metadata.json`
   - Convert tests from `groups/*/benchmark.bench.ts` to `registerTest()` calls
3. **Import**: Add imports to `src/index.ts`

---

## 📦 Tech Stack

- **Runtime**: Bun (fast JavaScript runtime)
- **Language**: TypeScript (type safety)
- **Linter/Formatter**: Biome (fast, modern)
- **Benchmarking**: Vitest (benchmark runner)

---

## ✅ Current Status

**Implemented:**
- ✅ Core framework (types, registry, runner)
- ✅ CLI tool
- ✅ Example category (state-management)
- ✅ Example libraries (jotai, zustand)
- ✅ Full type safety
- ✅ Validation system
- ✅ Documentation

**Next Steps:**
- [ ] Migrate all state-management libraries
- [ ] Migrate immutability category
- [ ] Migrate router category
- [ ] Migrate css-frameworks category
- [ ] Add result export functionality
- [ ] Add README generation from results

---

## 🎉 Summary

**Before**: Scattered files, manual JSON editing, no type safety, hard to maintain

**After**: Centralized registry, type-safe API, single file per library, easy to extend

**Result**: Adding a library went from 15+ file edits to ONE file creation! 🚀
