<div align="center">

# 🏆 JavaScript Library Benchmarks

### *Fully automated, config-driven performance benchmarks for JavaScript libraries*

[![Automated Daily](https://img.shields.io/badge/Automated-Daily-brightgreen?style=for-the-badge)](https://github.com/sylphxltd/benchmark/actions)
[![Node.js](https://img.shields.io/badge/Node.js-25+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vitest](https://img.shields.io/badge/Vitest-Bench-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📊 Benchmark Categories

| Category | Description | Libraries | Status | View Results |
|----------|-------------|-----------|--------|--------------|
| **[🗃️ State Management](./benchmarks/state-management/)** | React state management libraries | 8 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/state-management/)** |
| **[🔄 Immutability](./benchmarks/immutability/)** | Immutability helper libraries | 6 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/immutability/)** |
| **[🧭 Router](./benchmarks/router/)** | React routing libraries | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/router/)** |
| **[🎨 CSS Frameworks](./benchmarks/css-frameworks/)** | CSS-in-JS and utility-first CSS frameworks | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/css-frameworks/)** |

Each category has its own detailed README with benchmark results, methodology, and insights.

---

## 🏗️ Architecture: Zero-Hardcode, Config-Driven Design

This project uses a **fully config-driven architecture** with **zero hardcoded values**. Everything is defined in JSON configuration files, making it infinitely scalable.

### Core Principles

✅ **Zero Hardcode**: No test names, library names, or benchmark patterns in code
✅ **Auto-Discovery**: Automatically finds test groups and results
✅ **Infinite Scale**: Add unlimited libraries, tests, or categories without code changes
✅ **Type Flexibility**: Support both universal tests (all libraries) and feature tests (subset)
✅ **Number Flexibility**: Test numbers can be non-sequential (01, 03, 07, 12)

---

## 📁 Project Structure

```
benchmark-state/
├── benchmarks/
│   ├── state-management/          ← Category folder
│   │   ├── category-config.json   ← Category metadata
│   │   ├── groups-config.json     ← Test group definitions
│   │   ├── library-metadata.json  ← Library info + tradeoffs
│   │   ├── features.json          ← Feature support matrix
│   │   ├── versions.json          ← Current versions & sizes
│   │   ├── overall-scores.json    ← Performance scores
│   │   ├── generate-readme.js     ← Universal generator
│   │   ├── ARCHITECTURE.md        ← Detailed docs
│   │   └── groups/                ← Auto-discovered
│   │       ├── 01-read/
│   │       │   ├── *.bench.ts     ← Benchmark files
│   │       │   └── results.json   ← Auto-generated
│   │       ├── 02-write/
│   │       └── ...
│   ├── immutability/
│   ├── router/
│   └── css-frameworks/
└── scripts/
```

---

## ⚙️ Configuration Files

### 1️⃣ `category-config.json` - Category Metadata
Defines category name, description, performance tiers, environment settings.

```json
{
  "name": "State Management",
  "description": "Comprehensive performance benchmarks...",
  "performanceTiers": [
    {
      "name": "Signal-based (Tier S)",
      "threshold": 2000000,
      "description": "Exceptional performance"
    }
  ],
  "environment": {
    "runtime": "Node.js v25.0.0",
    "framework": "Vitest Bench"
  }
}
```

**When to update:**
- Change category name or description
- Modify performance tier classification
- Update environment (Node.js version)

---

### 2️⃣ `groups-config.json` - Test Group Definitions
Defines all test groups and their benchmarks.

```json
{
  "groups": {
    "01-read": {
      "title": "Read Operations",
      "description": "Simple read and high-frequency read patterns",
      "type": "universal",
      "benchmarks": [
        {
          "name": "Simple Read",
          "pattern": "Simple Read -",
          "description": "single value access"
        }
      ]
    },
    "08-async-reactive": {
      "title": "Reactive Async",
      "type": "feature",
      "libraries": ["Jotai"],
      "benchmarks": [...]
    }
  }
}
```

**When to update:**
- Add new test group
- Add new benchmark to existing group
- Mark test as incomplete
- Change test to universal/feature type

---

### 3️⃣ `library-metadata.json` - Library Information
Library names, URLs, colors, tradeoffs.

