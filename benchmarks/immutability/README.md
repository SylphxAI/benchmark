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
- **Last Run:** 5:40:25 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 55.9/100 | 76.4% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.5/100 | 74.5% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.3% |
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
🥇 Craft                ████████████████████████████████████████ 219.25K
🥈 Immer                █████████████████████ 113.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 219.25K | ±1.98% | 4.5611ms | 9.0970ms | 109.62K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.99K | ±1.76% | 8.7724ms | 18.3750ms | 57.00K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 964.99K
🥈 Immer                █████ 131.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 964.99K | ±0.18% | 1.0363ms | 1.6630ms | 482.50K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.43K | ±1.52% | 7.6088ms | 16.1900ms | 65.71K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.74K
🥈 Immer                ██████████████ 60.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 177.74K | ±1.78% | 5.6262ms | 10.8000ms | 88.87K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.22K | ±1.68% | 16.6047ms | 31.7490ms | 30.11K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 754.74K
🥈 Mutative             █████████████████████████ 468.99K
🥉 Immer                █████████ 176.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 754.74K | ±1.59% | 1.3250ms | 2.6350ms | 377.37K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 468.99K | ±0.73% | 2.1323ms | 3.2960ms | 234.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.46K | ±1.04% | 5.6671ms | 9.6380ms | 88.23K |

**Key Insight:** Craft is **4.28x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 426.91K
🥉 Immer                █████ 157.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.28M | ±0.43% | 0.7783ms | 1.0720ms | 642.43K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 426.91K | ±0.42% | 2.3424ms | 3.0960ms | 213.46K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.40K | ±0.67% | 6.3532ms | 13.5960ms | 78.70K |

**Key Insight:** Craft is **8.16x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 862.31K
🥈 Mutative             █████████████████████ 453.66K
🥉 Immer                ████████ 169.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 862.31K | ±0.45% | 1.1597ms | 1.5430ms | 431.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.66K | ±0.43% | 2.2043ms | 2.6950ms | 226.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.12K | ±0.36% | 5.9130ms | 9.6480ms | 84.56K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 847.54K
🥈 Mutative             █████████████████████ 450.87K
🥉 Immer                █████████ 181.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 847.54K | ±0.40% | 1.1799ms | 1.5030ms | 423.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.87K | ±0.42% | 2.2179ms | 2.6550ms | 225.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.13K | ±0.39% | 5.5210ms | 7.1740ms | 90.56K |

**Key Insight:** Craft is **4.68x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.91K
🥈 Mutative             ████████████████████████████████ 147.68K
🥉 Immer                █████████████████ 78.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 181.91K | ±0.48% | 5.4973ms | 8.5160ms | 90.95K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.68K | ±0.49% | 6.7712ms | 11.4820ms | 73.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.79K | ±0.67% | 12.6926ms | 25.6180ms | 39.39K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.98K
🥈 Mutative             █████████████ 74.77K
🥉 Immer                ██ 13.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 228.98K | ±0.46% | 4.3673ms | 5.6910ms | 114.49K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.77K | ±0.73% | 13.3744ms | 23.9250ms | 37.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.60K | ±0.40% | 73.5163ms | 92.8840ms | 6.80K |

**Key Insight:** Craft is **16.83x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.70K
🥈 Immer                █████████████ 71.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 223.70K | ±0.40% | 4.4702ms | 5.6210ms | 111.85K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.17K | ±0.59% | 14.0517ms | 25.3480ms | 35.58K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Mutative             █████████████████████████████████████ 991.25K
🥉 Immutability Helper  ████████████████████████████████████ 956.20K
   Craft                ████████████████████████████████████ 955.26K
   Immer                ██████████████████████████ 698.08K
   Seamless Immutable   ████ 112.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.50M | ±0.10% | 0.0690ms | 0.1100ms | 7.25M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.16% | 0.9392ms | 1.1720ms | 532.35K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 991.25K | ±0.17% | 1.0088ms | 1.2520ms | 495.63K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 956.20K | ±0.27% | 1.0458ms | 1.8240ms | 478.10K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 955.26K | ±2.87% | 1.0468ms | 2.6750ms | 477.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 698.08K | ±1.86% | 1.4325ms | 3.2060ms | 349.04K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 112.82K | ±0.54% | 8.8634ms | 17.0320ms | 56.41K |

**Key Insight:** Native Spread is **128.48x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 526.47K
🥈 Mutative             ██████████████████████████████ 391.63K
🥉 Craft                ██████████████████████████ 341.16K
   Immutable.js         ██████████████████ 235.75K
   Immer                ████████████ 153.80K
   Seamless Immutable   ███ 37.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.59M | ±0.46% | 0.0863ms | 0.1300ms | 5.79M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 526.47K | ±0.46% | 1.8995ms | 2.3240ms | 263.23K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 391.63K | ±1.30% | 2.5534ms | 4.7890ms | 195.81K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 341.16K | ±2.77% | 2.9312ms | 5.4600ms | 170.58K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 235.75K | ±0.49% | 4.2418ms | 5.0890ms | 117.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.80K | ±2.37% | 6.5019ms | 13.0440ms | 76.90K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.02K | ±0.59% | 27.0091ms | 40.3550ms | 18.51K |

