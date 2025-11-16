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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 84.3/100 score
- **⚖️ Best Balance**: Zen - Great performance (63.3/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 84.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 63.3/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 60.6/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 55.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 25.4/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 88.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 53.5/100 | 60% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 46.1/100 | 52% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.8/100 | 49% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.9/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.3/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.8/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 84.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 63.3/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 60.6/100 | 72% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 55.8/100 | 66% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.4/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.7/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 14.3/100 | 17% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **84.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **63.3** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **60.6** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **55.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **14.3** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ████████████████████████████████████████   22.1M ops/sec
 Zen                ███████████████████████████████            17.5M ops/sec
 MobX               ███████████████████████████████            17.3M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   11.7M ops/sec
🥉 Zen                ██████████████████████████████             8.8M ops/sec
 Zustand            ██████████████████████████████             8.8M ops/sec
 Preact Signals     ███████████████████████                    6.7M ops/sec
 MobX               ███                                        834K ops/sec
 Valtio             ██                                         523K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 834K | 0.001ms | 0.001ms | 1000 |
| Valtio | 523K | 0.002ms | 0.004ms | 1000 |
| Jotai | 31K | 0.034ms | 0.044ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   2.7M ops/sec
🥈 Solid.js           ██████████████████████████████████████     2.5M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                ██████████████████████                     1.5M ops/sec
 MobX               █                                          84K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 84K | 0.012ms | 0.019ms | 1000 |
| Valtio | 53K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.337ms | 0.705ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Zen                ██████████████████████████████████████     20.3M ops/sec
🥉 Preact Signals     ████████████████████████████               14.9M ops/sec
 Zustand            █████████                                  4.8M ops/sec
 MobX               ███████                                    3.6M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          372K ops/sec
 Redux Toolkit                                                 162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 372K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 162K | 0.007ms | 0.012ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   12.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    12.2M ops/sec
🥉 Zen                ████████████████████████████████           9.8M ops/sec
 Zustand            ██                                         730K ops/sec
 MobX               ██                                         571K ops/sec
 Valtio             █                                          377K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 730K | 0.001ms | 0.002ms | 1000 |
| MobX | 571K | 0.002ms | 0.003ms | 1000 |
| Valtio | 377K | 0.003ms | 0.004ms | 1000 |
| Jotai | 35K | 0.030ms | 0.050ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.089ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.7M ops/sec
🥈 Solid.js           ████████████████████████████               3.2M ops/sec
🥉 Preact Signals     ███████████████████                        2.2M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          67K ops/sec
 Valtio                                                        42K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.2M | 0.001ms | 0.001ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 67K | 0.015ms | 0.024ms | 1000 |
| Valtio | 42K | 0.024ms | 0.034ms | 1000 |
| Jotai | 4K | 0.291ms | 0.895ms | 1000 |
| Redux Toolkit | 2K | 0.619ms | 1.237ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   621K ops/sec
🥈 Solid.js           ████████████████████████                   376K ops/sec
🥉 Preact Signals     ████████████████████                       316K ops/sec
 Zustand                                                       8K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         355 ops/sec
 Redux Toolkit                                                 166 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 621K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 376K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 316K | 0.003ms | 0.005ms | 1000 |
| Zustand | 8K | 0.132ms | 0.146ms | 1000 |
| MobX | 7K | 0.137ms | 0.162ms | 1000 |
| Valtio | 4K | 0.241ms | 0.283ms | 1000 |
| Jotai | 355 | 2.868ms | 4.937ms | 1000 |
| Redux Toolkit | 166 | 6.042ms | 6.874ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.9M ops/sec
🥈 Preact Signals     ████████████████████████████████████       10.8M ops/sec
🥉 Solid.js           ████████████████                           4.7M ops/sec
 Zustand            ████████████                               3.7M ops/sec
 Valtio             █                                          404K ops/sec
 Jotai              █                                          303K ops/sec
 MobX               █                                          208K ops/sec
 Redux Toolkit                                                 62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 404K | 0.003ms | 0.008ms | 1000 |
| Jotai | 303K | 0.003ms | 0.006ms | 1000 |
| MobX | 208K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 62K | 0.017ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   10.0M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     9.6M ops/sec
🥉 Zustand            ██████████████                             3.4M ops/sec
 Solid.js           █████████████                              3.2M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               ████                                       1.0M ops/sec
 Jotai              █                                          329K ops/sec
 Redux Toolkit                                                 62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 329K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 62K | 0.017ms | 0.038ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   22.3M ops/sec
🥈 Solid.js           ███████████████████████████████████████    21.7M ops/sec
🥉 Redux Toolkit      █████████████████████████████████          18.5M ops/sec
 Zustand            ██████████████████████████████             16.6M ops/sec
 Preact Signals     █████████████████████████████              16.3M ops/sec
 Valtio             █████████████████████████                  13.9M ops/sec
 MobX               ███████████                                5.8M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 18.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 16.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.8M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.6M ops/sec
🥈 Preact Signals     █████████████████████████                  4.8M ops/sec
🥉 Zustand            ████████████████                           3.1M ops/sec
 Valtio             ██████████████                             2.6M ops/sec
 Solid.js           █████████████                              2.6M ops/sec
 MobX               █████                                      864K ops/sec
 Jotai              ██                                         358K ops/sec
 Redux Toolkit                                                 82K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 864K | 0.001ms | 0.003ms | 1000 |
| Jotai | 358K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 82K | 0.013ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   114K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    111K ops/sec
🥉 Zen                ███████████████████████████████████████    110K ops/sec
 Zustand            █████████████████████                      61K ops/sec
 Valtio             ███████████████                            44K ops/sec
 MobX               █████████████                              37K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 114K | 0.009ms | 0.012ms | 1000 |
| Preact Signals | 111K | 0.009ms | 0.016ms | 1000 |
| Zen | 110K | 0.009ms | 0.013ms | 1000 |
| Zustand | 61K | 0.017ms | 0.028ms | 1000 |
| Valtio | 44K | 0.024ms | 0.034ms | 1000 |
| MobX | 37K | 0.028ms | 0.039ms | 1000 |
| Jotai | 6K | 0.176ms | 0.232ms | 1000 |
| Redux Toolkit | 3K | 0.339ms | 0.456ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   20.8M ops/sec
🥈 Zen                ██████████████████████████                 13.6M ops/sec
🥉 Preact Signals     ██████████████████████                     11.3M ops/sec
 Zustand            ██████████                                 5.0M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         193K ops/sec
 Redux Toolkit                                                 145K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Jotai | 193K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 145K | 0.007ms | 0.017ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.7M ops/sec
🥈 Zen                █████████████████████████████████████      18.2M ops/sec
🥉 Zustand            ███████                                    3.4M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          486K ops/sec
 Valtio             █                                          287K ops/sec
 Jotai                                                         162K ops/sec
 Redux Toolkit                                                 75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 486K | 0.002ms | 0.003ms | 1000 |
| Valtio | 287K | 0.004ms | 0.004ms | 1000 |
| Jotai | 162K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 75K | 0.014ms | 0.028ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Preact Signals     █                                          128K ops/sec
🥉 Zen                █                                          97K ops/sec
 Zustand            █                                          97K ops/sec
 Valtio             █                                          64K ops/sec
 Redux Toolkit                                                 45K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 128K | 0.009ms | 0.015ms | 1000 |
| Zen | 97K | 0.012ms | 0.020ms | 1000 |
| Zustand | 97K | 0.034ms | 0.030ms | 1000 |
| Valtio | 64K | 0.042ms | 0.047ms | 1000 |
| Redux Toolkit | 45K | 0.055ms | 0.056ms | 1000 |
| MobX | 12K | 0.115ms | 1.015ms | 1000 |
| Jotai | 7K | 0.151ms | 0.763ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     13.4M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 131K ops/sec
 Jotai                                                         104K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 131K | 0.008ms | 0.014ms | 1000 |
| Jotai | 104K | 0.011ms | 0.026ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             ██████████████                             855K ops/sec
🥉 MobX               ████                                       238K ops/sec
 Jotai              ███                                        165K ops/sec
 Zustand            ██                                         132K ops/sec
 Zen                ██                                         108K ops/sec
 Preact Signals     ██                                         107K ops/sec
 Redux Toolkit                                                 819 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 855K | 0.001ms | 0.007ms | 1000 |
| MobX | 238K | 0.005ms | 0.016ms | 1000 |
| Jotai | 165K | 0.007ms | 0.016ms | 1000 |
| Zustand | 132K | 0.008ms | 0.017ms | 1000 |
| Zen | 108K | 0.009ms | 0.019ms | 1000 |
| Preact Signals | 107K | 0.009ms | 0.019ms | 1000 |
| Redux Toolkit | 819 | 1.249ms | 2.888ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████                       160K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ██                                         18K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         291 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.013ms | 0.020ms | 1000 |
| Preact Signals | 18K | 0.058ms | 0.117ms | 1000 |
| Valtio | 5K | 0.199ms | 0.615ms | 1000 |
| MobX | 4K | 0.273ms | 0.289ms | 1000 |
| Jotai | 291 | 3.447ms | 3.911ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   43K ops/sec
🥈 Zen                ██████████                                 10K ops/sec
🥉 Preact Signals     ████████                                   9K ops/sec
 Zustand            █                                          753 ops/sec
 MobX                                                          438 ops/sec
 Valtio                                                        413 ops/sec
 Jotai                                                         35 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 43K | 0.028ms | 0.383ms | 1000 |
| Zen | 10K | 0.097ms | 0.113ms | 1000 |
| Preact Signals | 9K | 0.115ms | 0.135ms | 1000 |
| Zustand | 753 | 1.337ms | 1.779ms | 1000 |
| MobX | 438 | 2.290ms | 2.834ms | 1000 |
| Valtio | 413 | 2.428ms | 2.941ms | 1000 |
| Jotai | 35 | 28.521ms | 32.145ms | 1000 |
| Redux Toolkit | 15 | 68.379ms | 71.691ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Preact Signals     ██████████                                 5.1M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.1M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          279K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 279K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Preact Signals     █████████                                  4.9M ops/sec
🥉 Zen                █████                                      2.8M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          292K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 292K | 0.004ms | 0.008ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.8M ops/sec
🥈 Preact Signals     █████████████                              6.9M ops/sec
🥉 Zen                ████████████                               6.7M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.6M ops/sec
 MobX               ██                                         821K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 821K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.1M ops/sec
🥈 Zen                ███████████████                            7.4M ops/sec
🥉 Preact Signals     ██████████████                             6.7M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         764K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 764K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         436K ops/sec
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
| Solid.js | 436K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 35K | 0.029ms | 0.038ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.056ms | 1000 |
| Valtio | 8K | 0.123ms | 0.153ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.172ms | 0.194ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.8M ops/sec
🥈 Preact Signals     █                                          809K ops/sec
🥉 Zen                                                           193K ops/sec
 MobX                                                          115K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        74K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 809K | 0.001ms | 0.001ms | 1000 |
| Zen | 193K | 0.005ms | 0.009ms | 1000 |
| MobX | 115K | 0.009ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 74K | 0.015ms | 0.026ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Zen                ████                                       344K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        277K ops/sec
 Valtio             █                                          91K ops/sec
 MobX               █                                          81K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 344K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 277K | 0.004ms | 0.004ms | 1000 |
| Valtio | 91K | 0.012ms | 0.021ms | 1000 |
| MobX | 81K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.8M ops/sec
🥈 Solid.js           ██████████████████████████████████████     13.0M ops/sec
🥉 Preact Signals     █████████                                  2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.6M ops/sec
 MobX                                                          116K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 13.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 116K | 0.009ms | 0.018ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.36.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
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

*Generated on 2025-11-16T23:10:54.119Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
