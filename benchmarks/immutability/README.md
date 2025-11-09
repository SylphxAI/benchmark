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

- **Last Updated:** November 9, 2025
- **Last Run:** 5:07:19 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 9, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.1/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.3% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.9/100 | 75.1% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.5% |
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
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |

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
🥇 Craft                ████████████████████████████████████████ 216.12K
🥈 Immer                █████████████████████ 114.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.12K | ±2.22% | 4.6270ms | 9.3170ms | 108.06K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.05K | ±1.82% | 8.7684ms | 18.1140ms | 57.02K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 985.80K
🥈 Immer                █████ 129.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 985.80K | ±0.18% | 1.0144ms | 1.5230ms | 492.90K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.64K | ±1.94% | 7.7138ms | 17.0510ms | 64.82K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.51K
🥈 Immer                ██████████████ 60.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.51K | ±1.72% | 5.6335ms | 11.0000ms | 88.76K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.25K | ±1.72% | 16.5987ms | 31.6590ms | 30.12K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 737.95K
🥈 Mutative             ██████████████████████████ 478.66K
🥉 Immer                █████████ 175.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 737.95K | ±1.62% | 1.3551ms | 3.0660ms | 368.98K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 478.66K | ±0.44% | 2.0892ms | 2.4440ms | 239.33K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.12K | ±0.93% | 5.7102ms | 13.1950ms | 87.56K |

**Key Insight:** Craft is **4.21x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.23M
🥈 Mutative             ██████████████ 429.86K
🥉 Immer                █████ 162.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.23M | ±0.50% | 0.8116ms | 1.1330ms | 616.09K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.86K | ±0.41% | 2.3263ms | 2.7250ms | 214.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 162.01K | ±0.30% | 6.1723ms | 7.9450ms | 81.01K |

**Key Insight:** Craft is **7.61x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 865.54K
🥈 Mutative             █████████████████████ 457.19K
🥉 Immer                ████████ 169.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 865.54K | ±0.37% | 1.1554ms | 1.4630ms | 432.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.19K | ±0.40% | 2.1873ms | 2.6350ms | 228.59K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.75K | ±0.59% | 5.8908ms | 11.1410ms | 84.88K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 826.91K
🥈 Mutative             ██████████████████████ 448.90K
🥉 Immer                █████████ 186.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 826.91K | ±0.38% | 1.2093ms | 1.5330ms | 413.45K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.90K | ±0.40% | 2.2277ms | 3.7470ms | 224.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 186.07K | ±0.32% | 5.3743ms | 8.5460ms | 93.04K |

**Key Insight:** Craft is **4.44x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.13K
🥈 Mutative             ██████████████████████████████ 136.91K
🥉 Immer                ██████████████████ 81.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.13K | ±0.54% | 5.4905ms | 7.2140ms | 91.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 136.91K | ±0.50% | 7.3043ms | 11.7820ms | 68.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 81.08K | ±0.52% | 12.3332ms | 22.7630ms | 40.54K |

**Key Insight:** Craft is **2.25x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.12K
🥈 Mutative             ████████████ 70.90K
🥉 Immer                ██ 13.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.12K | ±0.50% | 4.4030ms | 5.2000ms | 113.56K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 70.90K | ±0.49% | 14.1041ms | 23.4740ms | 35.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.63K | ±0.49% | 73.3494ms | 93.7650ms | 6.82K |

**Key Insight:** Craft is **16.66x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.25K
🥈 Immer                █████████████ 72.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.25K | ±0.63% | 4.4396ms | 8.0250ms | 112.62K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.13K | ±0.35% | 13.8637ms | 24.3060ms | 36.07K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  ██████████████████████████████████████ 1.00M
🥉 Mutative             ███████████████████████████████████ 936.64K
   Craft                ███████████████████████████████████ 931.93K
   Immer                ██████████████████████████ 699.87K
   Seamless Immutable   █████ 130.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.65M | ±0.09% | 0.0683ms | 0.1010ms | 7.32M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.17% | 0.9380ms | 1.0710ms | 533.06K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.00M | ±0.52% | 0.9997ms | 1.6830ms | 500.14K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 936.64K | ±0.40% | 1.0676ms | 1.3530ms | 468.32K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 931.93K | ±2.42% | 1.0730ms | 2.6760ms | 465.96K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 699.87K | ±1.77% | 1.4288ms | 3.1750ms | 349.94K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.63K | ±0.33% | 7.6553ms | 10.9910ms | 65.33K |

**Key Insight:** Native Spread is **112.13x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 526.70K
🥈 Mutative             ██████████████████████████████ 400.97K
🥉 Craft                ██████████████████████████ 346.24K
   Immutable.js         ██████████████████ 234.32K
   Immer                ███████████ 146.51K
   Seamless Immutable   ███ 38.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.78M | ±0.16% | 0.0849ms | 0.1210ms | 5.89M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 526.70K | ±0.41% | 1.8986ms | 2.2340ms | 263.35K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 400.97K | ±0.73% | 2.4940ms | 2.8760ms | 200.48K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 346.24K | ±2.51% | 2.8882ms | 5.2500ms | 173.12K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 234.32K | ±0.40% | 4.2676ms | 4.9090ms | 117.16K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 146.51K | ±2.01% | 6.8255ms | 13.4850ms | 73.26K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 38.10K | ±0.33% | 26.2488ms | 36.3780ms | 19.05K |

