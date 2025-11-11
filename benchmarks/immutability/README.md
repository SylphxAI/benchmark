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
- **Last Run:** 3:51:21 AM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.2/100 | 78.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.1/100 | 75.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.3/100 | 33.2% |
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
🥇 Craft                ████████████████████████████████████████ 215.93K
🥈 Immer                █████████████████████ 115.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 215.93K | ±1.88% | 4.6311ms | 9.1680ms | 107.97K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.88K | ±1.48% | 8.6294ms | 18.0440ms | 57.94K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 987.20K
🥈 Immer                █████ 131.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 987.20K | ±0.15% | 1.0130ms | 1.4030ms | 493.60K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.14K | ±1.40% | 7.6253ms | 14.4070ms | 65.57K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 172.49K
🥈 Immer                ██████████████ 59.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 172.49K | ±1.65% | 5.7975ms | 11.9030ms | 86.24K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.03K | ±1.48% | 16.9396ms | 34.6350ms | 29.52K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 731.65K
🥈 Mutative             ██████████████████████████ 474.38K
🥉 Immer                ██████████ 176.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 731.65K | ±1.75% | 1.3668ms | 2.9350ms | 365.83K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 474.38K | ±0.65% | 2.1080ms | 2.5950ms | 237.19K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.47K | ±0.85% | 5.6668ms | 9.8480ms | 88.23K |

**Key Insight:** Craft is **4.15x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 429.29K
🥉 Immer                █████ 159.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.59% | 0.7847ms | 1.1030ms | 637.22K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.29K | ±0.41% | 2.3294ms | 2.7450ms | 214.65K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.09K | ±0.34% | 6.2859ms | 10.4500ms | 79.54K |

**Key Insight:** Craft is **8.01x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 874.40K
🥈 Mutative             █████████████████████ 458.36K
🥉 Immer                ████████ 168.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 874.40K | ±0.60% | 1.1436ms | 1.6130ms | 437.20K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 458.36K | ±0.38% | 2.1817ms | 2.6050ms | 229.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.47K | ±0.59% | 5.9358ms | 10.9010ms | 84.23K |

**Key Insight:** Craft is **5.19x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 867.17K
🥈 Mutative             ████████████████████ 444.26K
🥉 Immer                ████████ 179.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 867.17K | ±0.35% | 1.1532ms | 1.4830ms | 433.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.26K | ±0.37% | 2.2509ms | 2.6250ms | 222.13K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.69K | ±0.50% | 5.5653ms | 10.3900ms | 89.84K |

**Key Insight:** Craft is **4.83x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.08K
🥈 Mutative             █████████████████████████████████ 149.60K
🥉 Immer                █████████████████ 78.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 184.08K | ±0.47% | 5.4324ms | 7.6840ms | 92.04K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.60K | ±0.45% | 6.6843ms | 9.7680ms | 74.80K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.16K | ±0.42% | 12.7945ms | 22.7720ms | 39.08K |

**Key Insight:** Craft is **2.36x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.51K
🥈 Mutative             ██████████████ 77.58K
🥉 Immer                ██ 13.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 228.51K | ±0.42% | 4.3762ms | 5.4400ms | 114.25K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.58K | ±0.43% | 12.8903ms | 21.7410ms | 38.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.21K | ±0.25% | 75.7057ms | 93.8070ms | 6.61K |

**Key Insight:** Craft is **17.30x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.99K
🥈 Immer                █████████████ 70.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 223.99K | ±0.38% | 4.4644ms | 5.1000ms | 112.00K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.51K | ±0.32% | 14.1817ms | 24.4970ms | 35.26K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 987.49K
🥉 Mutative             █████████████████████████████████████ 980.90K
   Craft                ████████████████████████████████████ 954.16K
   Immer                ██████████████████████████ 702.27K
   Seamless Immutable   █████ 126.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.49M | ±0.10% | 0.0690ms | 0.1100ms | 7.24M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.12% | 0.9376ms | 1.1120ms | 533.28K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 987.49K | ±0.39% | 1.0127ms | 1.3430ms | 493.75K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 980.90K | ±0.37% | 1.0195ms | 1.5130ms | 490.45K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 954.16K | ±2.44% | 1.0480ms | 2.5350ms | 477.08K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 702.27K | ±1.84% | 1.4240ms | 3.0750ms | 351.13K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.38K | ±0.40% | 7.9127ms | 15.5290ms | 63.19K |

**Key Insight:** Native Spread is **114.63x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 499.37K
🥈 Mutative             ████████████████████████████████ 399.37K
🥉 Craft                ███████████████████████████ 339.68K
   Immutable.js         ██████████████████ 220.60K
   Immer                █████████████ 156.56K
   Seamless Immutable   ███ 37.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.62M | ±0.18% | 0.0861ms | 0.1410ms | 5.81M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 499.37K | ±0.31% | 2.0025ms | 2.3940ms | 249.68K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 399.37K | ±0.37% | 2.5039ms | 4.5480ms | 199.69K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 339.68K | ±2.47% | 2.9439ms | 5.4000ms | 169.84K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 220.60K | ±1.57% | 4.5330ms | 7.6940ms | 110.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.56K | ±1.74% | 6.3873ms | 11.4010ms | 78.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.35K | ±0.31% | 26.7736ms | 36.2070ms | 18.68K |

