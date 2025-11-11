# Benchmark Hub - Unified Framework

A type-safe, centralized benchmark framework for JavaScript/TypeScript libraries.

## 🎯 Key Features

- **Single Source of Truth**: Register categories, libraries, and tests in one place (root `/src`)
- **Type-Safe**: Full TypeScript support with type inference
- **Simple API**: Just 3 functions - `registerCategory`, `registerLibrary`, `registerTest`
- **Flexible**: Add new tests/libraries without touching multiple files
- **Modern Stack**: Bun + TypeScript + Biome

---

## 📁 Project Structure

```
src/
├── core/                    # Framework core
│   ├── types.ts            # Type definitions
│   ├── registry.ts         # Registration system
│   ├── benchmark.ts        # Benchmark runner
│   └── index.ts            # Core exports
├── categories/              # Category definitions
│   ├── state-management.ts
│   ├── immutability.ts
│   └── ...
├── libraries/               # Library registrations & tests
│   ├── jotai.ts            # Jotai registration + tests
│   ├── zustand.ts          # Zustand registration + tests
│   └── ...
├── index.ts                 # Main entry point
└── cli.ts                   # CLI tool
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
bun install
```

### 2. Register a Category

```typescript
// src/categories/state-management.ts
import { registerCategory } from '@core/registry';

registerCategory({
  id: 'state-management',
  name: 'State Management',
  description: 'React state management libraries',
  emoji: '🗃️',

  performanceTiers: [
    { name: 'Tier S', threshold: 2000000, description: 'Exceptional' },
    { name: 'Tier A', threshold: 1000000, description: 'Very fast' },
  ],

  groups: [
    {
      id: '01-read',
      title: 'Read Operations',
      description: 'Simple read patterns',
      type: 'universal',
      benchmarks: [
        { name: 'Simple Read', pattern: 'Simple Read', description: 'Single value access' },
      ],
    },
  ],
});
```

### 3. Register a Library + Tests

```typescript
// src/libraries/jotai.ts
import { registerLibrary, registerTest } from '@core/registry';
import { atom, createStore } from 'jotai';

// Register library
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
    },
  },
});

// Register test
registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'Simple Read',

  test: (ctx) => {
    const { store, counterAtom } = ctx.store;
    const value = store.get(counterAtom);
  },
});
```

### 4. Run Benchmarks

```bash
# Run all benchmarks
bun run src/cli.ts

# Run specific category
bun run src/cli.ts --category state-management

# Run specific group
bun run src/cli.ts --category state-management --group 01-read

# List all registrations
bun run src/cli.ts --list

# Validate registry
bun run src/cli.ts --validate
```

---

## 📚 API Reference

### `registerCategory(config)`

Register a benchmark category with its groups and configuration.

```typescript
registerCategory({
  id: string;                    // Unique identifier
  name: string;                  // Display name
  description: string;           // Category description
  emoji?: string;                // Emoji for display
  performanceTiers: Array<{      // Performance tier thresholds
    name: string;
    threshold: number;
    description: string;
  }>;
  groups: Array<{                // Benchmark groups
    id: string;
    title: string;
    description: string;
    type: 'universal' | 'feature-specific';
    benchmarks: Array<{
      name: string;
      pattern: string;
      description: string;
    }>;
  }>;
  features?: {                   // Optional feature matrix
    [featureId: string]: {
      id: string;
      name: string;
      description: string;
      supported: string[];       // Library IDs
    };
  };
});
```

### `registerLibrary(registration)`

Register a library with its setup functions.

```typescript
registerLibrary({
  category: string;              // Category ID
  id: string;                    // Unique library ID
  displayName: string;           // Display name
  packageName: string;           // npm package name
  githubUrl: string;             // GitHub repository URL
  description?: string;          // Optional description

  setup: {
    createStore: () => TStore;   // Create store instance
    cleanup?: (store: TStore) => void;  // Optional cleanup
    init?: () => void;           // Optional initialization
  };

  features?: string[];           // Feature IDs supported
});
```

