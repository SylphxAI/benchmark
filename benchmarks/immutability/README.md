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
- **Last Run:** 11:54:40 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.3/100 | 76.3% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.4/100 | 73.7% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.1% |
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
🥇 Craft                ████████████████████████████████████████ 219.01K
🥈 Immer                ████████████████████ 111.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.01K | ±2.12% | 4.5660ms | 8.9170ms | 109.51K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.35K | ±1.75% | 8.9803ms | 24.7660ms | 55.68K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 967.36K
🥈 Immer                █████ 129.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 967.36K | ±0.16% | 1.0337ms | 1.3820ms | 483.68K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.96K | ±1.74% | 7.6947ms | 15.9000ms | 64.98K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.99K
🥈 Immer                ██████████████ 61.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.99K | ±1.74% | 5.7474ms | 11.2410ms | 87.00K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.11K | ±1.65% | 16.3636ms | 30.3970ms | 30.56K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 750.32K
🥈 Mutative             █████████████████████████ 467.80K
🥉 Immer                █████████ 176.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 750.32K | ±1.49% | 1.3328ms | 2.9260ms | 375.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 467.80K | ±0.65% | 2.1377ms | 3.7070ms | 233.90K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.89K | ±1.05% | 5.6532ms | 11.6810ms | 88.45K |

**Key Insight:** Craft is **4.24x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 422.98K
🥉 Immer                █████ 157.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.28M | ±0.45% | 0.7841ms | 1.1520ms | 637.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 422.98K | ±0.42% | 2.3642ms | 2.9650ms | 211.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.30K | ±0.58% | 6.3574ms | 12.4430ms | 78.65K |

**Key Insight:** Craft is **8.11x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 861.67K
🥈 Mutative             █████████████████████ 451.23K
🥉 Immer                ████████ 167.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 861.67K | ±0.57% | 1.1605ms | 1.6030ms | 430.84K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.23K | ±0.41% | 2.2162ms | 2.8450ms | 225.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.80K | ±0.36% | 5.9594ms | 8.7960ms | 83.90K |

**Key Insight:** Craft is **5.14x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 826.18K
🥈 Mutative             █████████████████████ 434.38K
🥉 Immer                █████████ 179.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 826.18K | ±0.66% | 1.2104ms | 1.6230ms | 413.09K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 434.38K | ±0.54% | 2.3021ms | 3.0060ms | 217.19K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.45K | ±0.49% | 5.5725ms | 10.7200ms | 89.73K |

**Key Insight:** Craft is **4.60x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.80K
🥈 Mutative             ████████████████████████████████ 147.47K
🥉 Immer                █████████████████ 77.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.80K | ±0.48% | 5.4407ms | 8.7960ms | 91.90K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.47K | ±0.49% | 6.7810ms | 10.6600ms | 73.74K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.99K | ±0.82% | 12.8226ms | 23.8350ms | 38.99K |

**Key Insight:** Craft is **2.36x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.11K
🥈 Mutative             █████████████ 76.36K
🥉 Immer                ██ 13.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.11K | ±0.43% | 4.4032ms | 6.0710ms | 113.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.36K | ±0.47% | 13.0966ms | 22.6320ms | 38.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.65K | ±0.36% | 73.2456ms | 87.7540ms | 6.83K |

**Key Insight:** Craft is **16.63x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.08K
🥈 Immer                █████████████ 71.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.08K | ±0.43% | 4.4827ms | 5.3100ms | 111.54K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.06K | ±0.25% | 14.0721ms | 24.3550ms | 35.53K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Craft                █████████████████████████████████████ 973.12K
🥉 Mutative             █████████████████████████████████████ 965.82K
   Immutability Helper  ████████████████████████████████████ 943.20K
   Immer                ██████████████████████████ 689.41K
   Seamless Immutable   █████ 128.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.68M | ±0.09% | 0.0681ms | 0.0910ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.15% | 0.9539ms | 1.2120ms | 524.18K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 973.12K | ±2.55% | 1.0276ms | 2.6550ms | 486.56K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 965.82K | ±0.41% | 1.0354ms | 1.4220ms | 482.91K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 943.20K | ±0.14% | 1.0602ms | 1.4730ms | 471.60K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 689.41K | ±1.79% | 1.4505ms | 3.2260ms | 344.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.18K | ±0.36% | 7.8013ms | 10.1790ms | 64.09K |

**Key Insight:** Native Spread is **114.56x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 486.08K
🥈 Mutative             ███████████████████████████████ 380.77K
🥉 Craft                ████████████████████████████ 343.60K
   Immutable.js         ███████████████████ 230.04K
   Immer                ████████████ 148.61K
   Seamless Immutable   ███ 38.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.80M | ±0.12% | 0.0847ms | 0.1200ms | 5.90M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 486.08K | ±0.33% | 2.0573ms | 2.4440ms | 243.04K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 380.77K | ±3.30% | 2.6262ms | 5.1290ms | 190.39K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.60K | ±2.62% | 2.9103ms | 5.1400ms | 171.80K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 230.04K | ±0.39% | 4.3472ms | 5.3500ms | 115.02K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 148.61K | ±1.98% | 6.7291ms | 14.8590ms | 74.31K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 38.11K | ±0.30% | 26.2397ms | 35.7660ms | 19.06K |

