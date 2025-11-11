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
- **Last Run:** 1:10:36 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.0/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.2/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.4/100 | 43.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.2% |
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
🥇 Craft                ████████████████████████████████████████ 220.86K
🥈 Immer                ████████████████████ 110.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 220.86K | ±1.95% | 4.5278ms | 9.3170ms | 110.43K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.16K | ±1.61% | 9.0778ms | 25.7570ms | 55.08K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 965.10K
🥈 Immer                █████ 131.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 965.10K | ±0.16% | 1.0362ms | 1.7030ms | 482.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.22K | ±1.50% | 7.6209ms | 16.6010ms | 65.61K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.16K
🥈 Immer                ██████████████ 60.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.16K | ±1.70% | 5.6447ms | 11.1200ms | 88.58K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.94K | ±1.42% | 16.4088ms | 30.3570ms | 30.47K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 744.94K
🥈 Mutative             ██████████████████████████ 480.86K
🥉 Immer                ██████████ 178.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 744.94K | ±1.61% | 1.3424ms | 3.0050ms | 372.47K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 480.86K | ±0.42% | 2.0796ms | 2.7450ms | 240.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.34K | ±0.85% | 5.6073ms | 11.5520ms | 89.17K |

**Key Insight:** Craft is **4.18x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             ██████████████ 434.53K
🥉 Immer                █████ 159.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.57% | 0.7888ms | 1.1320ms | 633.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 434.53K | ±0.38% | 2.3013ms | 2.6450ms | 217.26K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.03K | ±0.28% | 6.2881ms | 10.6800ms | 79.52K |

**Key Insight:** Craft is **7.97x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 878.52K
🥈 Mutative             █████████████████████ 455.24K
🥉 Immer                ████████ 167.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 878.52K | ±0.34% | 1.1383ms | 1.4530ms | 439.26K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.24K | ±0.36% | 2.1967ms | 2.5250ms | 227.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.00K | ±0.28% | 5.9880ms | 11.3510ms | 83.50K |

**Key Insight:** Craft is **5.26x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 834.60K
🥈 Mutative             ██████████████████████ 453.91K
🥉 Immer                ████████ 176.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 834.60K | ±0.35% | 1.1982ms | 1.4830ms | 417.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.91K | ±0.37% | 2.2031ms | 2.5440ms | 226.96K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.98K | ±0.29% | 5.6503ms | 6.9930ms | 88.49K |

**Key Insight:** Craft is **4.72x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.34K
🥈 Mutative             ████████████████████████████████ 150.41K
🥉 Immer                █████████████████ 77.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.34K | ±0.49% | 5.3955ms | 7.8840ms | 92.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.41K | ±0.50% | 6.6486ms | 10.3900ms | 75.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.64K | ±0.45% | 12.8800ms | 25.4680ms | 38.82K |

**Key Insight:** Craft is **2.39x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 230.26K
🥈 Mutative             █████████████ 76.88K
🥉 Immer                ██ 13.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 230.26K | ±0.44% | 4.3429ms | 5.2900ms | 115.13K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.88K | ±0.46% | 13.0065ms | 22.7720ms | 38.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.12K | ±0.31% | 76.2149ms | 97.4910ms | 6.56K |

**Key Insight:** Craft is **17.55x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.53K
🥈 Immer                ████████████ 70.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.53K | ±0.36% | 4.4143ms | 5.3000ms | 113.27K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.48K | ±0.25% | 14.1882ms | 25.3070ms | 35.24K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             ██████████████████████████████████████ 1.01M
🥉 Craft                █████████████████████████████████████ 993.09K
   Immutability Helper  █████████████████████████████████████ 991.80K
   Immer                ██████████████████████████ 701.32K
   Seamless Immutable   █████ 123.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.61M | ±0.10% | 0.0684ms | 0.1100ms | 7.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.14% | 0.9374ms | 1.1120ms | 533.37K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 1.01M | ±0.40% | 0.9939ms | 1.2730ms | 503.09K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 993.09K | ±2.48% | 1.0070ms | 2.6150ms | 496.54K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 991.80K | ±0.49% | 1.0083ms | 1.6330ms | 495.90K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 701.32K | ±1.63% | 1.4259ms | 3.1760ms | 350.66K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 123.26K | ±0.46% | 8.1130ms | 15.5600ms | 61.63K |

**Key Insight:** Native Spread is **118.55x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 495.47K
🥈 Mutative             █████████████████████████████████ 406.91K
🥉 Craft                ████████████████████████████ 347.95K
   Immutable.js         ██████████████████ 227.86K
   Immer                █████████████ 156.46K
   Seamless Immutable   ███ 38.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.68M | ±0.18% | 0.0856ms | 0.1400ms | 5.84M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 495.47K | ±0.52% | 2.0183ms | 2.3040ms | 247.74K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 406.91K | ±0.52% | 2.4576ms | 2.8050ms | 203.45K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 347.95K | ±2.84% | 2.8740ms | 4.7690ms | 173.97K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 227.86K | ±0.62% | 4.3887ms | 6.4410ms | 113.93K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.46K | ±2.03% | 6.3914ms | 11.4720ms | 78.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 38.07K | ±0.38% | 26.2667ms | 35.7160ms | 19.04K |