```json
{
  "libraries": {
    "jotai": {
      "name": "Jotai",
      "displayName": "Jotai",
      "description": "Primitive and flexible state management",
      "url": "https://github.com/pmndrs/jotai",
      "npm": "jotai",
      "color": "#000000",
      "tradeoff": "Very fast read/write, slower creation"
    }
  }
}
```

**When to update:**
- Add new library to benchmark
- Update library descriptions
- Define performance tradeoffs

---

### 4️⃣ `features.json` - Feature Support Matrix
Which libraries support which features.

```json
{
  "features": {
    "computed-native": {
      "name": "Native Computed Values",
      "description": "Automatic dependency tracking...",
      "supported": ["jotai", "mobx", "solid-js", "@preact/signals"]
    }
  }
}
```

**When to update:**
- Add new feature category
- Update library feature support
- Auto-generates feature matrix table

---

### 5️⃣ `versions.json` - Library Versions & Sizes
Current versions and bundle sizes.

```json
{
  "libraries": {
    "jotai": {
      "version": "2.15.1",
      "size": {
        "gzip": 4397,
        "brotli": 3924
      }
    }
  }
}
```

**When to update:**
- After library version updates
- Track bundle size changes

---

### 6️⃣ `overall-scores.json` - Performance Scores
Calculated scores from benchmark runs.

```json
{
  "includedTests": ["Read", "Write", "Creation", "Memory"],
  "scores": [
    {
      "library": "Solid Signals",
      "read": 39913249.37,
      "write": 33108765.67,
      "overall": 2502107.93
    }
  ]
}
```

**When to update:**
- After running benchmarks
- Auto-generated by calculation script

---

## 🚀 Adding New Components

### ➕ Add a New Library

**Steps:**

1. **Update `library-metadata.json`:**
```json
"new-lib": {
  "name": "New Lib",
  "displayName": "New Lib",
  "description": "Fast state management",
  "url": "https://github.com/example/new-lib",
  "npm": "new-lib",
  "color": "#FF5733",
  "tradeoff": "Fast but large bundle"
}
```

2. **Update `features.json`** (add to supported arrays):
```json
"computed-native": {
  "supported": [...existing, "new-lib"]
}
```

3. **Update `versions.json`:**
```json
"new-lib": {
  "version": "1.0.0",
  "size": { "gzip": 5000, "brotli": 4500 }
}
```

4. **Create benchmark implementations** in `groups/*/`

5. **Run benchmarks:**
```bash
npm run benchmark
```

6. **Update scores:**
```bash
node calculate-scores.js  # If exists
```

7. **Generate README:**
```bash
node generate-readme.js
```

**✅ Zero generator code changes needed!**

---

### ➕ Add a New Test Group

**Steps:**

1. **Update `groups-config.json`:**
```json
"12-new-test": {
  "title": "New Test Category",
  "description": "Tests something new",
  "type": "universal",  // or "feature"
  "benchmarks": [
    {
      "name": "New Benchmark",
      "pattern": "New Benchmark -",
      "description": "specific use case"
    }
  ]
}
```

2. **Create directory:**
```bash
mkdir -p groups/12-new-test
```

3. **Create benchmark files:**
```typescript
// groups/12-new-test/new.bench.ts
import { describe, bench } from 'vitest';

describe('New Benchmark', () => {
  bench('New Benchmark - Jotai', () => {
    // test implementation
  });
});
```

4. **Run benchmarks:**
```bash
npx vitest bench --run groups/12-new-test/*.bench.ts --outputJson=groups/12-new-test/results.json
```

5. **Generate README:**
```bash
node generate-readme.js
```

**Generator automatically:**
- ✅ Discovers new group from filesystem
- ✅ Reads configuration
- ✅ Generates README section
- ✅ Updates test category lists (01, 02, ..., 12)

---

### ➕ Add a New Benchmark to Existing Group

**Steps:**

1. **Update `groups-config.json`:**
```json
"01-read": {
  "benchmarks": [
    ...existing,
    {
      "name": "New Read Pattern",
      "pattern": "New Read Pattern -",
      "description": "specific use case"
    }
  ]
}
```

2. **Create benchmark file:**
```typescript
// groups/01-read/new-pattern.bench.ts
describe('New Read Pattern', () => {
  bench('New Read Pattern - Jotai', () => { ... });
  bench('New Read Pattern - Zustand', () => { ... });
});
```

