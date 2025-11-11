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
- **Last Run:** 1:45:37 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.6/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.2/100 | 77.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.2/100 | 73.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.4/100 | 42.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.3% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.4% |

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
🥇 Craft                ████████████████████████████████████████ 218.39K
🥈 Immer                ████████████████████ 111.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 218.39K | ±2.09% | 4.5790ms | 9.1870ms | 109.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.19K | ±1.90% | 8.9939ms | 25.9490ms | 55.59K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 928.93K
🥈 Immer                ██████ 130.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 928.93K | ±0.19% | 1.0765ms | 1.6120ms | 464.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.58K | ±1.55% | 7.6584ms | 17.6330ms | 65.29K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.35K
🥈 Immer                ██████████████ 60.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 175.35K | ±1.69% | 5.7027ms | 10.9210ms | 87.68K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.32K | ±1.71% | 16.5778ms | 33.3920ms | 30.16K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 753.14K
🥈 Mutative             ████████████████████████ 451.56K
🥉 Immer                █████████ 177.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 753.14K | ±1.60% | 1.3278ms | 2.7650ms | 376.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.56K | ±2.00% | 2.2146ms | 3.3670ms | 225.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.51K | ±0.86% | 5.6336ms | 9.6270ms | 88.75K |

**Key Insight:** Craft is **4.24x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             ██████████████ 431.38K
🥉 Immer                █████ 155.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.60% | 0.7877ms | 1.1620ms | 634.78K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 431.38K | ±0.40% | 2.3182ms | 2.7750ms | 215.69K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.92K | ±0.36% | 6.4135ms | 14.1560ms | 77.96K |

**Key Insight:** Craft is **8.14x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 870.26K
🥈 Mutative             █████████████████████ 457.13K
🥉 Immer                ████████ 166.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 870.26K | ±0.37% | 1.1491ms | 1.4930ms | 435.13K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.13K | ±0.41% | 2.1876ms | 2.6750ms | 228.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.49K | ±0.67% | 6.0065ms | 12.2030ms | 83.24K |

**Key Insight:** Craft is **5.23x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 847.95K
🥈 Mutative             █████████████████████ 449.11K
🥉 Immer                █████████ 181.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 847.95K | ±0.38% | 1.1793ms | 1.5130ms | 423.98K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.11K | ±0.40% | 2.2266ms | 2.7160ms | 224.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.67K | ±0.36% | 5.5045ms | 6.9030ms | 90.83K |

**Key Insight:** Craft is **4.67x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.03K
🥈 Mutative             ████████████████████████████████ 148.32K
🥉 Immer                █████████████████ 80.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 184.03K | ±0.52% | 5.4338ms | 10.0890ms | 92.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.32K | ±0.53% | 6.7423ms | 10.6900ms | 74.16K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.50K | ±0.49% | 12.4230ms | 23.0430ms | 40.25K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.52K
🥈 Mutative             █████████████ 77.39K
🥉 Immer                ██ 14.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 229.52K | ±0.44% | 4.3569ms | 6.6320ms | 114.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.39K | ±0.49% | 12.9215ms | 22.5420ms | 38.70K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 14.09K | ±0.42% | 70.9614ms | 94.8270ms | 7.05K |

**Key Insight:** Craft is **16.29x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.51K
🥈 Immer                █████████████ 71.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.51K | ±0.40% | 4.4148ms | 5.3500ms | 113.25K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.09K | ±0.30% | 14.0674ms | 24.4960ms | 35.54K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Craft                ████████████████████████████████████ 962.91K
🥉 Mutative             ████████████████████████████████████ 957.51K
   Immutability Helper  ████████████████████████████████████ 946.83K
   Immer                █████████████████████████ 658.96K
   Seamless Immutable   █████ 131.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.72M | ±0.10% | 0.0679ms | 0.0900ms | 7.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.10% | 0.9430ms | 1.1720ms | 530.23K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 962.91K | ±2.55% | 1.0385ms | 2.6350ms | 481.45K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 957.51K | ±0.41% | 1.0444ms | 1.4830ms | 478.76K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 946.83K | ±0.17% | 1.0562ms | 1.4030ms | 473.42K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 658.96K | ±1.97% | 1.5175ms | 3.3560ms | 329.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 131.83K | ±0.32% | 7.5855ms | 10.8800ms | 65.92K |

**Key Insight:** Native Spread is **111.66x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 445.27K
🥈 Mutative             ███████████████████████████████████ 392.40K
🥉 Craft                ████████████████████████████ 313.13K
   Immutable.js         ███████████████████ 206.57K
   Immer                ██████████████ 152.39K
   Seamless Immutable   ███ 37.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.54M | ±0.17% | 0.0866ms | 0.1410ms | 5.77M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 445.27K | ±0.36% | 2.2458ms | 3.9870ms | 222.63K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 392.40K | ±3.19% | 2.5484ms | 4.5090ms | 196.20K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 313.13K | ±2.72% | 3.1936ms | 6.6230ms | 156.56K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 206.57K | ±1.43% | 4.8409ms | 8.6670ms | 103.29K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 152.39K | ±1.80% | 6.5623ms | 11.8620ms | 76.19K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.74K | ±0.33% | 26.4940ms | 38.2720ms | 18.87K |