**Key Insight:** Native Spread is **310.99x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.64M
🥈 Immutability Helper  ███████████████████████████████████ 1.42M
🥉 Craft                ████████████ 505.86K
   Mutative             ██████████ 424.46K
   Immer                ███████ 280.95K
   Seamless Immutable   █ 60.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.06M | ±0.78% | 0.0829ms | 0.1110ms | 6.03M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.64M | ±3.08% | 0.6100ms | 1.0420ms | 819.73K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.42M | ±0.51% | 0.7050ms | 1.2320ms | 709.21K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 505.86K | ±0.38% | 1.9768ms | 2.3950ms | 252.93K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.46K | ±0.45% | 2.3559ms | 2.8450ms | 212.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 280.95K | ±0.42% | 3.5593ms | 6.2520ms | 140.48K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.46K | ±0.54% | 16.5396ms | 28.0130ms | 30.23K |

**Key Insight:** Native Spread is **199.51x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 809.00K
🥈 Immutability Helper  █████████████████████████████ 584.15K
🥉 Craft                ████████████████ 318.48K
   Mutative             ███████████ 218.33K
   Immer                ██████ 129.64K
   Seamless Immutable   ███ 60.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.76M | ±0.79% | 0.0784ms | 0.1200ms | 6.38M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 809.00K | ±0.43% | 1.2361ms | 1.6030ms | 404.50K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 584.15K | ±0.17% | 1.7119ms | 1.9640ms | 292.07K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 318.48K | ±0.44% | 3.1399ms | 3.8170ms | 159.24K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.33K | ±0.24% | 4.5802ms | 5.3300ms | 109.17K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 129.64K | ±0.83% | 7.7139ms | 17.8740ms | 64.82K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.94K | ±0.36% | 16.4100ms | 25.4980ms | 30.47K |

**Key Insight:** Native Filter is **209.36x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 492.42K
🥈 Mutative             ██████████████████████████████████████ 465.51K
🥉 Immutability Helper  █████████████████████████████████ 401.53K
   Immer                ███████████████████████ 279.42K
   Immutable.js         ███████████████ 187.85K
   Seamless Immutable   ███ 30.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.69M | ±0.63% | 0.0856ms | 0.1300ms | 5.84M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 492.42K | ±0.64% | 2.0308ms | 3.2460ms | 246.21K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 465.51K | ±0.35% | 2.1482ms | 2.5150ms | 232.76K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.53K | ±0.18% | 2.4905ms | 2.9150ms | 200.77K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.42K | ±0.75% | 3.5788ms | 6.9830ms | 139.71K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.85K | ±0.33% | 5.3233ms | 6.5030ms | 93.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.90K | ±0.65% | 32.3585ms | 67.5770ms | 15.45K |

**Key Insight:** Native Map is **378.15x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.19K
🥈 Craft                ███████████████████████████████████ 273.11K
🥉 Mutative             ████████████████████████████ 219.80K
   Immutable.js         ███████████████████████ 174.75K
   Immer                █████████████ 98.75K
   Seamless Immutable   ███ 22.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.25M | ±0.65% | 0.1081ms | 0.1400ms | 4.63M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.19K | ±0.38% | 3.2343ms | 3.6470ms | 154.59K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 273.11K | ±0.45% | 3.6615ms | 4.2580ms | 136.56K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 219.80K | ±0.49% | 4.5495ms | 5.8310ms | 109.90K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.75K | ±0.29% | 5.7224ms | 6.5620ms | 87.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.75K | ±0.38% | 10.1262ms | 18.8950ms | 49.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.53K | ±0.36% | 44.3779ms | 55.3130ms | 11.27K |

**Key Insight:** Native Spread is **410.64x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 357.93K
🥈 Immer                ███ 29.55K
🥉 Craft                ██ 20.67K
   Immutability Helper  █ 6.45K
   Immutable.js         █ 710.43
   Seamless Immutable   █ 254.40
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 357.93K | ±0.88% | 2.7939ms | 3.5160ms | 178.96K |
| 🥈 | **Native Map** | 354.90K | ±0.69% | 2.8177ms | 3.7270ms | 177.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.55K | ±0.49% | 33.8437ms | 64.8520ms | 14.77K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 20.67K | ±0.58% | 48.3898ms | 56.5760ms | 10.33K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.45K | ±0.58% | 154.9484ms | 177.8240ms | 3.23K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 710.43 | ±1.36% | 1407.5952ms | 2137.4390ms | 356.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.40 | ±0.82% | 3930.7752ms | 4496.8560ms | 128.00 |

**Key Insight:** Mutative is **1406.93x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.79K
🥈 Craft                ███████████████████████████████████████ 267.84K
🥉 Mutative             █████████████████████████████ 199.15K
   Immutable.js         ███████████████████████ 160.17K
   Immer                ██████████████████ 126.86K
   Seamless Immutable   ███ 19.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.34M | ±0.95% | 0.1577ms | 0.1800ms | 3.17M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.79K | ±0.46% | 3.5999ms | 4.1080ms | 138.89K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 267.84K | ±0.94% | 3.7336ms | 4.3680ms | 133.92K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.15K | ±0.61% | 5.0214ms | 5.6710ms | 99.57K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.17K | ±0.67% | 6.2432ms | 7.4440ms | 80.09K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.86K | ±0.59% | 7.8827ms | 14.2870ms | 63.43K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.11K | ±0.45% | 52.3196ms | 62.3770ms | 9.56K |

**Key Insight:** Native Spread is **331.84x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T04:00:13.347Z*
