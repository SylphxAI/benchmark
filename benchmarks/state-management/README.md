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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 79.7/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (63.7/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 79.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 63.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 57.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 56.9/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 23.5/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 83.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 51.1/100 | 61% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 51.0/100 | 61% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 46.2/100 | 55% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.4/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.8/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.2/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 79.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 63.7/100 | 80% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 57.8/100 | 73% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 56.9/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.5/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.2/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.4/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.3/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **79.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **63.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **57.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **56.9** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **23.5** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.4** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Preact Signals     ████████████████████████████████████████   23.3M ops/sec
🥈 Zustand            █████████████████████████████████████      21.5M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████        20.6M ops/sec
 Solid.js           ██████████████████████████████████         20.1M ops/sec
 MobX               ██████████████████████████                 15.3M ops/sec
 Zen                █████████████████████████                  14.8M ops/sec
 Valtio             ███████████████████████                    13.6M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 23.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 20.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 20.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.5M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    13.0M ops/sec
🥉 Solid.js           █████████████████████████████████████      12.5M ops/sec
 Preact Signals     █████████████████████████████              9.9M ops/sec
 Zen                ███████████████████                        6.5M ops/sec
 MobX               ███                                        898K ops/sec
 Valtio             █                                          497K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 898K | 0.001ms | 0.001ms | 1000 |
| Valtio | 497K | 0.002ms | 0.003ms | 1000 |
| Jotai | 30K | 0.034ms | 0.049ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Redux Toolkit      █████████████████████████████████          1.6M ops/sec
🥉 Zustand            ████████████████████████████████           1.6M ops/sec
 Zen                ██████████████████████                     1.1M ops/sec
 Preact Signals     █████████████████                          835K ops/sec
 MobX               ██                                         94K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 835K | 0.001ms | 0.002ms | 1000 |
| MobX | 94K | 0.011ms | 0.015ms | 1000 |
| Valtio | 51K | 0.021ms | 0.034ms | 1000 |
| Jotai | 3K | 0.334ms | 0.808ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     █████████████████████████████████████      17.5M ops/sec
🥉 Zen                █████████████████████████████████          15.6M ops/sec
 Zustand            ██████████                                 4.6M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ███████                                    3.5M ops/sec
 Jotai              █                                          381K ops/sec
 Redux Toolkit                                                 157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.001ms | 1000 |
| Jotai | 381K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 157K | 0.007ms | 0.014ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   15.9M ops/sec
🥈 Preact Signals     ███████████████████████████████            12.3M ops/sec
🥉 Solid.js           ███████████████████                        7.6M ops/sec
 Zustand            ██                                         666K ops/sec
 MobX               █                                          537K ops/sec
 Valtio             █                                          383K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 15.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 7.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 666K | 0.002ms | 0.003ms | 1000 |
| MobX | 537K | 0.003ms | 0.004ms | 1000 |
| Valtio | 383K | 0.003ms | 0.004ms | 1000 |
| Jotai | 37K | 0.027ms | 0.041ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.087ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   3.9M ops/sec
🥈 Preact Signals     ███████████████████████████                2.7M ops/sec
🥉 Solid.js           █████████████████████                      2.0M ops/sec
 Zustand            █                                          70K ops/sec
 MobX               █                                          67K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 70K | 0.015ms | 0.023ms | 1000 |
| MobX | 67K | 0.015ms | 0.022ms | 1000 |
| Valtio | 39K | 0.026ms | 0.033ms | 1000 |
| Jotai | 4K | 0.268ms | 0.538ms | 1000 |
| Redux Toolkit | 2K | 0.649ms | 1.489ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   480K ops/sec
🥈 Solid.js           █████████████████                          199K ops/sec
🥉 Preact Signals     ██████████                                 120K ops/sec
 Zustand            █                                          7K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         373 ops/sec
 Redux Toolkit                                                 155 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 480K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 199K | 0.006ms | 0.008ms | 1000 |
| Preact Signals | 120K | 0.008ms | 0.011ms | 1000 |
| Zustand | 7K | 0.143ms | 0.179ms | 1000 |
| MobX | 7K | 0.148ms | 0.174ms | 1000 |
| Valtio | 4K | 0.264ms | 0.314ms | 1000 |
| Jotai | 373 | 2.718ms | 4.664ms | 1000 |
| Redux Toolkit | 155 | 6.457ms | 7.493ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   10.6M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     10.0M ops/sec
🥉 Solid.js           ███████████████████                        4.9M ops/sec
 Zustand            ██████████████                             3.8M ops/sec
 Valtio             ██                                         404K ops/sec
 Jotai              █                                          368K ops/sec
 MobX               █                                          241K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 4.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 404K | 0.003ms | 0.004ms | 1000 |
| Jotai | 368K | 0.003ms | 0.006ms | 1000 |
| MobX | 241K | 0.004ms | 0.013ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.029ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.3M ops/sec
🥈 Preact Signals     ██████████████████████████████████         7.8M ops/sec
🥉 Zustand            ██████████████                             3.4M ops/sec
 Solid.js           ██████████████                             3.2M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               ████                                       1.0M ops/sec
 Jotai              ██                                         359K ops/sec
 Redux Toolkit                                                 67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 359K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 67K | 0.015ms | 0.029ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.9M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.4M ops/sec
🥉 Zen                █████████████████████████████████████      21.5M ops/sec
 Preact Signals     ████████████████████████████████████       20.4M ops/sec
 Redux Toolkit      █████████████████████████████              16.3M ops/sec
 Valtio             ██████████████████████                     12.7M ops/sec
 MobX               ███████████                                6.3M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   6.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    6.3M ops/sec
🥉 Zustand            █████████████████████                      3.3M ops/sec
 Valtio             █████████████████                          2.7M ops/sec
 Solid.js           ███████████████                            2.4M ops/sec
 MobX               ████████                                   1.3M ops/sec
 Jotai              ██                                         388K ops/sec
 Redux Toolkit                                                 78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 388K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 78K | 0.013ms | 0.021ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   87K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    86K ops/sec
🥉 Zen                ███████████████████████████████████████    85K ops/sec
 Zustand            ███████████████████████                    50K ops/sec
 Valtio             ███████████████████                        41K ops/sec
 MobX               ███████████████                            32K ops/sec
 Jotai              ███                                        6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 87K | 0.012ms | 0.018ms | 1000 |
| Preact Signals | 86K | 0.012ms | 0.019ms | 1000 |
| Zen | 85K | 0.012ms | 0.019ms | 1000 |
| Zustand | 50K | 0.021ms | 0.028ms | 1000 |
| Valtio | 41K | 0.025ms | 0.033ms | 1000 |
| MobX | 32K | 0.033ms | 0.043ms | 1000 |
| Jotai | 6K | 0.168ms | 0.244ms | 1000 |
| Redux Toolkit | 3K | 0.363ms | 1.095ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   22.6M ops/sec
🥈 Zen                ████████████████████████                   13.7M ops/sec
🥉 Preact Signals     ██████████████████████                     12.6M ops/sec
 Zustand            ████████                                   4.5M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.0M ops/sec
 Jotai                                                         205K ops/sec
 Redux Toolkit                                                 136K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 205K | 0.005ms | 0.013ms | 1000 |
| Redux Toolkit | 136K | 0.008ms | 0.017ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   20.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     19.2M ops/sec
🥉 Zustand            ██████                                     2.8M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          478K ops/sec
 Valtio             █                                          265K ops/sec
 Jotai                                                         182K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 478K | 0.002ms | 0.003ms | 1000 |
| Valtio | 265K | 0.004ms | 0.007ms | 1000 |
| Jotai | 182K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 68K | 0.016ms | 0.025ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.0M ops/sec
🥈 Preact Signals     █                                          115K ops/sec
🥉 Zen                █                                          87K ops/sec
 Zustand            █                                          84K ops/sec
 Valtio                                                        50K ops/sec
 Redux Toolkit                                                 27K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 115K | 0.009ms | 0.018ms | 1000 |
| Zen | 87K | 0.013ms | 0.020ms | 1000 |
| Zustand | 84K | 0.012ms | 0.023ms | 1000 |
| Valtio | 50K | 0.079ms | 0.073ms | 1000 |
| Redux Toolkit | 27K | 0.058ms | 0.084ms | 1000 |
| MobX | 12K | 0.122ms | 1.296ms | 1000 |
| Jotai | 7K | 0.160ms | 0.858ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   13.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    13.3M ops/sec
🥉 Zustand            █████████                                  2.9M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 120K ops/sec
 Jotai                                                         116K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 120K | 0.010ms | 0.021ms | 1000 |
| Jotai | 116K | 0.010ms | 0.025ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.6M ops/sec
🥈 Valtio             ███████                                    471K ops/sec
🥉 MobX               ███                                        168K ops/sec
 Jotai              ███                                        168K ops/sec
 Preact Signals     █                                          94K ops/sec
 Zen                █                                          93K ops/sec
 Zustand            █                                          88K ops/sec
 Redux Toolkit                                                 580 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.6M | 0.000ms | 0.002ms | 1000 |
| Valtio | 471K | 0.002ms | 0.009ms | 1000 |
| MobX | 168K | 0.007ms | 0.019ms | 1000 |
| Jotai | 168K | 0.007ms | 0.010ms | 1000 |
| Preact Signals | 94K | 0.011ms | 0.018ms | 1000 |
| Zen | 93K | 0.011ms | 0.014ms | 1000 |
| Zustand | 88K | 0.011ms | 0.019ms | 1000 |
| Redux Toolkit | 580 | 1.754ms | 3.726ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   224K ops/sec
🥈 Redux Toolkit      ███████████████████████████████            173K ops/sec
🥉 Zustand            ███████████████████████████████            173K ops/sec
 Zen                ████████████                               69K ops/sec
 Preact Signals     ████                                       21K ops/sec
 Valtio             █                                          5K ops/sec
 MobX               █                                          3K ops/sec
 Jotai                                                         276 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 224K | 0.005ms | 0.005ms | 1000 |
| Redux Toolkit | 173K | 0.006ms | 0.007ms | 1000 |
| Zustand | 173K | 0.006ms | 0.006ms | 1000 |
| Zen | 69K | 0.014ms | 0.019ms | 1000 |
| Preact Signals | 21K | 0.049ms | 0.055ms | 1000 |
| Valtio | 5K | 0.216ms | 0.723ms | 1000 |
| MobX | 3K | 0.291ms | 0.310ms | 1000 |
| Jotai | 276 | 3.643ms | 4.191ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   27K ops/sec
🥈 Zen                █████████████████                          11K ops/sec
🥉 Preact Signals     █████████████                              9K ops/sec
 Zustand            █                                          677 ops/sec
 MobX               █                                          483 ops/sec
 Valtio             █                                          388 ops/sec
 Jotai                                                         35 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 27K | 0.043ms | 0.390ms | 1000 |
| Zen | 11K | 0.091ms | 0.106ms | 1000 |
| Preact Signals | 9K | 0.114ms | 0.131ms | 1000 |
| Zustand | 677 | 1.486ms | 2.078ms | 1000 |
| MobX | 483 | 2.075ms | 2.673ms | 1000 |
| Valtio | 388 | 2.581ms | 3.201ms | 1000 |
| Jotai | 35 | 28.383ms | 32.717ms | 1000 |
| Redux Toolkit | 14 | 69.463ms | 71.133ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.6M ops/sec
🥈 Preact Signals     █████████                                  4.9M ops/sec
🥉 Valtio             ████                                       2.0M ops/sec
 Zen                ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX                                                          256K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 256K | 0.004ms | 0.007ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   23.9M ops/sec
🥈 Preact Signals     ████████                                   4.6M ops/sec
🥉 Zen                █████                                      2.9M ops/sec
 Zustand            ███                                        2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          315K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.002ms | 1000 |
| MobX | 315K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   23.7M ops/sec
🥈 Preact Signals     ████████████                               7.2M ops/sec
🥉 Zen                ███████████                                6.3M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.3M ops/sec
 MobX               █                                          789K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit                                                 293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 789K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Zen                ██████████████                             7.6M ops/sec
🥉 Preact Signals     ██████████                                 5.6M ops/sec
 Zustand            ██████████                                 5.2M ops/sec
 Valtio             ██                                         969K ops/sec
 MobX               █                                          742K ops/sec
 Jotai              █                                          729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 969K | 0.002ms | 0.002ms | 1000 |
| MobX | 742K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████                             351K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          33K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 351K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 33K | 0.030ms | 0.037ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.065ms | 1000 |
| Valtio | 8K | 0.124ms | 0.139ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.170ms | 0.192ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   24.2M ops/sec
🥈 Preact Signals     █                                          569K ops/sec
🥉 Zen                                                           196K ops/sec
 Zustand                                                       112K ops/sec
 MobX                                                          107K ops/sec
 Valtio                                                        56K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 24.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 569K | 0.002ms | 0.003ms | 1000 |
| Zen | 196K | 0.005ms | 0.007ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| MobX | 107K | 0.009ms | 0.014ms | 1000 |
| Valtio | 56K | 0.018ms | 0.030ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Zen                ███                                        300K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        282K ops/sec
 Valtio             █                                          81K ops/sec
 MobX               █                                          78K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 300K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 282K | 0.004ms | 0.005ms | 1000 |
| Valtio | 81K | 0.013ms | 0.018ms | 1000 |
| MobX | 78K | 0.013ms | 0.020ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.2M ops/sec
🥈 Zen                ███████████████████████████████████████    13.7M ops/sec
🥉 Preact Signals     ████████                                   2.7M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.4M ops/sec
 MobX                                                          109K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 109K | 0.011ms | 0.020ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.44.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-17T05:29:52.551Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
