# Immutability Benchmark 🔄

Comprehensive performance testing of JavaScript immutability libraries and patterns.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 11, 2025
- **Last Run:** 1:38:34 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/SylphxAI/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | 7.16KB | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/SylphxAI/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.3/100 | 77.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.2/100 | 73.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 44.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.4% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.8/100 | 5.2% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/SylphxAI/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/SylphxAI/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/SylphxAI/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/SylphxAI/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [JSON Patches - Generate](#json-patches-generate)
- [JSON Patches - Apply](#json-patches-apply)
- [JSON Patches - Roundtrip](#json-patches-roundtrip)
- [Map - Set Operation](#map-set-operation)
- [Map - Update Nested Value](#map-update-nested-value)
- [Set - Add Operation](#set-add-operation)
- [Set - Delete Operation](#set-delete-operation)
- [Map - Large (100 items)](#map-large-100-items)
- [Set - Large (100 items)](#set-large-100-items)
- [Undo/Redo - Inverse Patches](#undoredo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large Array Update (1000 items)](#large-array-update-1000-items)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes)

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 220.58K
🥈 Immer                █████████████████████ 115.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 220.58K | ±1.91% | 4.5334ms | 9.1070ms | 110.29K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.73K | ±1.54% | 8.6407ms | 18.3840ms | 57.87K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 971.02K
🥈 Immer                █████ 132.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 971.02K | ±0.17% | 1.0298ms | 1.7230ms | 485.51K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.47K | ±1.54% | 7.5488ms | 13.4150ms | 66.24K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.95K
🥈 Immer                ██████████████ 59.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 175.95K | ±1.73% | 5.6835ms | 11.3010ms | 87.97K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.74K | ±1.65% | 16.7403ms | 32.8110ms | 29.87K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 744.31K
🥈 Mutative             █████████████████████████ 471.24K
🥉 Immer                ██████████ 177.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 744.31K | ±1.66% | 1.3435ms | 2.9750ms | 372.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 471.24K | ±0.88% | 2.1221ms | 2.9460ms | 235.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.02K | ±1.06% | 5.6489ms | 9.7080ms | 88.51K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 429.78K
🥉 Immer                █████ 157.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.25M | ±0.43% | 0.8031ms | 1.5430ms | 622.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.78K | ±0.39% | 2.3268ms | 3.9870ms | 214.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.56K | ±0.30% | 6.3469ms | 14.3870ms | 78.78K |

**Key Insight:** Craft is **7.90x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 853.49K
🥈 Mutative             ██████████████████████ 464.86K
🥉 Immer                ████████ 167.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 853.49K | ±0.34% | 1.1717ms | 1.4730ms | 426.74K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 464.86K | ±0.37% | 2.1512ms | 2.5450ms | 232.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.90K | ±0.34% | 5.9560ms | 7.7240ms | 83.95K |

**Key Insight:** Craft is **5.08x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 837.23K
🥈 Mutative             ██████████████████████ 455.35K
🥉 Immer                █████████ 181.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 837.23K | ±0.33% | 1.1944ms | 1.4820ms | 418.62K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.35K | ±0.40% | 2.1961ms | 2.7350ms | 227.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.62K | ±0.31% | 5.5061ms | 7.6040ms | 90.81K |

**Key Insight:** Craft is **4.61x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.38K
🥈 Mutative             ████████████████████████████████ 148.74K
🥉 Immer                █████████████████ 80.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 183.38K | ±0.48% | 5.4533ms | 8.1760ms | 91.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.74K | ±0.50% | 6.7230ms | 12.0820ms | 74.37K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.01K | ±0.49% | 12.4992ms | 23.0730ms | 40.00K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.36K
🥈 Mutative             █████████████ 76.85K
🥉 Immer                ██ 13.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 228.36K | ±0.42% | 4.3791ms | 5.7410ms | 114.18K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.85K | ±0.47% | 13.0123ms | 22.2010ms | 38.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.69K | ±0.34% | 73.0197ms | 97.1410ms | 6.85K |

**Key Insight:** Craft is **16.67x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.23K
🥈 Immer                █████████████ 71.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 228.23K | ±0.33% | 4.3815ms | 5.0290ms | 114.11K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.44K | ±0.26% | 13.9969ms | 24.3760ms | 35.72K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  █████████████████████████████████████ 984.04K
🥉 Mutative             ████████████████████████████████████ 965.31K
   Craft                ███████████████████████████████████ 942.04K
   Immer                █████████████████████████ 662.97K
   Seamless Immutable   █████ 130.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.44M | ±0.09% | 0.0692ms | 0.1100ms | 7.22M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.17% | 0.9418ms | 1.6330ms | 530.89K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 984.04K | ±0.39% | 1.0162ms | 1.5130ms | 492.02K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 965.31K | ±0.81% | 1.0359ms | 1.6730ms | 482.65K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 942.04K | ±2.84% | 1.0615ms | 2.6850ms | 471.02K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 662.97K | ±1.91% | 1.5084ms | 3.2560ms | 331.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.80K | ±0.25% | 7.6456ms | 14.5270ms | 65.40K |

**Key Insight:** Native Spread is **110.42x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 526.23K
🥈 Mutative             ███████████████████████████████ 401.51K
🥉 Craft                ██████████████████████████ 346.80K
   Immutable.js         █████████████████ 227.06K
   Immer                ████████████ 157.29K
   Seamless Immutable   ███ 37.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.79M | ±0.13% | 0.0848ms | 0.1200ms | 5.90M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 526.23K | ±0.51% | 1.9003ms | 2.4850ms | 263.12K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 401.51K | ±0.72% | 2.4906ms | 4.6680ms | 200.76K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 346.80K | ±2.52% | 2.8835ms | 5.2600ms | 173.40K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 227.06K | ±1.48% | 4.4041ms | 6.9030ms | 113.53K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 157.29K | ±1.72% | 6.3578ms | 11.6820ms | 78.64K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.49K | ±0.24% | 26.6739ms | 37.0700ms | 18.75K |

**Key Insight:** Native Spread is **314.49x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.79M
🥈 Immutability Helper  ███████████████████████████████ 1.39M
🥉 Craft                ███████████ 508.34K
   Mutative             ██████████ 427.45K
   Immer                ██████ 281.12K
   Seamless Immutable   █ 61.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.85M | ±0.94% | 0.0844ms | 0.1200ms | 5.93M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.79M | ±0.43% | 0.5597ms | 0.8310ms | 893.26K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.39M | ±0.52% | 0.7188ms | 0.7910ms | 695.59K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 508.34K | ±0.33% | 1.9672ms | 2.3340ms | 254.17K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 427.45K | ±0.43% | 2.3395ms | 2.8450ms | 213.72K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.12K | ±0.43% | 3.5572ms | 7.6250ms | 140.56K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.94K | ±0.39% | 16.1458ms | 25.4870ms | 30.97K |

**Key Insight:** Native Spread is **191.40x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 830.78K
🥈 Immutability Helper  ███████████████████████████ 565.19K
🥉 Craft                ███████████████ 316.99K
   Mutative             ███████████ 218.39K
   Immer                ███████ 144.55K
   Seamless Immutable   ███ 61.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.74M | ±0.68% | 0.0785ms | 0.1200ms | 6.37M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 830.78K | ±0.82% | 1.2037ms | 1.6030ms | 415.39K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 565.19K | ±0.21% | 1.7693ms | 1.9230ms | 282.60K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 316.99K | ±0.54% | 3.1547ms | 3.6270ms | 158.49K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.39K | ±0.56% | 4.5789ms | 5.2700ms | 109.20K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 144.55K | ±0.39% | 6.9179ms | 12.2730ms | 72.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.47K | ±0.42% | 16.2673ms | 25.6780ms | 30.74K |

**Key Insight:** Native Filter is **207.32x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 503.94K
🥈 Mutative             ████████████████████████████████████ 457.57K
🥉 Immutability Helper  ████████████████████████████████ 404.58K
   Immer                ███████████████████████ 284.93K
   Immutable.js         ███████████████ 195.07K
   Seamless Immutable   ███ 31.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.33M | ±0.94% | 0.0883ms | 0.1210ms | 5.66M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 503.94K | ±0.39% | 1.9844ms | 2.4750ms | 251.97K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 457.57K | ±0.48% | 2.1855ms | 2.8760ms | 228.78K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 404.58K | ±0.20% | 2.4717ms | 2.9750ms | 202.29K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.93K | ±0.21% | 3.5096ms | 4.1170ms | 142.47K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 195.07K | ±0.46% | 5.1265ms | 5.9120ms | 97.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.50K | ±0.46% | 31.7449ms | 45.3450ms | 15.75K |

**Key Insight:** Native Map is **359.56x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 321.80K
🥈 Craft                ██████████████████████████████████ 269.53K
🥉 Mutative             ██████████████████████████ 212.91K
   Immutable.js         ██████████████████████ 174.82K
   Immer                ████████████ 98.40K
   Seamless Immutable   ███ 22.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.56M | ±11.73% | 0.1168ms | 0.1500ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 321.80K | ±0.51% | 3.1076ms | 3.4760ms | 160.90K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 269.53K | ±0.59% | 3.7101ms | 4.5190ms | 134.77K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 212.91K | ±0.60% | 4.6968ms | 5.8300ms | 106.48K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.82K | ±0.61% | 5.7203ms | 6.8430ms | 87.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.40K | ±0.69% | 10.1625ms | 18.9450ms | 49.20K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.35K | ±0.55% | 44.7484ms | 56.2350ms | 11.17K |

**Key Insight:** Native Spread is **382.96x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 369.72K
🥈 Immer                ███ 30.03K
🥉 Craft                ██ 21.97K
   Immutability Helper  █ 5.98K
   Immutable.js         █ 750.20
   Seamless Immutable   █ 254.75
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 369.72K | ±0.63% | 2.7047ms | 3.9470ms | 184.86K |
| 🥈 | **Native Map** | 355.90K | ±0.59% | 2.8098ms | 3.5260ms | 177.95K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.03K | ±0.33% | 33.3038ms | 43.8710ms | 15.01K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.97K | ±0.40% | 45.5122ms | 58.7390ms | 10.99K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 5.98K | ±0.43% | 167.0994ms | 192.6500ms | 2.99K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 750.20 | ±1.23% | 1332.9781ms | 1776.5790ms | 376.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.75 | ±0.56% | 3925.3594ms | 4386.2660ms | 128.00 |

**Key Insight:** Mutative is **1451.30x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 287.52K
🥈 Craft                ███████████████████████████████████████ 277.39K
🥉 Mutative             ████████████████████████████ 201.88K
   Immutable.js         ███████████████████████ 166.65K
   Immer                ██████████████████ 127.86K
   Seamless Immutable   ███ 18.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.59M | ±0.51% | 0.1519ms | 0.2010ms | 3.29M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 287.52K | ±0.34% | 3.4781ms | 3.9270ms | 143.76K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 277.39K | ±0.38% | 3.6050ms | 4.3180ms | 138.70K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.88K | ±0.30% | 4.9535ms | 5.9920ms | 100.94K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 166.65K | ±0.42% | 6.0006ms | 7.6450ms | 83.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.86K | ±0.36% | 7.8213ms | 14.0460ms | 63.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.42K | ±0.61% | 54.2992ms | 98.7250ms | 9.21K |

**Key Insight:** Native Spread is **357.57x faster** than Seamless Immutable in this category.

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-11T01:45:37.045Z*
