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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 78.9/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (63.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 78.9/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 63.1/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 58.1/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 58.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 23.3/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 82.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 52.9/100 | 64% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 51.7/100 | 63% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.3/100 | 57% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.6/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.9/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.1/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 78.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 63.1/100 | 80% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 58.1/100 | 74% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 58.1/100 | 74% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.3/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.3/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.3/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **78.9** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **63.1** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **58.1** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **58.1** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **23.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.3** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   23.0M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    22.5M ops/sec
🥉 Preact Signals     ███████████████████████████████████████    22.4M ops/sec
 Solid.js           ██████████████████████████████████         19.4M ops/sec
 Zen                ███████████████████████████                15.4M ops/sec
 MobX               ███████████████████████████                15.3M ops/sec
 Valtio             █████████████████████████                  14.3M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 23.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 19.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.4M ops/sec
🥈 Redux Toolkit      ████████████████████████████████           9.0M ops/sec
🥉 Zustand            ███████████████████████████                7.8M ops/sec
 Zen                ███████████████████████████                7.6M ops/sec
 Preact Signals     ███████████████████                        5.3M ops/sec
 MobX               ███                                        865K ops/sec
 Valtio             ██                                         494K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 865K | 0.001ms | 0.001ms | 1000 |
| Valtio | 494K | 0.002ms | 0.003ms | 1000 |
| Jotai | 30K | 0.035ms | 0.050ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Zustand            ████████████████████████████████████████   2.0M ops/sec
🥉 Redux Toolkit      ████████████████████████████████           1.6M ops/sec
 Zen                ███████████████████████                    1.2M ops/sec
 Preact Signals     ██████████████████████                     1.1M ops/sec
 MobX               ██                                         93K ops/sec
 Valtio             █                                          49K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.2M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 93K | 0.011ms | 0.015ms | 1000 |
| Valtio | 49K | 0.022ms | 0.035ms | 1000 |
| Jotai | 3K | 0.343ms | 0.824ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   19.2M ops/sec
🥈 Zen                ██████████████████████████████████         16.2M ops/sec
🥉 Preact Signals     ██████████████████████████████████         16.2M ops/sec
 Zustand            ███████████                                5.1M ops/sec
 MobX               ███████                                    3.4M ops/sec
 Valtio             ███████                                    3.4M ops/sec
 Jotai              █                                          399K ops/sec
 Redux Toolkit                                                 157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 399K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 157K | 0.007ms | 0.015ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   16.6M ops/sec
🥈 Preact Signals     ████████████████████████████               11.8M ops/sec
🥉 Solid.js           ████████████████████████                   9.9M ops/sec
 Zustand            ██                                         663K ops/sec
 MobX               █                                          448K ops/sec
 Valtio             █                                          370K ops/sec
 Jotai                                                         38K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 16.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 663K | 0.002ms | 0.003ms | 1000 |
| MobX | 448K | 0.002ms | 0.004ms | 1000 |
| Valtio | 370K | 0.003ms | 0.005ms | 1000 |
| Jotai | 38K | 0.028ms | 0.046ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.082ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   3.7M ops/sec
🥈 Preact Signals     █████████████████████████████              2.7M ops/sec
🥉 Solid.js           ██████████████████████                     2.0M ops/sec
 Zustand            █                                          69K ops/sec
 MobX               █                                          63K ops/sec
 Valtio                                                        38K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 69K | 0.015ms | 0.025ms | 1000 |
| MobX | 63K | 0.016ms | 0.024ms | 1000 |
| Valtio | 38K | 0.026ms | 0.035ms | 1000 |
| Jotai | 4K | 0.280ms | 0.860ms | 1000 |
| Redux Toolkit | 2K | 0.666ms | 1.462ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   479K ops/sec
🥈 Solid.js           █████████████████                          199K ops/sec
🥉 Preact Signals     ██████████                                 114K ops/sec
 Zustand            █                                          7K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         367 ops/sec
 Redux Toolkit                                                 159 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 479K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 199K | 0.006ms | 0.008ms | 1000 |
| Preact Signals | 114K | 0.009ms | 0.014ms | 1000 |
| Zustand | 7K | 0.149ms | 0.183ms | 1000 |
| MobX | 6K | 0.160ms | 0.313ms | 1000 |
| Valtio | 4K | 0.264ms | 0.324ms | 1000 |
| Jotai | 367 | 2.773ms | 4.942ms | 1000 |
| Redux Toolkit | 159 | 6.323ms | 7.187ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   10.9M ops/sec
🥈 Preact Signals     █████████████████████████████████████      10.1M ops/sec
🥉 Solid.js           █████████████████                          4.6M ops/sec
 Zustand            ██████████████                             3.7M ops/sec
 Valtio             █                                          393K ops/sec
 Jotai              █                                          342K ops/sec
 MobX               █                                          243K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 393K | 0.003ms | 0.004ms | 1000 |
| Jotai | 342K | 0.006ms | 0.009ms | 1000 |
| MobX | 243K | 0.004ms | 0.014ms | 1000 |
| Redux Toolkit | 68K | 0.015ms | 0.031ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.7M ops/sec
🥈 Zen                ██████████████████████████████████████     8.2M ops/sec
🥉 Zustand            ███████████████                            3.3M ops/sec
 Solid.js           ███████████████                            3.2M ops/sec
 Valtio             █████████                                  2.0M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              ██                                         333K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 8.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 333K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.028ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   23.0M ops/sec
🥈 Zustand            ██████████████████████████████████████     21.8M ops/sec
🥉 Zen                █████████████████████████████████████      21.1M ops/sec
 Preact Signals     ███████████████████████████████████        20.1M ops/sec
 Redux Toolkit      ███████████████████████████                15.3M ops/sec
 Valtio             ████████████████████                       11.5M ops/sec
 MobX               ███████████                                6.2M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 15.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 11.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.003ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   5.8M ops/sec
🥈 Zen                ██████████████████████████████████████     5.6M ops/sec
🥉 Zustand            █████████████████████                      3.0M ops/sec
 Valtio             ██████████████████                         2.6M ops/sec
 Solid.js           ███████████████                            2.2M ops/sec
 MobX               █████████                                  1.4M ops/sec
 Jotai              ███                                        376K ops/sec
 Redux Toolkit      █                                          80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.4M | 0.001ms | 0.002ms | 1000 |
| Jotai | 376K | 0.006ms | 0.005ms | 1000 |
| Redux Toolkit | 80K | 0.014ms | 0.030ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   88K ops/sec
🥈 Zen                ████████████████████████████████████████   87K ops/sec
🥉 Preact Signals     ███████████████████████████████████████    87K ops/sec
 Zustand            ███████████████████████                    51K ops/sec
 Valtio             ██████████████████                         41K ops/sec
 MobX               ████████████████                           35K ops/sec
 Jotai              ███                                        6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 88K | 0.011ms | 0.019ms | 1000 |
| Zen | 87K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 87K | 0.012ms | 0.019ms | 1000 |
| Zustand | 51K | 0.020ms | 0.029ms | 1000 |
| Valtio | 41K | 0.025ms | 0.035ms | 1000 |
| MobX | 35K | 0.029ms | 0.040ms | 1000 |
| Jotai | 6K | 0.164ms | 0.323ms | 1000 |
| Redux Toolkit | 3K | 0.355ms | 0.696ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ██████████████████████                     12.2M ops/sec
🥉 Zen                ████████████████████                       11.4M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         982K ops/sec
 Jotai                                                         176K ops/sec
 Redux Toolkit                                                 140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 982K | 0.001ms | 0.002ms | 1000 |
| Jotai | 176K | 0.006ms | 0.012ms | 1000 |
| Redux Toolkit | 140K | 0.008ms | 0.017ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   20.8M ops/sec
🥈 Zen                ███████████████████████████████████████    20.2M ops/sec
🥉 Zustand            ██████                                     3.0M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          473K ops/sec
 Valtio             █                                          263K ops/sec
 Jotai                                                         181K ops/sec
 Redux Toolkit                                                 65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 20.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.002ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.002ms | 1000 |
| MobX | 473K | 0.002ms | 0.003ms | 1000 |
| Valtio | 263K | 0.004ms | 0.006ms | 1000 |
| Jotai | 181K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 65K | 0.016ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.1M ops/sec
🥈 Preact Signals     █                                          112K ops/sec
🥉 Zustand            █                                          89K ops/sec
 Zen                █                                          84K ops/sec
 Valtio             █                                          56K ops/sec
 Redux Toolkit                                                 40K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 112K | 0.010ms | 0.019ms | 1000 |
| Zustand | 89K | 0.025ms | 0.029ms | 1000 |
| Zen | 84K | 0.013ms | 0.022ms | 1000 |
| Valtio | 56K | 0.045ms | 0.046ms | 1000 |
| Redux Toolkit | 40K | 0.057ms | 0.058ms | 1000 |
| MobX | 11K | 0.124ms | 0.745ms | 1000 |
| Jotai | 7K | 0.162ms | 0.816ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   14.8M ops/sec
🥈 Zen                █████████████████████████████████████      13.8M ops/sec
🥉 Zustand            █████████                                  3.4M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.0M ops/sec
 Redux Toolkit                                                 120K ops/sec
 Jotai                                                         111K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 120K | 0.008ms | 0.012ms | 1000 |
| Jotai | 111K | 0.009ms | 0.022ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             ████████                                   509K ops/sec
🥉 MobX               ███                                        170K ops/sec
 Jotai              ██                                         129K ops/sec
 Preact Signals     ██                                         93K ops/sec
 Zen                ██                                         93K ops/sec
 Zustand            ██                                         91K ops/sec
 Redux Toolkit                                                 582 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 509K | 0.002ms | 0.008ms | 1000 |
| MobX | 170K | 0.007ms | 0.017ms | 1000 |
| Jotai | 129K | 0.009ms | 0.017ms | 1000 |
| Preact Signals | 93K | 0.011ms | 0.019ms | 1000 |
| Zen | 93K | 0.011ms | 0.020ms | 1000 |
| Zustand | 91K | 0.012ms | 0.020ms | 1000 |
| Redux Toolkit | 582 | 1.751ms | 3.999ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   218K ops/sec
🥈 Solid.js           ███████████████████████████████████████    213K ops/sec
🥉 Zustand            ████████████████████████████████           173K ops/sec
 Zen                █████████████                              69K ops/sec
 Preact Signals     ████                                       21K ops/sec
 Valtio             █                                          5K ops/sec
 MobX               █                                          3K ops/sec
 Jotai                                                         275 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 218K | 0.005ms | 0.005ms | 1000 |
| Solid.js | 213K | 0.005ms | 0.005ms | 1000 |
| Zustand | 173K | 0.006ms | 0.006ms | 1000 |
| Zen | 69K | 0.014ms | 0.019ms | 1000 |
| Preact Signals | 21K | 0.048ms | 0.054ms | 1000 |
| Valtio | 5K | 0.225ms | 0.763ms | 1000 |
| MobX | 3K | 0.300ms | 0.316ms | 1000 |
| Jotai | 275 | 3.661ms | 4.241ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   21K ops/sec
🥈 Zen                ██████████████████████                     11K ops/sec
🥉 Preact Signals     █████████████████                          9K ops/sec
 Zustand            █                                          662 ops/sec
 MobX               █                                          471 ops/sec
 Valtio             █                                          383 ops/sec
 Jotai                                                         35 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21K | 0.055ms | 0.481ms | 1000 |
| Zen | 11K | 0.090ms | 0.106ms | 1000 |
| Preact Signals | 9K | 0.115ms | 0.137ms | 1000 |
| Zustand | 662 | 1.525ms | 2.125ms | 1000 |
| MobX | 471 | 2.133ms | 2.738ms | 1000 |
| Valtio | 383 | 2.622ms | 3.264ms | 1000 |
| Jotai | 35 | 28.862ms | 32.157ms | 1000 |
| Redux Toolkit | 14 | 70.806ms | 73.516ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.9M ops/sec
🥈 Preact Signals     █████████                                  4.7M ops/sec
🥉 Valtio             ████                                       2.1M ops/sec
 Zen                ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX                                                          260K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 260K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.1M ops/sec
🥈 Preact Signals     █████████                                  4.6M ops/sec
🥉 Zen                ██████                                     3.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ████                                       1.8M ops/sec
 MobX               █                                          316K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 316K | 0.005ms | 0.006ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   23.7M ops/sec
🥈 Preact Signals     ████████████                               6.9M ops/sec
🥉 Zen                ███████████                                6.7M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          735K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit                                                 293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 735K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Zen                ███████████████                            7.6M ops/sec
🥉 Preact Signals     ████████████                               6.5M ops/sec
 Zustand            ██████████                                 5.2M ops/sec
 Valtio             ██                                         944K ops/sec
 MobX               █                                          748K ops/sec
 Jotai              █                                          729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 944K | 0.002ms | 0.003ms | 1000 |
| MobX | 748K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████                             350K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          33K ops/sec
 Preact Signals     █                                          29K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 350K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 33K | 0.031ms | 0.036ms | 1000 |
| Preact Signals | 29K | 0.035ms | 0.047ms | 1000 |
| Valtio | 8K | 0.128ms | 0.150ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.162ms | 0.196ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   24.9M ops/sec
🥈 Preact Signals     █                                          575K ops/sec
🥉 Zen                                                           196K ops/sec
 Zustand                                                       112K ops/sec
 MobX                                                          106K ops/sec
 Valtio                                                        55K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 24.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 575K | 0.002ms | 0.002ms | 1000 |
| Zen | 196K | 0.005ms | 0.005ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| MobX | 106K | 0.009ms | 0.012ms | 1000 |
| Valtio | 55K | 0.019ms | 0.030ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.8M ops/sec
🥈 Zustand            ██████████████████████████████             2.9M ops/sec
🥉 Zen                ███                                        299K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        280K ops/sec
 Valtio             █                                          80K ops/sec
 MobX               █                                          79K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 299K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 280K | 0.004ms | 0.004ms | 1000 |
| Valtio | 80K | 0.013ms | 0.019ms | 1000 |
| MobX | 79K | 0.013ms | 0.018ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   13.5M ops/sec
🥈 Zen                ██████████████████████████████████████     12.9M ops/sec
🥉 Preact Signals     ████████                                   2.7M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.4M ops/sec
 MobX                                                          108K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 13.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.002ms | 1000 |
| MobX | 108K | 0.010ms | 0.022ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.44.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-17T04:43:16.638Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
