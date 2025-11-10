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
- **Last Run:** 2:42:06 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.0/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 44.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.4% |
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
🥇 Craft                ████████████████████████████████████████ 210.84K
🥈 Immer                █████████████████████ 110.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 210.84K | ±2.34% | 4.7429ms | 9.3370ms | 105.42K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.43K | ±1.99% | 9.0554ms | 26.0280ms | 55.22K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 933.68K
🥈 Immer                ██████ 130.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 933.68K | ±0.43% | 1.0710ms | 1.8230ms | 466.84K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.53K | ±1.56% | 7.6611ms | 16.2700ms | 65.27K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.97K
🥈 Immer                ██████████████ 60.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.97K | ±1.73% | 5.7482ms | 11.0400ms | 86.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.05K | ±1.67% | 16.6517ms | 31.9590ms | 30.03K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 731.89K
🥈 Mutative             ██████████████████████████ 469.24K
🥉 Immer                █████████ 173.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 731.89K | ±1.78% | 1.3663ms | 3.0450ms | 365.95K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 469.24K | ±0.66% | 2.1311ms | 2.7250ms | 234.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 173.69K | ±1.04% | 5.7575ms | 10.4590ms | 86.84K |

**Key Insight:** Craft is **4.21x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             █████████████ 418.11K
🥉 Immer                █████ 154.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.51% | 0.7928ms | 1.1820ms | 630.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 418.11K | ±0.51% | 2.3917ms | 3.7770ms | 209.05K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.22K | ±0.67% | 6.4843ms | 14.7580ms | 77.11K |

**Key Insight:** Craft is **8.18x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 860.74K
🥈 Mutative             █████████████████████ 453.44K
🥉 Immer                ████████ 169.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 860.74K | ±0.55% | 1.1618ms | 1.5730ms | 430.37K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.44K | ±0.49% | 2.2054ms | 2.7650ms | 226.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.10K | ±0.36% | 5.9137ms | 8.9070ms | 84.55K |

**Key Insight:** Craft is **5.09x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 838.19K
🥈 Mutative             █████████████████████ 444.21K
🥉 Immer                █████████ 181.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 838.19K | ±0.63% | 1.1930ms | 1.5230ms | 419.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.21K | ±0.64% | 2.2512ms | 2.8150ms | 222.10K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.08K | ±0.52% | 5.5225ms | 9.0070ms | 90.54K |

**Key Insight:** Craft is **4.63x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.42K
🥈 Mutative             ████████████████████████████████ 147.95K
🥉 Immer                █████████████████ 77.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.42K | ±0.49% | 5.4819ms | 6.9730ms | 91.21K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.95K | ±0.50% | 6.7591ms | 10.4190ms | 73.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.74K | ±0.77% | 12.8636ms | 23.8250ms | 38.87K |

**Key Insight:** Craft is **2.35x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.28K
🥈 Mutative             █████████████ 76.73K
🥉 Immer                ██ 14.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.28K | ±0.45% | 4.3806ms | 5.2400ms | 114.14K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.73K | ±0.52% | 13.0335ms | 22.7720ms | 38.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 14.10K | ±0.43% | 70.9451ms | 83.5250ms | 7.05K |

**Key Insight:** Craft is **16.20x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.01K
🥈 Immer                █████████████ 71.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.01K | ±0.47% | 4.5043ms | 5.2500ms | 111.01K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.22K | ±0.30% | 14.0402ms | 25.0470ms | 35.61K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             ████████████████████████████████████ 981.41K
🥉 Immutability Helper  ████████████████████████████████████ 974.71K
   Craft                ███████████████████████████████████ 941.87K
   Immer                ████████████████████████ 653.89K
   Seamless Immutable   █████ 127.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.69M | ±0.09% | 0.0681ms | 0.1000ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.10% | 0.9261ms | 1.1020ms | 539.90K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 981.41K | ±0.65% | 1.0189ms | 1.6030ms | 490.70K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 974.71K | ±0.41% | 1.0260ms | 1.2730ms | 487.35K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 941.87K | ±2.67% | 1.0617ms | 2.6750ms | 470.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 653.89K | ±1.91% | 1.5293ms | 3.3660ms | 326.94K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.90K | ±0.38% | 7.8183ms | 14.3770ms | 63.95K |

**Key Insight:** Native Spread is **114.84x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 529.82K
🥈 Mutative             ██████████████████████████████ 399.93K
🥉 Craft                ██████████████████████████ 345.66K
   Immutable.js         ██████████████████ 239.83K
   Immer                ███████████ 146.41K
   Seamless Immutable   ███ 36.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.82M | ±0.16% | 0.0846ms | 0.1200ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 529.82K | ±0.35% | 1.8874ms | 2.2540ms | 264.91K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 399.93K | ±0.71% | 2.5005ms | 4.9390ms | 199.96K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 345.66K | ±2.46% | 2.8930ms | 5.3100ms | 172.83K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 239.83K | ±0.37% | 4.1696ms | 7.6540ms | 119.92K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 146.41K | ±2.12% | 6.8302ms | 16.2000ms | 73.20K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.62K | ±0.50% | 27.3048ms | 43.2500ms | 18.31K |

