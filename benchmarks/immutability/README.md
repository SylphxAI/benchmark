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
- **Last Run:** 6:01:15 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.7/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.4/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.3/100 | 75.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.6/100 | 42.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.9/100 | 33.8% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.4% |

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
🥇 Craft                ████████████████████████████████████████ 214.11K
🥈 Immer                █████████████████████ 112.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 214.11K | ±2.22% | 4.6704ms | 9.1980ms | 107.06K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.43K | ±1.92% | 8.8940ms | 19.8080ms | 56.22K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 959.00K
🥈 Immer                █████ 129.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 959.00K | ±0.19% | 1.0428ms | 1.8040ms | 479.50K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.75K | ±1.69% | 7.7070ms | 18.0440ms | 64.88K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 171.42K
🥈 Immer                ██████████████ 59.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 171.42K | ±2.03% | 5.8335ms | 11.5120ms | 85.71K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.84K | ±1.89% | 16.7117ms | 32.6310ms | 29.92K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 724.71K
🥈 Mutative             ██████████████████████████ 466.05K
🥉 Immer                ██████████ 175.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 724.71K | ±1.84% | 1.3799ms | 3.0050ms | 362.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 466.05K | ±0.78% | 2.1457ms | 3.6570ms | 233.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.18K | ±1.13% | 5.7085ms | 9.7390ms | 87.59K |

**Key Insight:** Craft is **4.14x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.21M
🥈 Mutative             ██████████████ 419.76K
🥉 Immer                █████ 156.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.21M | ±0.61% | 0.8293ms | 1.2020ms | 602.93K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 419.76K | ±0.56% | 2.3823ms | 2.8950ms | 209.88K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.44K | ±0.75% | 6.3923ms | 12.3940ms | 78.22K |

**Key Insight:** Craft is **7.71x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 831.47K
🥈 Mutative             █████████████████████ 436.87K
🥉 Immer                ████████ 165.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 831.47K | ±0.60% | 1.2027ms | 1.5920ms | 415.74K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 436.87K | ±0.58% | 2.2890ms | 3.4060ms | 218.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.05K | ±0.53% | 6.0589ms | 8.7860ms | 82.52K |

**Key Insight:** Craft is **5.04x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 801.56K
🥈 Mutative             ██████████████████████ 433.13K
🥉 Immer                █████████ 179.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 801.56K | ±0.84% | 1.2476ms | 1.6520ms | 400.78K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 433.13K | ±0.66% | 2.3088ms | 2.9260ms | 216.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.13K | ±0.57% | 5.5826ms | 7.2140ms | 89.56K |

**Key Insight:** Craft is **4.47x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.21K
🥈 Mutative             █████████████████████████████████ 146.06K
🥉 Immer                ██████████████████ 78.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.21K | ±0.50% | 5.6430ms | 6.7730ms | 88.61K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 146.06K | ±0.55% | 6.8466ms | 10.5190ms | 73.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.17K | ±1.10% | 12.7934ms | 23.8550ms | 39.08K |

**Key Insight:** Craft is **2.27x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.34K
🥈 Mutative             █████████████ 75.36K
🥉 Immer                ██ 13.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.34K | ±0.58% | 4.4775ms | 5.4210ms | 111.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.36K | ±0.53% | 13.2692ms | 23.0830ms | 37.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.68K | ±0.47% | 73.1064ms | 97.0920ms | 6.84K |

**Key Insight:** Craft is **16.33x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 221.64K
🥈 Immer                █████████████ 70.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.64K | ±0.56% | 4.5118ms | 5.5300ms | 110.82K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.79K | ±0.46% | 14.1272ms | 25.1780ms | 35.39K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Mutative             ██████████████████████████████████████ 988.64K
🥉 Immutability Helper  ████████████████████████████████████ 955.77K
   Craft                ████████████████████████████████████ 937.73K
   Immer                ██████████████████████████ 687.56K
   Seamless Immutable   █████ 125.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.48M | ±0.10% | 0.0691ms | 0.1100ms | 7.24M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.45% | 0.9544ms | 1.6330ms | 523.89K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 988.64K | ±0.53% | 1.0115ms | 1.4620ms | 494.32K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 955.77K | ±0.22% | 1.0463ms | 1.8940ms | 477.88K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 937.73K | ±2.91% | 1.0664ms | 2.6550ms | 468.87K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 687.56K | ±2.01% | 1.4544ms | 3.2160ms | 343.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 125.29K | ±0.43% | 7.9815ms | 16.1200ms | 62.65K |

**Key Insight:** Native Spread is **115.55x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 493.48K
🥈 Mutative             ████████████████████████████████ 390.63K
🥉 Craft                ███████████████████████████ 335.86K
   Immutable.js         ███████████████████ 229.58K
   Immer                ████████████ 153.67K
   Seamless Immutable   ███ 37.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.79M | ±0.19% | 0.0848ms | 0.1200ms | 5.89M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 493.48K | ±0.48% | 2.0264ms | 2.5650ms | 246.74K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 390.63K | ±5.66% | 2.5600ms | 4.3890ms | 195.31K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 335.86K | ±2.85% | 2.9775ms | 5.4400ms | 167.93K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 229.58K | ±0.52% | 4.3557ms | 5.1190ms | 114.79K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.67K | ±2.50% | 6.5074ms | 12.3730ms | 76.84K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.10K | ±0.44% | 26.9521ms | 37.7010ms | 18.55K |

