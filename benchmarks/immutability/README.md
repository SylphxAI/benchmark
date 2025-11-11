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
- **Last Run:** 2:15:55 AM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.4/100 | 77.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.5/100 | 74.5% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.5/100 | 43.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.3% |
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
🥇 Craft                ████████████████████████████████████████ 218.48K
🥈 Immer                █████████████████████ 113.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 218.48K | ±2.02% | 4.5772ms | 9.2080ms | 109.24K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.40K | ±1.58% | 8.8184ms | 18.7750ms | 56.70K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 997.63K
🥈 Immer                █████ 131.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 997.63K | ±0.47% | 1.0024ms | 1.1530ms | 498.81K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.01K | ±1.59% | 7.6329ms | 16.8320ms | 65.51K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.48K
🥈 Immer                ██████████████ 60.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 177.48K | ±1.76% | 5.6345ms | 10.9800ms | 88.74K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.12K | ±1.64% | 16.6332ms | 31.1980ms | 30.06K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 748.65K
🥈 Mutative             █████████████████████████ 470.99K
🥉 Immer                ██████████ 179.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 748.65K | ±1.65% | 1.3357ms | 2.9260ms | 374.33K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 470.99K | ±0.44% | 2.1232ms | 2.5940ms | 235.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.20K | ±0.98% | 5.5804ms | 9.5480ms | 89.60K |

**Key Insight:** Craft is **4.18x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 423.79K
🥉 Immer                █████ 159.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.45% | 0.7847ms | 1.0520ms | 637.21K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.79K | ±0.48% | 2.3597ms | 3.1160ms | 211.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.36K | ±0.60% | 6.2750ms | 11.8720ms | 79.68K |

**Key Insight:** Craft is **8.00x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 861.71K
🥈 Mutative             █████████████████████ 455.68K
🥉 Immer                ████████ 168.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 861.71K | ±0.40% | 1.1605ms | 1.5030ms | 430.86K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.68K | ±0.40% | 2.1945ms | 2.5650ms | 227.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.81K | ±0.35% | 5.9240ms | 12.0230ms | 84.40K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 838.02K
🥈 Mutative             █████████████████████ 446.08K
🥉 Immer                █████████ 183.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 838.02K | ±0.48% | 1.1933ms | 1.5030ms | 419.01K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 446.08K | ±0.44% | 2.2417ms | 2.5850ms | 223.04K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.04K | ±0.36% | 5.4634ms | 6.5220ms | 91.52K |

**Key Insight:** Craft is **4.58x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.36K
🥈 Mutative             ████████████████████████████████ 146.44K
🥉 Immer                █████████████████ 80.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 185.36K | ±0.48% | 5.3949ms | 8.6170ms | 92.68K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 146.44K | ±2.33% | 6.8286ms | 12.0920ms | 73.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.05K | ±0.57% | 12.4916ms | 23.0830ms | 40.03K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.51K
🥈 Mutative             █████████████ 76.05K
🥉 Immer                ██ 13.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 227.51K | ±0.67% | 4.3954ms | 5.7410ms | 113.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.05K | ±0.47% | 13.1485ms | 22.7520ms | 38.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.66K | ±0.39% | 73.2244ms | 132.4880ms | 6.83K |

**Key Insight:** Craft is **16.66x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.69K
🥈 Immer                ████████████ 70.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 227.69K | ±0.38% | 4.3919ms | 4.9890ms | 113.85K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.33K | ±0.26% | 14.2197ms | 25.3080ms | 35.16K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             █████████████████████████████████████ 997.51K
🥉 Immutability Helper  ████████████████████████████████████ 974.61K
   Craft                ████████████████████████████████████ 955.65K
   Immer                ██████████████████████████ 708.66K
   Seamless Immutable   █████ 128.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.54M | ±0.10% | 0.0688ms | 0.1000ms | 7.27M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.10% | 0.9302ms | 1.0820ms | 537.54K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 997.51K | ±0.42% | 1.0025ms | 1.2530ms | 498.76K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 974.61K | ±0.38% | 1.0261ms | 1.2220ms | 487.30K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 955.65K | ±2.70% | 1.0464ms | 2.6350ms | 477.82K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 708.66K | ±1.88% | 1.4111ms | 3.2060ms | 354.33K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.77K | ±0.30% | 7.7661ms | 13.4750ms | 64.38K |

**Key Insight:** Native Spread is **112.90x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 504.26K
🥈 Mutative             ████████████████████████████████ 399.68K
🥉 Craft                ███████████████████████████ 341.65K
   Immutable.js         ██████████████████ 230.90K
   Immer                ████████████ 156.74K
   Seamless Immutable   ███ 37.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.76M | ±0.12% | 0.0851ms | 0.1400ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 504.26K | ±0.33% | 1.9831ms | 2.3150ms | 252.13K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 399.68K | ±2.43% | 2.5020ms | 4.6390ms | 199.84K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 341.65K | ±2.61% | 2.9270ms | 5.4000ms | 170.83K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 230.90K | ±0.36% | 4.3309ms | 5.0900ms | 115.45K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.74K | ±1.88% | 6.3801ms | 11.4610ms | 78.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.47K | ±0.35% | 26.6847ms | 36.4170ms | 18.74K |

