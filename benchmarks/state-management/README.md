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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 81.2/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (62.0/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 81.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 62.0/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 59.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 58.7/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 86.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 50.2/100 | 58% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 48.0/100 | 55% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.1/100 | 52% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.4/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.9/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.2/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 62.0/100 | 76% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 59.1/100 | 73% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 58.7/100 | 72% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.4/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.2/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.6/100 | 17% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.1/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **81.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **62.0** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **59.1** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **58.7** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **24.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.6** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.1** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zen                ████████████████████████████████           18.1M ops/sec
 MobX               ██████████████████████████████             16.9M ops/sec
 Valtio             ██████████████████████████                 14.8M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.8M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   9.3M ops/sec
🥈 Solid.js           ████████████████████████████████████████   9.3M ops/sec
🥉 Redux Toolkit      ████████████████████████████████████       8.2M ops/sec
 Preact Signals     ███████████████████████                    5.3M ops/sec
 Zen                █████████████████████                      4.9M ops/sec
 MobX               ████                                       823K ops/sec
 Valtio             ██                                         532K ops/sec
 Jotai                                                         29K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 9.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 823K | 0.001ms | 0.002ms | 1000 |
| Valtio | 532K | 0.002ms | 0.003ms | 1000 |
| Jotai | 29K | 0.036ms | 0.065ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ████████████████████████████████████████   2.8M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  628K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          54K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 628K | 0.002ms | 0.002ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 54K | 0.020ms | 0.031ms | 1000 |
| Jotai | 3K | 0.351ms | 0.757ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Zen                ██████████████████████████████████████     19.9M ops/sec
🥉 Preact Signals     ██████████████████                         9.7M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ██████                                     3.4M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          362K ops/sec
 Redux Toolkit                                                 165K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 362K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 165K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   14.3M ops/sec
🥈 Solid.js           ███████████████████████████                9.5M ops/sec
🥉 Preact Signals     ███████████████                            5.5M ops/sec
 Zustand            ██                                         698K ops/sec
 MobX               ██                                         557K ops/sec
 Valtio             █                                          404K ops/sec
 Jotai                                                         34K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 698K | 0.001ms | 0.002ms | 1000 |
| MobX | 557K | 0.002ms | 0.003ms | 1000 |
| Valtio | 404K | 0.003ms | 0.004ms | 1000 |
| Jotai | 34K | 0.030ms | 0.042ms | 1000 |
| Redux Toolkit | 16K | 0.065ms | 0.119ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   3.7M ops/sec
🥈 Solid.js           ███████████████████████████████████████    3.6M ops/sec
🥉 Preact Signals     █████████████████████████████              2.6M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          66K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 66K | 0.015ms | 0.025ms | 1000 |
| Valtio | 40K | 0.025ms | 0.046ms | 1000 |
| Jotai | 3K | 0.305ms | 0.595ms | 1000 |
| Redux Toolkit | 2K | 0.637ms | 1.442ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   396K ops/sec
🥈 Solid.js           ██████████████████████████████████████     375K ops/sec
🥉 Preact Signals     ████████████████████████████████           318K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         346 ops/sec
 Redux Toolkit                                                 157 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 396K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 375K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 8K | 0.132ms | 0.147ms | 1000 |
| MobX | 6K | 0.168ms | 0.268ms | 1000 |
| Valtio | 4K | 0.243ms | 0.303ms | 1000 |
| Jotai | 346 | 2.937ms | 4.735ms | 1000 |
| Redux Toolkit | 157 | 6.397ms | 7.423ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.4M ops/sec
🥈 Zen                ██████████████████████████████             7.8M ops/sec
🥉 Solid.js           ██████████████████                         4.8M ops/sec
 Zustand            ██████████████                             3.5M ops/sec
 Valtio             ██                                         442K ops/sec
 Jotai              █                                          315K ops/sec
 MobX               █                                          204K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 442K | 0.002ms | 0.003ms | 1000 |
| Jotai | 315K | 0.003ms | 0.007ms | 1000 |
| MobX | 204K | 0.005ms | 0.013ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.043ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    9.2M ops/sec
🥉 Zustand            ███████████████                            3.5M ops/sec
 Solid.js           █████████████                              3.0M ops/sec
 Valtio             ████████                                   1.8M ops/sec
 MobX               ████                                       891K ops/sec
 Jotai              █                                          329K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.002ms | 1000 |
| MobX | 891K | 0.001ms | 0.002ms | 1000 |
| Jotai | 329K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.040ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.6M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    21.9M ops/sec
🥉 Solid.js           ████████████████████████████████           17.8M ops/sec
 Redux Toolkit      ███████████████████████████████            17.2M ops/sec
 Zen                ██████████████████████████████             16.7M ops/sec
 Valtio             █████████████████████████                  13.9M ops/sec
 MobX               ██████████                                 5.5M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.5M ops/sec
🥈 Preact Signals     ████████████████████████████               5.3M ops/sec
🥉 Zustand            █████████████████                          3.1M ops/sec
 Solid.js           ██████████████                             2.6M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 MobX               ██████                                     1.2M ops/sec
 Jotai              ██                                         328K ops/sec
 Redux Toolkit                                                 81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 328K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 81K | 0.013ms | 0.024ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   112K ops/sec
🥈 Zen                ███████████████████████████████████████    110K ops/sec
🥉 Preact Signals     ███████████████████████████████████████    109K ops/sec
 Zustand            ██████████████████████                     61K ops/sec
 Valtio             ███████████████                            43K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 112K | 0.009ms | 0.012ms | 1000 |
| Zen | 110K | 0.009ms | 0.012ms | 1000 |
| Preact Signals | 109K | 0.010ms | 0.020ms | 1000 |
| Zustand | 61K | 0.017ms | 0.026ms | 1000 |
| Valtio | 43K | 0.024ms | 0.034ms | 1000 |
| MobX | 36K | 0.029ms | 0.042ms | 1000 |
| Jotai | 6K | 0.175ms | 0.275ms | 1000 |
| Redux Toolkit | 3K | 0.362ms | 0.564ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Zen                ████████████████████████                   12.7M ops/sec
🥉 Preact Signals     █████████████████████                      11.2M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         195K ops/sec
 Redux Toolkit                                                 141K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Jotai | 195K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 141K | 0.008ms | 0.011ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   19.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    19.2M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          475K ops/sec
 Valtio             █                                          283K ops/sec
 Jotai                                                         163K ops/sec
 Redux Toolkit                                                 73K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 475K | 0.002ms | 0.004ms | 1000 |
| Valtio | 283K | 0.004ms | 0.004ms | 1000 |
| Jotai | 163K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 73K | 0.015ms | 0.035ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.4M ops/sec
🥈 Preact Signals     █                                          112K ops/sec
🥉 Zen                █                                          96K ops/sec
 Zustand            █                                          92K ops/sec
 Valtio             █                                          67K ops/sec
 Redux Toolkit                                                 45K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 112K | 0.010ms | 0.018ms | 1000 |
| Zen | 96K | 0.012ms | 0.020ms | 1000 |
| Zustand | 92K | 0.027ms | 0.039ms | 1000 |
| Valtio | 67K | 0.045ms | 0.048ms | 1000 |
| Redux Toolkit | 45K | 0.058ms | 0.561ms | 1000 |
| MobX | 12K | 0.122ms | 1.027ms | 1000 |
| Jotai | 7K | 0.152ms | 0.800ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   13.8M ops/sec
🥈 Preact Signals     ███████████████████████████                9.3M ops/sec
🥉 Zustand            ███████████                                3.7M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 128K ops/sec
 Jotai                                                         104K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 128K | 0.008ms | 0.012ms | 1000 |
| Jotai | 104K | 0.010ms | 0.020ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             █████████████                              811K ops/sec
🥉 MobX               ████                                       226K ops/sec
 Jotai              ███                                        197K ops/sec
 Zustand            ██                                         128K ops/sec
 Preact Signals     ██                                         106K ops/sec
 Zen                ██                                         103K ops/sec
 Redux Toolkit                                                 808 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 811K | 0.001ms | 0.006ms | 1000 |
| MobX | 226K | 0.005ms | 0.014ms | 1000 |
| Jotai | 197K | 0.006ms | 0.008ms | 1000 |
| Zustand | 128K | 0.008ms | 0.017ms | 1000 |
| Preact Signals | 106K | 0.010ms | 0.017ms | 1000 |
| Zen | 103K | 0.011ms | 0.026ms | 1000 |
| Redux Toolkit | 808 | 1.270ms | 3.215ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         283 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 317K | 0.003ms | 0.004ms | 1000 |
| Zen | 64K | 0.016ms | 0.023ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| Valtio | 5K | 0.208ms | 0.612ms | 1000 |
| MobX | 4K | 0.269ms | 0.288ms | 1000 |
| Jotai | 283 | 3.542ms | 4.098ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   47K ops/sec
🥈 Zen                ████████                                   10K ops/sec
🥉 Preact Signals     ███████                                    8K ops/sec
 Zustand            █                                          756 ops/sec
 MobX                                                          475 ops/sec
 Valtio                                                        397 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 47K | 0.027ms | 0.374ms | 1000 |
| Zen | 10K | 0.103ms | 0.111ms | 1000 |
| Preact Signals | 8K | 0.118ms | 0.127ms | 1000 |
| Zustand | 756 | 1.334ms | 1.817ms | 1000 |
| MobX | 475 | 2.110ms | 2.643ms | 1000 |
| Valtio | 397 | 2.528ms | 3.093ms | 1000 |
| Jotai | 34 | 29.130ms | 32.619ms | 1000 |
| Redux Toolkit | 15 | 65.886ms | 70.613ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.9M ops/sec
🥈 Preact Signals     ██████████                                 5.1M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          279K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 279K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     █████████                                  4.9M ops/sec
🥉 Zen                █████                                      2.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          317K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 317K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     █████████████                              7.5M ops/sec
🥉 Zen                ███████████                                6.2M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          808K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 808K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Zen                ███████████████                            7.2M ops/sec
🥉 Preact Signals     ██████████████                             6.8M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         755K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 755K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         437K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          34K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 437K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 34K | 0.030ms | 0.038ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.044ms | 1000 |
| Valtio | 8K | 0.122ms | 0.139ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.171ms | 0.199ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Preact Signals     █                                          763K ops/sec
🥉 Zen                                                           240K ops/sec
 MobX                                                          121K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        70K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 763K | 0.001ms | 0.002ms | 1000 |
| Zen | 240K | 0.004ms | 0.004ms | 1000 |
| MobX | 121K | 0.008ms | 0.012ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 70K | 0.015ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            █████████████████████████████████          2.9M ops/sec
🥉 Zen                ████                                       323K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        271K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          81K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 323K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 271K | 0.004ms | 0.004ms | 1000 |
| Valtio | 93K | 0.011ms | 0.019ms | 1000 |
| MobX | 81K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   15.3M ops/sec
🥈 Zen                ███████████████████████████████████        13.3M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            █████                                      2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          115K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 15.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 115K | 0.009ms | 0.020ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.34.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T22:38:19.225Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
