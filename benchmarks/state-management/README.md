<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2016,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-27-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 83.8/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (62.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 83.8/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 62.4/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 59.0/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 58.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 25.7/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 88.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 50.0/100 | 57% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.4/100 | 52% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.1/100 | 51% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.7/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.6/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.1/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 83.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 62.4/100 | 74% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 59.0/100 | 70% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 58.5/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.7/100 | 31% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 20.5/100 | 24% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.6/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.4/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **83.8** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **62.4** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **59.0** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **58.5** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.7** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **20.5** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.6** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.4** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.2M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.1M ops/sec
 Redux Toolkit      ███████████████████████████████████████    21.9M ops/sec
 MobX               ███████████████████████████████            17.4M ops/sec
 Zen                ███████████████████████████████            17.4M ops/sec
 Valtio             ███████████████████████████                15.2M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 21.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   11.8M ops/sec
🥉 Zustand            █████████████████████████████              8.7M ops/sec
 Zen                █████████████████████████████              8.7M ops/sec
 Preact Signals     ████████████████████████████               8.4M ops/sec
 MobX               ███                                        811K ops/sec
 Valtio             ██                                         503K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 811K | 0.001ms | 0.001ms | 1000 |
| Valtio | 503K | 0.002ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.046ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥈 Zustand            ██████████████████████████████████████     2.5M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Zen                ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 MobX               █                                          86K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.5M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 86K | 0.012ms | 0.022ms | 1000 |
| Valtio | 52K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.318ms | 0.710ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Zen                ██████████████████████████████████████     20.3M ops/sec
🥉 Preact Signals     ██████████████████████                     11.9M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 MobX               ██████                                     3.0M ops/sec
 Jotai              █                                          322K ops/sec
 Redux Toolkit                                                 162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 322K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 162K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   15.2M ops/sec
🥈 Solid.js           █████████████████████████                  9.5M ops/sec
🥉 Preact Signals     ███████████████                            5.8M ops/sec
 Zustand            ██                                         733K ops/sec
 MobX               █                                          506K ops/sec
 Valtio             █                                          384K ops/sec
 Jotai                                                         34K ops/sec
 Redux Toolkit                                                 17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 15.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 733K | 0.001ms | 0.002ms | 1000 |
| MobX | 506K | 0.002ms | 0.003ms | 1000 |
| Valtio | 384K | 0.003ms | 0.004ms | 1000 |
| Jotai | 34K | 0.030ms | 0.042ms | 1000 |
| Redux Toolkit | 17K | 0.062ms | 0.086ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.7M ops/sec
🥈 Solid.js           ███████████████████████████████            3.6M ops/sec
🥉 Preact Signals     ███████████████████████                    2.7M ops/sec
 Zustand            █                                          78K ops/sec
 MobX               █                                          59K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 78K | 0.013ms | 0.021ms | 1000 |
| MobX | 59K | 0.018ms | 0.027ms | 1000 |
| Valtio | 40K | 0.026ms | 0.035ms | 1000 |
| Jotai | 4K | 0.293ms | 0.852ms | 1000 |
| Redux Toolkit | 2K | 0.624ms | 1.259ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   623K ops/sec
🥈 Solid.js           █████████████████████████                  389K ops/sec
🥉 Preact Signals     ██████████████████                         280K ops/sec
 Zustand                                                       7K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         348 ops/sec
 Redux Toolkit                                                 160 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 623K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 389K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 280K | 0.004ms | 0.006ms | 1000 |
| Zustand | 7K | 0.137ms | 0.235ms | 1000 |
| MobX | 7K | 0.152ms | 0.176ms | 1000 |
| Valtio | 4K | 0.253ms | 0.282ms | 1000 |
| Jotai | 348 | 2.928ms | 4.953ms | 1000 |
| Redux Toolkit | 160 | 6.260ms | 7.120ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.5M ops/sec
🥈 Preact Signals     ██████████████████████████                 7.4M ops/sec
🥉 Solid.js           █████████████████                          4.7M ops/sec
 Zustand            ███████████                                3.0M ops/sec
 Valtio             ██                                         431K ops/sec
 Jotai              █                                          294K ops/sec
 MobX               █                                          210K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 431K | 0.002ms | 0.005ms | 1000 |
| Jotai | 294K | 0.004ms | 0.008ms | 1000 |
| MobX | 210K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.018ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   7.0M ops/sec
🥈 Preact Signals     █████████████████████████████████████      6.4M ops/sec
🥉 Zustand            █████████████████                          2.9M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 Valtio             ███████████                                1.9M ops/sec
 MobX               ██████                                     983K ops/sec
 Jotai              ██                                         290K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| MobX | 983K | 0.001ms | 0.002ms | 1000 |
| Jotai | 290K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 59K | 0.018ms | 0.032ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Zustand            ███████████████████████████████████████    21.7M ops/sec
🥉 Preact Signals     ███████████████████████████████            17.6M ops/sec
 Redux Toolkit      █████████████████████████████              16.2M ops/sec
 Zen                ████████████████████████                   13.4M ops/sec
 Valtio             ███████████████████████                    12.9M ops/sec
 MobX               ██████████████                             7.9M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   5.9M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     5.6M ops/sec
🥉 Zustand            ███████████████████                        2.9M ops/sec
 Valtio             █████████████████                          2.5M ops/sec
 Solid.js           ███████████████                            2.3M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         320K ops/sec
 Redux Toolkit      █                                          83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 5.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 320K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 83K | 0.012ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   104K ops/sec
🥈 Solid.js           ████████████████████████████████████████   104K ops/sec
🥉 Zen                ███████████████████████████████████████    102K ops/sec
 Zustand            ██████████████████████                     57K ops/sec
 Valtio             ████████████████                           41K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 104K | 0.010ms | 0.017ms | 1000 |
| Solid.js | 104K | 0.010ms | 0.019ms | 1000 |
| Zen | 102K | 0.010ms | 0.014ms | 1000 |
| Zustand | 57K | 0.018ms | 0.028ms | 1000 |
| Valtio | 41K | 0.025ms | 0.037ms | 1000 |
| MobX | 35K | 0.030ms | 0.042ms | 1000 |
| Jotai | 6K | 0.189ms | 0.391ms | 1000 |
| Redux Toolkit | 3K | 0.352ms | 1.023ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Zen                ██████████████████████████                 13.5M ops/sec
🥉 Preact Signals     ██████████████████████                     11.8M ops/sec
 Zustand            ██████████                                 5.1M ops/sec
 MobX               ████                                       2.1M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         199K ops/sec
 Redux Toolkit                                                 142K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 199K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 142K | 0.007ms | 0.018ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.7M ops/sec
🥈 Zen                ████████████████████████████████████████   18.6M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          449K ops/sec
 Valtio             █                                          284K ops/sec
 Jotai                                                         166K ops/sec
 Redux Toolkit                                                 71K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 449K | 0.002ms | 0.003ms | 1000 |
| Valtio | 284K | 0.004ms | 0.005ms | 1000 |
| Jotai | 166K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 71K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.6M ops/sec
🥈 Preact Signals     █                                          129K ops/sec
🥉 Zustand            █                                          93K ops/sec
 Zen                █                                          93K ops/sec
 Valtio             █                                          67K ops/sec
 Redux Toolkit                                                 33K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 129K | 0.008ms | 0.012ms | 1000 |
| Zustand | 93K | 0.026ms | 0.031ms | 1000 |
| Zen | 93K | 0.012ms | 0.021ms | 1000 |
| Valtio | 67K | 0.049ms | 0.041ms | 1000 |
| Redux Toolkit | 33K | 0.075ms | 0.083ms | 1000 |
| MobX | 12K | 0.117ms | 0.993ms | 1000 |
| Jotai | 7K | 0.155ms | 0.779ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     13.6M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.2M ops/sec
 Redux Toolkit                                                 126K ops/sec
 Jotai                                                         110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 126K | 0.009ms | 0.012ms | 1000 |
| Jotai | 110K | 0.010ms | 0.013ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.3M ops/sec
🥈 Valtio             ████████████                               665K ops/sec
🥉 MobX               ███                                        199K ops/sec
 Jotai              ███                                        164K ops/sec
 Zustand            ██                                         130K ops/sec
 Preact Signals     ██                                         105K ops/sec
 Zen                ██                                         103K ops/sec
 Redux Toolkit                                                 793 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.3M | 0.000ms | 0.002ms | 1000 |
| Valtio | 665K | 0.002ms | 0.007ms | 1000 |
| MobX | 199K | 0.006ms | 0.017ms | 1000 |
| Jotai | 164K | 0.006ms | 0.010ms | 1000 |
| Zustand | 130K | 0.008ms | 0.017ms | 1000 |
| Preact Signals | 105K | 0.010ms | 0.021ms | 1000 |
| Zen | 103K | 0.010ms | 0.016ms | 1000 |
| Redux Toolkit | 793 | 1.280ms | 2.789ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   317K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         297 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 64K | 0.016ms | 0.023ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| Valtio | 5K | 0.208ms | 0.624ms | 1000 |
| MobX | 4K | 0.272ms | 0.309ms | 1000 |
| Jotai | 297 | 3.375ms | 3.836ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   46K ops/sec
🥈 Zen                █████████                                  11K ops/sec
🥉 Preact Signals     ███████                                    8K ops/sec
 Zustand            █                                          738 ops/sec
 MobX                                                          455 ops/sec
 Valtio                                                        422 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 46K | 0.027ms | 0.363ms | 1000 |
| Zen | 11K | 0.095ms | 0.127ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.128ms | 1000 |
| Zustand | 738 | 1.365ms | 1.830ms | 1000 |
| MobX | 455 | 2.208ms | 2.829ms | 1000 |
| Valtio | 422 | 2.380ms | 2.929ms | 1000 |
| Jotai | 33 | 30.787ms | 34.431ms | 1000 |
| Redux Toolkit | 15 | 66.625ms | 70.926ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Preact Signals     ██████████                                 5.1M ops/sec
🥉 Zen                █████                                      2.3M ops/sec
 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          275K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 275K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Preact Signals     █████████                                  5.1M ops/sec
🥉 Zen                ██████                                     3.1M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          326K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 326K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ██████████████                             7.7M ops/sec
🥉 Zen                █████████████                              7.1M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             █████                                      2.6M ops/sec
 MobX               █                                          796K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 796K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.1M ops/sec
🥈 Zen                ████████████████                           7.7M ops/sec
🥉 Preact Signals     ██████████████                             6.7M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         768K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 768K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          403K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          35K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 403K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 35K | 0.029ms | 0.066ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.046ms | 1000 |
| Valtio | 8K | 0.125ms | 0.164ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.170ms | 0.200ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.8M ops/sec
🥈 Preact Signals     ██                                         863K ops/sec
🥉 Zen                █                                          280K ops/sec
 MobX                                                          120K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        70K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 863K | 0.001ms | 0.001ms | 1000 |
| Zen | 280K | 0.004ms | 0.004ms | 1000 |
| MobX | 120K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 70K | 0.015ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Zen                ████                                       346K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        272K ops/sec
 Valtio             █                                          91K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 346K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 272K | 0.004ms | 0.004ms | 1000 |
| Valtio | 91K | 0.011ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.024ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.8M ops/sec
🥈 Solid.js           ████████████████████████████████████       12.5M ops/sec
🥉 Preact Signals     █████████                                  3.0M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          113K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 113K | 0.009ms | 0.020ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |



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
cd benchmarks/state-management

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

- **Basic Operations**: 7 tests
- **Advanced Operations**: 4 tests
- **Async Operations**: 1 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 27 tests × 8 libraries = 216 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid.js](https://github.com/solidjs/solid)** (`1.9.10`)  • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.40.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Valtio](https://github.com/pmndrs/valtio)** (`2.2.0`)  • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`6.15.0`)  • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`2.10.1`)  • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Jotai](https://github.com/pmndrs/jotai)** (`2.15.1`)  • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)

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

*Generated on 2025-11-17T00:39:33.073Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
