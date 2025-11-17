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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 77.2/100 score
- **⚖️ Best Balance**: Zen - Great performance (69.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 77.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 69.4/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 65.6/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 58.3/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 24.8/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 80.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 62.3/100 | 77% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 51.5/100 | 64% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 48.7/100 | 60% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.8/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.3/100 | 19% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.9/100 | 14% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 77.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 69.4/100 | 90% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 65.6/100 | 85% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 58.3/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.8/100 | 32% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 20.2/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.8/100 | 18% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.5/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **77.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **69.4** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **65.6** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **58.3** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **24.8** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **20.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.5** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   22.7M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.6M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████████    22.2M ops/sec
 Zustand            ██████████████████████████████████████     21.6M ops/sec
 Solid.js           ████████████████████████████████           18.0M ops/sec
 MobX               ███████████████████████████                15.6M ops/sec
 Valtio             ████████████████████████                   13.5M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 18.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   11.0M ops/sec
🥈 Solid.js           ███████████████████████████████████████    10.8M ops/sec
🥉 Redux Toolkit      ████████████████████████████████████       10.0M ops/sec
 Preact Signals     ██████████████████████████████             8.3M ops/sec
 Zen                ████████████████████████████               7.8M ops/sec
 MobX               ███                                        854K ops/sec
 Valtio             ██                                         509K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 11.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 10.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 10.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 854K | 0.001ms | 0.001ms | 1000 |
| Valtio | 509K | 0.002ms | 0.003ms | 1000 |
| Jotai | 30K | 0.034ms | 0.053ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Zustand            ████████████████████████████████           1.6M ops/sec
🥉 Preact Signals     ███████████████████████████████            1.6M ops/sec
 Redux Toolkit      ███████████████████████████████            1.5M ops/sec
 Zen                ███████████████████████                    1.1M ops/sec
 MobX               ██                                         92K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 92K | 0.011ms | 0.015ms | 1000 |
| Valtio | 51K | 0.021ms | 0.032ms | 1000 |
| Jotai | 3K | 0.338ms | 0.784ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     18.0M ops/sec
🥉 Zen                ██████████████████████████████████████     17.9M ops/sec
 Zustand            ███████████                                5.1M ops/sec
 Valtio             ███████                                    3.4M ops/sec
 MobX               ███████                                    3.2M ops/sec
 Jotai              █                                          400K ops/sec
 Redux Toolkit                                                 161K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 400K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 161K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   16.2M ops/sec
🥈 Preact Signals     ████████████████████████████████           13.0M ops/sec
🥉 Solid.js           █████████████████████████                  10.3M ops/sec
 Zustand            ██                                         686K ops/sec
 MobX               █                                          474K ops/sec
 Valtio             █                                          383K ops/sec
 Jotai                                                         38K ops/sec
 Redux Toolkit                                                 17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 16.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 10.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 686K | 0.001ms | 0.003ms | 1000 |
| MobX | 474K | 0.002ms | 0.005ms | 1000 |
| Valtio | 383K | 0.003ms | 0.004ms | 1000 |
| Jotai | 38K | 0.027ms | 0.038ms | 1000 |
| Redux Toolkit | 17K | 0.062ms | 0.084ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   3.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Solid.js           ███████████████████████                    2.1M ops/sec
 Zustand            █                                          71K ops/sec
 MobX               █                                          64K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Zustand | 71K | 0.014ms | 0.024ms | 1000 |
| MobX | 64K | 0.016ms | 0.023ms | 1000 |
| Valtio | 39K | 0.026ms | 0.037ms | 1000 |
| Jotai | 4K | 0.273ms | 0.833ms | 1000 |
| Redux Toolkit | 2K | 0.633ms | 1.371ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   470K ops/sec
🥈 Solid.js           ██████████████████                         213K ops/sec
🥉 Preact Signals     ██████████                                 119K ops/sec
 Zustand            █                                          7K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         378 ops/sec
 Redux Toolkit                                                 162 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 470K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 213K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 119K | 0.009ms | 0.014ms | 1000 |
| Zustand | 7K | 0.143ms | 0.169ms | 1000 |
| MobX | 6K | 0.156ms | 0.186ms | 1000 |
| Valtio | 4K | 0.269ms | 0.526ms | 1000 |
| Jotai | 378 | 2.686ms | 4.573ms | 1000 |
| Redux Toolkit | 162 | 6.199ms | 7.006ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   12.1M ops/sec
🥈 Preact Signals     █████████████████████████                  7.5M ops/sec
🥉 Solid.js           ████████████████                           5.0M ops/sec
 Zustand            ██████████                                 3.1M ops/sec
 Valtio             █                                          387K ops/sec
 Jotai              █                                          368K ops/sec
 MobX               █                                          231K ops/sec
 Redux Toolkit                                                 66K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 5.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 3.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 387K | 0.003ms | 0.004ms | 1000 |
| Jotai | 368K | 0.003ms | 0.006ms | 1000 |
| MobX | 231K | 0.004ms | 0.014ms | 1000 |
| Redux Toolkit | 66K | 0.017ms | 0.037ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   6.9M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    6.8M ops/sec
🥉 Zustand            ████████████████                           2.8M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 Valtio             ████████████                               2.1M ops/sec
 MobX               ██████                                     1.1M ops/sec
 Jotai              ██                                         348K ops/sec
 Redux Toolkit                                                 67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.8M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 348K | 0.003ms | 0.008ms | 1000 |
| Redux Toolkit | 67K | 0.015ms | 0.024ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zen                ███████████████████████████████████████    21.6M ops/sec
🥉 Preact Signals     ██████████████████████████████████████     21.2M ops/sec
 Zustand            ██████████████████████████████████████     21.1M ops/sec
 Redux Toolkit      ████████████████████████████████           17.6M ops/sec
 Valtio             ███████████████████████                    13.0M ops/sec
 MobX               ███████████████                            8.2M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   6.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   6.3M ops/sec
🥉 Zustand            █████████████████████                      3.3M ops/sec
 Valtio             ████████████████                           2.5M ops/sec
 Solid.js           ███████████████                            2.3M ops/sec
 MobX               █████████                                  1.3M ops/sec
 Jotai              ██                                         373K ops/sec
 Redux Toolkit      █                                          83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 373K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 83K | 0.012ms | 0.021ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   87K ops/sec
🥈 Zen                ███████████████████████████████████████    85K ops/sec
🥉 Preact Signals     ███████████████████████████████████████    85K ops/sec
 Zustand            ███████████████████████                    50K ops/sec
 Valtio             ███████████████████                        40K ops/sec
 MobX               ██████████████                             30K ops/sec
 Jotai              ███                                        6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 87K | 0.012ms | 0.020ms | 1000 |
| Zen | 85K | 0.012ms | 0.018ms | 1000 |
| Preact Signals | 85K | 0.012ms | 0.019ms | 1000 |
| Zustand | 50K | 0.020ms | 0.028ms | 1000 |
| Valtio | 40K | 0.025ms | 0.033ms | 1000 |
| MobX | 30K | 0.034ms | 0.065ms | 1000 |
| Jotai | 6K | 0.161ms | 0.237ms | 1000 |
| Redux Toolkit | 3K | 0.354ms | 0.428ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   22.6M ops/sec
🥈 Preact Signals     █████████████████████                      11.8M ops/sec
🥉 Zen                ██████████████████                         10.0M ops/sec
 Zustand            █████████                                  5.0M ops/sec
 MobX               ████                                       2.1M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         197K ops/sec
 Redux Toolkit                                                 140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 197K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 140K | 0.007ms | 0.013ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   22.4M ops/sec
🥈 Zen                █████████████████████████████████████      20.9M ops/sec
🥉 Zustand            █████                                      3.1M ops/sec
 Solid.js           ██                                         1.3M ops/sec
 MobX               █                                          474K ops/sec
 Valtio                                                        272K ops/sec
 Jotai                                                         167K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 474K | 0.002ms | 0.003ms | 1000 |
| Valtio | 272K | 0.004ms | 0.006ms | 1000 |
| Jotai | 167K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 69K | 0.016ms | 0.024ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.3M ops/sec
🥈 Preact Signals     █                                          115K ops/sec
🥉 Zen                █                                          90K ops/sec
 Zustand            █                                          89K ops/sec
 Valtio             █                                          56K ops/sec
 Redux Toolkit                                                 39K ops/sec
 MobX                                                          13K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 115K | 0.010ms | 0.021ms | 1000 |
| Zen | 90K | 0.012ms | 0.023ms | 1000 |
| Zustand | 89K | 0.025ms | 0.029ms | 1000 |
| Valtio | 56K | 0.047ms | 0.045ms | 1000 |
| Redux Toolkit | 39K | 0.056ms | 0.059ms | 1000 |
| MobX | 13K | 0.114ms | 1.075ms | 1000 |
| Jotai | 7K | 0.159ms | 0.810ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   14.9M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     14.1M ops/sec
🥉 Zustand            █████████                                  3.5M ops/sec
 Solid.js           ███████                                    2.7M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 122K ops/sec
 Jotai                                                         121K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 122K | 0.009ms | 0.015ms | 1000 |
| Jotai | 121K | 0.009ms | 0.017ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Valtio             █████████                                  576K ops/sec
🥉 MobX               ███                                        196K ops/sec
 Jotai              ██                                         145K ops/sec
 Preact Signals     ██                                         94K ops/sec
 Zen                ██                                         93K ops/sec
 Zustand            █                                          91K ops/sec
 Redux Toolkit                                                 584 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 576K | 0.002ms | 0.007ms | 1000 |
| MobX | 196K | 0.006ms | 0.016ms | 1000 |
| Jotai | 145K | 0.008ms | 0.017ms | 1000 |
| Preact Signals | 94K | 0.011ms | 0.019ms | 1000 |
| Zen | 93K | 0.011ms | 0.017ms | 1000 |
| Zustand | 91K | 0.011ms | 0.020ms | 1000 |
| Redux Toolkit | 584 | 1.737ms | 3.626ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   215K ops/sec
🥈 Zustand            ████████████████████████████████████████   214K ops/sec
🥉 Redux Toolkit      ████████████████████████████████           173K ops/sec
 Zen                ████████████████                           87K ops/sec
 Preact Signals     ████                                       20K ops/sec
 MobX               █                                          6K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         282 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 215K | 0.005ms | 0.005ms | 1000 |
| Zustand | 214K | 0.005ms | 0.005ms | 1000 |
| Redux Toolkit | 173K | 0.006ms | 0.006ms | 1000 |
| Zen | 87K | 0.012ms | 0.016ms | 1000 |
| Preact Signals | 20K | 0.049ms | 0.056ms | 1000 |
| MobX | 6K | 0.155ms | 0.173ms | 1000 |
| Valtio | 5K | 0.209ms | 0.653ms | 1000 |
| Jotai | 282 | 3.565ms | 4.150ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   28K ops/sec
🥈 Zen                ████████████████                           11K ops/sec
🥉 Preact Signals     █████████████                              9K ops/sec
 Zustand            █                                          695 ops/sec
 MobX               █                                          512 ops/sec
 Valtio             █                                          391 ops/sec
 Jotai                                                         36 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 28K | 0.040ms | 0.381ms | 1000 |
| Zen | 11K | 0.090ms | 0.103ms | 1000 |
| Preact Signals | 9K | 0.115ms | 0.134ms | 1000 |
| Zustand | 695 | 1.450ms | 1.983ms | 1000 |
| MobX | 512 | 1.960ms | 2.523ms | 1000 |
| Valtio | 391 | 2.568ms | 3.164ms | 1000 |
| Jotai | 36 | 27.572ms | 30.986ms | 1000 |
| Redux Toolkit | 14 | 69.843ms | 74.160ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Preact Signals     █████████                                  4.9M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          272K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 272K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   26.1M ops/sec
🥈 Preact Signals     ███████                                    4.7M ops/sec
🥉 Zen                █████                                      3.2M ops/sec
 Zustand            ███                                        2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          346K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 26.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 346K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   25.1M ops/sec
🥈 Preact Signals     ███████████                                7.2M ops/sec
🥉 Zen                ██████████                                 6.6M ops/sec
 Zustand            ███████                                    4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          763K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit                                                 293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 25.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 763K | 0.001ms | 0.003ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   20.5M ops/sec
🥈 Zen                ████████████████                           8.4M ops/sec
🥉 Preact Signals     █████████████                              6.6M ops/sec
 Zustand            ██████████                                 5.2M ops/sec
 Valtio             ██                                         1000K ops/sec
 Jotai              █                                          729K ops/sec
 MobX               █                                          704K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1000K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| MobX | 704K | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████                             351K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          35K ops/sec
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
| Zen | 35K | 0.028ms | 0.033ms | 1000 |
| Preact Signals | 28K | 0.035ms | 0.040ms | 1000 |
| Valtio | 8K | 0.123ms | 0.139ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.163ms | 0.188ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   25.9M ops/sec
🥈 Preact Signals     █                                          573K ops/sec
🥉 Zen                                                           204K ops/sec
 Zustand                                                       112K ops/sec
 MobX                                                          106K ops/sec
 Valtio                                                        56K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 25.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 573K | 0.002ms | 0.002ms | 1000 |
| Zen | 204K | 0.005ms | 0.005ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| MobX | 106K | 0.009ms | 0.013ms | 1000 |
| Valtio | 56K | 0.018ms | 0.030ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Zen                ████                                       336K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        277K ops/sec
 MobX               █                                          84K ops/sec
 Valtio             █                                          84K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 336K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 277K | 0.004ms | 0.004ms | 1000 |
| MobX | 84K | 0.012ms | 0.021ms | 1000 |
| Valtio | 84K | 0.013ms | 0.017ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.3M ops/sec
🥈 Solid.js           ███████████████████████████████████████    14.0M ops/sec
🥉 Preact Signals     ███████                                    2.7M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 Jotai                                                         107K ops/sec
 MobX                                                          106K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 14.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| MobX | 106K | 0.010ms | 0.014ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.43.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-17T03:25:29.616Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
