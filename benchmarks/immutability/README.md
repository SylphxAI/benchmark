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
- **Last Run:** 12:17:13 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.7/100 | 80.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.5/100 | 73.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 30.7/100 | 42.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 33.9% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.1/100 | 5.6% |

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
🥇 Craft                ████████████████████████████████████████ 204.74K
🥈 Immer                ██████████████████████ 113.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 204.74K | ±1.99% | 4.8843ms | 8.7050ms | 102.37K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.05K | ±1.48% | 8.8458ms | 15.6300ms | 56.52K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.03M
🥈 Immer                █████ 126.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.03M | ±0.44% | 0.9744ms | 1.4550ms | 513.13K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 126.00K | ±1.64% | 7.9362ms | 14.2150ms | 63.00K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 164.59K
🥈 Immer                ██████████████ 57.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 164.59K | ±1.78% | 6.0757ms | 11.7120ms | 82.30K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 57.61K | ±1.52% | 17.3596ms | 29.5390ms | 28.80K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 696.68K
🥈 Mutative             ███████████████████████████ 478.56K
🥉 Immer                ██████████ 172.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 696.68K | ±1.68% | 1.4354ms | 2.6690ms | 348.34K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 478.56K | ±0.74% | 2.0896ms | 2.6690ms | 239.28K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 172.53K | ±0.96% | 5.7960ms | 8.3070ms | 86.27K |

**Key Insight:** Craft is **4.04x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.16M
🥈 Mutative             ███████████████ 429.16K
🥉 Immer                █████ 150.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.16M | ±0.38% | 0.8588ms | 1.2810ms | 582.20K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.16K | ±0.39% | 2.3302ms | 2.8180ms | 214.58K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 150.95K | ±0.60% | 6.6248ms | 11.6120ms | 75.47K |

**Key Insight:** Craft is **7.71x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 768.05K
🥈 Mutative             ████████████████████████ 452.83K
🥉 Immer                █████████ 166.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 768.05K | ±0.37% | 1.3020ms | 1.8530ms | 384.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 452.83K | ±0.38% | 2.2084ms | 2.6850ms | 226.41K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.76K | ±0.31% | 5.9966ms | 7.5300ms | 83.38K |

**Key Insight:** Craft is **4.61x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 752.10K
🥈 Mutative             ███████████████████████ 438.98K
🥉 Immer                ██████████ 178.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 752.10K | ±0.38% | 1.3296ms | 1.7930ms | 376.05K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 438.98K | ±0.41% | 2.2780ms | 2.7650ms | 219.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.82K | ±0.34% | 5.5921ms | 6.8980ms | 89.41K |

**Key Insight:** Craft is **4.21x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 187.94K
🥈 Mutative             ████████████████████████████████ 150.45K
🥉 Immer                █████████████████ 78.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 187.94K | ±0.47% | 5.3209ms | 7.1580ms | 93.97K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.45K | ±1.05% | 6.6466ms | 11.0430ms | 75.23K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.45K | ±0.46% | 12.7468ms | 21.5410ms | 39.23K |

**Key Insight:** Craft is **2.40x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 232.59K
🥈 Mutative             ██████████████ 80.41K
🥉 Immer                ██ 13.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 232.59K | ±0.38% | 4.2994ms | 5.0260ms | 116.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 80.41K | ±0.40% | 12.4361ms | 20.6940ms | 40.21K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.84K | ±0.89% | 72.2336ms | 91.1990ms | 6.92K |

**Key Insight:** Craft is **16.80x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 219.90K
🥈 Immer                ████████████ 66.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.90K | ±0.30% | 4.5476ms | 5.2650ms | 109.95K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 66.63K | ±0.30% | 15.0076ms | 24.2980ms | 33.32K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 961.98K
🥈 Craft                ███████████████████████████████████████ 927.08K
🥉 Mutative             ██████████████████████████████████████ 910.21K
   Immutability Helper  ████████████████████████████████████ 869.09K
   Immer                ███████████████████████████ 650.44K
   Seamless Immutable   █████ 128.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 16.21M | ±0.08% | 0.0617ms | 0.1370ms | 8.10M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 961.98K | ±0.17% | 1.0395ms | 1.5070ms | 480.99K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 927.08K | ±2.70% | 1.0787ms | 2.2600ms | 463.62K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 910.21K | ±0.57% | 1.0986ms | 1.6640ms | 455.11K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 869.09K | ±0.16% | 1.1506ms | 1.6110ms | 434.54K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 650.44K | ±2.13% | 1.5374ms | 2.9630ms | 325.22K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.04K | ±0.31% | 7.8102ms | 12.5130ms | 64.02K |

**Key Insight:** Native Spread is **126.57x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 454.85K
🥈 Mutative             ██████████████████████████████████ 384.12K
🥉 Craft                ████████████████████████████ 320.10K
   Immutable.js         ██████████████████ 201.83K
   Immer                ████████████ 138.78K
   Seamless Immutable   ███ 37.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.14M | ±0.18% | 0.0824ms | 0.1750ms | 6.07M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 454.85K | ±0.36% | 2.1985ms | 2.9790ms | 227.43K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 384.12K | ±0.43% | 2.6033ms | 4.3080ms | 192.06K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.10K | ±2.78% | 3.1240ms | 5.4300ms | 160.13K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 201.83K | ±1.79% | 4.9545ms | 8.0190ms | 100.92K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 138.78K | ±2.08% | 7.2057ms | 14.1390ms | 69.39K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.76K | ±0.30% | 26.4865ms | 32.0760ms | 18.88K |

