<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2015,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-28-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 58.3/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (45.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 58.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 45.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 42.2/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 41.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 19.2/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 80.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 44.1/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.1/100 | 53% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 43.1/100 | 53% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.1/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 12.8/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.9/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 58.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.2/100 | 78% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 42.2/100 | 72% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 41.5/100 | 71% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 19.2/100 | 33% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.7/100 | 25% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.1/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.0/100 | 10% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **58.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **45.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **42.2** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **41.5** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **19.2** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **14.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.1** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.0** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████                             971K ops/sec
 Zen                ███████████                                778K ops/sec
 Valtio             █                                          51K ops/sec
 MobX               █                                          48K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 971K | 0.001ms | 0.003ms | 1000 |
| Zen | 778K | 0.001ms | 0.001ms | 1000 |
| Valtio | 51K | 0.021ms | 0.029ms | 1000 |
| MobX | 48K | 0.021ms | 0.028ms | 1000 |
| Jotai | 3K | 0.326ms | 0.718ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   12.5M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   12.4M ops/sec
🥉 Zustand            ███████████████████████████████            9.7M ops/sec
 Preact Signals     ███████████████████                        5.9M ops/sec
 Zen                ███████████████████                        5.9M ops/sec
 Valtio             ██                                         510K ops/sec
 MobX               ██                                         471K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 510K | 0.002ms | 0.004ms | 1000 |
| MobX | 471K | 0.002ms | 0.002ms | 1000 |
| Jotai | 30K | 0.034ms | 0.072ms | 1000 |

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ████████████████████████████████████████   22.2M ops/sec
 Zen                █████████████████████████████████          18.6M ops/sec
 MobX               ███████████████████████████████            17.2M ops/sec
 Valtio             ███████████████████████████                15.2M ops/sec
 Jotai              ████                                       2.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.2M | 0.000ms | 0.001ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   8.2M ops/sec
🥈 Preact Signals     █████████████████████████████              5.9M ops/sec
🥉 Zen                ███████████████████████                    4.8M ops/sec
 Zustand            ███                                        667K ops/sec
 MobX               ███                                        528K ops/sec
 Valtio             ██                                         374K ops/sec
 Jotai                                                         31K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 8.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 667K | 0.002ms | 0.002ms | 1000 |
| MobX | 528K | 0.002ms | 0.003ms | 1000 |
| Valtio | 374K | 0.003ms | 0.004ms | 1000 |
| Jotai | 31K | 0.035ms | 0.054ms | 1000 |
| Redux Toolkit | 16K | 0.067ms | 0.120ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.3M ops/sec
🥈 Preact Signals     █████████████████████████████████          2.7M ops/sec
🥉 Zen                ███████████████████                        1.5M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          60K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 77K | 0.014ms | 0.022ms | 1000 |
| MobX | 60K | 0.017ms | 0.026ms | 1000 |
| Valtio | 40K | 0.026ms | 0.035ms | 1000 |
| Jotai | 3K | 0.339ms | 0.912ms | 1000 |
| Redux Toolkit | 2K | 0.637ms | 1.379ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   376K ops/sec
🥈 Preact Signals     ██████████████████████████████████         317K ops/sec
🥉 Zen                ████████████████████                       186K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          5K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         301 ops/sec
 Redux Toolkit                                                 156 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 376K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 186K | 0.005ms | 0.006ms | 1000 |
| Zustand | 8K | 0.135ms | 0.155ms | 1000 |
| MobX | 5K | 0.190ms | 0.215ms | 1000 |
| Valtio | 4K | 0.262ms | 0.287ms | 1000 |
| Jotai | 301 | 3.373ms | 5.548ms | 1000 |
| Redux Toolkit | 156 | 6.414ms | 7.324ms | 1000 |

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Zen                ████████████████████████████               14.7M ops/sec
🥉 Preact Signals     █████████████████████                      11.3M ops/sec
 Zustand            █████████                                  4.8M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 MobX               ██████                                     3.0M ops/sec
 Jotai              █                                          310K ops/sec
 Redux Toolkit                                                 158K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 310K | 0.003ms | 0.009ms | 1000 |
| Redux Toolkit | 158K | 0.006ms | 0.009ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.4M ops/sec
🥈 Zen                ██████████████████████████████             7.8M ops/sec
🥉 Solid.js           ███████████████                            3.9M ops/sec
 Zustand            █████████████                              3.5M ops/sec
 Valtio             ██                                         426K ops/sec
 Jotai              █                                          261K ops/sec
 MobX               █                                          216K ops/sec
 Redux Toolkit                                                 63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 426K | 0.003ms | 0.004ms | 1000 |
| Jotai | 261K | 0.004ms | 0.008ms | 1000 |
| MobX | 216K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 63K | 0.016ms | 0.033ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   8.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    8.2M ops/sec
🥉 Zustand            ████████████████                           3.3M ops/sec
 Solid.js           ██████████████                             2.9M ops/sec
 Valtio             ██████████                                 2.1M ops/sec
 MobX               ████                                       850K ops/sec
 Jotai              █                                          303K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 850K | 0.001ms | 0.002ms | 1000 |
| Jotai | 303K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.8M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.5M ops/sec
🥉 Preact Signals     ██████████████████████████████████████     21.8M ops/sec
 Zen                ██████████████████████████████████         19.5M ops/sec
 Redux Toolkit      ███████████████████████████████            17.6M ops/sec
 Valtio             ████████████████████                       11.6M ops/sec
 MobX               █████████                                  4.9M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 11.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.0M ops/sec
🥈 Preact Signals     █████████████████████████████              5.1M ops/sec
🥉 Zustand            █████████████████                          2.9M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 Solid.js           ██████████████                             2.4M ops/sec
 MobX               ██████                                     1000K ops/sec
 Jotai              ██                                         293K ops/sec
 Redux Toolkit                                                 78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1000K | 0.001ms | 0.002ms | 1000 |
| Jotai | 293K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 78K | 0.013ms | 0.027ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Valtio             ██                                         968 ops/sec
🥉 Zen                ██                                         960 ops/sec
 Solid.js           ██                                         947 ops/sec
 Preact Signals     ██                                         920 ops/sec
 Zustand            ██                                         918 ops/sec
 MobX               ██                                         908 ops/sec
 Redux Toolkit      ██                                         799 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.060ms | 0.090ms | 1000 |
| Valtio | 968 | 1.097ms | 1.699ms | 1000 |
| Zen | 960 | 1.108ms | 1.934ms | 1000 |
| Solid.js | 947 | 1.097ms | 1.892ms | 1000 |
| Preact Signals | 920 | 1.097ms | 1.833ms | 1000 |
| Zustand | 918 | 1.101ms | 1.735ms | 1000 |
| MobX | 908 | 1.110ms | 1.707ms | 1000 |
| Redux Toolkit | 799 | 1.269ms | 1.909ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   112K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   112K ops/sec
🥉 Zen                ██████████████████████████████████████     106K ops/sec
 Zustand            ███████████████████████                    64K ops/sec
 Valtio             ███████████████                            43K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 112K | 0.010ms | 0.018ms | 1000 |
| Preact Signals | 112K | 0.009ms | 0.016ms | 1000 |
| Zen | 106K | 0.010ms | 0.019ms | 1000 |
| Zustand | 64K | 0.016ms | 0.026ms | 1000 |
| Valtio | 43K | 0.024ms | 0.037ms | 1000 |
| MobX | 36K | 0.029ms | 0.056ms | 1000 |
| Jotai | 6K | 0.187ms | 0.763ms | 1000 |
| Redux Toolkit | 3K | 0.356ms | 1.075ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Preact Signals     ██████████████████████                     11.4M ops/sec
🥉 Zen                ████████████                               6.1M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         914K ops/sec
 Jotai                                                         188K ops/sec
 Redux Toolkit                                                 138K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 914K | 0.001ms | 0.002ms | 1000 |
| Jotai | 188K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 138K | 0.008ms | 0.028ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.2M ops/sec
🥈 Zen                ███████████████████████████████████        15.9M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          465K ops/sec
 Valtio             █                                          285K ops/sec
 Jotai                                                         160K ops/sec
 Redux Toolkit                                                 72K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 465K | 0.002ms | 0.003ms | 1000 |
| Valtio | 285K | 0.004ms | 0.005ms | 1000 |
| Jotai | 160K | 0.008ms | 0.011ms | 1000 |
| Redux Toolkit | 72K | 0.014ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.6M ops/sec
🥈 Zen                ██                                         253K ops/sec
🥉 Preact Signals     █                                          111K ops/sec
 Zustand            █                                          100K ops/sec
 Valtio             █                                          59K ops/sec
 Redux Toolkit                                                 31K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 253K | 0.004ms | 0.006ms | 1000 |
| Preact Signals | 111K | 0.010ms | 0.016ms | 1000 |
| Zustand | 100K | 0.024ms | 0.030ms | 1000 |
| Valtio | 59K | 0.063ms | 0.050ms | 1000 |
| Redux Toolkit | 31K | 0.061ms | 0.094ms | 1000 |
| MobX | 11K | 0.123ms | 0.893ms | 1000 |
| Jotai | 7K | 0.154ms | 0.808ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   14.3M ops/sec
🥈 Zen                ██████████████████████████████████         12.2M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ███████                                    2.7M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 121K ops/sec
 Jotai                                                         111K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 121K | 0.009ms | 0.013ms | 1000 |
| Jotai | 111K | 0.009ms | 0.018ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
🥉 Zustand            ████████████████████████████████████████   317K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          3K ops/sec
 Jotai                                                         267 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 80K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.061ms | 1000 |
| Valtio | 5K | 0.211ms | 0.644ms | 1000 |
| MobX | 3K | 0.288ms | 0.341ms | 1000 |
| Jotai | 267 | 3.756ms | 4.354ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   41K ops/sec
🥈 Preact Signals     ████████                                   8K ops/sec
🥉 Zen                ████████                                   8K ops/sec
 Zustand            █                                          733 ops/sec
 MobX               █                                          514 ops/sec
 Valtio                                                        387 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 41K | 0.030ms | 0.364ms | 1000 |
| Preact Signals | 8K | 0.118ms | 0.127ms | 1000 |
| Zen | 8K | 0.122ms | 0.135ms | 1000 |
| Zustand | 733 | 1.377ms | 1.925ms | 1000 |
| MobX | 514 | 1.956ms | 2.542ms | 1000 |
| Valtio | 387 | 2.593ms | 3.212ms | 1000 |
| Jotai | 33 | 30.296ms | 34.299ms | 1000 |
| Redux Toolkit | 14 | 71.078ms | 74.889ms | 1000 |

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             ██████████████                             812K ops/sec
🥉 MobX               ████                                       213K ops/sec
 Jotai              ███                                        189K ops/sec
 Preact Signals     ██                                         134K ops/sec
 Zen                ██                                         106K ops/sec
 Zustand            █                                          84K ops/sec
 Redux Toolkit                                                 814 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 812K | 0.001ms | 0.007ms | 1000 |
| MobX | 213K | 0.006ms | 0.020ms | 1000 |
| Jotai | 189K | 0.006ms | 0.010ms | 1000 |
| Preact Signals | 134K | 0.008ms | 0.013ms | 1000 |
| Zen | 106K | 0.009ms | 0.019ms | 1000 |
| Zustand | 84K | 0.012ms | 0.021ms | 1000 |
| Redux Toolkit | 814 | 1.258ms | 3.007ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Zen                ██████████████████████████                 13.4M ops/sec
🥉 Preact Signals     ██████████                                 5.0M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          279K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 279K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Zen                █████████████████████████                  13.7M ops/sec
🥉 Preact Signals     █████████                                  4.8M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          335K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 335K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                █████████████████████████                  13.7M ops/sec
🥉 Preact Signals     ██████████████                             7.8M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               ██                                         831K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 831K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     ██████████████                             6.4M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                █████████                                  4.2M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         795K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 795K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          423K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Zen                █                                          13K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 423K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.054ms | 1000 |
| Zen | 13K | 0.081ms | 0.100ms | 1000 |
| Valtio | 8K | 0.124ms | 0.147ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.170ms | 0.192ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.6M ops/sec
🥈 Zen                ████████████████████████████████           11.8M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          112K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 112K | 0.009ms | 0.014ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.7M ops/sec
🥈 Zen                ███████████████████████████                14.9M ops/sec
🥉 Preact Signals     ██                                         842K ops/sec
 MobX                                                          122K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        71K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 842K | 0.001ms | 0.001ms | 1000 |
| MobX | 122K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 71K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        268K ops/sec
 Zen                █                                          124K ops/sec
 Valtio             █                                          91K ops/sec
 MobX               █                                          79K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 268K | 0.004ms | 0.007ms | 1000 |
| Zen | 124K | 0.009ms | 0.011ms | 1000 |
| Valtio | 91K | 0.011ms | 0.020ms | 1000 |
| MobX | 79K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |



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
- **Async Operations**: 2 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 28 tests × 8 libraries = 224 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid.js](https://github.com/solidjs/solid)** (`1.9.10`)  • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.10.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-15T19:21:34.203Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
