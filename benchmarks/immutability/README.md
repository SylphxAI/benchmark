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
- **Last Run:** 6:45:27 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.1/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 77.8% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 74.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.4/100 | 43.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.5% |
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
🥇 Craft                ████████████████████████████████████████ 220.48K
🥈 Immer                ████████████████████ 111.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 220.48K | ±1.96% | 4.5357ms | 9.0470ms | 110.24K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.53K | ±1.53% | 8.9661ms | 25.2880ms | 55.77K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 937.33K
🥈 Immer                ██████ 132.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 937.33K | ±0.17% | 1.0669ms | 1.7030ms | 468.66K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.91K | ±1.41% | 7.5237ms | 14.8770ms | 66.46K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.54K
🥈 Immer                ██████████████ 61.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 175.54K | ±1.67% | 5.6968ms | 11.2310ms | 87.77K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.12K | ±1.59% | 16.3625ms | 31.6790ms | 30.56K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 749.78K
🥈 Mutative             ██████████████████████████ 484.21K
🥉 Immer                ██████████ 178.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 749.78K | ±1.56% | 1.3337ms | 2.9060ms | 374.89K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 484.21K | ±0.68% | 2.0652ms | 2.5050ms | 242.10K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.65K | ±0.87% | 5.5974ms | 9.3170ms | 89.33K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 433.24K
🥉 Immer                █████ 157.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.26M | ±0.40% | 0.7909ms | 1.0720ms | 632.18K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 433.24K | ±0.40% | 2.3082ms | 2.6750ms | 216.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.22K | ±0.54% | 6.3606ms | 14.6770ms | 78.61K |

**Key Insight:** Craft is **8.04x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 863.53K
🥈 Mutative             █████████████████████ 457.42K
🥉 Immer                ████████ 169.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 863.53K | ±0.36% | 1.1580ms | 1.4530ms | 431.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.42K | ±0.40% | 2.1862ms | 2.5940ms | 228.71K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.70K | ±0.28% | 5.8928ms | 8.8060ms | 84.85K |

**Key Insight:** Craft is **5.09x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 838.03K
🥈 Mutative             ██████████████████████ 453.25K
🥉 Immer                █████████ 182.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 838.03K | ±0.39% | 1.1933ms | 1.5030ms | 419.01K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.25K | ±0.43% | 2.2063ms | 2.5950ms | 226.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.23K | ±0.34% | 5.4877ms | 6.3720ms | 91.11K |

**Key Insight:** Craft is **4.60x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.64K
🥈 Mutative             ████████████████████████████████ 149.87K
🥉 Immer                █████████████████ 79.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 185.64K | ±0.46% | 5.3866ms | 8.0150ms | 92.82K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.87K | ±0.46% | 6.6725ms | 11.0110ms | 74.94K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.37K | ±0.62% | 12.5984ms | 25.0570ms | 39.69K |

**Key Insight:** Craft is **2.34x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.82K
🥈 Mutative             ██████████████ 77.66K
🥉 Immer                ██ 13.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 229.82K | ±0.41% | 4.3513ms | 6.0710ms | 114.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.66K | ±0.44% | 12.8768ms | 22.7430ms | 38.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.84K | ±0.26% | 72.2721ms | 86.5810ms | 6.92K |

**Key Insight:** Craft is **16.61x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.94K
🥈 Immer                █████████████ 72.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.94K | ±0.32% | 4.4064ms | 5.1190ms | 113.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.04K | ±0.72% | 13.8806ms | 24.5860ms | 36.02K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             ████████████████████████████████████ 979.09K
🥉 Immutability Helper  ████████████████████████████████████ 977.66K
   Craft                ███████████████████████████████████ 957.13K
   Immer                ██████████████████████████ 691.93K
   Seamless Immutable   █████ 130.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.45M | ±0.10% | 0.0692ms | 0.1100ms | 7.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.14% | 0.9253ms | 1.0820ms | 540.34K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 979.09K | ±0.38% | 1.0214ms | 1.3220ms | 489.55K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 977.66K | ±0.34% | 1.0229ms | 1.6930ms | 488.83K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 957.13K | ±2.58% | 1.0448ms | 2.6950ms | 478.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 691.93K | ±1.80% | 1.4452ms | 3.1660ms | 345.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.09K | ±0.35% | 7.6872ms | 15.8490ms | 65.04K |

**Key Insight:** Native Spread is **111.11x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 509.42K
🥈 Mutative             ███████████████████████████████ 393.69K
🥉 Craft                ███████████████████████████ 346.27K
   Immutable.js         █████████████████ 221.14K
   Immer                ████████████ 157.95K
   Seamless Immutable   ███ 36.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.83M | ±0.12% | 0.0845ms | 0.1200ms | 5.92M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 509.42K | ±0.56% | 1.9630ms | 3.1760ms | 254.71K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 393.69K | ±1.26% | 2.5401ms | 4.8790ms | 196.84K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 346.27K | ±2.60% | 2.8879ms | 5.2300ms | 173.14K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 221.14K | ±1.73% | 4.5220ms | 7.0930ms | 110.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 157.95K | ±1.81% | 6.3312ms | 11.3920ms | 78.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.56K | ±0.44% | 27.3546ms | 49.5920ms | 18.28K |

