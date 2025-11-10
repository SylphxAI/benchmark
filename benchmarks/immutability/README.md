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
- **Last Run:** 11:50:12 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.1/100 | 79.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.8/100 | 76.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.6% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 26.0/100 | 35.4% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.3/100 | 5.9% |

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
🥇 Craft                ████████████████████████████████████████ 197.17K
🥈 Immer                █████████████████████ 105.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 197.17K | ±2.59% | 5.0717ms | 9.0430ms | 98.59K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 105.28K | ±2.26% | 9.4987ms | 22.7040ms | 52.64K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 928.95K
🥈 Immer                █████ 122.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 928.95K | ±0.21% | 1.0765ms | 1.7050ms | 464.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 122.95K | ±1.95% | 8.1334ms | 14.7710ms | 61.48K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 161.92K
🥈 Immer                ██████████████ 56.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 161.92K | ±2.19% | 6.1759ms | 12.2930ms | 80.96K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 56.86K | ±1.96% | 17.5868ms | 28.5930ms | 28.43K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 635.08K
🥈 Mutative             ████████████████████████████ 443.25K
🥉 Immer                ███████████ 169.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 635.08K | ±2.32% | 1.5746ms | 2.8510ms | 317.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.25K | ±0.94% | 2.2560ms | 3.0260ms | 221.63K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.33K | ±1.26% | 5.9056ms | 9.0070ms | 84.67K |

**Key Insight:** Craft is **3.75x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.05M
🥈 Mutative             ███████████████ 390.96K
🥉 Immer                ██████ 151.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.05M | ±0.71% | 0.9514ms | 1.5690ms | 525.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 390.96K | ±0.72% | 2.5578ms | 3.7190ms | 195.48K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 151.31K | ±0.77% | 6.6089ms | 11.4900ms | 75.66K |

**Key Insight:** Craft is **6.95x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 737.94K
🥈 Mutative             ███████████████████████ 419.94K
🥉 Immer                █████████ 168.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 737.94K | ±0.62% | 1.3551ms | 1.9500ms | 368.97K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 419.94K | ±0.68% | 2.3813ms | 3.0870ms | 209.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.27K | ±0.49% | 5.9428ms | 9.6710ms | 84.14K |

**Key Insight:** Craft is **4.39x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 725.87K
🥈 Mutative             ███████████████████████ 415.20K
🥉 Immer                ██████████ 180.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 725.87K | ±0.66% | 1.3777ms | 1.9420ms | 362.94K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 415.20K | ±0.73% | 2.4085ms | 3.1010ms | 207.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.52K | ±0.51% | 5.5396ms | 6.9950ms | 90.26K |

**Key Insight:** Craft is **4.02x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 171.06K
🥈 Mutative             ████████████████████████████████ 138.02K
🥉 Immer                ██████████████████ 75.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 171.06K | ±0.60% | 5.8460ms | 8.1490ms | 85.53K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 138.02K | ±0.75% | 7.2451ms | 10.4200ms | 69.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 75.99K | ±0.87% | 13.1590ms | 22.8380ms | 38.00K |

**Key Insight:** Craft is **2.25x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.07K
🥈 Mutative             ██████████████ 73.27K
🥉 Immer                ███ 15.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.07K | ±0.57% | 4.6069ms | 5.7920ms | 108.53K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 73.27K | ±0.66% | 13.6491ms | 22.5050ms | 36.63K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 15.33K | ±0.42% | 65.2494ms | 74.7850ms | 7.66K |

**Key Insight:** Craft is **14.16x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 210.64K
🥈 Immer                █████████████ 68.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 210.64K | ±0.63% | 4.7475ms | 5.7460ms | 105.32K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 68.03K | ±0.47% | 14.6986ms | 21.7010ms | 34.02K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 982.70K
🥈 Mutative             ███████████████████████████████████ 871.32K
🥉 Immutability Helper  ███████████████████████████████████ 852.64K
   Craft                ██████████████████████████████████ 833.63K
   Immer                █████████████████████████ 621.33K
   Seamless Immutable   █████ 125.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 16.44M | ±0.08% | 0.0608ms | 0.1840ms | 8.22M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 982.70K | ±0.25% | 1.0176ms | 1.5840ms | 491.35K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 871.32K | ±1.14% | 1.1477ms | 2.2680ms | 435.66K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 852.64K | ±0.20% | 1.1728ms | 1.7720ms | 426.32K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 833.63K | ±3.28% | 1.1996ms | 2.4950ms | 416.81K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 621.33K | ±2.28% | 1.6094ms | 3.1080ms | 310.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 125.77K | ±0.33% | 7.9507ms | 12.3460ms | 62.89K |

**Key Insight:** Native Spread is **130.68x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 468.49K
🥈 Mutative             ████████████████████████████████ 373.37K
🥉 Craft                ███████████████████████████ 314.87K
   Immutable.js         █████████████████ 202.35K
   Immer                ████████████ 142.96K
   Seamless Immutable   ███ 37.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.29M | ±0.16% | 0.0813ms | 0.2280ms | 6.15M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 468.49K | ±0.58% | 2.1345ms | 2.8090ms | 234.25K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 373.37K | ±0.86% | 2.6783ms | 3.8560ms | 186.69K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 314.87K | ±2.94% | 3.1759ms | 5.3340ms | 157.43K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 202.35K | ±0.66% | 4.9418ms | 6.3750ms | 101.18K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.96K | ±2.25% | 6.9952ms | 14.0990ms | 71.48K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.36K | ±0.38% | 26.7692ms | 40.4170ms | 18.68K |

