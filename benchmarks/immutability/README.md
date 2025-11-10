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
- **Last Run:** 1:47:01 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.5/100 | 80.8% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.2/100 | 74.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 44.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.8/100 | 34.3% |
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
🥇 Craft                ████████████████████████████████████████ 203.69K
🥈 Immer                ██████████████████████ 111.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 203.69K | ±2.08% | 4.9095ms | 9.1490ms | 101.84K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.43K | ±1.78% | 8.9746ms | 20.5800ms | 55.71K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 997.39K
🥈 Immer                █████ 123.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 997.39K | ±0.16% | 1.0026ms | 1.5240ms | 498.70K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 123.97K | ±1.53% | 8.0663ms | 14.3110ms | 61.99K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 167.26K
🥈 Immer                ██████████████ 58.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 167.26K | ±1.71% | 5.9787ms | 11.4750ms | 83.63K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 58.12K | ±3.92% | 17.2066ms | 27.2890ms | 29.10K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 686.15K
🥈 Mutative             ███████████████████████████ 461.97K
🥉 Immer                █████████ 158.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 686.15K | ±1.74% | 1.4574ms | 2.6260ms | 343.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 461.97K | ±0.70% | 2.1647ms | 2.7930ms | 230.98K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 158.95K | ±0.95% | 6.2912ms | 10.5740ms | 79.48K |

**Key Insight:** Craft is **4.32x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.13M
🥈 Mutative             ███████████████ 428.71K
🥉 Immer                █████ 145.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.13M | ±0.38% | 0.8843ms | 1.3300ms | 565.45K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 428.71K | ±0.39% | 2.3326ms | 2.8260ms | 214.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 145.80K | ±0.59% | 6.8587ms | 11.2140ms | 72.90K |

**Key Insight:** Craft is **7.76x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 764.10K
🥈 Mutative             ███████████████████████ 444.91K
🥉 Immer                █████████ 165.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 764.10K | ±0.36% | 1.3087ms | 1.7740ms | 382.05K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.91K | ±0.40% | 2.2476ms | 2.7570ms | 222.46K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.75K | ±0.30% | 6.0330ms | 8.8610ms | 82.88K |

**Key Insight:** Craft is **4.61x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 737.86K
🥈 Mutative             ███████████████████████ 431.07K
🥉 Immer                ██████████ 178.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 737.86K | ±0.38% | 1.3553ms | 1.8240ms | 368.93K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 431.07K | ±0.39% | 2.3198ms | 2.9190ms | 215.53K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.95K | ±0.33% | 5.5880ms | 8.5060ms | 89.48K |

**Key Insight:** Craft is **4.12x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 191.76K
🥈 Mutative             ████████████████████████████████ 151.95K
🥉 Immer                ████████████████ 78.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 191.76K | ±0.46% | 5.2149ms | 6.2530ms | 95.88K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 151.95K | ±0.48% | 6.5810ms | 9.7580ms | 75.98K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.38K | ±0.65% | 12.7582ms | 21.5930ms | 39.19K |

**Key Insight:** Craft is **2.45x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 232.06K
🥈 Mutative             █████████████ 77.87K
🥉 Immer                ██ 13.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 232.06K | ±0.40% | 4.3092ms | 5.1590ms | 116.03K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.87K | ±0.43% | 12.8416ms | 20.9360ms | 38.94K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.34K | ±0.29% | 74.9837ms | 82.6450ms | 6.67K |

**Key Insight:** Craft is **17.40x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.07K
🥈 Immer                █████████████ 69.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.07K | ±0.35% | 4.6068ms | 5.3780ms | 108.53K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.53K | ±0.26% | 14.3815ms | 20.6120ms | 34.77K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 993.68K
🥈 Mutative             ██████████████████████████████████████ 940.26K
🥉 Immutability Helper  █████████████████████████████████████ 923.40K
   Craft                ████████████████████████████████████ 904.52K
   Immer                ███████████████████████████ 674.17K
   Seamless Immutable   █████ 125.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 16.33M | ±0.08% | 0.0612ms | 0.1010ms | 8.16M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 993.68K | ±0.17% | 1.0064ms | 1.5120ms | 496.84K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 940.26K | ±0.59% | 1.0635ms | 1.6340ms | 470.13K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 923.40K | ±0.35% | 1.0830ms | 1.4420ms | 461.70K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 904.52K | ±2.54% | 1.1056ms | 2.3280ms | 452.26K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 674.17K | ±1.88% | 1.4833ms | 2.9110ms | 337.09K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 125.72K | ±0.25% | 7.9543ms | 12.1870ms | 62.86K |

**Key Insight:** Native Spread is **129.88x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 445.79K
🥈 Mutative             ███████████████████████████████████ 389.81K
🥉 Craft                ████████████████████████████ 315.45K
   Immutable.js         ███████████████████ 208.56K
   Immer                █████████████ 141.45K
   Seamless Immutable   ███ 37.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.86M | ±0.24% | 0.0843ms | 0.1700ms | 5.93M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 445.79K | ±0.31% | 2.2432ms | 3.7070ms | 222.90K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 389.81K | ±0.77% | 2.5654ms | 4.1810ms | 194.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.45K | ±2.62% | 3.1701ms | 5.7960ms | 157.73K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 208.56K | ±0.39% | 4.7949ms | 8.0050ms | 104.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.45K | ±2.08% | 7.0695ms | 13.8390ms | 70.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.61K | ±0.30% | 26.5898ms | 32.5020ms | 18.80K |