**Key Insight:** Native Spread is **305.81x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.72M
🥈 Immutability Helper  ████████████████████████████████ 1.38M
🥉 Craft                ████████████ 515.26K
   Mutative             ██████████ 430.12K
   Immer                ███████ 283.21K
   Seamless Immutable   █ 61.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.14M | ±1.49% | 0.0898ms | 0.1200ms | 5.57M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.72M | ±0.43% | 0.5820ms | 0.8720ms | 859.16K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.66% | 0.7234ms | 0.7710ms | 691.18K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 515.26K | ±0.43% | 1.9407ms | 2.4650ms | 257.63K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 430.12K | ±0.53% | 2.3249ms | 2.8760ms | 215.06K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 283.21K | ±0.38% | 3.5309ms | 7.3440ms | 141.61K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.76K | ±0.79% | 16.1926ms | 25.4080ms | 30.88K |

**Key Insight:** Native Spread is **180.40x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 788.84K
🥈 Immutability Helper  █████████████████████████████ 567.15K
🥉 Craft                ████████████████ 317.67K
   Mutative             ███████████ 219.33K
   Immer                ███████ 143.49K
   Seamless Immutable   ███ 61.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.56M | ±0.79% | 0.0796ms | 0.1200ms | 6.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 788.84K | ±1.11% | 1.2677ms | 1.6830ms | 394.42K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 567.15K | ±0.29% | 1.7632ms | 1.8940ms | 283.57K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 317.67K | ±0.91% | 3.1480ms | 3.8670ms | 158.83K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.33K | ±0.83% | 4.5594ms | 5.2900ms | 109.67K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.49K | ±0.74% | 6.9693ms | 11.6620ms | 71.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.89K | ±1.04% | 16.1587ms | 25.5780ms | 30.94K |

**Key Insight:** Native Filter is **203.01x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 474.66K
🥈 Mutative             ██████████████████████████████████████ 453.79K
🥉 Immutability Helper  █████████████████████████████████ 391.05K
   Immer                ███████████████████████ 274.66K
   Immutable.js         ███████████████ 175.77K
   Seamless Immutable   ███ 31.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.60M | ±0.68% | 0.0862ms | 0.1200ms | 5.80M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 474.66K | ±0.33% | 2.1068ms | 3.4660ms | 237.33K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 453.79K | ±0.43% | 2.2037ms | 2.7250ms | 226.90K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 391.05K | ±0.47% | 2.5572ms | 3.9370ms | 195.52K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 274.66K | ±0.67% | 3.6408ms | 7.2840ms | 137.33K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 175.77K | ±1.56% | 5.6894ms | 9.2470ms | 87.88K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.71K | ±0.38% | 31.5400ms | 42.8400ms | 15.85K |

**Key Insight:** Native Map is **365.72x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.01K
🥈 Craft                ███████████████████████████████████ 268.02K
🥉 Mutative             ████████████████████████████ 214.83K
   Immutable.js         █████████████████████ 158.71K
   Immer                ████████████ 94.73K
   Seamless Immutable   ███ 22.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.02M | ±0.87% | 0.1109ms | 0.1900ms | 4.51M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.01K | ±0.59% | 3.2572ms | 3.7670ms | 153.51K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 268.02K | ±0.54% | 3.7311ms | 4.4480ms | 134.01K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 214.83K | ±0.67% | 4.6548ms | 5.8110ms | 107.42K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.71K | ±1.74% | 6.3008ms | 10.8600ms | 79.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 94.73K | ±0.70% | 10.5566ms | 20.3870ms | 47.36K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.55K | ±0.64% | 44.3504ms | 54.8630ms | 11.27K |

**Key Insight:** Native Spread is **399.85x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 354.95K
🥈 Immer                ███ 29.78K
🥉 Craft                ██ 21.97K
   Immutability Helper  █ 6.26K
   Immutable.js         █ 711.17
   Seamless Immutable   █ 251.43
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 354.95K | ±0.88% | 2.8173ms | 3.5670ms | 177.48K |
| 🥈 | **Native Map** | 350.41K | ±0.80% | 2.8538ms | 3.4160ms | 175.21K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.78K | ±0.64% | 33.5755ms | 47.0580ms | 14.89K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.97K | ±0.65% | 45.5219ms | 54.7630ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.26K | ±0.67% | 159.8022ms | 181.2980ms | 3.13K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 711.17 | ±1.44% | 1406.1264ms | 2161.2020ms | 356.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.43 | ±0.81% | 3977.1748ms | 4616.6140ms | 126.00 |

**Key Insight:** Mutative is **1411.70x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.68K
🥈 Craft                ███████████████████████████████████████ 267.31K
🥉 Mutative             ████████████████████████████ 193.61K
   Immutable.js         █████████████████████ 146.30K
   Immer                ██████████████████ 121.90K
   Seamless Immutable   ███ 19.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.45M | ±1.25% | 0.1551ms | 0.1800ms | 3.22M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.68K | ±0.55% | 3.6406ms | 4.1480ms | 137.34K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 267.31K | ±0.95% | 3.7409ms | 4.7490ms | 133.66K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 193.61K | ±1.02% | 5.1651ms | 5.8410ms | 96.81K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 146.30K | ±2.22% | 6.8352ms | 10.1190ms | 73.15K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 121.90K | ±1.00% | 8.2034ms | 16.0390ms | 60.95K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.16K | ±0.80% | 52.1969ms | 63.0280ms | 9.58K |

**Key Insight:** Native Spread is **336.54x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T02:15:55.080Z*
