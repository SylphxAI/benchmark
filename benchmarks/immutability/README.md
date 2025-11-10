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
- **Last Run:** 9:19:07 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.3% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.7/100 | 73.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 44.3% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.3% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.8/100 | 5.2% |

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
🥇 Craft                ████████████████████████████████████████ 217.82K
🥈 Immer                █████████████████████ 111.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.82K | ±2.11% | 4.5910ms | 8.6470ms | 108.91K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.99K | ±1.66% | 8.9292ms | 25.0880ms | 56.00K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 929.19K
🥈 Immer                █████ 125.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 929.19K | ±0.12% | 1.0762ms | 1.5930ms | 464.59K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 125.89K | ±1.54% | 7.9435ms | 17.5530ms | 62.95K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 172.81K
🥈 Immer                ██████████████ 60.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 172.81K | ±1.78% | 5.7867ms | 11.4310ms | 86.41K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.11K | ±1.73% | 16.6372ms | 31.7090ms | 30.05K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 751.90K
🥈 Mutative             █████████████████████████ 476.05K
🥉 Immer                █████████ 171.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 751.90K | ±1.66% | 1.3300ms | 2.9660ms | 375.95K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 476.05K | ±0.77% | 2.1006ms | 3.4370ms | 238.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 171.58K | ±1.07% | 5.8281ms | 12.5830ms | 85.79K |

**Key Insight:** Craft is **4.38x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 426.63K
🥉 Immer                █████ 155.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.25M | ±0.43% | 0.8012ms | 1.2320ms | 624.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 426.63K | ±0.49% | 2.3440ms | 3.7970ms | 213.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.93K | ±0.59% | 6.4133ms | 12.8240ms | 77.96K |

**Key Insight:** Craft is **8.00x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 866.04K
🥈 Mutative             █████████████████████ 455.34K
🥉 Immer                ████████ 169.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 866.04K | ±0.44% | 1.1547ms | 1.6030ms | 433.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.34K | ±0.43% | 2.1962ms | 2.6450ms | 227.67K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.52K | ±0.38% | 5.8990ms | 8.0650ms | 84.76K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 836.47K
🥈 Mutative             █████████████████████ 449.23K
🥉 Immer                █████████ 179.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 836.47K | ±0.48% | 1.1955ms | 1.5930ms | 418.24K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.23K | ±0.48% | 2.2260ms | 2.6950ms | 224.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.73K | ±0.44% | 5.5638ms | 12.1630ms | 89.87K |

**Key Insight:** Craft is **4.65x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.82K
🥈 Mutative             █████████████████████████████████ 151.93K
🥉 Immer                █████████████████ 78.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.82K | ±0.49% | 5.5000ms | 7.6340ms | 90.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 151.93K | ±0.48% | 6.5819ms | 11.3920ms | 75.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.83K | ±0.69% | 12.6856ms | 23.9350ms | 39.41K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.87K
🥈 Mutative             █████████████ 76.14K
🥉 Immer                ██ 13.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.87K | ±0.44% | 4.3693ms | 5.2410ms | 114.44K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.14K | ±0.49% | 13.1335ms | 23.0940ms | 38.07K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.46K | ±0.77% | 74.2862ms | 156.5150ms | 6.73K |

**Key Insight:** Craft is **17.00x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.24K
🥈 Immer                █████████████ 71.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.24K | ±0.42% | 4.4996ms | 5.2190ms | 111.12K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.88K | ±0.30% | 13.9130ms | 24.6760ms | 35.94K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             █████████████████████████████████████ 998.93K
🥉 Immutability Helper  ████████████████████████████████████ 973.48K
   Craft                ███████████████████████████████████ 947.60K
   Immer                ██████████████████████████ 691.59K
   Seamless Immutable   █████ 127.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.35M | ±0.10% | 0.0697ms | 0.1100ms | 7.17M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.15% | 0.9257ms | 1.1220ms | 540.14K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 998.93K | ±0.18% | 1.0011ms | 1.1720ms | 499.46K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 973.48K | ±0.44% | 1.0272ms | 1.3220ms | 486.74K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 947.60K | ±2.58% | 1.0553ms | 2.6650ms | 473.80K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 691.59K | ±1.82% | 1.4459ms | 3.1860ms | 345.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.05K | ±0.38% | 7.8708ms | 16.1110ms | 63.53K |

**Key Insight:** Native Spread is **112.93x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 491.15K
🥈 Mutative             ██████████████████████████████ 371.82K
🥉 Craft                ████████████████████████████ 342.70K
   Immutable.js         ███████████████████ 238.27K
   Immer                █████████████ 155.71K
   Seamless Immutable   ███ 37.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.19% | 0.0852ms | 0.1200ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 491.15K | ±0.34% | 2.0360ms | 2.4650ms | 245.57K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 371.82K | ±3.12% | 2.6895ms | 5.0490ms | 185.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 342.70K | ±2.61% | 2.9180ms | 5.4600ms | 171.35K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 238.27K | ±0.40% | 4.1969ms | 5.0500ms | 119.14K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 155.71K | ±2.14% | 6.4221ms | 11.6520ms | 77.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.13K | ±0.37% | 26.9327ms | 36.6690ms | 18.57K |