**Key Insight:** Native Spread is **317.68x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.66M
🥈 Immutability Helper  █████████████████████████████████ 1.37M
🥉 Craft                ████████████ 506.31K
   Mutative             ██████████ 413.05K
   Immer                ███████ 276.86K
   Seamless Immutable   █ 60.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.00M | ±1.66% | 0.0909ms | 0.1200ms | 5.50M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.66M | ±0.88% | 0.6020ms | 0.9810ms | 830.56K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±1.06% | 0.7290ms | 0.8620ms | 685.88K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 506.31K | ±0.83% | 1.9751ms | 2.6350ms | 253.15K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 413.05K | ±1.02% | 2.4210ms | 3.2050ms | 206.53K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 276.86K | ±0.78% | 3.6120ms | 4.5690ms | 138.43K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.65K | ±0.88% | 16.4868ms | 26.1280ms | 30.33K |

**Key Insight:** Native Spread is **181.32x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 753.50K
🥈 Immutability Helper  ██████████████████████████████ 573.37K
🥉 Craft                █████████████████ 312.46K
   Mutative             ███████████ 211.39K
   Immer                ███████ 140.02K
   Seamless Immutable   ███ 60.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.06M | ±14.91% | 0.0904ms | 0.1200ms | 5.53M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 753.50K | ±1.26% | 1.3271ms | 1.7830ms | 376.75K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 573.37K | ±0.46% | 1.7441ms | 1.9240ms | 286.68K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 312.46K | ±0.92% | 3.2004ms | 3.8670ms | 156.23K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 211.39K | ±1.25% | 4.7306ms | 6.0920ms | 105.69K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.02K | ±0.97% | 7.1421ms | 13.4950ms | 70.01K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.22K | ±1.20% | 16.6061ms | 25.8780ms | 30.11K |

**Key Insight:** Native Filter is **183.72x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 492.64K
🥈 Mutative             ████████████████████████████████████ 441.42K
🥉 Immutability Helper  ████████████████████████████████ 399.90K
   Immer                ███████████████████████ 282.91K
   Immutable.js         ██████████████ 175.97K
   Seamless Immutable   ███ 30.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.53M | ±0.76% | 0.0867ms | 0.1210ms | 5.76M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 492.64K | ±0.49% | 2.0299ms | 3.8570ms | 246.32K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 441.42K | ±0.90% | 2.2654ms | 2.8560ms | 220.71K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.90K | ±0.27% | 2.5006ms | 3.0460ms | 199.95K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.91K | ±0.35% | 3.5347ms | 4.2680ms | 141.45K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 175.97K | ±0.54% | 5.6829ms | 8.2350ms | 87.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.95K | ±0.66% | 32.3053ms | 63.2590ms | 15.48K |

**Key Insight:** Native Map is **372.41x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.86K
🥈 Craft                ███████████████████████████████████ 266.21K
🥉 Mutative             ███████████████████████████ 211.51K
   Immutable.js         ██████████████████████ 172.95K
   Immer                █████████████ 96.90K
   Seamless Immutable   ███ 22.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.75M | ±1.16% | 0.1143ms | 0.1800ms | 4.37M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.86K | ±0.86% | 3.2483ms | 3.9370ms | 153.93K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 266.21K | ±0.93% | 3.7564ms | 4.4180ms | 133.10K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 211.51K | ±0.89% | 4.7280ms | 5.7010ms | 105.75K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.95K | ±0.44% | 5.7822ms | 8.7460ms | 86.47K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.90K | ±0.79% | 10.3196ms | 20.1980ms | 48.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.36K | ±0.67% | 44.7259ms | 55.8750ms | 11.18K |

**Key Insight:** Native Spread is **391.31x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 336.55K
🥈 Immer                ████ 29.72K
🥉 Craft                ███ 21.38K
   Immutability Helper  █ 6.34K
   Immutable.js         █ 661.44
   Seamless Immutable   █ 252.38
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 344.25K | ±1.03% | 2.9048ms | 3.3860ms | 172.13K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 336.55K | ±1.04% | 2.9713ms | 3.8570ms | 168.28K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.72K | ±0.80% | 33.6417ms | 45.1150ms | 14.86K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.38K | ±0.67% | 46.7830ms | 56.4160ms | 10.69K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.34K | ±0.81% | 157.7844ms | 181.5500ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 661.44 | ±1.82% | 1511.8546ms | 2362.3660ms | 331.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.38 | ±1.08% | 3962.2310ms | 4850.6070ms | 127.00 |

**Key Insight:** Native Map is **1364.01x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 270.94K
🥈 Craft                ███████████████████████████████████████ 265.50K
🥉 Mutative             █████████████████████████████ 199.25K
   Immutable.js         ██████████████████████ 146.79K
   Immer                ██████████████████ 125.16K
   Seamless Immutable   ███ 18.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 5.71M | ±1.88% | 0.1751ms | 0.1810ms | 2.86M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 270.94K | ±1.09% | 3.6908ms | 4.4780ms | 135.47K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.50K | ±1.28% | 3.7664ms | 4.4080ms | 132.75K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.25K | ±0.95% | 5.0187ms | 6.1010ms | 99.63K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 146.79K | ±1.39% | 6.8125ms | 11.4710ms | 73.39K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.16K | ±1.09% | 7.9895ms | 15.0980ms | 62.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.93K | ±0.89% | 52.8358ms | 64.0510ms | 9.46K |

**Key Insight:** Native Spread is **301.79x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T18:12:12.640Z*
