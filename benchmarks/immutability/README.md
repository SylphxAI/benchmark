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
- **Last Run:** 2:36:19 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.4/100 | 74.1% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.5% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.5% |
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
🥇 Craft                ████████████████████████████████████████ 216.55K
🥈 Immer                █████████████████████ 116.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 216.55K | ±1.94% | 4.6179ms | 9.3480ms | 108.28K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 116.22K | ±1.56% | 8.6041ms | 18.7250ms | 58.11K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 979.96K
🥈 Immer                █████ 132.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 979.96K | ±0.19% | 1.0204ms | 1.9140ms | 489.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.62K | ±1.43% | 7.5402ms | 15.1290ms | 66.31K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.92K
🥈 Immer                ██████████████ 60.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 176.92K | ±1.73% | 5.6523ms | 11.1310ms | 88.46K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.37K | ±1.44% | 16.5647ms | 35.6270ms | 30.18K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 744.72K
🥈 Mutative             █████████████████████████ 472.14K
🥉 Immer                █████████ 175.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 744.72K | ±1.49% | 1.3428ms | 2.9860ms | 372.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.14K | ±0.73% | 2.1180ms | 3.4260ms | 236.07K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.17K | ±1.09% | 5.7086ms | 11.1810ms | 87.59K |

**Key Insight:** Craft is **4.25x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 431.39K
🥉 Immer                █████ 156.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.26M | ±0.39% | 0.7965ms | 1.1120ms | 627.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 431.39K | ±0.42% | 2.3181ms | 2.8850ms | 215.69K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.79K | ±0.64% | 6.3781ms | 14.9380ms | 78.39K |

**Key Insight:** Craft is **8.01x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 845.74K
🥈 Mutative             █████████████████████ 449.65K
🥉 Immer                ████████ 168.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 845.74K | ±0.35% | 1.1824ms | 1.5030ms | 422.87K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.65K | ±0.39% | 2.2240ms | 2.6740ms | 224.82K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.92K | ±0.33% | 5.9199ms | 8.2450ms | 84.46K |

**Key Insight:** Craft is **5.01x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 829.10K
🥈 Mutative             █████████████████████ 438.27K
🥉 Immer                █████████ 182.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 829.10K | ±0.40% | 1.2061ms | 1.5030ms | 414.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 438.27K | ±0.42% | 2.2817ms | 2.7650ms | 219.14K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.36K | ±0.35% | 5.4837ms | 8.4160ms | 91.18K |

**Key Insight:** Craft is **4.55x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 188.23K
🥈 Mutative             ███████████████████████████████ 145.75K
🥉 Immer                █████████████████ 80.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 188.23K | ±0.45% | 5.3125ms | 8.2050ms | 94.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 145.75K | ±1.65% | 6.8612ms | 13.0350ms | 72.87K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.53K | ±0.53% | 12.4182ms | 23.0230ms | 40.26K |

**Key Insight:** Craft is **2.34x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.71K
🥈 Mutative             ██████████████ 76.34K
🥉 Immer                ██ 13.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 223.71K | ±0.63% | 4.4700ms | 7.9350ms | 111.86K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.34K | ±0.43% | 13.0987ms | 22.4020ms | 38.17K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.60K | ±0.32% | 73.5270ms | 93.1740ms | 6.80K |

**Key Insight:** Craft is **16.45x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.16K
🥈 Immer                ████████████ 70.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 228.16K | ±0.33% | 4.3829ms | 5.1300ms | 114.08K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.56K | ±0.28% | 14.1718ms | 24.7460ms | 35.28K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             ████████████████████████████████████ 972.74K
🥉 Immutability Helper  ████████████████████████████████████ 970.77K
   Craft                ████████████████████████████████████ 960.76K
   Immer                █████████████████████████ 685.84K
   Seamless Immutable   █████ 128.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.67M | ±0.09% | 0.0682ms | 0.1000ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.15% | 0.9284ms | 1.1020ms | 538.54K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 972.74K | ±0.41% | 1.0280ms | 1.3320ms | 486.37K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 970.77K | ±0.10% | 1.0301ms | 1.2720ms | 485.39K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 960.76K | ±2.54% | 1.0408ms | 2.6650ms | 480.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 685.84K | ±1.93% | 1.4581ms | 3.2460ms | 342.92K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.65K | ±0.29% | 7.7728ms | 14.3470ms | 64.33K |

**Key Insight:** Native Spread is **114.03x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 498.23K
🥈 Mutative             ███████████████████████████████ 390.96K
🥉 Craft                ███████████████████████████ 339.40K
   Immutable.js         ██████████████████ 228.38K
   Immer                ████████████ 153.79K
   Seamless Immutable   ███ 37.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.60M | ±0.17% | 0.0862ms | 0.1410ms | 5.80M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 498.23K | ±0.30% | 2.0071ms | 3.4570ms | 249.11K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 390.96K | ±0.90% | 2.5578ms | 4.9690ms | 195.48K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 339.40K | ±2.78% | 2.9464ms | 5.5710ms | 169.70K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 228.38K | ±0.62% | 4.3786ms | 8.9960ms | 114.19K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.79K | ±1.81% | 6.5024ms | 13.5550ms | 76.89K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.81K | ±0.24% | 26.4455ms | 38.2220ms | 18.91K |