**Key Insight:** Native Spread is **306.71x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.77M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ████████████ 508.59K
   Mutative             █████████ 418.21K
   Immer                ██████ 285.74K
   Seamless Immutable   █ 62.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.27M | ±21.41% | 0.0974ms | 0.1200ms | 5.13M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.77M | ±0.71% | 0.5658ms | 0.7820ms | 883.71K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.74% | 0.7102ms | 0.7410ms | 704.05K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 508.59K | ±0.55% | 1.9662ms | 2.4340ms | 254.30K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 418.21K | ±0.79% | 2.3911ms | 4.7490ms | 209.11K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.74K | ±0.49% | 3.4997ms | 4.2880ms | 142.87K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.05K | ±0.50% | 16.1151ms | 25.5880ms | 31.03K |

**Key Insight:** Native Spread is **165.49x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 823.40K
🥈 Immutability Helper  ████████████████████████████ 582.50K
🥉 Craft                ████████████████ 322.69K
   Mutative             ██████████ 215.65K
   Immer                ███████ 143.42K
   Seamless Immutable   ███ 62.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.55M | ±0.98% | 0.0797ms | 0.1010ms | 6.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 823.40K | ±0.52% | 1.2145ms | 1.5030ms | 411.70K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 582.50K | ±0.17% | 1.7168ms | 1.8330ms | 291.25K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 322.69K | ±0.28% | 3.0989ms | 3.4770ms | 161.36K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 215.65K | ±0.37% | 4.6371ms | 9.0670ms | 107.83K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.42K | ±0.28% | 6.9724ms | 14.2560ms | 71.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.56K | ±0.32% | 15.9835ms | 25.3170ms | 31.28K |

**Key Insight:** Native Filter is **200.63x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 493.41K
🥈 Mutative             █████████████████████████████████████ 461.89K
🥉 Immutability Helper  █████████████████████████████████ 402.17K
   Immer                ███████████████████████ 285.07K
   Immutable.js         ███████████████ 181.07K
   Seamless Immutable   ███ 31.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.61M | ±0.64% | 0.0861ms | 0.1300ms | 5.80M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 493.41K | ±0.45% | 2.0267ms | 2.3440ms | 246.71K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 461.89K | ±0.57% | 2.1650ms | 2.4850ms | 230.94K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 402.17K | ±0.25% | 2.4865ms | 2.8350ms | 201.09K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 285.07K | ±0.30% | 3.5079ms | 7.0840ms | 142.54K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 181.07K | ±0.56% | 5.5227ms | 6.1520ms | 90.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.78K | ±0.43% | 31.4651ms | 42.7500ms | 15.89K |

**Key Insight:** Native Map is **365.26x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 317.33K
🥈 Craft                █████████████████████████████████ 263.82K
🥉 Mutative             ███████████████████████████ 216.21K
   Immutable.js         ██████████████████████ 172.37K
   Immer                █████████████ 99.71K
   Seamless Immutable   ███ 22.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.23M | ±0.60% | 0.1083ms | 0.1410ms | 4.62M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 317.33K | ±0.39% | 3.1513ms | 3.4570ms | 158.66K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 263.82K | ±0.45% | 3.7905ms | 7.1630ms | 131.91K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.21K | ±0.46% | 4.6252ms | 5.2800ms | 108.10K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.37K | ±0.46% | 5.8014ms | 7.0830ms | 86.19K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.71K | ±0.37% | 10.0293ms | 19.3160ms | 49.85K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.79K | ±0.28% | 43.8804ms | 53.4490ms | 11.39K |

**Key Insight:** Native Spread is **405.16x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 371.49K
🥈 Immer                ███ 29.76K
🥉 Craft                ██ 22.03K
   Immutability Helper  █ 6.44K
   Immutable.js         █ 680.66
   Seamless Immutable   █ 257.44
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 371.49K | ±0.81% | 2.6918ms | 3.4460ms | 185.75K |
| 🥈 | **Native Map** | 357.37K | ±0.68% | 2.7982ms | 3.4060ms | 178.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.76K | ±0.41% | 33.6059ms | 64.9820ms | 14.88K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.03K | ±0.35% | 45.3838ms | 55.0230ms | 11.02K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.44K | ±0.32% | 155.2718ms | 171.9110ms | 3.22K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 680.66 | ±0.96% | 1469.1531ms | 1906.9340ms | 341.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 257.44 | ±0.47% | 3884.4711ms | 4326.7610ms | 129.00 |

**Key Insight:** Mutative is **1443.06x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.34K
🥈 Craft                ███████████████████████████████████████ 269.47K
🥉 Mutative             █████████████████████████████ 203.71K
   Immutable.js         ███████████████████████ 158.97K
   Immer                ███████████████████ 129.45K
   Seamless Immutable   ███ 18.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.40M | ±1.11% | 0.1564ms | 0.1800ms | 3.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.34K | ±0.39% | 3.5798ms | 3.9070ms | 139.67K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 269.47K | ±0.54% | 3.7110ms | 4.1480ms | 134.74K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 203.71K | ±0.38% | 4.9089ms | 5.5100ms | 101.86K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.97K | ±0.58% | 6.2905ms | 11.9220ms | 79.48K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 129.45K | ±0.37% | 7.7249ms | 14.3670ms | 64.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.37K | ±0.81% | 54.4447ms | 148.3070ms | 9.18K |

**Key Insight:** Native Spread is **348.18x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:19:08.036Z*
