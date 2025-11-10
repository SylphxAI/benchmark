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

- **Last Updated:** November 10, 2025
- **Last Run:** 3:21:12 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 10, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.8/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.9/100 | 74.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.5% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.4% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/sylphxltd/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/sylphxltd/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/sylphxltd/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/sylphxltd/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

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
🥇 Craft                ████████████████████████████████████████ 220.07K
🥈 Immer                █████████████████████ 113.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 220.07K | ±1.99% | 4.5441ms | 9.1170ms | 110.03K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.19K | ±1.62% | 8.8344ms | 25.4980ms | 56.60K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 971.29K
🥈 Immer                █████ 130.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 971.29K | ±0.17% | 1.0296ms | 1.3820ms | 485.65K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.97K | ±1.62% | 7.6351ms | 16.7510ms | 65.49K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 179.04K
🥈 Immer                ██████████████ 61.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 179.04K | ±1.47% | 5.5854ms | 11.1210ms | 89.52K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.21K | ±1.53% | 16.3379ms | 31.4090ms | 30.61K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 747.82K
🥈 Mutative             ██████████████████████████ 478.49K
🥉 Immer                █████████ 177.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 747.82K | ±1.60% | 1.3372ms | 2.9060ms | 373.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 478.49K | ±0.73% | 2.0899ms | 3.4360ms | 239.24K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.43K | ±0.85% | 5.6361ms | 10.0190ms | 88.71K |

**Key Insight:** Craft is **4.21x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 430.18K
🥉 Immer                █████ 156.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.42% | 0.7967ms | 1.1520ms | 627.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 430.18K | ±0.40% | 2.3246ms | 2.8760ms | 215.09K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.86K | ±0.59% | 6.3753ms | 11.8930ms | 78.43K |

**Key Insight:** Craft is **8.00x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 872.65K
🥈 Mutative             █████████████████████ 455.72K
🥉 Immer                ████████ 168.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 872.65K | ±0.41% | 1.1459ms | 1.5120ms | 436.32K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.72K | ±0.38% | 2.1943ms | 2.5850ms | 227.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.52K | ±0.31% | 5.9340ms | 9.0870ms | 84.26K |

**Key Insight:** Craft is **5.18x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 851.10K
🥈 Mutative             █████████████████████ 444.50K
🥉 Immer                █████████ 183.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 851.10K | ±0.39% | 1.1750ms | 1.4730ms | 425.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.50K | ±0.47% | 2.2497ms | 2.7360ms | 222.25K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.52K | ±0.33% | 5.4490ms | 9.1370ms | 91.76K |

**Key Insight:** Craft is **4.64x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.87K
🥈 Mutative             █████████████████████████████████ 150.78K
🥉 Immer                █████████████████ 79.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.87K | ±0.49% | 5.4683ms | 8.4960ms | 91.44K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.78K | ±0.47% | 6.6324ms | 10.7200ms | 75.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.21K | ±0.70% | 12.6253ms | 23.2840ms | 39.60K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.60K
🥈 Mutative             ██████████████ 76.85K
🥉 Immer                ██ 13.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.60K | ±0.40% | 4.3937ms | 5.5300ms | 113.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.85K | ±0.45% | 13.0119ms | 22.5920ms | 38.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.79K | ±0.27% | 72.5148ms | 88.6970ms | 6.90K |

**Key Insight:** Craft is **16.50x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.20K
🥈 Immer                █████████████ 70.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.20K | ±0.39% | 4.4405ms | 5.2290ms | 112.60K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.96K | ±0.54% | 14.0926ms | 25.1980ms | 35.48K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.09M
🥈 Immutability Helper  █████████████████████████████████████ 997.04K
🥉 Mutative             ████████████████████████████████████ 977.84K
   Craft                ███████████████████████████████████ 961.36K
   Immer                ██████████████████████████ 706.39K
   Seamless Immutable   █████ 129.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.70M | ±0.09% | 0.0680ms | 0.0900ms | 7.35M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.09M | ±0.15% | 0.9204ms | 1.1420ms | 543.22K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 997.04K | ±0.34% | 1.0030ms | 1.1720ms | 498.52K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 977.84K | ±0.39% | 1.0227ms | 1.7240ms | 488.92K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 961.36K | ±2.57% | 1.0402ms | 2.6350ms | 480.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 706.39K | ±1.99% | 1.4156ms | 3.1770ms | 353.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.50K | ±0.26% | 7.7221ms | 13.6550ms | 64.75K |

**Key Insight:** Native Spread is **113.49x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 511.69K
🥈 Mutative             ██████████████████████████████ 380.70K
🥉 Craft                █████████████████████████ 321.87K
   Immutable.js         ██████████████████ 235.16K
   Immer                ███████████ 143.57K
   Seamless Immutable   ███ 37.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.61M | ±0.15% | 0.0861ms | 0.1200ms | 5.81M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 511.69K | ±0.40% | 1.9543ms | 3.6670ms | 255.84K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 380.70K | ±5.00% | 2.6267ms | 5.0290ms | 190.35K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 321.87K | ±2.78% | 3.1068ms | 6.5430ms | 160.94K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 235.16K | ±0.57% | 4.2524ms | 8.3250ms | 117.58K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.57K | ±1.84% | 6.9651ms | 14.2870ms | 71.79K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.47K | ±0.29% | 26.6861ms | 36.5680ms | 18.74K |