**Key Insight:** Native Spread is **323.61x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.77M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ███████████ 504.19K
   Mutative             ██████████ 425.24K
   Immer                ██████ 280.52K
   Seamless Immutable   █ 62.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.59M | ±1.12% | 0.0862ms | 0.1110ms | 5.80M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.77M | ±0.42% | 0.5662ms | 0.8110ms | 883.14K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.38% | 0.7099ms | 0.7810ms | 704.34K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 504.19K | ±0.33% | 1.9834ms | 3.3160ms | 252.09K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 425.24K | ±0.37% | 2.3516ms | 2.7050ms | 212.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 280.52K | ±0.39% | 3.5649ms | 6.2220ms | 140.26K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.63K | ±0.34% | 15.9672ms | 25.3170ms | 31.32K |

**Key Insight:** Native Spread is **185.14x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 805.91K
🥈 Immutability Helper  █████████████████████████████ 584.59K
🥉 Craft                ████████████████ 315.88K
   Mutative             ███████████ 213.76K
   Immer                ███████ 139.52K
   Seamless Immutable   ███ 60.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.91M | ±0.69% | 0.0775ms | 0.1100ms | 6.45M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 805.91K | ±0.79% | 1.2408ms | 1.6130ms | 402.95K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 584.59K | ±0.22% | 1.7106ms | 1.9140ms | 292.30K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 315.88K | ±0.53% | 3.1658ms | 3.6270ms | 157.94K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 213.76K | ±0.48% | 4.6782ms | 5.2400ms | 106.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.52K | ±0.47% | 7.1674ms | 17.0320ms | 69.76K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.97K | ±0.67% | 16.4023ms | 27.2400ms | 30.48K |

**Key Insight:** Native Filter is **211.67x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 496.37K
🥈 Mutative             ██████████████████████████████████████ 467.32K
🥉 Immutability Helper  ████████████████████████████████ 400.33K
   Immer                ███████████████████████ 288.82K
   Immutable.js         ███████████████ 182.57K
   Seamless Immutable   ███ 31.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.50M | ±1.06% | 0.0953ms | 0.1300ms | 5.25M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 496.37K | ±0.41% | 2.0146ms | 2.4540ms | 248.19K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 467.32K | ±0.45% | 2.1399ms | 2.5050ms | 233.66K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.33K | ±0.21% | 2.4979ms | 4.6890ms | 200.17K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 288.82K | ±0.18% | 3.4624ms | 4.5580ms | 144.41K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 182.57K | ±1.62% | 5.4774ms | 8.4960ms | 91.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.83K | ±0.36% | 31.4126ms | 42.1490ms | 15.92K |

**Key Insight:** Native Map is **329.75x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 305.51K
🥈 Craft                ███████████████████████████████████ 270.03K
🥉 Mutative             ████████████████████████████ 216.70K
   Immutable.js         █████████████████████ 163.48K
   Immer                █████████████ 98.13K
   Seamless Immutable   ███ 21.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.32M | ±0.96% | 0.1201ms | 0.1510ms | 4.16M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 305.51K | ±0.79% | 3.2732ms | 3.6960ms | 152.76K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 270.03K | ±0.58% | 3.7032ms | 4.2790ms | 135.02K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.70K | ±0.59% | 4.6146ms | 5.2810ms | 108.35K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.48K | ±1.76% | 6.1171ms | 9.1270ms | 81.74K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.13K | ±0.57% | 10.1903ms | 19.6970ms | 49.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.81K | ±0.86% | 45.8570ms | 81.8320ms | 10.90K |

**Key Insight:** Native Spread is **381.70x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 369.02K
🥈 Immer                ███ 29.91K
🥉 Craft                ██ 22.08K
   Immutability Helper  █ 6.40K
   Immutable.js         █ 728.07
   Seamless Immutable   █ 257.34
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 369.02K | ±0.64% | 2.7099ms | 3.2460ms | 184.51K |
| 🥈 | **Native Map** | 357.11K | ±0.51% | 2.8002ms | 3.3860ms | 178.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.91K | ±0.35% | 33.4379ms | 47.4780ms | 14.95K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.08K | ±0.32% | 45.2951ms | 55.1430ms | 11.04K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.40K | ±0.31% | 156.2786ms | 176.2880ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 728.07 | ±0.97% | 1373.4942ms | 1885.0610ms | 365.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 257.34 | ±0.48% | 3885.8440ms | 4280.4930ms | 129.00 |

**Key Insight:** Mutative is **1433.97x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.76K
🥈 Craft                ████████████████████████████████████████ 276.40K
🥉 Mutative             █████████████████████████████ 197.44K
   Immutable.js         ███████████████████████ 155.69K
   Immer                ██████████████████ 127.65K
   Seamless Immutable   ███ 18.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.42M | ±0.79% | 0.1557ms | 0.1810ms | 3.21M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.76K | ±0.36% | 3.6132ms | 4.0080ms | 138.38K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 276.40K | ±0.37% | 3.6179ms | 4.0870ms | 138.20K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.44K | ±0.38% | 5.0649ms | 5.8210ms | 98.72K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 155.69K | ±1.62% | 6.4231ms | 12.6240ms | 77.84K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.65K | ±0.34% | 7.8338ms | 14.0560ms | 63.83K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.98K | ±0.63% | 52.6911ms | 63.6480ms | 9.49K |

**Key Insight:** Native Spread is **338.43x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T06:53:03.660Z*