**Key Insight:** Native Spread is **329.06x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.56M
🥈 Immutability Helper  █████████████████████████████████ 1.30M
🥉 Craft                ███████████ 429.34K
   Mutative             ██████████ 381.30K
   Immer                ███████ 257.80K
   Seamless Immutable   ██ 60.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.98M | ±1.00% | 0.0834ms | 0.2670ms | 5.99M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.56M | ±0.51% | 0.6401ms | 1.0980ms | 781.13K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.30M | ±0.55% | 0.7698ms | 1.1430ms | 649.51K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 429.34K | ±0.38% | 2.3291ms | 3.4880ms | 214.67K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 381.30K | ±0.55% | 2.6226ms | 3.2670ms | 190.65K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 257.80K | ±0.96% | 3.8790ms | 6.4380ms | 128.90K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.50K | ±0.46% | 16.5277ms | 22.9010ms | 30.25K |

**Key Insight:** Native Spread is **198.08x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 742.21K
🥈 Immutability Helper  █████████████████████████████ 535.16K
🥉 Craft                ███████████████ 285.98K
   Mutative             ███████████ 198.06K
   Immer                ███████ 133.10K
   Seamless Immutable   ███ 60.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.93M | ±1.08% | 0.0774ms | 0.2470ms | 6.46M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 742.21K | ±0.59% | 1.3473ms | 1.8910ms | 371.10K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 535.16K | ±0.48% | 1.8686ms | 2.6210ms | 267.58K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 285.98K | ±0.31% | 3.4967ms | 5.4710ms | 142.99K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 198.06K | ±0.44% | 5.0489ms | 6.2010ms | 99.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 133.10K | ±0.86% | 7.5131ms | 13.2050ms | 66.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.41K | ±0.39% | 16.5540ms | 22.8050ms | 30.20K |

**Key Insight:** Native Filter is **213.96x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 445.64K
🥈 Mutative             █████████████████████████████████████ 412.78K
🥉 Immutability Helper  ████████████████████████████████ 351.68K
   Immer                ████████████████████████ 269.17K
   Immutable.js         ███████████████ 163.95K
   Seamless Immutable   ███ 31.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.39M | ±1.89% | 0.0963ms | 0.2870ms | 5.19M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 445.64K | ±0.79% | 2.2440ms | 2.9150ms | 222.82K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 412.78K | ±0.98% | 2.4226ms | 4.1110ms | 206.39K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 351.68K | ±0.46% | 2.8435ms | 4.5330ms | 175.84K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 269.17K | ±0.38% | 3.7151ms | 4.6350ms | 134.59K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.95K | ±1.01% | 6.0992ms | 8.4420ms | 81.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.21K | ±0.77% | 32.0425ms | 46.7150ms | 15.61K |

**Key Insight:** Native Map is **332.81x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 280.44K
🥈 Craft                ██████████████████████████████████ 241.63K
🥉 Mutative             ████████████████████████████ 195.44K
   Immutable.js         ██████████████████████ 154.52K
   Immer                █████████████ 93.37K
   Seamless Immutable   ███ 22.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.62M | ±1.82% | 0.1161ms | 0.3120ms | 4.31M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 280.44K | ±1.22% | 3.5659ms | 4.3620ms | 140.22K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 241.63K | ±1.39% | 4.1386ms | 6.3780ms | 120.81K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.44K | ±1.36% | 5.1165ms | 8.5890ms | 97.72K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 154.52K | ±0.70% | 6.4718ms | 9.5640ms | 77.26K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 93.37K | ±1.06% | 10.7101ms | 17.1110ms | 46.69K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.21K | ±0.79% | 45.0221ms | 52.9010ms | 11.11K |

**Key Insight:** Native Spread is **387.89x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 308.24K
🥈 Immer                ████ 30.83K
🥉 Craft                ███ 22.73K
   Immutability Helper  █ 7.24K
   Immutable.js         █ 687.15
   Seamless Immutable   █ 252.84
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 332.75K | ±0.87% | 3.0053ms | 3.9870ms | 166.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 308.24K | ±0.90% | 3.2442ms | 4.3020ms | 154.12K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.83K | ±0.62% | 32.4336ms | 39.6000ms | 15.42K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.73K | ±0.47% | 44.0042ms | 62.8480ms | 11.36K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 7.24K | ±0.60% | 138.1670ms | 196.4980ms | 3.62K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 687.15 | ±1.64% | 1455.2796ms | 2252.5790ms | 344.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.84 | ±0.81% | 3955.1236ms | 4706.5130ms | 127.00 |

**Key Insight:** Native Map is **1316.07x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 257.72K
🥈 Immutability Helper  ███████████████████████████████████████ 253.07K
🥉 Mutative             █████████████████████████████ 190.04K
   Immutable.js         ███████████████████████ 146.67K
   Immer                ███████████████████ 121.15K
   Seamless Immutable   ███ 19.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.51M | ±1.37% | 0.1536ms | 0.3320ms | 3.25M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 257.72K | ±0.73% | 3.8802ms | 4.6300ms | 128.86K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 253.07K | ±0.67% | 3.9515ms | 5.1160ms | 126.53K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 190.04K | ±0.65% | 5.2622ms | 6.4940ms | 95.02K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 146.67K | ±0.88% | 6.8182ms | 10.2820ms | 73.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 121.15K | ±0.70% | 8.2542ms | 13.7240ms | 60.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.10K | ±0.59% | 52.3625ms | 63.0980ms | 9.55K |

**Key Insight:** Native Spread is **340.84x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T23:54:40.070Z*