**Key Insight:** Native Spread is **309.17x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  █████████████████████████████████ 1.40M
🥉 Craft                ████████████ 512.27K
   Mutative             ██████████ 430.17K
   Immer                ███████ 282.81K
   Seamless Immutable   █ 62.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.01M | ±0.80% | 0.0833ms | 0.1200ms | 6.00M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±0.62% | 0.5856ms | 0.9920ms | 853.77K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.39% | 0.7165ms | 0.8520ms | 697.87K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 512.27K | ±0.37% | 1.9521ms | 2.3040ms | 256.13K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 430.17K | ±0.49% | 2.3246ms | 2.7550ms | 215.09K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 282.81K | ±0.41% | 3.5360ms | 4.1280ms | 141.40K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.55K | ±0.32% | 15.9869ms | 25.1670ms | 31.28K |

**Key Insight:** Native Spread is **191.98x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 782.75K
🥈 Immutability Helper  ██████████████████████████████ 587.91K
🥉 Craft                ████████████████ 319.81K
   Mutative             ███████████ 221.75K
   Immer                ███████ 141.59K
   Seamless Immutable   ███ 60.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.37M | ±1.15% | 0.0808ms | 0.1010ms | 6.19M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 782.75K | ±0.65% | 1.2775ms | 1.6230ms | 391.50K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 587.91K | ±0.16% | 1.7009ms | 1.8240ms | 293.96K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 319.81K | ±0.33% | 3.1268ms | 3.4960ms | 159.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 221.75K | ±0.37% | 4.5096ms | 5.1900ms | 110.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.59K | ±0.41% | 7.0625ms | 15.0390ms | 70.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.40K | ±0.41% | 16.5568ms | 30.0660ms | 30.20K |

**Key Insight:** Native Filter is **204.82x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 491.79K
🥈 Mutative             █████████████████████████████████████ 457.31K
🥉 Immutability Helper  █████████████████████████████████ 402.77K
   Immer                ██████████████████████ 275.87K
   Immutable.js         ████████████████ 191.73K
   Seamless Immutable   ███ 31.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.46M | ±0.96% | 0.0872ms | 0.1210ms | 5.73M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 491.79K | ±0.73% | 2.0334ms | 2.3950ms | 245.90K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 457.31K | ±0.85% | 2.1867ms | 2.5750ms | 228.65K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 402.77K | ±0.21% | 2.4828ms | 2.8950ms | 201.39K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 275.87K | ±0.24% | 3.6249ms | 4.0680ms | 137.94K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.73K | ±0.66% | 5.2157ms | 6.5220ms | 95.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.01K | ±0.83% | 32.2445ms | 45.3750ms | 15.51K |

**Key Insight:** Native Map is **369.65x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.45K
🥈 Craft                ██████████████████████████████████ 264.29K
🥉 Mutative             ████████████████████████████ 217.82K
   Immutable.js         ██████████████████████ 175.17K
   Immer                █████████████ 98.23K
   Seamless Immutable   ███ 22.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.03M | ±0.67% | 0.1107ms | 0.1400ms | 4.52M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.45K | ±0.42% | 3.2108ms | 3.6060ms | 155.72K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.29K | ±0.66% | 3.7838ms | 4.4280ms | 132.14K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 217.82K | ±0.70% | 4.5910ms | 5.2700ms | 108.91K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 175.17K | ±0.31% | 5.7087ms | 8.0450ms | 87.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.23K | ±0.79% | 10.1798ms | 19.3170ms | 49.12K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.26K | ±0.47% | 44.9230ms | 80.0300ms | 11.13K |

**Key Insight:** Native Spread is **405.78x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 360.59K
🥈 Immer                ███ 29.85K
🥉 Craft                ██ 22.01K
   Immutability Helper  █ 6.30K
   Immutable.js         █ 710.11
   Seamless Immutable   █ 251.45
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 360.59K | ±0.85% | 2.7732ms | 3.5070ms | 180.29K |
| 🥈 | **Native Map** | 352.45K | ±0.79% | 2.8373ms | 3.2860ms | 176.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.85K | ±0.56% | 33.4985ms | 44.3630ms | 14.93K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.01K | ±0.60% | 45.4440ms | 55.0330ms | 11.00K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.30K | ±0.80% | 158.6554ms | 282.0370ms | 3.15K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 710.11 | ±1.80% | 1408.2345ms | 2334.3090ms | 356.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.45 | ±0.77% | 3977.0031ms | 4592.9060ms | 126.00 |

**Key Insight:** Mutative is **1434.06x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.31K
🥈 Craft                ███████████████████████████████████████ 272.52K
🥉 Mutative             █████████████████████████████ 200.40K
   Immutable.js         ████████████████████████ 164.51K
   Immer                ██████████████████ 126.51K
   Seamless Immutable   ███ 18.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.75M | ±1.04% | 0.1481ms | 0.1700ms | 3.38M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.31K | ±0.47% | 3.6061ms | 4.0570ms | 138.66K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 272.52K | ±0.65% | 3.6695ms | 4.1370ms | 136.26K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.40K | ±0.74% | 4.9900ms | 5.5900ms | 100.20K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 164.51K | ±0.77% | 6.0788ms | 6.9030ms | 82.25K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.51K | ±0.91% | 7.9043ms | 14.7080ms | 63.26K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.82K | ±0.74% | 53.1225ms | 62.4270ms | 9.41K |

**Key Insight:** Native Spread is **358.61x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T17:53:06.372Z*