**Key Insight:** Native Spread is **312.99x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.76M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ████████████ 517.44K
   Mutative             █████████ 415.02K
   Immer                ██████ 283.42K
   Seamless Immutable   █ 61.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.67M | ±1.23% | 0.0857ms | 0.1200ms | 5.84M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.76M | ±0.33% | 0.5673ms | 0.8320ms | 881.30K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.42% | 0.7112ms | 0.9210ms | 703.07K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 517.44K | ±0.43% | 1.9326ms | 2.3150ms | 258.72K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 415.02K | ±0.63% | 2.4095ms | 3.0360ms | 207.51K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 283.42K | ±0.63% | 3.5284ms | 6.1620ms | 141.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.33K | ±0.45% | 16.3050ms | 26.0490ms | 30.67K |

**Key Insight:** Native Spread is **190.33x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 778.18K
🥈 Immutability Helper  ██████████████████████████████ 580.25K
🥉 Craft                ████████████████ 319.11K
   Mutative             ███████████ 214.52K
   Immer                ███████ 140.71K
   Seamless Immutable   ███ 60.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.98M | ±1.47% | 0.0835ms | 0.1200ms | 5.99M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 778.18K | ±0.81% | 1.2851ms | 1.7830ms | 389.09K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.25K | ±0.30% | 1.7234ms | 1.8740ms | 290.13K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 319.11K | ±0.57% | 3.1337ms | 3.8170ms | 159.56K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.52K | ±0.64% | 4.6615ms | 5.7310ms | 107.26K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.71K | ±0.57% | 7.1069ms | 15.2880ms | 70.35K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.79K | ±0.78% | 16.4513ms | 26.1080ms | 30.39K |

**Key Insight:** Native Filter is **197.09x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 485.39K
🥈 Mutative             ████████████████████████████████████ 431.33K
🥉 Immutability Helper  █████████████████████████████████ 402.36K
   Immer                ███████████████████████ 284.29K
   Immutable.js         ███████████████ 180.72K
   Seamless Immutable   ███ 31.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.10M | ±1.41% | 0.0901ms | 0.1300ms | 5.55M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 485.39K | ±1.28% | 2.0602ms | 2.5250ms | 242.69K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 431.33K | ±1.25% | 2.3184ms | 2.9460ms | 215.67K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 402.36K | ±0.50% | 2.4853ms | 3.1860ms | 201.18K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.29K | ±0.48% | 3.5175ms | 4.4980ms | 142.15K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 180.72K | ±1.26% | 5.5335ms | 7.1730ms | 90.36K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.33K | ±1.10% | 31.9185ms | 46.5160ms | 15.66K |

**Key Insight:** Native Map is **354.43x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.86K
🥈 Craft                ███████████████████████████████████ 270.26K
🥉 Mutative             ███████████████████████████ 207.92K
   Immutable.js         ██████████████████████ 172.06K
   Immer                █████████████ 99.18K
   Seamless Immutable   ███ 22.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.03M | ±0.69% | 0.1108ms | 0.1500ms | 4.51M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.86K | ±0.50% | 3.2272ms | 3.6370ms | 154.93K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 270.26K | ±0.50% | 3.7002ms | 4.8790ms | 135.13K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 207.92K | ±0.53% | 4.8096ms | 9.9180ms | 103.96K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.06K | ±0.28% | 5.8119ms | 8.4760ms | 86.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.18K | ±0.60% | 10.0826ms | 19.3760ms | 49.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.52K | ±0.58% | 44.4040ms | 57.6780ms | 11.26K |

**Key Insight:** Native Spread is **400.92x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 360.27K
🥈 Immer                ███ 29.80K
🥉 Craft                ██ 22.08K
   Immutability Helper  █ 6.34K
   Immutable.js         █ 729.18
   Seamless Immutable   █ 254.49
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 360.27K | ±0.84% | 2.7757ms | 3.6460ms | 180.14K |
| 🥈 | **Native Map** | 346.99K | ±0.83% | 2.8819ms | 4.0380ms | 173.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.80K | ±0.70% | 33.5576ms | 45.0240ms | 14.90K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.08K | ±0.51% | 45.2872ms | 53.9710ms | 11.04K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.34K | ±0.81% | 157.7087ms | 195.5750ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 729.18 | ±1.14% | 1371.4080ms | 1903.1250ms | 365.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.49 | ±0.95% | 3929.4296ms | 4701.9850ms | 128.00 |

**Key Insight:** Mutative is **1415.67x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.26K
🥈 Craft                ███████████████████████████████████████ 266.40K
🥉 Mutative             ████████████████████████████ 193.65K
   Immutable.js         ████████████████████████ 163.91K
   Immer                ██████████████████ 125.43K
   Seamless Immutable   ███ 18.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.18M | ±1.68% | 0.1618ms | 0.1810ms | 3.09M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.26K | ±0.76% | 3.6462ms | 4.1980ms | 137.13K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 266.40K | ±0.77% | 3.7538ms | 5.7100ms | 133.20K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 193.65K | ±1.03% | 5.1639ms | 6.0720ms | 96.83K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.91K | ±0.86% | 6.1010ms | 7.0930ms | 81.95K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.43K | ±1.03% | 7.9728ms | 16.8620ms | 62.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.79K | ±0.84% | 53.2100ms | 64.5910ms | 9.40K |

**Key Insight:** Native Spread is **328.94x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T06:10:15.952Z*