**Key Insight:** Native Spread is **322.79x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ████████████████████████████████ 1.38M
🥉 Craft                ███████████ 501.76K
   Mutative             ██████████ 429.75K
   Immer                ██████ 279.70K
   Seamless Immutable   █ 60.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.11M | ±0.88% | 0.0826ms | 0.1200ms | 6.05M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±2.59% | 0.5729ms | 0.9520ms | 872.71K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.36% | 0.7244ms | 0.8720ms | 690.21K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 501.76K | ±0.45% | 1.9930ms | 2.3650ms | 250.88K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 429.75K | ±0.48% | 2.3270ms | 2.7850ms | 214.87K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 279.70K | ±0.40% | 3.5753ms | 5.8310ms | 139.85K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.97K | ±0.30% | 16.4004ms | 26.0180ms | 30.49K |

**Key Insight:** Native Spread is **198.60x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 772.10K
🥈 Immutability Helper  ██████████████████████████████ 582.11K
🥉 Craft                ████████████████ 318.21K
   Mutative             ███████████ 218.99K
   Immer                ███████ 141.24K
   Seamless Immutable   ███ 61.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.16M | ±1.35% | 0.0822ms | 0.1100ms | 6.08M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 772.10K | ±0.85% | 1.2952ms | 1.8840ms | 386.05K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 582.11K | ±0.30% | 1.7179ms | 1.9130ms | 291.06K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 318.21K | ±0.47% | 3.1426ms | 3.6670ms | 159.10K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.99K | ±0.39% | 4.5663ms | 5.3700ms | 109.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.24K | ±0.60% | 7.0802ms | 13.5050ms | 70.62K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.70K | ±0.54% | 16.2083ms | 25.5970ms | 30.85K |

**Key Insight:** Native Filter is **197.09x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 494.66K
🥈 Mutative             ████████████████████████████████████ 446.91K
🥉 Immutability Helper  ████████████████████████████████ 398.73K
   Immer                ███████████████████████ 283.53K
   Immutable.js         ███████████████ 188.14K
   Seamless Immutable   ██ 30.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.24M | ±1.13% | 0.0889ms | 0.1400ms | 5.62M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 494.66K | ±0.75% | 2.0216ms | 2.4140ms | 247.33K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 446.91K | ±1.11% | 2.2376ms | 2.9050ms | 223.45K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 398.73K | ±0.28% | 2.5080ms | 3.1860ms | 199.36K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.53K | ±0.41% | 3.5269ms | 6.7730ms | 141.77K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 188.14K | ±0.70% | 5.3152ms | 6.3720ms | 94.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.89K | ±0.97% | 32.3735ms | 42.4980ms | 15.45K |

**Key Insight:** Native Map is **363.96x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 310.83K
🥈 Craft                ██████████████████████████████████ 264.33K
🥉 Mutative             ███████████████████████████ 213.08K
   Immutable.js         ██████████████████████ 169.88K
   Immer                █████████████ 97.84K
   Seamless Immutable   ███ 22.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.96M | ±1.14% | 0.1116ms | 0.1700ms | 4.48M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 310.83K | ±0.53% | 3.2172ms | 3.7070ms | 155.42K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.33K | ±0.76% | 3.7831ms | 4.4790ms | 132.17K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.08K | ±0.72% | 4.6930ms | 5.5400ms | 106.54K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 169.88K | ±0.33% | 5.8867ms | 8.4460ms | 84.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.84K | ±0.70% | 10.2207ms | 19.3470ms | 48.92K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.16K | ±0.52% | 45.1274ms | 56.2440ms | 11.08K |

**Key Insight:** Native Spread is **404.22x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 335.54K
🥈 Immer                ████ 29.58K
🥉 Craft                ███ 21.97K
   Immutability Helper  █ 6.21K
   Immutable.js         █ 727.65
   Seamless Immutable   █ 248.68
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 335.54K | ±1.27% | 2.9803ms | 3.7470ms | 167.79K |
| 🥈 | **Native Map** | 324.69K | ±1.15% | 3.0799ms | 4.0370ms | 162.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.58K | ±0.83% | 33.8104ms | 48.3700ms | 14.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.97K | ±0.68% | 45.5220ms | 54.8120ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.21K | ±0.67% | 161.0985ms | 189.4210ms | 3.10K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 727.65 | ±1.11% | 1374.2953ms | 1915.5060ms | 364.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 248.68 | ±0.94% | 4021.2095ms | 4733.1480ms | 125.00 |

**Key Insight:** Mutative is **1349.27x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.44K
🥈 Craft                █████████████████████████████████████ 256.20K
🥉 Mutative             █████████████████████████████ 197.90K
   Immutable.js         ██████████████████████ 153.50K
   Immer                ██████████████████ 125.85K
   Seamless Immutable   ███ 18.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.31M | ±1.31% | 0.1586ms | 0.1810ms | 3.15M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.44K | ±0.44% | 3.6044ms | 4.0180ms | 138.72K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 256.20K | ±1.12% | 3.9032ms | 4.6290ms | 128.10K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.90K | ±0.87% | 5.0531ms | 5.8100ms | 98.95K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 153.50K | ±0.92% | 6.5146ms | 12.5830ms | 76.75K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.85K | ±0.96% | 7.9458ms | 16.4310ms | 62.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.68K | ±0.67% | 53.5310ms | 65.2210ms | 9.34K |

**Key Insight:** Native Spread is **337.54x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T15:05:40.691Z*