**Key Insight:** Native Spread is **315.28x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.86M
🥈 Immutability Helper  ██████████████████████████████ 1.38M
🥉 Craft                █████████ 440.57K
   Mutative             ████████ 394.98K
   Immer                ██████ 261.11K
   Seamless Immutable   █ 62.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.93M | ±1.00% | 0.0838ms | 0.1750ms | 5.96M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.86M | ±0.47% | 0.5369ms | 0.8830ms | 931.33K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.44% | 0.7245ms | 0.9900ms | 690.10K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 440.57K | ±0.36% | 2.2698ms | 2.7420ms | 220.28K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 394.98K | ±0.45% | 2.5318ms | 2.9880ms | 197.49K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 261.11K | ±0.41% | 3.8297ms | 5.6310ms | 130.56K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.11K | ±0.37% | 16.0999ms | 21.7360ms | 31.06K |

**Key Insight:** Native Spread is **192.04x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 795.36K
🥈 Immutability Helper  ███████████████████████████ 536.10K
🥉 Craft                ██████████████ 280.06K
   Mutative             ██████████ 199.34K
   Immer                ███████ 134.49K
   Seamless Immutable   ███ 61.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 13.85M | ±0.88% | 0.0722ms | 0.1510ms | 6.93M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 795.36K | ±0.89% | 1.2573ms | 1.6180ms | 397.68K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 536.10K | ±0.16% | 1.8653ms | 2.3220ms | 268.05K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 280.06K | ±0.44% | 3.5707ms | 4.0350ms | 140.03K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 199.34K | ±0.46% | 5.0165ms | 8.3820ms | 99.67K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 134.49K | ±0.50% | 7.4354ms | 12.2730ms | 67.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.16K | ±0.28% | 16.3513ms | 21.9680ms | 30.58K |

**Key Insight:** Native Filter is **226.55x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 458.04K
🥈 Mutative             ██████████████████████████████████████ 437.38K
🥉 Immutability Helper  █████████████████████████████████ 373.42K
   Immer                ████████████████████████ 273.21K
   Immutable.js         ████████████████ 178.43K
   Seamless Immutable   ███ 31.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 12.14M | ±0.96% | 0.0824ms | 0.1610ms | 6.07M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 458.04K | ±0.41% | 2.1832ms | 2.8160ms | 229.02K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 437.38K | ±0.46% | 2.2864ms | 2.7730ms | 218.69K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 373.42K | ±0.10% | 2.6780ms | 3.2120ms | 186.71K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 273.21K | ±0.17% | 3.6602ms | 4.4640ms | 136.61K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 178.43K | ±0.44% | 5.6046ms | 6.8700ms | 89.21K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.76K | ±0.42% | 31.4817ms | 37.2220ms | 15.88K |

**Key Insight:** Native Map is **382.06x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 291.30K
🥈 Craft                ████████████████████████████████████ 259.64K
🥉 Mutative             █████████████████████████████ 213.40K
   Immutable.js         ██████████████████████ 159.68K
   Immer                █████████████ 94.49K
   Seamless Immutable   ███ 22.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.31M | ±0.93% | 0.1074ms | 0.2130ms | 4.65M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 291.30K | ±0.56% | 3.4329ms | 3.8570ms | 145.65K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 259.64K | ±0.65% | 3.8515ms | 4.4010ms | 129.82K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.40K | ±0.68% | 4.6860ms | 5.9710ms | 106.70K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.68K | ±0.67% | 6.2626ms | 7.4090ms | 79.84K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 94.49K | ±0.56% | 10.5834ms | 17.7120ms | 47.24K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.17K | ±0.44% | 45.1016ms | 51.4270ms | 11.09K |

**Key Insight:** Native Spread is **419.88x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 365.32K
🥈 Immer                ████ 34.85K
🥉 Craft                ███ 22.97K
   Immutability Helper  █ 7.35K
   Immutable.js         █ 695.36
   Seamless Immutable   █ 253.38
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 365.32K | ±0.59% | 2.7373ms | 3.3960ms | 182.66K |
| 🥈 | **Native Map** | 353.12K | ±0.57% | 2.8319ms | 3.6340ms | 176.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 34.85K | ±0.35% | 28.6917ms | 34.1650ms | 17.43K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.97K | ±0.26% | 43.5400ms | 49.6350ms | 11.48K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 7.35K | ±0.36% | 136.1082ms | 160.2720ms | 3.67K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 695.36 | ±1.09% | 1438.1065ms | 1949.4610ms | 348.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.38 | ±0.60% | 3946.5853ms | 4481.2490ms | 127.00 |

**Key Insight:** Mutative is **1441.77x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 260.17K
🥈 Immutability Helper  ███████████████████████████████████████ 252.79K
🥉 Mutative             ███████████████████████████████ 201.47K
   Immutable.js         ███████████████████████ 148.99K
   Immer                ███████████████████ 126.53K
   Seamless Immutable   ███ 18.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 7.05M | ±0.73% | 0.1418ms | 0.2400ms | 3.53M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 260.17K | ±0.62% | 3.8436ms | 6.0300ms | 130.09K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 252.79K | ±0.38% | 3.9559ms | 4.8540ms | 126.39K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.47K | ±0.43% | 4.9635ms | 5.7200ms | 100.74K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 148.99K | ±0.52% | 6.7119ms | 11.2540ms | 74.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.53K | ±0.35% | 7.9032ms | 10.2560ms | 63.27K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.72K | ±0.38% | 53.4214ms | 59.5020ms | 9.36K |

**Key Insight:** Native Spread is **376.80x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T13:05:45.927Z*