**Key Insight:** Native Spread is **309.84x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  ██████████████████████████████████ 1.44M
🥉 Craft                ████████████ 511.91K
   Mutative             ██████████ 431.49K
   Immer                ███████ 286.07K
   Seamless Immutable   █ 61.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.10M | ±0.55% | 0.0826ms | 0.1200ms | 6.05M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±3.75% | 0.5847ms | 0.9710ms | 855.14K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.14% | 0.6945ms | 0.7610ms | 719.98K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 511.91K | ±0.46% | 1.9535ms | 2.5550ms | 255.96K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 431.49K | ±0.39% | 2.3175ms | 2.7050ms | 215.75K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 286.07K | ±0.38% | 3.4956ms | 4.2680ms | 143.04K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.33K | ±0.34% | 16.3050ms | 25.7380ms | 30.67K |

**Key Insight:** Native Spread is **197.37x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 779.86K
🥈 Immutability Helper  ██████████████████████████████ 584.74K
🥉 Craft                █████████████████ 323.17K
   Mutative             ███████████ 220.61K
   Immer                ███████ 142.39K
   Seamless Immutable   ███ 61.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.38M | ±1.09% | 0.0807ms | 0.1110ms | 6.19M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 779.86K | ±0.59% | 1.2823ms | 1.6530ms | 389.93K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 584.74K | ±0.16% | 1.7102ms | 1.8240ms | 292.37K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 323.17K | ±0.32% | 3.0944ms | 3.6870ms | 161.59K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.61K | ±0.35% | 4.5328ms | 5.2400ms | 110.31K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.39K | ±0.34% | 7.0227ms | 9.2180ms | 71.20K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.70K | ±0.39% | 16.2072ms | 25.8680ms | 30.85K |

**Key Insight:** Native Filter is **200.71x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 501.33K
🥈 Mutative             █████████████████████████████████████ 464.44K
🥉 Immutability Helper  ████████████████████████████████ 403.11K
   Immer                ███████████████████████ 284.14K
   Immutable.js         ███████████████ 190.49K
   Seamless Immutable   ███ 31.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.40M | ±0.95% | 0.0878ms | 0.1300ms | 5.70M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 501.33K | ±0.65% | 1.9947ms | 2.3950ms | 250.66K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 464.44K | ±0.60% | 2.1531ms | 2.5350ms | 232.22K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 403.11K | ±0.28% | 2.4807ms | 2.9550ms | 201.56K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.14K | ±0.22% | 3.5194ms | 4.4090ms | 142.07K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 190.49K | ±0.42% | 5.2495ms | 7.9950ms | 95.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.50K | ±0.68% | 31.7449ms | 41.5080ms | 15.75K |

**Key Insight:** Native Map is **361.76x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 314.24K
🥈 Craft                ███████████████████████████████████ 276.27K
🥉 Mutative             ████████████████████████████ 216.25K
   Immutable.js         ██████████████████████ 173.14K
   Immer                █████████████ 99.39K
   Seamless Immutable   ███ 22.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.84M | ±0.66% | 0.1132ms | 0.1410ms | 4.42M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 314.24K | ±0.40% | 3.1823ms | 3.5660ms | 157.12K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 276.27K | ±0.43% | 3.6197ms | 4.4380ms | 138.13K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.25K | ±0.47% | 4.6242ms | 7.0930ms | 108.13K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 173.14K | ±0.50% | 5.7755ms | 7.7850ms | 86.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.39K | ±0.46% | 10.0611ms | 19.4070ms | 49.70K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.43K | ±0.45% | 44.5775ms | 55.4750ms | 11.22K |

**Key Insight:** Native Spread is **393.90x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 357.38K
🥈 Immer                ████ 32.73K
🥉 Craft                ██ 22.07K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 702.75
   Seamless Immutable   █ 255.83
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 357.38K | ±0.85% | 2.7981ms | 4.9690ms | 178.69K |
| 🥈 | **Native Map** | 352.89K | ±0.69% | 2.8338ms | 3.4860ms | 176.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 32.73K | ±0.61% | 30.5513ms | 40.2050ms | 16.37K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.07K | ±0.44% | 45.3158ms | 53.9020ms | 11.03K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.55% | 157.3482ms | 186.1100ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 702.75 | ±1.17% | 1422.9812ms | 1951.0890ms | 352.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 255.83 | ±0.77% | 3908.7932ms | 4540.9790ms | 128.00 |

**Key Insight:** Mutative is **1396.93x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.93K
🥈 Craft                ████████████████████████████████████████ 277.88K
🥉 Mutative             █████████████████████████████ 200.68K
   Immutable.js         ███████████████████████ 158.43K
   Immer                ██████████████████ 127.13K
   Seamless Immutable   ███ 18.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.21M | ±1.01% | 0.1609ms | 0.1800ms | 3.11M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.93K | ±0.39% | 3.5981ms | 3.9780ms | 138.96K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 277.88K | ±0.51% | 3.5986ms | 4.3080ms | 138.94K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.68K | ±0.55% | 4.9831ms | 6.9030ms | 100.34K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.43K | ±0.60% | 6.3118ms | 10.9700ms | 79.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.13K | ±0.54% | 7.8661ms | 15.7300ms | 63.56K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.83K | ±0.57% | 53.0933ms | 73.9390ms | 9.42K |

**Key Insight:** Native Spread is **329.91x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T16:31:06.915Z*