### `registerTest(registration)`

Register a test for a specific group.

```typescript
registerTest({
  category: string;              // Category ID
  group: string;                 // Group ID
  name: string;                  // Test name (must match benchmark definition)
  description?: string;          // Optional description

  test: (ctx: TestContext<TStore>) => void;  // Test function
});

// TestContext provides:
interface TestContext<TStore> {
  library: LibraryMetadata;      // Library info
  store: TStore;                 // Store instance
  cleanup?: () => void;          // Optional cleanup
}
```

---

## 🎨 Benefits Over Old Structure

### Before (Old Structure)

```
benchmarks/state-management/
├── groups/
│   ├── 01-read/
│   │   └── benchmark.bench.ts    ❌ Scattered test files
│   ├── 02-write/
│   │   └── benchmark.bench.ts    ❌ Duplicate setup code
│   └── ...
├── category-config.json          ❌ Manual JSON editing
├── groups-config.json            ❌ Manual JSON editing
├── library-metadata.json         ❌ Manual JSON editing
└── features.json                 ❌ Manual JSON editing
```

**Problems:**
- ❌ Adding a library requires editing 4+ JSON files
- ❌ Tests scattered across multiple folders
- ❌ Duplicate setup code in every test file
- ❌ No type safety
- ❌ Hard to maintain consistency

### After (New Structure)

```typescript
// src/libraries/jotai.ts
registerLibrary({ ... });         // ✅ One registration
registerTest({ ... });            // ✅ All tests here
registerTest({ ... });            // ✅ Type-safe
```

**Benefits:**
- ✅ Single file per library (registration + tests)
- ✅ Type-safe with full TypeScript support
- ✅ No manual JSON editing
- ✅ Share setup code across tests
- ✅ Easy to add/remove libraries
- ✅ Auto-validated registry

---

## 🔧 Development

```bash
# Lint code
bun run lint

# Format code
bun run format

# Type check
bun run typecheck

# Update dependencies
bun run update
```

---

## 📝 Adding a New Library

1. Create file `src/libraries/{library-name}.ts`
2. Register library with `registerLibrary()`
3. Register tests with `registerTest()`
4. Done! Framework handles the rest.

**Example:**

```typescript
// src/libraries/mobx.ts
import { makeAutoObservable } from 'mobx';
import { registerLibrary, registerTest } from '@core/registry';

registerLibrary({
  category: 'state-management',
  id: 'mobx',
  displayName: 'MobX',
  packageName: 'mobx',
  githubUrl: 'https://github.com/mobxjs/mobx',

  setup: {
    createStore: () => {
      return makeAutoObservable({ counter: 0 });
    },
  },
});

registerTest({
  category: 'state-management',
  group: '01-read',
  name: 'Simple Read',
  test: (ctx) => {
    const value = ctx.store.counter;
  },
});
```

That's it! No need to touch any other files.

---

## 🏗️ Architecture

The framework uses a **registry pattern** with three main components:

1. **Registry** (`src/core/registry.ts`)
   - Centralized storage for all registrations
   - Validates relationships between categories/libraries/tests
   - Provides query API for runners

2. **Benchmark Runner** (`src/core/benchmark.ts`)
   - Executes tests against libraries
   - Collects performance metrics
   - Generates reports

3. **Type System** (`src/core/types.ts`)
   - Defines all interfaces
   - Ensures type safety
   - Provides autocomplete

---

## 🎯 Next Steps

- [ ] Add remaining state-management libraries
- [ ] Migrate immutability category
- [ ] Migrate router category
- [ ] Migrate css-frameworks category
- [ ] Add result export functionality
- [ ] Add README generation from results
- [ ] Add CI/CD integration

---

## 📖 Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Biome Documentation](https://biomejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