**Key Insight:** Native Spread is **316.21x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.79M
🥈 Immutability Helper  ███████████████████████████████ 1.37M
🥉 Craft                ███████████ 502.57K
   Mutative             █████████ 423.17K
   Immer                ██████ 278.48K
   Seamless Immutable   █ 60.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.29M | ±1.25% | 0.0886ms | 0.1200ms | 5.64M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.79M | ±0.47% | 0.5595ms | 0.8010ms | 893.58K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±0.72% | 0.7308ms | 1.0220ms | 684.15K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 502.57K | ±0.63% | 1.9898ms | 2.4750ms | 251.29K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 423.17K | ±0.56% | 2.3631ms | 2.9260ms | 211.58K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.48K | ±0.66% | 3.5909ms | 4.6990ms | 139.24K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.49K | ±0.76% | 16.5329ms | 26.0990ms | 30.27K |

**Key Insight:** Native Spread is **186.61x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 805.48K
🥈 Immutability Helper  █████████████████████████████ 578.71K
🥉 Craft                ████████████████ 316.77K
   Mutative             ███████████ 217.55K
   Immer                ███████ 140.01K
   Seamless Immutable   ███ 60.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.63M | ±0.77% | 0.0792ms | 0.1110ms | 6.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 805.48K | ±0.91% | 1.2415ms | 1.6230ms | 402.74K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.71K | ±0.35% | 1.7280ms | 1.8940ms | 289.35K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 316.77K | ±0.84% | 3.1568ms | 4.0370ms | 158.39K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.55K | ±0.82% | 4.5966ms | 5.6010ms | 108.78K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.01K | ±0.82% | 7.1423ms | 16.2710ms | 70.01K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.26K | ±1.05% | 16.5945ms | 26.1200ms | 30.13K |

**Key Insight:** Native Filter is **209.59x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 500.85K
🥈 Mutative             █████████████████████████████████████ 459.74K
🥉 Immutability Helper  ████████████████████████████████ 395.98K
   Immer                ███████████████████████ 284.87K
   Immutable.js         ███████████████ 187.66K
   Seamless Immutable   ██ 30.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.15M | ±1.19% | 0.0897ms | 0.1210ms | 5.58M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 500.85K | ±0.79% | 1.9966ms | 2.5550ms | 250.43K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 459.74K | ±0.55% | 2.1752ms | 2.6050ms | 229.87K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.98K | ±0.26% | 2.5254ms | 3.0060ms | 197.99K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.87K | ±0.37% | 3.5104ms | 4.1880ms | 142.44K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.66K | ±0.69% | 5.3288ms | 5.9810ms | 93.83K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.82K | ±0.70% | 32.4459ms | 52.8600ms | 15.41K |

**Key Insight:** Native Map is **361.84x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 302.38K
🥈 Craft                ███████████████████████████████████ 267.83K
🥉 Mutative             ████████████████████████████ 212.68K
   Immutable.js         ██████████████████████ 168.40K
   Immer                █████████████ 97.07K
   Seamless Immutable   ███ 21.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.35M | ±12.60% | 0.1197ms | 0.1800ms | 4.44M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 302.38K | ±1.17% | 3.3071ms | 3.9070ms | 151.19K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 267.83K | ±0.98% | 3.7338ms | 4.6380ms | 133.91K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 212.68K | ±0.78% | 4.7019ms | 5.4000ms | 106.34K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.40K | ±0.72% | 5.9383ms | 7.1730ms | 84.20K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.07K | ±1.03% | 10.3023ms | 19.9480ms | 48.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.83K | ±0.92% | 45.8188ms | 82.4440ms | 10.93K |

**Key Insight:** Native Spread is **382.70x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 360.20K
🥈 Immer                ███ 29.77K
🥉 Craft                ██ 21.89K
   Immutability Helper  █ 6.31K
   Immutable.js         █ 721.37
   Seamless Immutable   █ 246.95
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 360.20K | ±0.64% | 2.7763ms | 3.6470ms | 180.10K |
| 🥈 | **Native Map** | 331.81K | ±0.74% | 3.0138ms | 4.4990ms | 165.91K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.77K | ±0.41% | 33.5887ms | 44.5440ms | 14.89K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.89K | ±0.48% | 45.6762ms | 55.5750ms | 10.95K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.31K | ±0.55% | 158.4236ms | 224.9830ms | 3.16K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 721.37 | ±1.00% | 1386.2516ms | 1834.0460ms | 361.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 246.95 | ±2.20% | 4049.4402ms | 7192.9310ms | 124.00 |

**Key Insight:** Mutative is **1458.59x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.26K
🥈 Craft                ████████████████████████████████████████ 274.45K
🥉 Mutative             ████████████████████████████ 195.51K
   Immutable.js         ████████████████████████ 163.32K
   Immer                ██████████████████ 126.35K
   Seamless Immutable   ███ 18.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.45M | ±0.61% | 0.1550ms | 0.1900ms | 3.23M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.26K | ±0.52% | 3.6329ms | 4.2280ms | 137.63K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 274.45K | ±0.78% | 3.6437ms | 4.3890ms | 137.22K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.51K | ±0.87% | 5.1149ms | 6.1210ms | 97.75K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.32K | ±0.74% | 6.1231ms | 7.5140ms | 81.66K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.35K | ±0.78% | 7.9146ms | 14.2160ms | 63.17K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.72K | ±0.57% | 53.4299ms | 66.2450ms | 9.36K |

**Key Insight:** Native Spread is **344.74x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T22:22:04.169Z*