**Key Insight:** Native Spread is **321.62x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.83M
🥈 Immutability Helper  ████████████████████████████ 1.29M
🥉 Craft                ██████████ 442.19K
   Mutative             █████████ 390.79K
   Immer                ██████ 255.26K
   Seamless Immutable   █ 59.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.95M | ±0.73% | 0.0913ms | 0.2190ms | 5.47M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.83M | ±0.67% | 0.5466ms | 1.0440ms | 914.80K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.29M | ±0.41% | 0.7732ms | 1.1300ms | 646.64K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 442.19K | ±0.36% | 2.2615ms | 3.1210ms | 221.10K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 390.79K | ±0.37% | 2.5589ms | 4.0230ms | 195.40K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 255.26K | ±0.85% | 3.9175ms | 6.6390ms | 127.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.78K | ±0.68% | 16.7292ms | 25.1260ms | 29.89K |

**Key Insight:** Native Spread is **183.14x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 765.68K
🥈 Immutability Helper  ████████████████████████████ 540.64K
🥉 Craft                ███████████████ 287.52K
   Mutative             ██████████ 197.74K
   Immer                ███████ 134.36K
   Seamless Immutable   ███ 60.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 13.66M | ±1.16% | 0.0732ms | 0.1720ms | 6.83M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 765.68K | ±0.65% | 1.3060ms | 1.9890ms | 382.84K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 540.64K | ±0.14% | 1.8496ms | 2.3710ms | 270.32K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 287.52K | ±0.41% | 3.4780ms | 4.1350ms | 143.76K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 197.74K | ±0.51% | 5.0571ms | 5.7560ms | 98.87K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 134.36K | ±0.43% | 7.4428ms | 12.4190ms | 67.18K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.22K | ±0.48% | 16.6048ms | 22.2560ms | 30.11K |

**Key Insight:** Native Filter is **226.83x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 458.22K
🥈 Mutative             ███████████████████████████████████████ 448.13K
🥉 Immutability Helper  ████████████████████████████████ 367.09K
   Immer                ████████████████████████ 271.65K
   Immutable.js         ███████████████ 168.16K
   Seamless Immutable   ███ 31.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.94M | ±0.75% | 0.0837ms | 0.1680ms | 5.97M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 458.22K | ±0.32% | 2.1824ms | 2.7250ms | 229.11K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 448.13K | ±0.33% | 2.2315ms | 2.7070ms | 224.06K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 367.09K | ±0.18% | 2.7242ms | 3.2200ms | 183.54K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 271.65K | ±0.22% | 3.6812ms | 4.8580ms | 135.83K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.16K | ±1.44% | 5.9468ms | 9.7020ms | 84.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.54K | ±0.41% | 31.7091ms | 37.6460ms | 15.77K |

**Key Insight:** Native Map is **378.69x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 295.16K
🥈 Craft                ███████████████████████████████████ 255.75K
🥉 Mutative             █████████████████████████████ 216.03K
   Immutable.js         █████████████████████ 154.34K
   Immer                █████████████ 95.76K
   Seamless Immutable   ███ 22.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.16M | ±0.69% | 0.1091ms | 0.2500ms | 4.58M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 295.16K | ±0.46% | 3.3880ms | 3.9940ms | 147.58K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 255.75K | ±0.48% | 3.9100ms | 6.7810ms | 127.88K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.03K | ±0.47% | 4.6290ms | 5.4320ms | 108.01K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 154.34K | ±1.46% | 6.4791ms | 9.5380ms | 77.17K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 95.76K | ±0.42% | 10.4422ms | 16.5710ms | 47.88K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.39K | ±0.55% | 44.6722ms | 51.2090ms | 11.19K |

**Key Insight:** Native Spread is **409.37x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 365.41K
🥈 Immer                ███ 30.78K
🥉 Craft                ███ 22.96K
   Immutability Helper  █ 7.29K
   Immutable.js         █ 633.58
   Seamless Immutable   █ 249.23
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 365.41K | ±0.95% | 2.7367ms | 3.3600ms | 182.72K |
| 🥈 | **Native Map** | 323.02K | ±1.20% | 3.0958ms | 4.0320ms | 161.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.78K | ±0.61% | 32.4906ms | 40.2200ms | 15.39K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.96K | ±0.40% | 43.5450ms | 49.2030ms | 11.48K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 7.29K | ±0.49% | 137.0808ms | 160.9160ms | 3.65K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 633.58 | ±1.35% | 1578.3291ms | 2269.7620ms | 317.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 249.23 | ±0.77% | 4012.4351ms | 4629.0580ms | 125.00 |

**Key Insight:** Mutative is **1466.18x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 265.79K
🥈 Immutability Helper  █████████████████████████████████████ 245.57K
🥉 Mutative             ███████████████████████████████ 203.08K
   Immutable.js         █████████████████████ 140.35K
   Immer                ███████████████████ 124.25K
   Seamless Immutable   ███ 19.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.87M | ±1.19% | 0.1455ms | 0.2520ms | 3.44M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 265.79K | ±0.63% | 3.7623ms | 4.4640ms | 132.90K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 245.57K | ±0.53% | 4.0722ms | 4.9460ms | 122.78K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 203.08K | ±0.41% | 4.9241ms | 5.6980ms | 101.54K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 140.35K | ±1.82% | 7.1249ms | 12.9000ms | 70.18K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 124.25K | ±0.54% | 8.0484ms | 11.7770ms | 62.13K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.18K | ±0.49% | 52.1471ms | 59.2220ms | 9.59K |

**Key Insight:** Native Spread is **358.35x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:05:57.349Z*
