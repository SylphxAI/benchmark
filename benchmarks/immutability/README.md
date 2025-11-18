<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2018,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Craft - Fastest overall with 57.5/100 score
- **⚖️ Best Balance**: Immer - Great performance (22.5/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 57.5/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 22.5/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 21.7/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Native Spread** (Score: 3.7/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutable.js** (Score: 3.3/100)
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
| 🥇 1 | **[Native Spread](#)** | 72.0/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 45% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 9.1/100 | 13% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Craft](https://github.com/SylphxAI/craft)** | 6.2/100 | 9% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 5.7/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.7/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 57.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 22.5/100 | 39% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 21.7/100 | 38% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 3.7/100 | 6% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 3.3/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.3/100 | 2% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.1/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **57.5** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **22.5** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **21.7** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Native Spread](#)** | **3.7** | N/A | State management solution... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **3.3** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.3** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.1** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   14.7M ops/sec
🥈 Immutable.js       ███████████████████████                    8.6M ops/sec
🥉 Immutability Helper ██████                                     2.3M ops/sec
 Craft              █████                                      1.7M ops/sec
 Mutative           ███                                        1.2M ops/sec
 Immer              ██                                         680K ops/sec
 Seamless Immutable █                                          530K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 14.7M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 8.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.7M | 0.001ms | 0.002ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immer | 680K | 0.002ms | 0.004ms | 1000 |
| Seamless Immutable | 530K | 0.002ms | 0.004ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   5.8M ops/sec
🥈 Immutable.js       ██████████                                 1.4M ops/sec
🥉 Craft              ████                                       573K ops/sec
 Immutability Helper ███                                        502K ops/sec
 Mutative           ███                                        406K ops/sec
 Immer              ██                                         277K ops/sec
 Seamless Immutable █                                          134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.8M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.4M | 0.001ms | 0.002ms | 1000 |
| Craft | 573K | 0.002ms | 0.004ms | 1000 |
| Immutability Helper | 502K | 0.002ms | 0.003ms | 1000 |
| Mutative | 406K | 0.003ms | 0.005ms | 1000 |
| Immer | 277K | 0.004ms | 0.006ms | 1000 |
| Seamless Immutable | 134K | 0.008ms | 0.015ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   9.2M ops/sec
🥈 Immutability Helper ███████████████████████                    5.3M ops/sec
🥉 Immutable.js       ██████████                                 2.3M ops/sec
 Craft              ██                                         405K ops/sec
 Immer              █                                          160K ops/sec
 Mutative           █                                          157K ops/sec
 Seamless Immutable                                            101K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 5.3M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.3M | 0.001ms | 0.001ms | 1000 |
| Craft | 405K | 0.003ms | 0.006ms | 1000 |
| Immer | 160K | 0.007ms | 0.014ms | 1000 |
| Mutative | 157K | 0.007ms | 0.014ms | 1000 |
| Seamless Immutable | 101K | 0.010ms | 0.020ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   9.7M ops/sec
🥈 Immutability Helper ████                                       1.1M ops/sec
🥉 Immutable.js       ████                                       955K ops/sec
 Craft              █                                          158K ops/sec
 Seamless Immutable █                                          124K ops/sec
 Immer                                                         79K ops/sec
 Mutative                                                      76K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.7M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 955K | 0.001ms | 0.003ms | 1000 |
| Craft | 158K | 0.006ms | 0.014ms | 1000 |
| Seamless Immutable | 124K | 0.008ms | 0.016ms | 1000 |
| Immer | 79K | 0.013ms | 0.025ms | 1000 |
| Mutative | 76K | 0.013ms | 0.025ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   7.8M ops/sec
🥈 Immutable.js       █████████████                              2.4M ops/sec
🥉 Immutability Helper ███                                        549K ops/sec
 Craft              ██                                         363K ops/sec
 Mutative           █                                          281K ops/sec
 Immer              █                                          184K ops/sec
 Seamless Immutable                                            96K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 549K | 0.002ms | 0.003ms | 1000 |
| Craft | 363K | 0.003ms | 0.006ms | 1000 |
| Mutative | 281K | 0.004ms | 0.007ms | 1000 |
| Immer | 184K | 0.006ms | 0.012ms | 1000 |
| Seamless Immutable | 96K | 0.011ms | 0.020ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   3.1M ops/sec
🥈 Immutable.js       ██████████████                             1.1M ops/sec
🥉 Immutability Helper ████████                                   617K ops/sec
 Craft              █████                                      356K ops/sec
 Mutative           ███                                        206K ops/sec
 Immer              ██                                         150K ops/sec
 Seamless Immutable █                                          87K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 617K | 0.002ms | 0.003ms | 1000 |
| Craft | 356K | 0.003ms | 0.005ms | 1000 |
| Mutative | 206K | 0.005ms | 0.009ms | 1000 |
| Immer | 150K | 0.007ms | 0.010ms | 1000 |
| Seamless Immutable | 87K | 0.012ms | 0.022ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   9.5M ops/sec
🥈 Immutability Helper ████                                       881K ops/sec
🥉 Craft              ███                                        611K ops/sec
 Immutable.js       ██                                         387K ops/sec
 Immer              ██                                         363K ops/sec
 Mutative           █                                          309K ops/sec
 Seamless Immutable                                            83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.5M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 881K | 0.002ms | 0.003ms | 1000 |
| Craft | 611K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 387K | 0.003ms | 0.004ms | 1000 |
| Immer | 363K | 0.003ms | 0.004ms | 1000 |
| Mutative | 309K | 0.003ms | 0.007ms | 1000 |
| Seamless Immutable | 83K | 0.012ms | 0.022ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Immutable.js       ████████████████████████████████████████   2.0M ops/sec
🥈 Native Spread      ██████                                     307K ops/sec
🥉 Mutative           ████                                       209K ops/sec
 Immutability Helper                                            15K ops/sec
 Craft                                                         7K ops/sec
 Immer                                                         4K ops/sec
 Seamless Immutable                                            4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 307K | 0.004ms | 0.007ms | 1000 |
| Mutative | 209K | 0.005ms | 0.009ms | 1000 |
| Immutability Helper | 15K | 0.067ms | 0.083ms | 1000 |
| Craft | 7K | 0.145ms | 0.188ms | 1000 |
| Immer | 4K | 0.243ms | 0.427ms | 1000 |
| Seamless Immutable | 4K | 0.249ms | 0.379ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         148K ops/sec
🥉 Mutative           ██                                         110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 148K | 0.007ms | 0.011ms | 1000 |
| Mutative | 110K | 0.009ms | 0.022ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Immer              █████████████████                          143K ops/sec
🥉 Mutative           █████████████                              113K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Immer | 143K | 0.007ms | 0.019ms | 1000 |
| Mutative | 113K | 0.009ms | 0.016ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Mutative           ██████████                                 75K ops/sec
🥉 Immer              █████████                                  65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Mutative | 75K | 0.014ms | 0.029ms | 1000 |
| Immer | 65K | 0.016ms | 0.031ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              ███████████████████████████                204K ops/sec
🥉 Mutative           ███████████████████                        140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 204K | 0.005ms | 0.008ms | 1000 |
| Mutative | 140K | 0.007ms | 0.015ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   749K ops/sec
🥈 Native Spread      ████████████████████████                   446K ops/sec
🥉 Mutative           ████████                                   154K ops/sec
 Craft              ████                                       78K ops/sec
 Immer              ███                                        56K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 749K | 0.001ms | 0.003ms | 1000 |
| Native Spread | 446K | 0.002ms | 0.004ms | 1000 |
| Mutative | 154K | 0.007ms | 0.015ms | 1000 |
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Immer | 56K | 0.019ms | 0.032ms | 1000 |

#### Map - Set Operation

```
🥇 Native Spread      ████████████████████████████████████████   3.5M ops/sec
🥈 Immutable.js       ██████████████████████████████             2.6M ops/sec
🥉 Craft              ██████████████                             1.2M ops/sec
 Mutative           ██████                                     496K ops/sec
 Immer              ███                                        267K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.5M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 496K | 0.002ms | 0.005ms | 1000 |
| Immer | 267K | 0.004ms | 0.007ms | 1000 |

#### Map - Update Nested Value

```
🥇 Native Spread      ████████████████████████████████████████   3.7M ops/sec
🥈 Immutable.js       █████████████████                          1.6M ops/sec
🥉 Craft              ████████████████                           1.5M ops/sec
 Mutative           ███                                        318K ops/sec
 Immer              ██                                         199K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.7M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 318K | 0.003ms | 0.006ms | 1000 |
| Immer | 199K | 0.005ms | 0.008ms | 1000 |

#### Set - Add Operation

```
🥇 Immutable.js       ████████████████████████████████████████   4.8M ops/sec
🥈 Native Spread      █████████████████████████████████          4.0M ops/sec
🥉 Craft              █████████                                  1.1M ops/sec
 Immer              ██                                         252K ops/sec
 Mutative           ██                                         221K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Native Spread | 4.0M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immer | 252K | 0.004ms | 0.006ms | 1000 |
| Mutative | 221K | 0.005ms | 0.008ms | 1000 |

#### Set - Delete Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.4M ops/sec
🥈 Immutable.js       ████████████████████████████               4.5M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Immer              ██                                         252K ops/sec
 Mutative           █                                          231K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.4M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 252K | 0.005ms | 0.008ms | 1000 |
| Mutative | 231K | 0.004ms | 0.008ms | 1000 |

#### Set - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.5M ops/sec
🥈 Native Spread      █████████████████                          637K ops/sec
🥉 Craft              ██                                         91K ops/sec
 Immer              █                                          42K ops/sec
 Mutative           █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.5M | 0.001ms | 0.002ms | 1000 |
| Native Spread | 637K | 0.002ms | 0.003ms | 1000 |
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Immer | 42K | 0.025ms | 0.038ms | 1000 |
| Mutative | 36K | 0.033ms | 0.068ms | 1000 |



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
- **[Immer](https://github.com/immerjs/immer)** (`10.2.0`)  • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Mutative](https://github.com/unadlib/mutative)** (`1.3.0`)  • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
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

*Generated on 2025-11-18T05:06:55.248Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
