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
- **Last Run:** 5:02:05 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.0/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.3/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.3/100 | 74.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.6/100 | 44.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.4% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

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
🥇 Craft                ████████████████████████████████████████ 214.69K
🥈 Immer                █████████████████████ 113.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 214.69K | ±2.10% | 4.6580ms | 9.4280ms | 107.34K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.26K | ±1.57% | 8.8291ms | 19.5270ms | 56.63K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 963.30K
🥈 Immer                █████ 130.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 963.30K | ±0.18% | 1.0381ms | 1.4030ms | 481.65K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.70K | ±1.49% | 7.6510ms | 17.8030ms | 65.35K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.20K
🥈 Immer                ██████████████ 60.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 174.20K | ±1.72% | 5.7404ms | 14.3770ms | 87.10K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.20K | ±1.59% | 16.6110ms | 31.1380ms | 30.10K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 744.02K
🥈 Mutative             █████████████████████████ 463.98K
🥉 Immer                ██████████ 177.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 744.02K | ±1.58% | 1.3440ms | 2.9950ms | 372.01K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 463.98K | ±0.72% | 2.1553ms | 2.8150ms | 231.99K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.24K | ±0.93% | 5.6420ms | 9.7580ms | 88.62K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.30M
🥈 Mutative             █████████████ 419.30K
🥉 Immer                █████ 158.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.30M | ±0.41% | 0.7711ms | 1.0620ms | 648.46K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 419.30K | ±0.44% | 2.3849ms | 3.5160ms | 209.65K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 158.11K | ±0.62% | 6.3246ms | 12.8940ms | 79.06K |

**Key Insight:** Craft is **8.20x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 872.70K
🥈 Mutative             █████████████████████ 457.46K
🥉 Immer                ████████ 171.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 872.70K | ±0.40% | 1.1459ms | 1.5030ms | 436.35K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.46K | ±0.45% | 2.1860ms | 2.7250ms | 228.73K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 171.39K | ±0.34% | 5.8345ms | 9.9580ms | 85.70K |

**Key Insight:** Craft is **5.09x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 846.68K
🥈 Mutative             █████████████████████ 449.00K
🥉 Immer                █████████ 183.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 846.68K | ±0.43% | 1.1811ms | 1.5430ms | 423.34K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.00K | ±0.42% | 2.2272ms | 2.7750ms | 224.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.77K | ±0.38% | 5.4416ms | 8.9160ms | 91.89K |

**Key Insight:** Craft is **4.61x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.42K
🥈 Mutative             █████████████████████████████████ 148.72K
🥉 Immer                █████████████████ 79.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 181.42K | ±0.48% | 5.5121ms | 9.2170ms | 90.71K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.72K | ±0.49% | 6.7242ms | 11.4110ms | 74.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.22K | ±0.79% | 12.6228ms | 26.4090ms | 39.61K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.52K
🥈 Mutative             █████████████ 75.79K
🥉 Immer                ██ 13.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.52K | ±0.41% | 4.4147ms | 8.1850ms | 113.26K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.79K | ±0.47% | 13.1951ms | 22.9230ms | 37.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.18K | ±0.59% | 75.8709ms | 107.0000ms | 6.59K |

**Key Insight:** Craft is **17.19x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.94K
🥈 Immer                █████████████ 71.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.94K | ±0.33% | 4.4064ms | 5.2700ms | 113.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.96K | ±0.32% | 13.8964ms | 24.5460ms | 35.98K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 984.84K
🥉 Craft                ████████████████████████████████████ 965.54K
   Mutative             ████████████████████████████████████ 958.73K
   Immer                ██████████████████████████ 692.89K
   Seamless Immutable   █████ 126.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.70M | ±0.09% | 0.0680ms | 0.0900ms | 7.35M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.18% | 0.9369ms | 1.1020ms | 533.70K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 984.84K | ±0.12% | 1.0154ms | 1.2830ms | 492.42K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 965.54K | ±2.60% | 1.0357ms | 2.6560ms | 482.77K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 958.73K | ±0.68% | 1.0430ms | 1.7230ms | 479.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 692.89K | ±1.93% | 1.4432ms | 3.2760ms | 346.60K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.40K | ±0.31% | 7.9113ms | 16.8510ms | 63.20K |

**Key Insight:** Native Spread is **116.32x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 515.20K
🥈 Mutative             ██████████████████████████████ 381.03K
🥉 Craft                ██████████████████████████ 328.97K
   Immutable.js         ██████████████████ 232.43K
   Immer                ████████████ 150.84K
   Seamless Immutable   ███ 36.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.66M | ±0.12% | 0.0857ms | 0.1210ms | 5.83M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 515.20K | ±0.33% | 1.9410ms | 2.3540ms | 257.60K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 381.03K | ±4.35% | 2.6245ms | 5.3200ms | 190.52K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 328.97K | ±2.63% | 3.0397ms | 5.5500ms | 164.49K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 232.43K | ±0.42% | 4.3025ms | 5.6110ms | 116.21K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 150.84K | ±1.97% | 6.6297ms | 15.0090ms | 75.42K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.42K | ±0.40% | 27.4543ms | 38.9030ms | 18.21K |

