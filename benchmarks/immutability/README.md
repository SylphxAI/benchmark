<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2017,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-18-orange?style=flat-square)](#-test-coverage)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🔬 Methodology](#-methodology) • [🚀 Run Locally](#-run-locally)

</div>

---

## 📑 Table of Contents

- [🎯 Quick Recommendations](#-quick-recommendations)
- [📊 Overall Performance Rankings](#-overall-performance-rankings)
- [📈 Library Comparison](#-library-comparison)
- [📊 Performance by Test Group](#-performance-by-test-group)
- [🔬 Methodology](#-methodology)
- [🚀 Run Locally](#-run-locally)
- [🚀 Libraries Tested](#-libraries-tested)

---

## 🎯 Quick Recommendations

**TL;DR** - Choose based on your needs:

- **⚡ Maximum Performance**: Craft - Fastest overall with 59.2/100 score
- **⚖️ Best Balance**: Mutative - Great performance (20.1/100) with good ecosystem
- **🎯 Popular Choice**: Immer - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 59.2/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Mutative** (Score: 20.1/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 19.0/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Native Spread** (Score: 4.1/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutable.js** (Score: 3.6/100)
- Immutable persistent data collections for Javascript
- **Best for**: General purpose state management
- [GitHub](https://github.com/immutable-js/immutable-js) • [npm](https://www.npmjs.com/package/immutable)


</details>

---

## 📊 Overall Performance Rankings

> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting** that balances functional importance with data-driven stability.
> Both ranking systems are shown below for comparison.
>
> - **Hybrid Weighted** (primary): Balances category importance × test stability
> - **Variance-Based** (reference): Pure data-driven weighting
>
> See [Hybrid Weighting Analysis](../../HYBRID_WEIGHTING_ANALYSIS.md) for methodology.

### 🎯 Hybrid Weighted Rankings

Based on **two-tier weighted geometric mean** combining category importance with variance-based test weights.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 72.7/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 28.2/100 | 39% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 9.5/100 | 13% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Craft](https://github.com/SylphxAI/craft)** | 7.0/100 | 10% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 6.1/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 3.0/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.6/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 59.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Mutative](https://github.com/unadlib/mutative)** | 20.1/100 | 34% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
| 🥉 3 | **[Immer](https://github.com/immerjs/immer)** | 19.0/100 | 32% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  4 | **[Native Spread](#)** | 4.1/100 | 7% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 3.6/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.3/100 | 2% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.1/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **59.2** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **20.1** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **19.0** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Native Spread](#)** | **4.1** | N/A | State management solution... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **3.6** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.3** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.1** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   6.1M ops/sec
🥈 Immutable.js       ██████████████████████                     3.3M ops/sec
🥉 Craft              ██████                                     932K ops/sec
 Immutability Helper ██████                                     895K ops/sec
 Immer              ███                                        437K ops/sec
 Mutative           ███                                        386K ops/sec
 Seamless Immutable █                                          186K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.1M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 3.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 932K | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 895K | 0.001ms | 0.002ms | 1000 |
| Immer | 437K | 0.003ms | 0.006ms | 1000 |
| Mutative | 386K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 186K | 0.005ms | 0.010ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.3M ops/sec
🥈 Immutable.js       █████████                                  532K ops/sec
🥉 Immutability Helper ██████                                     316K ops/sec
 Craft              ████                                       246K ops/sec
 Mutative           ███                                        197K ops/sec
 Immer              █                                          79K ops/sec
 Seamless Immutable █                                          57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.3M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 532K | 0.002ms | 0.003ms | 1000 |
| Immutability Helper | 316K | 0.003ms | 0.005ms | 1000 |
| Craft | 246K | 0.004ms | 0.008ms | 1000 |
| Mutative | 197K | 0.005ms | 0.012ms | 1000 |
| Immer | 79K | 0.015ms | 0.038ms | 1000 |
| Seamless Immutable | 57K | 0.018ms | 0.028ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   3.4M ops/sec
🥈 Immutability Helper █████████████████████████                  2.1M ops/sec
🥉 Immutable.js       ██████████                                 878K ops/sec
 Craft              ██                                         172K ops/sec
 Mutative           ██                                         130K ops/sec
 Immer              █                                          71K ops/sec
 Seamless Immutable                                            39K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 878K | 0.001ms | 0.002ms | 1000 |
| Craft | 172K | 0.006ms | 0.013ms | 1000 |
| Mutative | 130K | 0.008ms | 0.020ms | 1000 |
| Immer | 71K | 0.014ms | 0.027ms | 1000 |
| Seamless Immutable | 39K | 0.026ms | 0.049ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   6.8M ops/sec
🥈 Immutability Helper ███                                        503K ops/sec
🥉 Immutable.js       ███                                        440K ops/sec
 Craft                                                         69K ops/sec
 Seamless Immutable                                            62K ops/sec
 Immer                                                         43K ops/sec
 Mutative                                                      33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.8M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 503K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 440K | 0.002ms | 0.004ms | 1000 |
| Craft | 69K | 0.015ms | 0.026ms | 1000 |
| Seamless Immutable | 62K | 0.016ms | 0.027ms | 1000 |
| Immer | 43K | 0.023ms | 0.037ms | 1000 |
| Mutative | 33K | 0.030ms | 0.043ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   3.1M ops/sec
🥈 Immutable.js       ██████                                     439K ops/sec
🥉 Immutability Helper ███                                        223K ops/sec
 Craft              ██                                         167K ops/sec
 Mutative           ██                                         119K ops/sec
 Immer              █                                          80K ops/sec
 Seamless Immutable                                            35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 439K | 0.002ms | 0.004ms | 1000 |
| Immutability Helper | 223K | 0.005ms | 0.006ms | 1000 |
| Craft | 167K | 0.007ms | 0.015ms | 1000 |
| Mutative | 119K | 0.011ms | 0.028ms | 1000 |
| Immer | 80K | 0.013ms | 0.027ms | 1000 |
| Seamless Immutable | 35K | 0.029ms | 0.070ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   1.4M ops/sec
🥈 Immutable.js       ██████████                                 360K ops/sec
🥉 Immutability Helper █████                                      188K ops/sec
 Craft              ████                                       137K ops/sec
 Immer              ██                                         74K ops/sec
 Mutative           ██                                         70K ops/sec
 Seamless Immutable █                                          35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.4M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 360K | 0.003ms | 0.007ms | 1000 |
| Immutability Helper | 188K | 0.006ms | 0.020ms | 1000 |
| Craft | 137K | 0.007ms | 0.015ms | 1000 |
| Immer | 74K | 0.015ms | 0.027ms | 1000 |
| Mutative | 70K | 0.018ms | 0.034ms | 1000 |
| Seamless Immutable | 35K | 0.033ms | 0.076ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   3.4M ops/sec
🥈 Immutability Helper ████                                       299K ops/sec
🥉 Craft              ███                                        238K ops/sec
 Mutative           ██                                         170K ops/sec
 Immutable.js       ██                                         141K ops/sec
 Immer              █                                          77K ops/sec
 Seamless Immutable                                            29K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 299K | 0.003ms | 0.007ms | 1000 |
| Craft | 238K | 0.004ms | 0.007ms | 1000 |
| Mutative | 170K | 0.006ms | 0.013ms | 1000 |
| Immutable.js | 141K | 0.007ms | 0.013ms | 1000 |
| Immer | 77K | 0.013ms | 0.033ms | 1000 |
| Seamless Immutable | 29K | 0.036ms | 0.059ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Immutable.js       ████████████████████████████████████████   804K ops/sec
🥈 Native Spread      ███████                                    138K ops/sec
🥉 Mutative           ██████                                     115K ops/sec
 Immutability Helper                                            5K ops/sec
 Craft                                                         3K ops/sec
 Immer                                                         2K ops/sec
 Seamless Immutable                                            2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 804K | 0.001ms | 0.003ms | 1000 |
| Native Spread | 138K | 0.009ms | 0.017ms | 1000 |
| Mutative | 115K | 0.009ms | 0.018ms | 1000 |
| Immutability Helper | 5K | 0.195ms | 0.250ms | 1000 |
| Craft | 3K | 0.395ms | 0.863ms | 1000 |
| Immer | 2K | 0.669ms | 1.511ms | 1000 |
| Seamless Immutable | 2K | 0.695ms | 1.841ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         108K ops/sec
🥉 Mutative           █                                          86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 108K | 0.009ms | 0.017ms | 1000 |
| Mutative | 86K | 0.012ms | 0.023ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Mutative           ██████████                                 84K ops/sec
🥉 Immer              ██████████                                 83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Mutative | 84K | 0.013ms | 0.024ms | 1000 |
| Immer | 83K | 0.012ms | 0.029ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Mutative           ████████                                   64K ops/sec
🥉 Immer              ███████                                    57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Mutative | 64K | 0.016ms | 0.029ms | 1000 |
| Immer | 57K | 0.018ms | 0.044ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              █████████████████████████                  189K ops/sec
🥉 Mutative           ███████████████████                        140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 189K | 0.005ms | 0.012ms | 1000 |
| Mutative | 140K | 0.008ms | 0.012ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   755K ops/sec
🥈 Native Spread      █████████████████████████                  480K ops/sec
🥉 Mutative           █████████                                  163K ops/sec
 Craft              ████                                       78K ops/sec
 Immer              ███                                        53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 755K | 0.001ms | 0.002ms | 1000 |
| Native Spread | 480K | 0.003ms | 0.004ms | 1000 |
| Mutative | 163K | 0.007ms | 0.014ms | 1000 |
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Immer | 53K | 0.019ms | 0.032ms | 1000 |

#### Map - Set Operation

```
🥇 Native Spread      ████████████████████████████████████████   1.9M ops/sec
🥈 Craft              ██████████████████████████                 1.2M ops/sec
🥉 Immutable.js       █████████████████████                      1.0M ops/sec
 Mutative           ██████                                     273K ops/sec
 Immer              ████                                       185K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.9M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 1.0M | 0.001ms | 0.002ms | 1000 |
| Mutative | 273K | 0.004ms | 0.011ms | 1000 |
| Immer | 185K | 0.005ms | 0.009ms | 1000 |

#### Map - Update Nested Value

```
🥇 Native Spread      ████████████████████████████████████████   3.2M ops/sec
🥈 Immutable.js       ███████████████████                        1.5M ops/sec
🥉 Craft              ██████████████████                         1.5M ops/sec
 Mutative           ███                                        275K ops/sec
 Immer              ██                                         138K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.2M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.5M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 275K | 0.004ms | 0.008ms | 1000 |
| Immer | 138K | 0.007ms | 0.012ms | 1000 |

#### Set - Add Operation

```
🥇 Native Spread      ████████████████████████████████████████   4.7M ops/sec
🥈 Immutable.js       ███████████████████████████████████████    4.5M ops/sec
🥉 Craft              ██████████                                 1.1M ops/sec
 Mutative           ██                                         211K ops/sec
 Immer              ██                                         189K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.7M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Mutative | 211K | 0.005ms | 0.009ms | 1000 |
| Immer | 189K | 0.005ms | 0.007ms | 1000 |

#### Set - Delete Operation

```
🥇 Immutable.js       ████████████████████████████████████████   4.4M ops/sec
🥈 Native Spread      ██████████████████████████████████         3.7M ops/sec
🥉 Craft              ██████████                                 1.1M ops/sec
 Mutative           ██                                         227K ops/sec
 Immer              ██                                         202K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 4.4M | 0.000ms | 0.001ms | 1000 |
| Native Spread | 3.7M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 227K | 0.005ms | 0.009ms | 1000 |
| Immer | 202K | 0.005ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.6M ops/sec
🥈 Native Spread      ██████████████                             544K ops/sec
🥉 Craft              ██                                         91K ops/sec
 Immer              █                                          42K ops/sec
 Mutative           █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 544K | 0.003ms | 0.004ms | 1000 |
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Immer | 42K | 0.026ms | 0.040ms | 1000 |
| Mutative | 36K | 0.034ms | 0.077ms | 1000 |



</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Platform**: GitHub Actions (Ubuntu latest)
- **CPU**: 2-core (Intel Xeon or AMD EPYC equivalent)
- **RAM**: ~7GB available
- **Node.js**: 20.x
- **Warmup**: 100ms + 5 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **weighted geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Test weights calculated based on 90th percentile of performance variance
- Stable tests (low variance) receive higher weight
- Unstable tests (high variance) receive lower weight
- This prevents outlier tests from dominating the overall score

**Example** (from current results):
- High-Frequency Read (stable, factor 7.3): **weight 17.7%**
- Complex Form (unstable, factor 600): **weight 0.2%**

This methodology follows [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)'s weighted geometric mean approach.

### Reproducibility
All tests are deterministic and reproducible:
1. Same versions locked in package.json
2. Same test scenarios for all libraries
3. Multiple runs to ensure consistency
4. Automated via GitHub Actions

</details>

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd benchmarks/immutability

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README
npx tsx ../../scripts/generate-simple-readme.ts .
```

**View Test Code**: [./groups/](./groups/) contains all test implementations

---

## 📦 Test Coverage

- **Basic Operations**: 0 tests
- **Advanced Operations**: 0 tests
- **Async Operations**: 0 tests
- **Real-World Scenarios**: 0 tests
- **Stress Tests**: 0 tests

**Total**: 18 tests × 7 libraries = 126 benchmark runs

---

## 🚀 Libraries Tested

- **[Craft](https://github.com/SylphxAI/craft)** (`1.2.1`)  • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Mutative](https://github.com/unadlib/mutative)** (`1.3.0`)  • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](https://github.com/immerjs/immer)** (`10.2.0`)  • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Native Spread](#)** (`unknown`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`5.1.4`)  • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`3.1.1`)  • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`7.1.4`)  • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

---

## 🤝 Contributing

Want to add a library or improve tests?

- **Add a Library**: Update `package.json` and `library-metadata.json`, then implement tests
- **Improve Tests**: Edit files in `./groups/` directory
- **Report Issues**: [Open an issue](https://github.com/SylphxAI/benchmark/issues)
- **Suggest Features**: [Start a discussion](https://github.com/SylphxAI/benchmark/discussions)

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Related

- [📊 All Benchmark Categories](../../README.md#-benchmark-categories)
- [🏗️ Architecture Documentation](../../ARCHITECTURE.md)
- [⚙️ GitHub Actions Workflow](../../.github/workflows/benchmarks-per-library.yml)
- [🔄 CI/CD Results](https://github.com/SylphxAI/benchmark/actions)

---

<div align="center">

**Found this useful? Give it a ⭐️!**

*Generated on 2025-11-17T03:25:29.595Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