**Key Insight:** Native Spread is **313.68x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  ████████████████████████████████ 1.39M
🥉 Craft                ████████████ 505.93K
   Mutative             ██████████ 419.76K
   Immer                ██████ 281.69K
   Seamless Immutable   █ 61.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.66M | ±1.96% | 0.0938ms | 0.1100ms | 5.33M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±0.71% | 0.5763ms | 0.9520ms | 867.56K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.39M | ±0.69% | 0.7215ms | 0.8020ms | 692.96K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 505.93K | ±0.47% | 1.9765ms | 3.7180ms | 252.97K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 419.76K | ±0.91% | 2.3823ms | 3.0560ms | 209.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.69K | ±0.57% | 3.5500ms | 6.9530ms | 140.84K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.48K | ±0.65% | 16.2653ms | 25.7580ms | 30.74K |

**Key Insight:** Native Spread is **173.35x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 801.59K
🥈 Immutability Helper  █████████████████████████████ 576.15K
🥉 Craft                ████████████████ 312.31K
   Mutative             ██████████ 210.10K
   Immer                ███████ 138.89K
   Seamless Immutable   ███ 59.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.45M | ±0.86% | 0.0803ms | 0.1200ms | 6.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 801.59K | ±0.95% | 1.2475ms | 1.6230ms | 400.79K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 576.15K | ±0.24% | 1.7357ms | 1.8730ms | 288.07K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 312.31K | ±0.75% | 3.2020ms | 6.0420ms | 156.16K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 210.10K | ±0.75% | 4.7597ms | 9.3880ms | 105.05K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 138.89K | ±0.79% | 7.1999ms | 16.9110ms | 69.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.93K | ±0.76% | 16.6858ms | 26.4200ms | 29.97K |

**Key Insight:** Native Filter is **207.78x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 490.59K
🥈 Mutative             █████████████████████████████████████ 448.98K
🥉 Immutability Helper  █████████████████████████████████ 400.63K
   Immer                ███████████████████████ 279.94K
   Immutable.js         ███████████████ 179.99K
   Seamless Immutable   ███ 31.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.14M | ±1.17% | 0.0898ms | 0.1300ms | 5.57M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 490.59K | ±0.49% | 2.0384ms | 2.4140ms | 245.30K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 448.98K | ±0.63% | 2.2273ms | 2.6450ms | 224.49K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.63K | ±0.25% | 2.4960ms | 2.9250ms | 200.32K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.94K | ±0.29% | 3.5722ms | 4.1070ms | 139.97K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 179.99K | ±0.50% | 5.5558ms | 6.2310ms | 90.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.58K | ±0.67% | 31.6693ms | 42.0790ms | 15.79K |

**Key Insight:** Native Map is **352.66x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 308.34K
🥈 Craft                ███████████████████████████████████ 266.57K
🥉 Mutative             ███████████████████████████ 211.42K
   Immutable.js         █████████████████████ 165.35K
   Immer                █████████████ 97.38K
   Seamless Immutable   ███ 22.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.83M | ±1.60% | 0.1133ms | 0.1400ms | 4.41M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 308.34K | ±0.92% | 3.2432ms | 3.6770ms | 154.17K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 266.57K | ±0.68% | 3.7514ms | 4.1980ms | 133.28K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 211.42K | ±0.73% | 4.7300ms | 5.3900ms | 105.71K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 165.35K | ±0.86% | 6.0477ms | 7.3730ms | 82.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.38K | ±0.87% | 10.2692ms | 19.3760ms | 48.69K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.13K | ±0.70% | 45.1950ms | 55.3540ms | 11.06K |

**Key Insight:** Native Spread is **398.92x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 351.28K
🥈 Immer                ███ 29.44K
🥉 Craft                ███ 22.01K
   Immutability Helper  █ 6.40K
   Immutable.js         █ 663.74
   Seamless Immutable   █ 254.89
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 354.25K | ±0.59% | 2.8229ms | 3.2660ms | 177.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 351.28K | ±0.73% | 2.8468ms | 3.4970ms | 175.64K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.44K | ±0.55% | 33.9707ms | 57.8780ms | 14.72K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.01K | ±0.49% | 45.4240ms | 56.3160ms | 11.01K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.40K | ±0.53% | 156.2407ms | 180.6480ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 663.74 | ±1.56% | 1506.6086ms | 2590.4720ms | 332.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.89 | ±0.70% | 3923.2429ms | 4532.5600ms | 128.00 |

**Key Insight:** Native Map is **1389.79x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.13K
🥈 Craft                ████████████████████████████████████████ 274.23K
🥉 Mutative             █████████████████████████████ 200.60K
   Immutable.js         ███████████████████████ 157.18K
   Immer                ██████████████████ 127.60K
   Seamless Immutable   ███ 18.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.46M | ±0.57% | 0.1548ms | 0.1910ms | 3.23M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.13K | ±0.52% | 3.6084ms | 4.2780ms | 138.57K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 274.23K | ±0.52% | 3.6466ms | 4.0980ms | 137.11K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.60K | ±0.49% | 4.9851ms | 5.6110ms | 100.30K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 157.18K | ±0.57% | 6.3621ms | 7.8350ms | 78.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.60K | ±0.45% | 7.8371ms | 14.2970ms | 63.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.59K | ±0.78% | 53.7818ms | 106.4800ms | 9.30K |

**Key Insight:** Native Spread is **347.45x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T02:19:15.909Z*