**Key Insight:** Native Spread is **320.23x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ███████████ 501.83K
   Mutative             ██████████ 424.83K
   Immer                ██████ 282.20K
   Seamless Immutable   █ 60.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.37M | ±1.28% | 0.0880ms | 0.1200ms | 5.68M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±0.48% | 0.5718ms | 0.9020ms | 874.37K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.70% | 0.7087ms | 0.9010ms | 705.50K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 501.83K | ±0.48% | 1.9927ms | 2.4350ms | 250.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.83K | ±0.50% | 2.3539ms | 2.8350ms | 212.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 282.20K | ±0.48% | 3.5435ms | 4.5690ms | 141.10K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.50K | ±0.55% | 16.5298ms | 27.8720ms | 30.25K |

**Key Insight:** Native Spread is **187.92x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 790.11K
🥈 Immutability Helper  ████████████████████████████ 559.72K
🥉 Craft                ████████████████ 313.62K
   Mutative             ███████████ 216.45K
   Immer                ███████ 141.60K
   Seamless Immutable   ███ 59.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.68M | ±0.73% | 0.0789ms | 0.1200ms | 6.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 790.11K | ±0.87% | 1.2656ms | 1.6630ms | 395.06K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 559.72K | ±0.34% | 1.7866ms | 1.9840ms | 279.86K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 313.62K | ±0.81% | 3.1885ms | 3.6670ms | 156.96K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 216.45K | ±0.61% | 4.6201ms | 5.3200ms | 108.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.60K | ±0.63% | 7.0620ms | 12.7340ms | 70.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.51K | ±0.79% | 16.8051ms | 26.5500ms | 29.75K |

**Key Insight:** Native Filter is **213.09x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 484.75K
🥈 Mutative             ██████████████████████████████████████ 457.89K
🥉 Immutability Helper  ████████████████████████████████ 386.76K
   Immer                ██████████████████████ 269.09K
   Immutable.js         ████████████████ 194.14K
   Seamless Immutable   ███ 31.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.09M | ±1.14% | 0.0902ms | 0.1300ms | 5.55M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 484.75K | ±0.49% | 2.0629ms | 2.5450ms | 242.38K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 457.89K | ±0.58% | 2.1839ms | 2.8360ms | 228.95K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 386.76K | ±0.25% | 2.5856ms | 3.0660ms | 193.38K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 269.09K | ±0.24% | 3.7162ms | 6.2420ms | 134.54K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 194.14K | ±0.59% | 5.1509ms | 5.9710ms | 97.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.60K | ±0.44% | 31.6464ms | 44.1230ms | 15.80K |

**Key Insight:** Native Map is **350.99x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 304.83K
🥈 Craft                ███████████████████████████████████ 264.49K
🥉 Mutative             ████████████████████████████ 213.50K
   Immutable.js         ███████████████████████ 172.69K
   Immer                █████████████ 96.84K
   Seamless Immutable   ███ 22.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.54M | ±1.05% | 0.1171ms | 0.1510ms | 4.27M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 304.83K | ±0.64% | 3.2805ms | 3.9070ms | 152.42K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 264.49K | ±0.70% | 3.7808ms | 4.8990ms | 132.25K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.50K | ±0.62% | 4.6839ms | 6.1010ms | 106.75K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.69K | ±0.72% | 5.7907ms | 8.8470ms | 86.35K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.84K | ±0.63% | 10.3267ms | 19.5870ms | 48.42K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.25K | ±0.88% | 44.9402ms | 56.1050ms | 11.13K |

**Key Insight:** Native Spread is **383.71x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 353.67K
🥈 Immer                ███ 29.58K
🥉 Craft                ██ 21.79K
   Immutability Helper  █ 6.33K
   Immutable.js         █ 744.24
   Seamless Immutable   █ 254.54
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 353.67K | ±0.67% | 2.8275ms | 4.8900ms | 176.83K |
| 🥈 | **Native Map** | 349.58K | ±0.61% | 2.8606ms | 4.1380ms | 174.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.58K | ±0.42% | 33.8104ms | 44.7440ms | 14.79K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.79K | ±0.41% | 45.8957ms | 75.9620ms | 10.89K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.33K | ±0.49% | 157.9139ms | 218.5680ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 744.24 | ±1.16% | 1343.6443ms | 1827.4110ms | 373.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.54 | ±0.92% | 3928.6191ms | 5268.2720ms | 128.00 |

**Key Insight:** Mutative is **1389.42x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.91K
🥈 Craft                ███████████████████████████████████████ 268.49K
🥉 Mutative             █████████████████████████████ 198.44K
   Immutable.js         ████████████████████████ 164.50K
   Immer                ██████████████████ 126.80K
   Seamless Immutable   ███ 18.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.37M | ±0.83% | 0.1570ms | 0.2000ms | 3.19M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.91K | ±0.41% | 3.6376ms | 4.4380ms | 137.46K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 268.49K | ±0.45% | 3.7246ms | 4.4780ms | 134.24K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.44K | ±0.45% | 5.0392ms | 6.1920ms | 99.22K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 164.50K | ±0.55% | 6.0790ms | 10.1790ms | 82.25K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.80K | ±0.44% | 7.8864ms | 16.8510ms | 63.40K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.64K | ±0.50% | 53.6351ms | 65.0520ms | 9.32K |

**Key Insight:** Native Spread is **341.73x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T05:10:26.917Z*