3. **Run benchmarks:**
```bash
npm run benchmark:read
```

4. **Generate README:**
```bash
node generate-readme.js
```

**Generator automatically:**
- ✅ Extracts new benchmark from results.json
- ✅ Generates chart and table
- ✅ Adds to detailed results section

---

### ➕ Add a New Feature

**Steps:**

1. **Add to `features.json`:**
```json
"new-feature": {
  "name": "New Feature",
  "description": "Does something cool",
  "supported": ["lib1", "lib2"]
}
```

2. **Add to `groups-config.json`:**
```json
"13-new-feature": {
  "title": "New Feature",
  "type": "feature",
  "libraries": ["Lib1", "Lib2"],
  "benchmarks": [...]
}
```

3. **Implement feature tests** in `groups/13-new-feature/`

4. **Run benchmarks and generate README**

---

### ➕ Add a New Category

**Steps:**

1. **Copy category structure:**
```bash
cp -r benchmarks/state-management benchmarks/new-category
cd benchmarks/new-category
```

2. **Update config files:**
```bash
# Edit category-config.json → change name, description
# Edit groups-config.json → define test groups for this category
# Edit library-metadata.json → libraries in this category
# Edit features.json → features specific to category
```

3. **Implement benchmarks:**
```bash
# Create benchmark files in groups/*/
```

4. **Use same generator:**
```bash
node generate-readme.js  # Works for any category!
```

5. **Update root README table** (this file)

---

## 🎯 Scalability Guarantees

### Current Scale
- ✅ 4 categories
- ✅ 8 libraries per category
- ✅ 11 test groups per category
- ✅ ~30 benchmarks per category

### Designed To Support
- ✅ **Unlimited categories**
- ✅ **Unlimited libraries** per category
- ✅ **Unlimited test groups**
- ✅ **Unlimited benchmarks** per group
- ✅ **Non-sequential test numbers** (01, 03, 07, 12)
- ✅ **Mixed test types** (universal + feature)

### Examples

**Add 100 libraries?**
1. Add 100 entries to `library-metadata.json`
2. Update `features.json` and `versions.json`
3. Implement benchmark files
4. Run: `node generate-readme.js`
5. **Zero generator code changes**

**Add 50 test groups?**
1. Add 50 entries to `groups-config.json`
2. Create 50 `groups/XX-name/` directories
3. Implement benchmark files
4. Run: `node generate-readme.js`
5. **Zero generator code changes**

**Tests numbered 01, 05, 12, 23?**
- ✅ Generator displays: `Universal Tests (01, 05, 12, 23)`
- ✅ No assumption of continuity
- ✅ Each category can use different numbering

---

## 🔄 Automation & Workflow

### Daily Automated Runs
```yaml
# .github/workflows/benchmark.yml
- Runs daily at midnight UTC
- Detects library updates
- Runs affected benchmarks
- Auto-commits results
- Updates README files
```

### Manual Run Workflow
```bash
# 1. Update dependencies (optional)
npm update

# 2. Run benchmarks
cd benchmarks/state-management
npm run benchmark

# 3. Calculate scores (if script exists)
node calculate-scores.js

# 4. Generate README
node generate-readme.js

# 5. Commit changes
git add .
git commit -m "chore: update benchmark results"
git push
```

---

## 🧪 Generator Behavior

The `generate-readme.js` script:

1. **Loads all config files** (category, groups, libraries, features, versions, scores)
2. **Auto-discovers groups** from `groups/*/` directories
3. **Extracts benchmark results** from `groups/*/results.json`
4. **Generates complete README** with:
   - Dynamic header from category config
   - Dynamic library count (from metadata file)
   - Dynamic test lists (01, 02, 03, ...)
   - Config-driven performance tiers
   - Auto-generated feature matrix
   - Dynamic compliance section

### Key Features

✅ **No hardcoded values** anywhere
✅ **Discovers tests automatically** from filesystem
✅ **Handles missing data gracefully** (shows warnings)
✅ **Supports any test numbering** (sequential or not)
✅ **Works for any category** (same generator)
✅ **Zero maintenance** for new additions

---

## 📖 Documentation

Each category has detailed documentation:

- **`README.md`** - Generated benchmark results and insights
- **`ARCHITECTURE.md`** - Detailed architecture guide for that category
- **Config files** - Self-documenting JSON with clear structure