**Key Insight:** Native Spread is **306.73x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.70M
🥈 Immutability Helper  ██████████████████████████████████ 1.43M
🥉 Craft                ████████████ 516.36K
   Mutative             ██████████ 427.81K
   Immer                ███████ 291.76K
   Seamless Immutable   █ 61.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.52M | ±1.13% | 0.0868ms | 0.1200ms | 5.76M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.70M | ±0.43% | 0.5872ms | 0.7810ms | 851.54K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.43M | ±0.45% | 0.6976ms | 0.7620ms | 716.71K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 516.36K | ±0.40% | 1.9366ms | 2.3040ms | 258.18K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 427.81K | ±0.42% | 2.3375ms | 2.7550ms | 213.91K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 291.76K | ±0.39% | 3.4275ms | 4.0770ms | 145.88K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.85K | ±0.50% | 16.1681ms | 25.4170ms | 30.93K |

**Key Insight:** Native Spread is **186.25x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 783.85K
🥈 Immutability Helper  ██████████████████████████████ 579.25K
🥉 Craft                ████████████████ 319.72K
   Mutative             ███████████ 219.36K
   Immer                ███████ 144.05K
   Seamless Immutable   ███ 61.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.74M | ±0.69% | 0.0785ms | 0.1100ms | 6.37M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 783.85K | ±0.78% | 1.2758ms | 1.6430ms | 391.93K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 579.25K | ±0.28% | 1.7264ms | 1.9740ms | 289.63K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 319.72K | ±0.59% | 3.1277ms | 3.5560ms | 159.86K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.36K | ±0.43% | 4.5588ms | 5.0800ms | 109.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 144.05K | ±0.46% | 6.9422ms | 12.4130ms | 72.02K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.33K | ±0.62% | 16.3050ms | 25.7680ms | 30.67K |

**Key Insight:** Native Filter is **207.74x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 496.34K
🥈 Mutative             █████████████████████████████████████ 462.64K
🥉 Immutability Helper  ████████████████████████████████ 402.16K
   Immer                ███████████████████████ 289.17K
   Immutable.js         ███████████████ 185.85K
   Seamless Immutable   ███ 31.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.32M | ±0.99% | 0.0883ms | 0.1200ms | 5.66M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 496.34K | ±0.51% | 2.0147ms | 2.4350ms | 248.17K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 462.64K | ±0.47% | 2.1615ms | 2.6250ms | 231.32K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 402.16K | ±0.23% | 2.4866ms | 2.9060ms | 201.08K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 289.17K | ±0.20% | 3.4581ms | 4.2180ms | 144.59K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 185.85K | ±0.52% | 5.3807ms | 11.9720ms | 92.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.74K | ±0.41% | 31.5090ms | 41.2680ms | 15.88K |

**Key Insight:** Native Map is **356.76x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 310.26K
🥈 Craft                ███████████████████████████████████ 272.23K
🥉 Mutative             ████████████████████████████ 213.40K
   Immutable.js         ██████████████████████ 167.78K
   Immer                █████████████ 98.83K
   Seamless Immutable   ███ 22.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.84M | ±1.06% | 0.1132ms | 0.1800ms | 4.42M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 310.26K | ±0.52% | 3.2231ms | 3.5870ms | 155.13K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 272.23K | ±0.61% | 3.6734ms | 4.2680ms | 136.12K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.40K | ±0.69% | 4.6861ms | 5.9710ms | 106.70K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 167.78K | ±0.63% | 5.9600ms | 7.0530ms | 83.89K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.83K | ±0.60% | 10.1179ms | 19.1660ms | 49.42K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.20K | ±0.67% | 45.0372ms | 55.0930ms | 11.10K |

**Key Insight:** Native Spread is **398.01x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 376.84K
🥈 Immer                ███ 30.20K
🥉 Craft                ██ 22.09K
   Immutability Helper  █ 6.35K
   Immutable.js         █ 734.95
   Seamless Immutable   █ 256.16
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 376.84K | ±0.58% | 2.6537ms | 3.5070ms | 188.44K |
| 🥈 | **Native Map** | 359.01K | ±0.50% | 2.7855ms | 3.3360ms | 179.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.20K | ±0.30% | 33.1091ms | 42.9100ms | 15.10K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.09K | ±0.28% | 45.2673ms | 55.9740ms | 11.05K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.35K | ±0.31% | 157.5173ms | 176.0590ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 734.95 | ±0.90% | 1360.6327ms | 1775.9460ms | 368.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.16 | ±0.53% | 3903.8369ms | 4401.7990ms | 129.00 |

**Key Insight:** Mutative is **1471.11x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.85K
🥈 Craft                ████████████████████████████████████████ 274.41K
🥉 Mutative             █████████████████████████████ 202.24K
   Immutable.js         ████████████████████████ 165.49K
   Immer                ██████████████████ 127.47K
   Seamless Immutable   ███ 19.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.63M | ±0.52% | 0.1507ms | 0.2100ms | 3.32M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.85K | ±0.33% | 3.6120ms | 4.0770ms | 138.43K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 274.41K | ±0.36% | 3.6442ms | 4.1680ms | 137.21K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 202.24K | ±0.35% | 4.9447ms | 6.1710ms | 101.12K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 165.49K | ±0.44% | 6.0427ms | 7.5640ms | 82.75K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.47K | ±0.39% | 7.8452ms | 13.9360ms | 63.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.13K | ±0.39% | 52.2779ms | 63.2880ms | 9.56K |

**Key Insight:** Native Spread is **346.82x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T03:30:16.957Z*
