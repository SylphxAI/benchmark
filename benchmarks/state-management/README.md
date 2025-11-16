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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 84.5/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (65.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 84.5/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 65.1/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 59.0/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 48.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 25.0/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 89.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 48.3/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.7/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 41.5/100 | 47% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.8/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.3/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.7/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 84.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 65.1/100 | 77% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 59.0/100 | 70% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 48.8/100 | 58% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.0/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.2/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.5/100 | 15% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **84.5** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **65.1** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **59.0** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **48.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.0** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.5** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   22.3M ops/sec
🥈 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.3M ops/sec
 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 MobX               ███████████████████████████████            17.3M ops/sec
 Valtio             ███████████████████████████                15.3M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.8M ops/sec
🥈 Zustand            ███████████████████████████████████████    11.7M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████████    11.6M ops/sec
 Zen                ██████████████████████████████             8.9M ops/sec
 Preact Signals     ██████████████                             4.2M ops/sec
 MobX               ███                                        811K ops/sec
 Valtio             ██                                         546K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 811K | 0.001ms | 0.001ms | 1000 |
| Valtio | 546K | 0.002ms | 0.002ms | 1000 |
| Jotai | 32K | 0.032ms | 0.043ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥈 Zen                ████████████████████████████               1.9M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          54K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 54K | 0.020ms | 0.031ms | 1000 |
| Jotai | 3K | 0.340ms | 0.767ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Preact Signals     ██████████████████████████                 13.7M ops/sec
🥉 Zen                ███████████                                6.0M ops/sec
 Zustand            █████████                                  4.8M ops/sec
 MobX               ██████                                     3.4M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          342K ops/sec
 Redux Toolkit                                                 178K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 342K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 178K | 0.006ms | 0.009ms | 1000 |

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.3M ops/sec
🥈 Solid.js           █████████████████████████████              9.0M ops/sec
🥉 Zen                ████████████████                           4.9M ops/sec
 Zustand            ██                                         705K ops/sec
 MobX               ██                                         568K ops/sec
 Valtio             █                                          390K ops/sec
 Jotai                                                         36K ops/sec
 Redux Toolkit                                                 17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 705K | 0.001ms | 0.003ms | 1000 |
| MobX | 568K | 0.002ms | 0.003ms | 1000 |
| Valtio | 390K | 0.003ms | 0.003ms | 1000 |
| Jotai | 36K | 0.029ms | 0.041ms | 1000 |
| Redux Toolkit | 17K | 0.061ms | 0.083ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Preact Signals     █████████████████████████████████          2.7M ops/sec
🥉 Zen                ████████████████████                       1.7M ops/sec
 Zustand            █                                          78K ops/sec
 MobX               █                                          72K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.7M | 0.001ms | 0.001ms | 1000 |
| Zustand | 78K | 0.013ms | 0.022ms | 1000 |
| MobX | 72K | 0.015ms | 0.023ms | 1000 |
| Valtio | 40K | 0.025ms | 0.035ms | 1000 |
| Jotai | 4K | 0.295ms | 0.949ms | 1000 |
| Redux Toolkit | 2K | 0.617ms | 1.262ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   408K ops/sec
🥈 Preact Signals     ███████████████████████████████            317K ops/sec
🥉 Zen                █████████████████████████                  257K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         361 ops/sec
 Redux Toolkit                                                 164 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 408K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 257K | 0.004ms | 0.004ms | 1000 |
| Zustand | 8K | 0.133ms | 0.490ms | 1000 |
| MobX | 7K | 0.138ms | 0.162ms | 1000 |
| Valtio | 4K | 0.249ms | 0.642ms | 1000 |
| Jotai | 361 | 2.830ms | 4.989ms | 1000 |
| Redux Toolkit | 164 | 6.112ms | 6.977ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.1M ops/sec
🥈 Zen                ████████████████                           3.9M ops/sec
🥉 Solid.js           ████████████████                           3.9M ops/sec
 Zustand            ██████████████                             3.5M ops/sec
 Valtio             ██                                         421K ops/sec
 Jotai              █                                          318K ops/sec
 MobX                                                          109K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.9M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 421K | 0.003ms | 0.005ms | 1000 |
| Jotai | 318K | 0.003ms | 0.006ms | 1000 |
| MobX | 109K | 0.010ms | 0.025ms | 1000 |
| Redux Toolkit | 61K | 0.018ms | 0.033ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.4M ops/sec
🥈 Zen                ████████████████████                       4.2M ops/sec
🥉 Zustand            ████████████████                           3.3M ops/sec
 Solid.js           ██████████████                             3.0M ops/sec
 Valtio             ██████████                                 2.1M ops/sec
 MobX               █████                                      992K ops/sec
 Jotai              █                                          308K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 992K | 0.001ms | 0.002ms | 1000 |
| Jotai | 308K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 59K | 0.018ms | 0.029ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.7M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.3M ops/sec
🥉 Zen                ███████████████████████████████████████    22.1M ops/sec
 Preact Signals     ██████████████████████████████████████     21.8M ops/sec
 Redux Toolkit      ████████████████████████                   13.7M ops/sec
 Valtio             ███████████████████████                    13.2M ops/sec
 MobX               ██████████                                 5.6M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   6.0M ops/sec
🥈 Zen                ██████████████████████████                 3.9M ops/sec
🥉 Zustand            ████████████████████                       3.0M ops/sec
 Solid.js           █████████████████                          2.6M ops/sec
 Valtio             █████████████████                          2.5M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         318K ops/sec
 Redux Toolkit      █                                          81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 318K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 81K | 0.013ms | 0.026ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   111K ops/sec
🥈 Solid.js           ███████████████████████████████████████    109K ops/sec
🥉 Zen                ██████████████████████████                 71K ops/sec
 Zustand            ███████████████████████                    62K ops/sec
 Valtio             ████████████████                           44K ops/sec
 MobX               █████████████                              37K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 111K | 0.009ms | 0.013ms | 1000 |
| Solid.js | 109K | 0.010ms | 0.017ms | 1000 |
| Zen | 71K | 0.014ms | 0.023ms | 1000 |
| Zustand | 62K | 0.016ms | 0.026ms | 1000 |
| Valtio | 44K | 0.023ms | 0.033ms | 1000 |
| MobX | 37K | 0.029ms | 0.039ms | 1000 |
| Jotai | 6K | 0.179ms | 0.307ms | 1000 |
| Redux Toolkit | 3K | 0.350ms | 0.957ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Preact Signals     ██████████████████████                     11.7M ops/sec
🥉 Zustand            █████████                                  4.9M ops/sec
 Zen                ███████                                    3.8M ops/sec
 MobX               ████                                       2.1M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         197K ops/sec
 Redux Toolkit                                                 145K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 197K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 145K | 0.008ms | 0.014ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.8M ops/sec
🥈 Zen                ████████████                               5.8M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          472K ops/sec
 Valtio             █                                          271K ops/sec
 Jotai                                                         166K ops/sec
 Redux Toolkit                                                 72K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 472K | 0.002ms | 0.003ms | 1000 |
| Valtio | 271K | 0.004ms | 0.007ms | 1000 |
| Jotai | 166K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 72K | 0.014ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.9M ops/sec
🥈 Preact Signals     █                                          124K ops/sec
🥉 Zustand            █                                          84K ops/sec
 Valtio                                                        61K ops/sec
 Zen                                                           41K ops/sec
 Redux Toolkit                                                 27K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 124K | 0.009ms | 0.019ms | 1000 |
| Zustand | 84K | 0.026ms | 0.039ms | 1000 |
| Valtio | 61K | 0.048ms | 0.057ms | 1000 |
| Zen | 41K | 0.027ms | 0.047ms | 1000 |
| Redux Toolkit | 27K | 0.084ms | 0.105ms | 1000 |
| MobX | 11K | 0.141ms | 0.814ms | 1000 |
| Jotai | 7K | 0.152ms | 0.838ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.9M ops/sec
🥈 Zen                ███████████████                            5.0M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 122K ops/sec
 Jotai                                                         105K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 122K | 0.008ms | 0.016ms | 1000 |
| Jotai | 105K | 0.010ms | 0.016ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.1M ops/sec
🥈 Valtio             ██████████████                             748K ops/sec
🥉 MobX               ████                                       213K ops/sec
 Jotai              ███                                        168K ops/sec
 Zustand            ██                                         130K ops/sec
 Zen                ██                                         104K ops/sec
 Preact Signals     ██                                         101K ops/sec
 Redux Toolkit                                                 803 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 748K | 0.002ms | 0.006ms | 1000 |
| MobX | 213K | 0.006ms | 0.016ms | 1000 |
| Jotai | 168K | 0.008ms | 0.017ms | 1000 |
| Zustand | 130K | 0.008ms | 0.015ms | 1000 |
| Zen | 104K | 0.010ms | 0.017ms | 1000 |
| Preact Signals | 101K | 0.010ms | 0.022ms | 1000 |
| Redux Toolkit | 803 | 1.275ms | 3.345ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Solid.js           ████████████████████████████████████████   317K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         287 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 64K | 0.016ms | 0.022ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.072ms | 1000 |
| Valtio | 5K | 0.216ms | 0.638ms | 1000 |
| MobX | 4K | 0.272ms | 0.287ms | 1000 |
| Jotai | 287 | 3.500ms | 4.020ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   40K ops/sec
🥈 Zen                ███████████                                11K ops/sec
🥉 Preact Signals     ████████                                   8K ops/sec
 Zustand            █                                          754 ops/sec
 MobX                                                          484 ops/sec
 Valtio                                                        388 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 40K | 0.030ms | 0.360ms | 1000 |
| Zen | 11K | 0.091ms | 0.100ms | 1000 |
| Preact Signals | 8K | 0.122ms | 0.139ms | 1000 |
| Zustand | 754 | 1.337ms | 1.818ms | 1000 |
| MobX | 484 | 2.074ms | 2.623ms | 1000 |
| Valtio | 388 | 2.583ms | 3.161ms | 1000 |
| Jotai | 33 | 30.679ms | 34.755ms | 1000 |
| Redux Toolkit | 15 | 67.019ms | 71.116ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.6M ops/sec
🥈 Zen                ██████████                                 5.2M ops/sec
🥉 Preact Signals     ██████████                                 4.9M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          280K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 280K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                ██████████                                 5.4M ops/sec
🥉 Preact Signals     █████████                                  5.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          332K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 332K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ██████████████                             7.8M ops/sec
🥉 Zen                ██████████                                 5.7M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          802K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 802K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     ██████████████                             6.6M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ████                                       2.0M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         784K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 784K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          413K ops/sec
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
| Solid.js | 413K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.044ms | 1000 |
| Zen | 13K | 0.078ms | 0.099ms | 1000 |
| Valtio | 8K | 0.123ms | 0.144ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.176ms | 0.207ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.6M ops/sec
🥈 Zen                ██████████                                 5.6M ops/sec
🥉 Preact Signals     █                                          768K ops/sec
 MobX                                                          120K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 768K | 0.001ms | 0.001ms | 1000 |
| MobX | 120K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        275K ops/sec
 Zen                ██                                         152K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          78K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 275K | 0.004ms | 0.004ms | 1000 |
| Zen | 152K | 0.007ms | 0.009ms | 1000 |
| Valtio | 92K | 0.012ms | 0.019ms | 1000 |
| MobX | 78K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   12.4M ops/sec
🥈 Zen                █████████████████                          5.1M ops/sec
🥉 Preact Signals     ██████████                                 3.0M ops/sec
 Zustand            ███████                                    2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          117K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 117K | 0.009ms | 0.013ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.21.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T06:40:47.014Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
