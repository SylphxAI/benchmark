<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2017,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 80.7/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (62.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 80.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 62.1/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 60.7/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 58.9/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 24.4/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 85.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 51.6/100 | 61% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 47.8/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.5/100 | 52% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.8/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.2/100 | 19% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.0/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 80.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 62.1/100 | 77% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 60.7/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 58.9/100 | 73% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.4/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 19.4/100 | 24% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.2/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.3/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **80.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **62.1** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **60.7** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **58.9** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **24.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **19.4** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.2** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.1M ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   22.0M ops/sec
 Solid.js           ███████████████████████████████████        19.4M ops/sec
 MobX               ████████████████████████████████           17.7M ops/sec
 Zen                ███████████████████████████████            17.4M ops/sec
 Valtio             ███████████████████████████                14.9M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 19.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.7M ops/sec
🥈 Zustand            ███████████████████████████████████████    11.5M ops/sec
🥉 Zen                ██████████████████████████████             8.7M ops/sec
 Redux Toolkit      ██████████████████████████████             8.6M ops/sec
 Preact Signals     ████████████████████████████               8.2M ops/sec
 MobX               ██                                         730K ops/sec
 Valtio             ██                                         486K ops/sec
 Jotai                                                         29K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 730K | 0.001ms | 0.003ms | 1000 |
| Valtio | 486K | 0.002ms | 0.003ms | 1000 |
| Jotai | 29K | 0.035ms | 0.047ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.7M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Zen                ████████████████████                       1.4M ops/sec
 Preact Signals     ████████████████████                       1.3M ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.4M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.019ms | 1000 |
| Valtio | 52K | 0.020ms | 0.040ms | 1000 |
| Jotai | 3K | 0.340ms | 0.760ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Zen                █████████████████████████████              15.4M ops/sec
🥉 Preact Signals     ████████████████████████████               14.7M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 MobX               ███████                                    3.6M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          369K ops/sec
 Redux Toolkit                                                 157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 369K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 157K | 0.007ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   12.5M ops/sec
🥈 Solid.js           ███████████████████████████████████████    12.2M ops/sec
🥉 Preact Signals     ████████████████████████████████████       11.3M ops/sec
 Zustand            ██                                         651K ops/sec
 MobX               ██                                         585K ops/sec
 Valtio             █                                          367K ops/sec
 Jotai                                                         36K ops/sec
 Redux Toolkit                                                 14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 651K | 0.002ms | 0.002ms | 1000 |
| MobX | 585K | 0.002ms | 0.003ms | 1000 |
| Valtio | 367K | 0.003ms | 0.004ms | 1000 |
| Jotai | 36K | 0.029ms | 0.041ms | 1000 |
| Redux Toolkit | 14K | 0.077ms | 0.143ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.5M ops/sec
🥈 Solid.js           █████████████████████████████              3.3M ops/sec
🥉 Preact Signals     ████████████████████████                   2.7M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          72K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 76K | 0.013ms | 0.022ms | 1000 |
| MobX | 72K | 0.014ms | 0.024ms | 1000 |
| Valtio | 41K | 0.025ms | 0.034ms | 1000 |
| Jotai | 3K | 0.296ms | 0.654ms | 1000 |
| Redux Toolkit | 1K | 0.757ms | 1.505ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   610K ops/sec
🥈 Preact Signals     █████████████████████                      316K ops/sec
🥉 Solid.js           ████████████████████                       298K ops/sec
 MobX                                                          8K ops/sec
 Zustand                                                       7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         302 ops/sec
 Redux Toolkit                                                 154 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 610K | 0.002ms | 0.002ms | 1000 |
| Preact Signals | 316K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 298K | 0.004ms | 0.006ms | 1000 |
| MobX | 8K | 0.135ms | 0.167ms | 1000 |
| Zustand | 7K | 0.137ms | 0.162ms | 1000 |
| Valtio | 4K | 0.249ms | 0.325ms | 1000 |
| Jotai | 302 | 3.452ms | 5.793ms | 1000 |
| Redux Toolkit | 154 | 6.532ms | 8.793ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   10.5M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     9.9M ops/sec
🥉 Solid.js           ██████████████████                         4.7M ops/sec
 Zustand            █████████████                              3.4M ops/sec
 Valtio             ██                                         417K ops/sec
 Jotai              █                                          308K ops/sec
 MobX               █                                          200K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 417K | 0.002ms | 0.004ms | 1000 |
| Jotai | 308K | 0.003ms | 0.007ms | 1000 |
| MobX | 200K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 59K | 0.018ms | 0.044ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.0M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     8.7M ops/sec
🥉 Zustand            ██████████████                             3.3M ops/sec
 Solid.js           ██████████████                             3.1M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              █                                          313K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 313K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Zustand            ████████████████████████████████████████   21.8M ops/sec
🥉 Zen                ██████████████████████████████████████     20.8M ops/sec
 Preact Signals     ████████████████████████████████           17.8M ops/sec
 Redux Toolkit      ████████████████████████████               15.2M ops/sec
 Valtio             ███████████████████████                    12.6M ops/sec
 MobX               █████████████                              7.2M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 15.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.8M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     7.4M ops/sec
🥉 Zustand            █████████████████                          3.3M ops/sec
 Valtio             █████████████                              2.6M ops/sec
 Solid.js           ████████████                               2.4M ops/sec
 MobX               █████                                      1.0M ops/sec
 Jotai              ██                                         313K ops/sec
 Redux Toolkit                                                 81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 313K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 81K | 0.013ms | 0.024ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   102K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    99K ops/sec
🥉 Zen                ███████████████████████████████████████    98K ops/sec
 Zustand            ██████████████████████                     57K ops/sec
 Valtio             ████████████████                           41K ops/sec
 MobX               ██████████████                             35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 102K | 0.010ms | 0.018ms | 1000 |
| Preact Signals | 99K | 0.011ms | 0.019ms | 1000 |
| Zen | 98K | 0.010ms | 0.013ms | 1000 |
| Zustand | 57K | 0.018ms | 0.029ms | 1000 |
| Valtio | 41K | 0.025ms | 0.036ms | 1000 |
| MobX | 35K | 0.030ms | 0.041ms | 1000 |
| Jotai | 6K | 0.187ms | 0.765ms | 1000 |
| Redux Toolkit | 3K | 0.378ms | 1.057ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Zen                ████████████████████████                   11.6M ops/sec
🥉 Preact Signals     ████████████████████████                   11.2M ops/sec
 Zustand            ██████████                                 4.7M ops/sec
 MobX               █████                                      2.2M ops/sec
 Valtio             ██                                         934K ops/sec
 Jotai                                                         189K ops/sec
 Redux Toolkit                                                 133K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 934K | 0.003ms | 0.003ms | 1000 |
| Jotai | 189K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 133K | 0.008ms | 0.014ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   16.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   16.3M ops/sec
🥉 Zustand            ███████                                    3.0M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          447K ops/sec
 Valtio             █                                          275K ops/sec
 Jotai                                                         138K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 16.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 447K | 0.002ms | 0.004ms | 1000 |
| Valtio | 275K | 0.004ms | 0.006ms | 1000 |
| Jotai | 138K | 0.007ms | 0.013ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.4M ops/sec
🥈 Preact Signals     █                                          123K ops/sec
🥉 Zen                █                                          95K ops/sec
 Valtio                                                        55K ops/sec
 Redux Toolkit                                                 29K ops/sec
 Zustand                                                       26K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 123K | 0.009ms | 0.018ms | 1000 |
| Zen | 95K | 0.012ms | 0.020ms | 1000 |
| Valtio | 55K | 0.051ms | 0.045ms | 1000 |
| Redux Toolkit | 29K | 0.064ms | 0.087ms | 1000 |
| Zustand | 26K | 0.041ms | 0.063ms | 1000 |
| MobX | 11K | 0.127ms | 1.136ms | 1000 |
| Jotai | 7K | 0.160ms | 0.797ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   12.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      11.7M ops/sec
🥉 Zustand            ██████████                                 3.3M ops/sec
 Solid.js           █████████                                  2.7M ops/sec
 MobX               ██████                                     1.9M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 127K ops/sec
 Jotai                                                         110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 127K | 0.008ms | 0.015ms | 1000 |
| Jotai | 110K | 0.009ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             █████████████                              718K ops/sec
🥉 MobX               ████                                       226K ops/sec
 Jotai              ███                                        171K ops/sec
 Zen                ██                                         102K ops/sec
 Preact Signals     ██                                         100K ops/sec
 Zustand            █                                          77K ops/sec
 Redux Toolkit                                                 792 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.001ms | 0.001ms | 1000 |
| Valtio | 718K | 0.002ms | 0.006ms | 1000 |
| MobX | 226K | 0.005ms | 0.017ms | 1000 |
| Jotai | 171K | 0.006ms | 0.010ms | 1000 |
| Zen | 102K | 0.010ms | 0.019ms | 1000 |
| Preact Signals | 100K | 0.011ms | 0.019ms | 1000 |
| Zustand | 77K | 0.014ms | 0.031ms | 1000 |
| Redux Toolkit | 792 | 1.288ms | 2.912ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
🥈 Solid.js           ████████████████████████████████████████   317K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                █████████                                  75K ops/sec
 Preact Signals     ███                                        20K ops/sec
 MobX               █                                          8K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         271 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 317K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 75K | 0.013ms | 0.021ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.058ms | 1000 |
| MobX | 8K | 0.133ms | 0.161ms | 1000 |
| Valtio | 5K | 0.211ms | 0.604ms | 1000 |
| Jotai | 271 | 3.701ms | 4.272ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   42K ops/sec
🥈 Zen                ██████████                                 10K ops/sec
🥉 Preact Signals     ████████                                   8K ops/sec
 Zustand            █                                          704 ops/sec
 MobX               █                                          550 ops/sec
 Valtio                                                        380 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 42K | 0.031ms | 0.386ms | 1000 |
| Zen | 10K | 0.097ms | 0.111ms | 1000 |
| Preact Signals | 8K | 0.123ms | 0.142ms | 1000 |
| Zustand | 704 | 1.432ms | 1.969ms | 1000 |
| MobX | 550 | 1.825ms | 2.433ms | 1000 |
| Valtio | 380 | 2.641ms | 3.260ms | 1000 |
| Jotai | 33 | 30.975ms | 41.121ms | 1000 |
| Redux Toolkit | 15 | 69.114ms | 82.126ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   17.5M ops/sec
🥈 Preact Signals     ███████████                                4.9M ops/sec
🥉 Zen                █████                                      2.0M ops/sec
 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          268K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 17.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 268K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Preact Signals     █████████                                  4.7M ops/sec
🥉 Zen                ██████                                     3.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          295K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 295K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.9M ops/sec
🥈 Preact Signals     █████████████                              7.0M ops/sec
🥉 Zen                ████████████                               6.1M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.3M ops/sec
 MobX               ██                                         791K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 791K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   16.5M ops/sec
🥈 Zen                █████████████████                          6.8M ops/sec
🥉 Preact Signals     ██████████████                             5.9M ops/sec
 Zustand            █████████████                              5.2M ops/sec
 Valtio             ██                                         1.0M ops/sec
 Jotai              ██                                         729K ops/sec
 MobX               ██                                         728K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 16.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| MobX | 728K | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ████████████████                           403K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          29K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 403K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 29K | 0.035ms | 0.045ms | 1000 |
| Preact Signals | 27K | 0.038ms | 0.048ms | 1000 |
| Valtio | 8K | 0.122ms | 0.144ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.170ms | 0.192ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   19.3M ops/sec
🥈 Preact Signals     ██                                         792K ops/sec
🥉 Zen                                                           217K ops/sec
 MobX                                                          120K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        68K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 792K | 0.001ms | 0.001ms | 1000 |
| Zen | 217K | 0.005ms | 0.005ms | 1000 |
| MobX | 120K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 68K | 0.015ms | 0.026ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            █████████████████████████████████          2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        261K ops/sec
 Zen                ███                                        258K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          77K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 261K | 0.004ms | 0.004ms | 1000 |
| Zen | 258K | 0.004ms | 0.004ms | 1000 |
| Valtio | 92K | 0.011ms | 0.013ms | 1000 |
| MobX | 77K | 0.013ms | 0.026ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   11.9M ops/sec
🥈 Zen                ████████████████████████████████████████   11.8M ops/sec
🥉 Preact Signals     █████████                                  2.7M ops/sec
 Zustand            ███████                                    2.0M ops/sec
 Valtio             █████                                      1.4M ops/sec
 MobX                                                          112K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 112K | 0.010ms | 0.019ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.42.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
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

*Generated on 2025-11-17T02:59:39.779Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
