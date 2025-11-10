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
- **Last Run:** 11:33:28 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.6% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 75.1% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.7% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.4% |

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
🥇 Craft                ████████████████████████████████████████ 215.91K
🥈 Immer                ████████████████████ 110.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 215.91K | ±2.23% | 4.6316ms | 9.2480ms | 107.95K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.19K | ±1.98% | 9.0754ms | 25.3770ms | 55.09K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 962.02K
🥈 Immer                █████ 130.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 962.02K | ±0.18% | 1.0395ms | 1.8330ms | 481.01K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.15K | ±1.73% | 7.6834ms | 17.1920ms | 65.08K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 178.01K
🥈 Immer                ██████████████ 60.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 178.01K | ±1.58% | 5.6178ms | 10.8210ms | 89.00K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.35K | ±1.66% | 16.5695ms | 31.2280ms | 30.18K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 763.37K
🥈 Mutative             █████████████████████████ 473.04K
🥉 Immer                █████████ 175.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 763.37K | ±1.55% | 1.3100ms | 2.8050ms | 381.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 473.04K | ±0.71% | 2.1140ms | 3.6870ms | 236.52K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.77K | ±0.87% | 5.6892ms | 10.1890ms | 87.89K |

**Key Insight:** Craft is **4.34x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.24M
🥈 Mutative             ██████████████ 424.16K
🥉 Immer                █████ 157.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.24M | ±0.48% | 0.8071ms | 1.2020ms | 619.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 424.16K | ±0.48% | 2.3576ms | 3.0350ms | 212.08K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.37K | ±0.65% | 6.3544ms | 12.4030ms | 78.69K |

**Key Insight:** Craft is **7.87x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 863.82K
🥈 Mutative             █████████████████████ 456.44K
🥉 Immer                ████████ 170.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 863.82K | ±0.49% | 1.1576ms | 1.5630ms | 431.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 456.44K | ±0.45% | 2.1908ms | 2.6450ms | 228.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 170.58K | ±0.39% | 5.8623ms | 9.6080ms | 85.29K |

**Key Insight:** Craft is **5.06x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 848.63K
🥈 Mutative             █████████████████████ 451.08K
🥉 Immer                █████████ 183.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 848.63K | ±0.43% | 1.1784ms | 1.5030ms | 424.47K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.08K | ±0.42% | 2.2169ms | 2.6250ms | 225.54K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.90K | ±0.43% | 5.4377ms | 9.4280ms | 91.95K |

**Key Insight:** Craft is **4.61x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.14K
🥈 Mutative             █████████████████████████████████ 147.64K
🥉 Immer                ██████████████████ 79.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.14K | ±0.53% | 5.5206ms | 7.0840ms | 90.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.64K | ±0.57% | 6.7731ms | 11.3610ms | 73.82K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.76K | ±0.53% | 12.5376ms | 22.7630ms | 39.88K |

**Key Insight:** Craft is **2.27x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.17K
🥈 Mutative             █████████████ 73.84K
🥉 Immer                ██ 13.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.17K | ±0.49% | 4.5010ms | 5.3700ms | 111.09K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 73.84K | ±0.50% | 13.5429ms | 23.4840ms | 36.92K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.68K | ±0.43% | 73.0786ms | 105.1670ms | 6.84K |

**Key Insight:** Craft is **16.24x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.19K
🥈 Immer                █████████████ 69.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.19K | ±0.49% | 4.4804ms | 5.3700ms | 111.60K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.94K | ±0.44% | 14.2985ms | 30.5260ms | 34.97K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  █████████████████████████████████████ 985.29K
🥉 Mutative             ████████████████████████████████████ 956.78K
   Craft                █████████████████████████████████ 883.45K
   Immer                ██████████████████████████ 696.63K
   Seamless Immutable   █████ 127.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.63M | ±0.09% | 0.0684ms | 0.0910ms | 7.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.36% | 0.9476ms | 1.4430ms | 527.62K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 985.29K | ±0.45% | 1.0149ms | 1.7830ms | 492.65K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 956.78K | ±0.44% | 1.0452ms | 1.6830ms | 478.39K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 883.45K | ±3.15% | 1.1319ms | 2.6950ms | 441.73K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 696.63K | ±1.90% | 1.4355ms | 3.2150ms | 348.31K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.67K | ±0.42% | 7.8327ms | 15.7900ms | 63.84K |

**Key Insight:** Native Spread is **114.56x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 530.94K
🥈 Mutative             █████████████████████████████ 388.65K
🥉 Craft                ██████████████████████████ 342.21K
   Immutable.js         ██████████████████ 235.92K
   Immer                ████████████ 154.14K
   Seamless Immutable   ███ 37.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.79M | ±0.13% | 0.0848ms | 0.1200ms | 5.90M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 530.94K | ±0.42% | 1.8834ms | 2.5250ms | 265.47K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 388.65K | ±0.75% | 2.5730ms | 4.6790ms | 194.33K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 342.21K | ±2.81% | 2.9222ms | 5.3700ms | 171.11K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 235.92K | ±0.46% | 4.2387ms | 4.9290ms | 117.96K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.14K | ±2.09% | 6.4878ms | 11.8020ms | 77.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.85K | ±0.43% | 26.4204ms | 36.1980ms | 18.93K |