**Key Insight:** Native Spread is **309.70x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.80M
🥈 Immutability Helper  ███████████████████████████████ 1.38M
🥉 Craft                ████████████ 521.61K
   Mutative             █████████ 424.47K
   Immer                ██████ 281.61K
   Seamless Immutable   █ 60.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.36M | ±1.26% | 0.0881ms | 0.1200ms | 5.68M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.80M | ±0.49% | 0.5563ms | 0.8520ms | 898.88K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.56% | 0.7257ms | 0.8510ms | 689.01K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 521.61K | ±0.50% | 1.9171ms | 2.3650ms | 260.81K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.47K | ±0.51% | 2.3559ms | 2.9260ms | 212.24K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.61K | ±0.50% | 3.5510ms | 4.3080ms | 140.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.99K | ±0.69% | 16.3968ms | 26.4090ms | 30.49K |

**Key Insight:** Native Spread is **186.22x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 797.96K
🥈 Immutability Helper  █████████████████████████████ 573.11K
🥉 Craft                ████████████████ 315.57K
   Mutative             ███████████ 214.43K
   Immer                ███████ 139.35K
   Seamless Immutable   ███ 60.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.68M | ±0.74% | 0.0788ms | 0.1100ms | 6.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 797.96K | ±0.96% | 1.2532ms | 1.6830ms | 398.98K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 573.11K | ±0.22% | 1.7449ms | 1.8740ms | 286.56K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.57K | ±0.74% | 3.1689ms | 3.8170ms | 157.78K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.43K | ±0.80% | 4.6634ms | 8.8080ms | 107.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.35K | ±0.80% | 7.1763ms | 14.1380ms | 69.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.07K | ±0.90% | 16.6473ms | 25.9590ms | 30.04K |

**Key Insight:** Native Filter is **211.14x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 495.68K
🥈 Mutative             ████████████████████████████████████ 450.43K
🥉 Immutability Helper  ████████████████████████████████ 397.24K
   Immer                ███████████████████████ 283.43K
   Immutable.js         ███████████████ 181.71K
   Seamless Immutable   ███ 31.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.14M | ±1.17% | 0.0897ms | 0.1210ms | 5.57M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 495.68K | ±0.57% | 2.0174ms | 2.4850ms | 247.84K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 450.43K | ±0.68% | 2.2201ms | 3.8970ms | 225.21K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 397.24K | ±0.31% | 2.5174ms | 3.0460ms | 198.62K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.43K | ±0.28% | 3.5282ms | 5.5900ms | 141.72K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 181.71K | ±0.68% | 5.5032ms | 6.4120ms | 90.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.34K | ±0.66% | 31.9046ms | 41.5770ms | 15.67K |

**Key Insight:** Native Map is **355.56x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 306.17K
🥈 Craft                ██████████████████████████████████ 263.31K
🥉 Mutative             ████████████████████████████ 213.37K
   Immutable.js         ██████████████████████ 166.16K
   Immer                ████████████ 95.12K
   Seamless Immutable   ███ 22.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.85M | ±1.39% | 0.1130ms | 0.1500ms | 4.43M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 306.17K | ±0.70% | 3.2662ms | 4.1180ms | 153.08K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 263.31K | ±0.79% | 3.7978ms | 4.7490ms | 131.66K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.37K | ±0.78% | 4.6868ms | 6.0720ms | 106.68K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 166.16K | ±0.77% | 6.0182ms | 8.4960ms | 83.08K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 95.12K | ±0.92% | 10.5132ms | 19.9170ms | 47.56K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.32K | ±0.80% | 44.8062ms | 65.1920ms | 11.16K |

**Key Insight:** Native Spread is **396.56x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 330.62K
🥈 Immer                ████ 29.57K
🥉 Craft                ███ 21.48K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 714.55
   Seamless Immutable   █ 250.23
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 348.75K | ±0.68% | 2.8674ms | 3.7270ms | 174.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 330.62K | ±1.12% | 3.0247ms | 4.0180ms | 165.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.57K | ±0.65% | 33.8196ms | 46.6470ms | 14.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.48K | ±0.58% | 46.5526ms | 92.9140ms | 10.74K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.56% | 157.3006ms | 183.4920ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 714.55 | ±1.46% | 1399.4902ms | 2051.3920ms | 358.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 250.23 | ±0.72% | 3996.3929ms | 4632.8840ms | 126.00 |

**Key Insight:** Native Map is **1393.75x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.43K
🥈 Craft                ████████████████████████████████████████ 273.29K
🥉 Mutative             █████████████████████████████ 197.80K
   Immutable.js         ████████████████████████ 162.42K
   Immer                ██████████████████ 123.59K
   Seamless Immutable   ███ 18.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.13M | ±0.60% | 0.1631ms | 0.2410ms | 3.07M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.43K | ±0.43% | 3.6439ms | 4.2280ms | 137.22K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.29K | ±0.60% | 3.6591ms | 4.3080ms | 136.65K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.80K | ±0.72% | 5.0556ms | 5.9110ms | 98.90K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 162.42K | ±0.56% | 6.1570ms | 7.5940ms | 81.21K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 123.59K | ±0.76% | 8.0910ms | 14.7980ms | 61.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.83K | ±0.57% | 53.1002ms | 63.3080ms | 9.42K |

**Key Insight:** Native Spread is **325.55x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T00:00:31.722Z*