---

## 🔬 Methodology

### Universal Tests
- **All libraries participate** equally
- Used to calculate **Overall Performance Score**
- Tests use **actual library APIs**, not synthetic constructs
- Results normalized via **geometric mean**

### Feature Tests
- **Only libraries with native support** participate
- Tests measure **real-world usage patterns**
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment
- **Runtime**: Node.js v25.0.0
- **Framework**: Vitest Bench
- **Hardware**: System-dependent
- **Iterations**: Auto-determined by Vitest for statistical significance

---

## 🤝 Contributing

### Adding a Library
See detailed steps in [Adding New Components](#-adding-new-components) above.

### Adding a Test
See detailed steps in [Adding New Components](#-adding-new-components) above.

### Adding a Category
See detailed steps in [Adding New Components](#-adding-new-components) above.

### Submitting PRs
1. Follow existing config file structure
2. Run benchmarks locally first
3. Ensure README generates without errors
4. Include benchmark results in PR
5. Update root README table if adding category

---

## 🛠️ Maintenance

### Regular Updates
- **Versions**: Update `versions.json` when libraries update
- **Scores**: Update `overall-scores.json` after benchmark runs
- **Results**: `groups/*/results.json` auto-generated by Vitest

### No Code Changes Needed For
- ✅ Adding/removing libraries
- ✅ Adding/removing tests
- ✅ Changing feature support
- ✅ Updating descriptions
- ✅ Modifying performance tiers
- ✅ Environment updates

### Code Changes Only Needed For
- ❌ New README sections (rare)
- ❌ New calculation methods (rare)
- ❌ Visualization changes (rare)

---

## 📊 Results Format

Each category README includes:
- **Overall Performance Score**: Geometric mean across universal tests
- **Library Comparison**: Versions, bundle sizes, scores
- **Feature Support Matrix**: Which libraries support which features
- **Detailed Results**: Charts + tables for each benchmark
- **Performance Tiers**: Classification by performance level
- **Key Insights**: Trade-offs and recommendations
- **Methodology**: How tests are run and measured

---

## 🎓 Best Practices

### Config File Consistency
1. **Keep configs in sync**: When adding library, update all 3 JSONs (metadata, features, versions)
2. **Use consistent naming**: Benchmark pattern `"Test Name -"` (space + dash)
3. **Group IDs format**: `"XX-lowercase-name"`

### Testing After Changes
```bash
# Always test after config changes
node generate-readme.js

# Verify output
git diff README.md
```

### JSON Validation
- Use JSON linter
- Check for typos in library keys
- Ensure all referenced libraries exist in metadata

### Documentation
- Keep tradeoffs concise
- Focus on key differences
- Update ARCHITECTURE.md for major changes

---

## 📈 Migration from Old System

**Old System (Hardcoded):**
```javascript
const tiers = [
  { name: 'Tier S', threshold: 2000000 },  // Hardcoded
  // ...
];
const testRange = '01-06';  // Hardcoded
```

**New System (Config-Driven):**
```javascript
const tiers = categoryConfig.performanceTiers;  // From JSON
const testList = universal.map(n => n).join(', ');  // Auto-generated
```

**Benefits:**
- ✅ Change tiers without touching code
- ✅ Consistent across all categories
- ✅ Easy to add/remove tiers
- ✅ Self-documenting configuration

---

<div align="center">

## 🌟 Key Advantages

| Feature | Benefit |
|---------|---------|
| **Config-Driven** | Add libraries/tests without code changes |
| **Auto-Discovery** | No manual registration needed |
| **Type Flexible** | Universal + Feature tests both supported |
| **Number Flexible** | Non-sequential test numbers OK |
| **Infinitely Scalable** | 10 or 1000 libraries, same generator |
| **Self-Documenting** | Config files are the documentation |
| **Zero Maintenance** | New additions work automatically |

---

**Developed and maintained by [Sylph](https://github.com/sylphxltd)**

### Supporting Tools
[Vitest](https://vitest.dev) • [Bundlephobia](https://bundlephobia.com) • [GitHub Actions](https://github.com/features/actions)

---

### Star this repo if you find it useful! ⭐

[⬆ Back to Top](#-javascript-library-benchmarks)

</div>
