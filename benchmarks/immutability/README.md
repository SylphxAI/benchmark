<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2016,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Craft - Fastest overall with 62.5/100 score
- **⚖️ Best Balance**: Mutative - Great performance (29.4/100) with good ecosystem
- **🎯 Popular Choice**: Immer - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 62.5/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Mutative** (Score: 29.4/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 27.6/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Native Spread** (Score: 2.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutable.js** (Score: 2.5/100)
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
| 🥇 1 | **[Native Spread](#)** | 72.3/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 28.5/100 | 39% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8.7/100 | 12% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 6.0/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Craft](https://github.com/SylphxAI/craft)** | 5.1/100 | 7% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.5/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 62.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Mutative](https://github.com/unadlib/mutative)** | 29.4/100 | 47% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
| 🥉 3 | **[Immer](https://github.com/immerjs/immer)** | 27.6/100 | 44% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  4 | **[Native Spread](#)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.5/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.2/100 | 2% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.0/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **62.5** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **29.4** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **27.6** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Native Spread](#)** | **2.8** | N/A | State management solution... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **2.5** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.2** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.0** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   13.7M ops/sec
🥈 Immutable.js       █████████████████████                      7.3M ops/sec
🥉 Immutability Helper ███████                                    2.5M ops/sec
 Craft              █████                                      1.6M ops/sec
 Mutative           ████                                       1.4M ops/sec
 Immer              ███                                        1.0M ops/sec
 Seamless Immutable █                                          514K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.7M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 7.3M | 0.000ms | 0.002ms | 1000 |
| Immutability Helper | 2.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.6M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.4M | 0.001ms | 0.002ms | 1000 |
| Immer | 1.0M | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 514K | 0.002ms | 0.004ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   6.3M ops/sec
🥈 Immutable.js       █████████                                  1.4M ops/sec
🥉 Immutability Helper █████                                      820K ops/sec
 Craft              ███                                        544K ops/sec
 Mutative           ███                                        418K ops/sec
 Immer              ██                                         260K ops/sec
 Seamless Immutable █                                          141K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.3M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.4M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 820K | 0.001ms | 0.003ms | 1000 |
| Craft | 544K | 0.002ms | 0.004ms | 1000 |
| Mutative | 418K | 0.003ms | 0.006ms | 1000 |
| Immer | 260K | 0.004ms | 0.006ms | 1000 |
| Seamless Immutable | 141K | 0.007ms | 0.014ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   11.2M ops/sec
🥈 Immutability Helper ████████████████████                       5.7M ops/sec
🥉 Immutable.js       █████████                                  2.5M ops/sec
 Craft              █                                          349K ops/sec
 Mutative           █                                          284K ops/sec
 Immer              █                                          154K ops/sec
 Seamless Immutable                                            98K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 11.2M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 5.7M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 349K | 0.003ms | 0.004ms | 1000 |
| Mutative | 284K | 0.004ms | 0.012ms | 1000 |
| Immer | 154K | 0.007ms | 0.013ms | 1000 |
| Seamless Immutable | 98K | 0.010ms | 0.018ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   12.4M ops/sec
🥈 Immutable.js       ████                                       1.1M ops/sec
🥉 Immutability Helper ███                                        777K ops/sec
 Craft                                                         148K ops/sec
 Seamless Immutable                                            120K ops/sec
 Mutative                                                      77K ops/sec
 Immer                                                         74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 12.4M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 777K | 0.001ms | 0.002ms | 1000 |
| Craft | 148K | 0.007ms | 0.014ms | 1000 |
| Seamless Immutable | 120K | 0.008ms | 0.015ms | 1000 |
| Mutative | 77K | 0.014ms | 0.022ms | 1000 |
| Immer | 74K | 0.014ms | 0.022ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   9.1M ops/sec
🥈 Immutable.js       ████████████                               2.7M ops/sec
🥉 Immutability Helper ██                                         481K ops/sec
 Craft              █                                          338K ops/sec
 Mutative           █                                          331K ops/sec
 Immer              █                                          178K ops/sec
 Seamless Immutable                                            95K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 481K | 0.002ms | 0.003ms | 1000 |
| Craft | 338K | 0.003ms | 0.004ms | 1000 |
| Mutative | 331K | 0.003ms | 0.006ms | 1000 |
| Immer | 178K | 0.006ms | 0.011ms | 1000 |
| Seamless Immutable | 95K | 0.011ms | 0.018ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   5.5M ops/sec
🥈 Immutable.js       ███████                                    1.0M ops/sec
🥉 Immutability Helper ████                                       598K ops/sec
 Craft              ███                                        347K ops/sec
 Mutative           ██                                         225K ops/sec
 Immer              █                                          141K ops/sec
 Seamless Immutable █                                          94K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.5M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.0M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 598K | 0.002ms | 0.003ms | 1000 |
| Craft | 347K | 0.003ms | 0.005ms | 1000 |
| Mutative | 225K | 0.005ms | 0.008ms | 1000 |
| Immer | 141K | 0.007ms | 0.014ms | 1000 |
| Seamless Immutable | 94K | 0.011ms | 0.018ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   8.6M ops/sec
🥈 Immutability Helper ████                                       887K ops/sec
🥉 Craft              ███                                        555K ops/sec
 Immutable.js       ██                                         370K ops/sec
 Immer              ██                                         353K ops/sec
 Mutative           ██                                         342K ops/sec
 Seamless Immutable                                            84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 8.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 887K | 0.002ms | 0.003ms | 1000 |
| Craft | 555K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 370K | 0.003ms | 0.004ms | 1000 |
| Immer | 353K | 0.003ms | 0.004ms | 1000 |
| Mutative | 342K | 0.003ms | 0.007ms | 1000 |
| Seamless Immutable | 84K | 0.012ms | 0.019ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Immutable.js       ████████████████████████████████████████   2.1M ops/sec
🥈 Native Spread      ██████                                     342K ops/sec
🥉 Mutative           ████                                       226K ops/sec
 Immutability Helper                                            10K ops/sec
 Craft                                                         5K ops/sec
 Seamless Immutable                                            3K ops/sec
 Immer                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 342K | 0.003ms | 0.005ms | 1000 |
| Mutative | 226K | 0.005ms | 0.008ms | 1000 |
| Immutability Helper | 10K | 0.101ms | 0.122ms | 1000 |
| Craft | 5K | 0.223ms | 0.250ms | 1000 |
| Seamless Immutable | 3K | 0.324ms | 0.468ms | 1000 |
| Immer | 3K | 0.331ms | 0.376ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         150K ops/sec
🥉 Mutative           ██                                         145K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 150K | 0.007ms | 0.014ms | 1000 |
| Mutative | 145K | 0.007ms | 0.014ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Immer              ███████████████████                        162K ops/sec
🥉 Mutative           █████████████████                          143K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Immer | 162K | 0.007ms | 0.013ms | 1000 |
| Mutative | 143K | 0.007ms | 0.014ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Mutative           ███████████                                84K ops/sec
🥉 Immer              ██████████                                 74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Mutative | 84K | 0.012ms | 0.021ms | 1000 |
| Immer | 74K | 0.014ms | 0.028ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              █████████████████████████████              214K ops/sec
🥉 Mutative           ██████████████████████████                 191K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 214K | 0.005ms | 0.008ms | 1000 |
| Mutative | 191K | 0.005ms | 0.009ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   778K ops/sec
🥈 Native Spread      ██████████████████████████████             585K ops/sec
🥉 Mutative           █████████                                  177K ops/sec
 Craft              ████                                       78K ops/sec
 Immer              ███                                        58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 778K | 0.001ms | 0.002ms | 1000 |
| Native Spread | 585K | 0.002ms | 0.003ms | 1000 |
| Mutative | 177K | 0.007ms | 0.010ms | 1000 |
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Immer | 58K | 0.017ms | 0.027ms | 1000 |

#### Map - Set Operation

```
🥇 Native Spread      ████████████████████████████████████████   5.1M ops/sec
🥈 Immutable.js       █████████████████████                      2.6M ops/sec
🥉 Craft              ██████████                                 1.2M ops/sec
 Mutative           █████                                      662K ops/sec
 Immer              ██                                         277K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 662K | 0.002ms | 0.005ms | 1000 |
| Immer | 277K | 0.004ms | 0.010ms | 1000 |

#### Map - Update Nested Value

```
🥇 Native Spread      ████████████████████████████████████████   4.1M ops/sec
🥈 Immutable.js       █████████████████                          1.7M ops/sec
🥉 Craft              ██████████████                             1.5M ops/sec
 Mutative           ████                                       377K ops/sec
 Immer              ██                                         217K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.7M | 0.001ms | 0.002ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 377K | 0.003ms | 0.006ms | 1000 |
| Immer | 217K | 0.005ms | 0.007ms | 1000 |

#### Set - Add Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.0M ops/sec
🥈 Immutable.js       ████████████████████████████████           4.7M ops/sec
🥉 Craft              ████████                                   1.1M ops/sec
 Immer              ██                                         267K ops/sec
 Mutative           ██                                         243K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.0M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immer | 267K | 0.004ms | 0.006ms | 1000 |
| Mutative | 243K | 0.004ms | 0.008ms | 1000 |

#### Set - Delete Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.3M ops/sec
🥈 Immutable.js       ███████████████████████████████            4.9M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Mutative           ██                                         279K ops/sec
 Immer              ██                                         266K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.3M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.9M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 279K | 0.004ms | 0.007ms | 1000 |
| Immer | 266K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.6M ops/sec
🥈 Native Spread      ████████████████████                       816K ops/sec
🥉 Craft              ██                                         91K ops/sec
 Immer              █                                          45K ops/sec
 Mutative           █                                          43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.6M | 0.001ms | 0.002ms | 1000 |
| Native Spread | 816K | 0.001ms | 0.003ms | 1000 |
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Immer | 45K | 0.024ms | 0.035ms | 1000 |
| Mutative | 43K | 0.026ms | 0.041ms | 1000 |



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

*Generated on 2025-11-16T04:52:18.587Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
