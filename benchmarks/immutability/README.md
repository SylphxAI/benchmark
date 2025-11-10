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
- **Last Run:** 7:02:26 PM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 77.6% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.9/100 | 76.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.3/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 33.7% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.5% |

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
🥇 Craft                ████████████████████████████████████████ 214.60K
🥈 Immer                ████████████████████ 109.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 214.60K | ±2.69% | 4.6599ms | 9.0370ms | 107.32K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 109.75K | ±2.05% | 9.1118ms | 26.3600ms | 54.87K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.03M
🥈 Immer                █████ 130.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.03M | ±0.22% | 0.9707ms | 1.2230ms | 515.09K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.24K | ±2.30% | 7.6779ms | 16.6010ms | 65.12K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.74K
🥈 Immer                ██████████████ 59.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.74K | ±2.07% | 5.7556ms | 11.4420ms | 86.87K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.78K | ±1.94% | 16.7278ms | 32.5110ms | 29.89K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 722.42K
🥈 Mutative             ██████████████████████████ 467.43K
🥉 Immer                ██████████ 180.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 722.42K | ±2.13% | 1.3842ms | 3.0160ms | 361.21K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 467.43K | ±0.77% | 2.1394ms | 3.0260ms | 233.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.35K | ±1.13% | 5.5449ms | 9.5080ms | 90.17K |

**Key Insight:** Craft is **4.01x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.20M
🥈 Mutative             ██████████████ 417.05K
🥉 Immer                █████ 153.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.20M | ±0.71% | 0.8335ms | 1.2420ms | 599.88K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 417.05K | ±0.74% | 2.3978ms | 3.1960ms | 208.52K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 153.32K | ±0.74% | 6.5223ms | 15.8000ms | 76.66K |

**Key Insight:** Craft is **7.83x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 827.67K
🥈 Mutative             ██████████████████████ 447.02K
🥉 Immer                ████████ 167.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 827.67K | ±0.70% | 1.2082ms | 1.7630ms | 413.83K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 447.02K | ±0.62% | 2.2370ms | 2.8950ms | 223.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.18K | ±0.54% | 5.9817ms | 9.9690ms | 83.59K |

**Key Insight:** Craft is **4.95x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 816.24K
🥈 Mutative             █████████████████████ 438.45K
🥉 Immer                █████████ 181.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 816.24K | ±0.93% | 1.2251ms | 1.6940ms | 408.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 438.45K | ±0.87% | 2.2807ms | 3.1260ms | 219.23K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.15K | ±0.61% | 5.5202ms | 8.3060ms | 90.58K |

**Key Insight:** Craft is **4.51x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.11K
🥈 Mutative             ████████████████████████████████ 144.70K
🥉 Immer                █████████████████ 77.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 180.11K | ±0.77% | 5.5522ms | 8.4960ms | 90.06K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 144.70K | ±0.87% | 6.9108ms | 10.8900ms | 72.35K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.44K | ±0.97% | 12.9128ms | 25.4880ms | 38.72K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 218.35K
🥈 Mutative             ██████████████ 73.92K
🥉 Immer                ██ 13.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 218.35K | ±0.76% | 4.5798ms | 5.9510ms | 109.17K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 73.92K | ±0.71% | 13.5279ms | 23.7350ms | 36.96K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.60K | ±0.49% | 73.5323ms | 96.6620ms | 6.80K |

**Key Insight:** Craft is **16.06x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.43K
🥈 Immer                █████████████ 70.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.43K | ±0.69% | 4.4756ms | 5.5510ms | 111.72K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.40K | ±0.45% | 14.2040ms | 25.5780ms | 35.20K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 976.15K
🥉 Craft                ███████████████████████████████████ 938.78K
   Mutative             ███████████████████████████████████ 931.80K
   Immer                ██████████████████████████ 695.68K
   Seamless Immutable   █████ 128.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.70M | ±0.11% | 0.0680ms | 0.1000ms | 7.35M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.11% | 0.9373ms | 1.1420ms | 533.46K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 976.15K | ±0.72% | 1.0244ms | 1.5430ms | 488.07K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 938.78K | ±3.18% | 1.0652ms | 2.6750ms | 469.39K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 931.80K | ±0.87% | 1.0732ms | 1.6930ms | 465.90K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 695.68K | ±2.26% | 1.4374ms | 3.2560ms | 347.84K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.85K | ±0.46% | 7.7612ms | 14.3870ms | 64.42K |

**Key Insight:** Native Spread is **114.09x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 490.77K
🥈 Mutative             ████████████████████████████████ 389.77K
🥉 Craft                ███████████████████████████ 337.02K
   Immutable.js         ███████████████████ 228.81K
   Immer                ████████████ 148.99K
   Seamless Immutable   ███ 37.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.70M | ±0.19% | 0.0855ms | 0.1200ms | 5.85M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 490.77K | ±0.62% | 2.0376ms | 2.7350ms | 245.38K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 389.77K | ±1.04% | 2.5656ms | 4.8190ms | 194.88K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 337.02K | ±3.14% | 2.9672ms | 5.3500ms | 168.51K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 228.81K | ±0.64% | 4.3704ms | 5.2700ms | 114.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 148.99K | ±2.52% | 6.7120ms | 15.4390ms | 74.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.04K | ±0.44% | 26.9952ms | 39.4940ms | 18.52K |