**Key Insight:** Native Spread is **311.52x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  ████████████████████████████████ 1.40M
🥉 Craft                ████████████ 503.63K
   Mutative             ██████████ 422.45K
   Immer                ███████ 283.91K
   Seamless Immutable   █ 61.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.48M | ±1.19% | 0.0871ms | 0.1200ms | 5.74M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±0.56% | 0.5746ms | 0.8020ms | 870.12K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.77% | 0.7137ms | 0.8210ms | 700.54K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 503.63K | ±0.62% | 1.9856ms | 2.4450ms | 251.81K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 422.45K | ±0.78% | 2.3671ms | 2.9460ms | 211.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 283.91K | ±0.64% | 3.5222ms | 4.2680ms | 141.96K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.27K | ±0.65% | 16.3217ms | 25.5980ms | 30.64K |

**Key Insight:** Native Spread is **187.33x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 769.88K
🥈 Immutability Helper  ██████████████████████████████ 580.20K
🥉 Craft                ████████████████ 310.27K
   Mutative             ███████████ 217.40K
   Immer                ███████ 140.68K
   Seamless Immutable   ███ 59.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.64M | ±0.79% | 0.0791ms | 0.1110ms | 6.32M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 769.88K | ±0.89% | 1.2989ms | 1.6730ms | 384.94K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.20K | ±0.41% | 1.7236ms | 1.9530ms | 290.10K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 310.27K | ±0.87% | 3.2230ms | 4.2180ms | 155.14K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.40K | ±0.82% | 4.5998ms | 5.2900ms | 108.70K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.68K | ±0.83% | 7.1082ms | 14.1470ms | 70.34K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.56K | ±0.95% | 16.7894ms | 26.0380ms | 29.78K |

**Key Insight:** Native Filter is **212.22x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 493.11K
🥈 Mutative             █████████████████████████████████████ 452.72K
🥉 Immutability Helper  ████████████████████████████████ 398.16K
   Immer                ███████████████████████ 281.34K
   Immutable.js         ███████████████ 185.31K
   Seamless Immutable   ███ 31.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.12M | ±1.19% | 0.0899ms | 0.1300ms | 5.56M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 493.11K | ±0.65% | 2.0280ms | 2.5240ms | 246.55K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 452.72K | ±0.64% | 2.2089ms | 3.9170ms | 226.36K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 398.16K | ±0.24% | 2.5115ms | 3.2960ms | 199.08K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 281.34K | ±0.26% | 3.5544ms | 6.5530ms | 140.67K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 185.31K | ±0.67% | 5.3964ms | 9.4280ms | 92.65K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.60K | ±0.61% | 31.6499ms | 46.9280ms | 15.80K |

**Key Insight:** Native Map is **351.98x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 300.77K
🥈 Craft                ██████████████████████████████████ 258.84K
🥉 Mutative             ████████████████████████████ 211.06K
   Immutable.js         ██████████████████████ 169.01K
   Immer                █████████████ 97.56K
   Seamless Immutable   ███ 21.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.85M | ±1.21% | 0.1129ms | 0.1800ms | 4.43M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 300.77K | ±0.87% | 3.3248ms | 3.7770ms | 150.39K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 258.84K | ±1.00% | 3.8633ms | 6.8030ms | 129.42K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 211.06K | ±1.00% | 4.7379ms | 5.5410ms | 105.53K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 169.01K | ±0.44% | 5.9169ms | 11.3020ms | 84.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.56K | ±0.86% | 10.2497ms | 19.4160ms | 48.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.76K | ±0.87% | 45.9489ms | 82.6540ms | 10.88K |

**Key Insight:** Native Spread is **406.85x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 359.21K
🥈 Immer                ███ 29.73K
🥉 Craft                ██ 21.83K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 726.10
   Seamless Immutable   █ 258.04
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 359.21K | ±0.65% | 2.7839ms | 3.5070ms | 179.61K |
| 🥈 | **Native Map** | 352.99K | ±0.55% | 2.8330ms | 3.5960ms | 176.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.73K | ±0.50% | 33.6381ms | 45.3050ms | 14.87K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.83K | ±0.48% | 45.8012ms | 67.2850ms | 10.92K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.48% | 157.1914ms | 195.3660ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 726.10 | ±1.38% | 1377.2235ms | 2052.1770ms | 364.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 258.04 | ±0.68% | 3875.3587ms | 4493.3830ms | 130.00 |

**Key Insight:** Mutative is **1392.07x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 273.59K
🥈 Immutability Helper  ████████████████████████████████████████ 271.69K
🥉 Mutative             █████████████████████████████ 197.52K
   Immutable.js         ████████████████████████ 162.39K
   Immer                ██████████████████ 126.35K
   Seamless Immutable   ███ 18.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.50M | ±0.54% | 0.1537ms | 0.1910ms | 3.25M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 273.59K | ±0.44% | 3.6552ms | 4.2380ms | 136.79K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 271.69K | ±0.42% | 3.6806ms | 4.2280ms | 135.85K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.52K | ±0.52% | 5.0627ms | 5.8710ms | 98.76K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 162.39K | ±0.57% | 6.1578ms | 9.9490ms | 81.20K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.35K | ±0.54% | 7.9145ms | 14.4370ms | 63.18K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.82K | ±0.67% | 53.1242ms | 101.1290ms | 9.41K |

**Key Insight:** Native Spread is **345.56x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T23:50:12.244Z*