**Key Insight:** Native Spread is **315.86x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ███████████ 490.78K
   Mutative             █████████ 412.65K
   Immer                ██████ 267.53K
   Seamless Immutable   █ 59.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.52M | ±1.14% | 0.0868ms | 0.1210ms | 5.76M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±0.79% | 0.5726ms | 1.0320ms | 873.20K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.19% | 0.7109ms | 0.8010ms | 703.29K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 490.78K | ±0.51% | 2.0376ms | 3.4870ms | 245.39K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 412.65K | ±1.01% | 2.4234ms | 3.3070ms | 206.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 267.53K | ±0.75% | 3.7379ms | 8.3750ms | 133.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.57K | ±0.74% | 16.7866ms | 29.2250ms | 29.79K |

**Key Insight:** Native Spread is **193.30x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 762.00K
🥈 Immutability Helper  ███████████████████████████████ 581.25K
🥉 Craft                ████████████████ 313.58K
   Mutative             ███████████ 215.58K
   Immer                ███████ 139.73K
   Seamless Immutable   ███ 59.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.09M | ±2.31% | 0.0902ms | 0.1110ms | 5.55M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 762.00K | ±1.45% | 1.3123ms | 2.0140ms | 381.00K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 581.25K | ±0.33% | 1.7204ms | 1.8740ms | 290.63K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 313.58K | ±0.55% | 3.1890ms | 3.9380ms | 156.79K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 215.58K | ±0.67% | 4.6386ms | 5.7110ms | 107.79K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.73K | ±0.64% | 7.1567ms | 14.6580ms | 69.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.24K | ±0.84% | 16.8795ms | 30.2870ms | 29.62K |

**Key Insight:** Native Filter is **187.21x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 459.59K
🥈 Mutative             ██████████████████████████████████████ 431.40K
🥉 Immutability Helper  ███████████████████████████████████ 399.74K
   Immer                ████████████████████████ 278.36K
   Immutable.js         ████████████████ 180.44K
   Seamless Immutable   ███ 30.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.28M | ±2.37% | 0.0973ms | 0.1310ms | 5.14M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 459.59K | ±1.46% | 2.1759ms | 2.9450ms | 229.80K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 431.40K | ±1.76% | 2.3181ms | 3.0760ms | 215.70K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.74K | ±0.68% | 2.5016ms | 3.4660ms | 199.87K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 278.36K | ±0.57% | 3.5924ms | 4.7290ms | 139.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 180.44K | ±1.57% | 5.5421ms | 6.6430ms | 90.22K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.64K | ±1.09% | 32.6336ms | 57.1470ms | 15.32K |

**Key Insight:** Native Map is **335.55x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.02K
🥈 Craft                ██████████████████████████████████ 263.32K
🥉 Mutative             ███████████████████████████ 210.76K
   Immutable.js         ██████████████████████ 168.15K
   Immer                █████████████ 97.21K
   Seamless Immutable   ███ 21.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.88M | ±1.27% | 0.1126ms | 0.1700ms | 4.44M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.02K | ±0.84% | 3.2152ms | 3.9880ms | 155.51K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 263.32K | ±0.86% | 3.7977ms | 4.6490ms | 131.66K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 210.76K | ±1.06% | 4.7448ms | 5.7510ms | 105.38K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.15K | ±1.00% | 5.9470ms | 8.9770ms | 84.08K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.21K | ±0.87% | 10.2873ms | 20.8290ms | 48.60K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.89K | ±0.66% | 45.6767ms | 82.0040ms | 10.95K |

**Key Insight:** Native Spread is **405.50x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 320.72K
🥈 Immer                ████ 29.58K
🥉 Craft                ███ 21.84K
   Immutability Helper  █ 6.23K
   Immutable.js         █ 687.59
   Seamless Immutable   █ 252.92
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 329.81K | ±1.75% | 3.0321ms | 3.6870ms | 164.96K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 320.72K | ±1.73% | 3.1180ms | 3.9380ms | 160.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.58K | ±0.82% | 33.8119ms | 47.6290ms | 14.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.84K | ±0.74% | 45.7779ms | 58.5300ms | 10.92K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.23K | ±0.82% | 160.5870ms | 189.6870ms | 3.11K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 687.59 | ±2.10% | 1454.3467ms | 2382.7330ms | 344.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.92 | ±0.99% | 3953.8270ms | 4753.8240ms | 127.00 |

**Key Insight:** Native Map is **1304.01x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 272.28K
🥈 Craft                █████████████████████████████████████ 254.34K
🥉 Mutative             ████████████████████████████ 193.16K
   Immutable.js         ██████████████████████ 153.03K
   Immer                ██████████████████ 123.33K
   Seamless Immutable   ███ 18.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 5.71M | ±2.29% | 0.1753ms | 0.2000ms | 2.85M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 272.28K | ±1.11% | 3.6727ms | 4.7180ms | 136.14K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 254.34K | ±1.41% | 3.9318ms | 6.6320ms | 127.17K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 193.16K | ±1.37% | 5.1770ms | 6.2520ms | 96.58K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 153.03K | ±1.54% | 6.5346ms | 10.2290ms | 76.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 123.33K | ±1.16% | 8.1081ms | 16.3710ms | 61.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.45K | ±0.91% | 54.2047ms | 78.5470ms | 9.22K |

**Key Insight:** Native Spread is **309.24x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T19:11:35.336Z*
