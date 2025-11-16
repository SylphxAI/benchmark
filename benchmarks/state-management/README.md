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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 85.1/100 score
- **⚖️ Best Balance**: Zen - Great performance (68.5/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 85.1/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 68.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 63.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 61.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 26.3/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 88.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 56.5/100 | 64% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 48.4/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.9/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 18.1/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.5/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.3/100 | 10% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 85.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 68.5/100 | 80% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 63.7/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 61.1/100 | 72% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 26.3/100 | 31% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 19.4/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 14.2/100 | 17% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.5/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **85.1** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **68.5** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **63.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **61.1** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **26.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **19.4** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **14.2** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.5** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥉 Zen                ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ████████████████████████████████████████   22.2M ops/sec
 Preact Signals     ████████████████████████████████████████   22.1M ops/sec
 MobX               ██████████████████████████████             17.0M ops/sec
 Valtio             ███████████████████████████                15.3M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.1M ops/sec
🥈 Solid.js           ██████████████████████████████████████     12.3M ops/sec
🥉 Preact Signals     ███████████████████████████                8.9M ops/sec
 Redux Toolkit      █████████████████████████                  8.1M ops/sec
 Zen                ███████████████                            5.0M ops/sec
 MobX               ███                                        863K ops/sec
 Valtio             ██                                         502K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 863K | 0.001ms | 0.001ms | 1000 |
| Valtio | 502K | 0.002ms | 0.003ms | 1000 |
| Jotai | 31K | 0.033ms | 0.051ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████                                779K ops/sec
 Zen                █████████                                  628K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          50K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 779K | 0.001ms | 0.001ms | 1000 |
| Zen | 628K | 0.002ms | 0.002ms | 1000 |
| MobX | 87K | 0.012ms | 0.019ms | 1000 |
| Valtio | 50K | 0.021ms | 0.045ms | 1000 |
| Jotai | 3K | 0.313ms | 0.748ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Preact Signals     █████████████████████████████████████      19.6M ops/sec
🥉 Zen                █████████████████████████████████████      19.5M ops/sec
 Zustand            █████████                                  4.8M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          361K ops/sec
 Redux Toolkit                                                 157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 361K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 157K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   14.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████       12.7M ops/sec
🥉 Solid.js           ██████████████████████                     7.7M ops/sec
 Zustand            ██                                         720K ops/sec
 MobX               ██                                         595K ops/sec
 Valtio             █                                          406K ops/sec
 Jotai                                                         33K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 7.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 720K | 0.001ms | 0.002ms | 1000 |
| MobX | 595K | 0.002ms | 0.003ms | 1000 |
| Valtio | 406K | 0.003ms | 0.004ms | 1000 |
| Jotai | 33K | 0.030ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.093ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Zen                ██████████████████████████████████████     3.3M ops/sec
🥉 Preact Signals     ███████████████████████████████            2.7M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          73K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 77K | 0.013ms | 0.023ms | 1000 |
| MobX | 73K | 0.014ms | 0.023ms | 1000 |
| Valtio | 41K | 0.025ms | 0.035ms | 1000 |
| Jotai | 4K | 0.293ms | 0.399ms | 1000 |
| Redux Toolkit | 2K | 0.653ms | 1.477ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   451K ops/sec
🥈 Solid.js           ██████████████████████████████             342K ops/sec
🥉 Preact Signals     ██████████                                 109K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         341 ops/sec
 Redux Toolkit                                                 153 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 451K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 342K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 109K | 0.009ms | 0.017ms | 1000 |
| Zustand | 8K | 0.132ms | 0.157ms | 1000 |
| MobX | 7K | 0.136ms | 0.164ms | 1000 |
| Valtio | 4K | 0.260ms | 0.309ms | 1000 |
| Jotai | 341 | 2.989ms | 5.483ms | 1000 |
| Redux Toolkit | 153 | 6.560ms | 7.676ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   10.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      10.1M ops/sec
🥉 Solid.js           █████████████████                          4.6M ops/sec
 Zustand            █████████████                              3.5M ops/sec
 Valtio             ██                                         415K ops/sec
 Jotai              █                                          301K ops/sec
 MobX               █                                          187K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 415K | 0.010ms | 0.007ms | 1000 |
| Jotai | 301K | 0.003ms | 0.006ms | 1000 |
| MobX | 187K | 0.006ms | 0.013ms | 1000 |
| Redux Toolkit | 58K | 0.018ms | 0.041ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.1M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     8.7M ops/sec
🥉 Zustand            ███████████████                            3.3M ops/sec
 Solid.js           █████████████                              3.0M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               ████                                       1.0M ops/sec
 Jotai              █                                          306K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 8.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 306K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Zustand            ████████████████████████████████████████   21.3M ops/sec
🥉 Zen                ███████████████████████████████████████    20.9M ops/sec
 Preact Signals     █████████████████████████████████          17.7M ops/sec
 Redux Toolkit      ██████████████████████████████             16.1M ops/sec
 Valtio             ████████████████████████                   12.8M ops/sec
 MobX               ██████████                                 5.6M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   5.3M ops/sec
🥈 Zen                ████████████████████████████████████████   5.2M ops/sec
🥉 Zustand            ████████████████████████                   3.1M ops/sec
 Valtio             ███████████████████                        2.5M ops/sec
 Solid.js           █████████████████                          2.3M ops/sec
 MobX               █████████                                  1.2M ops/sec
 Jotai              ██                                         312K ops/sec
 Redux Toolkit      █                                          78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.3M | 0.000ms | 0.001ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 312K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 78K | 0.013ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   106K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   106K ops/sec
🥉 Zen                ███████████████████████████████████████    104K ops/sec
 Zustand            ███████████████████████                    61K ops/sec
 Valtio             ████████████████                           42K ops/sec
 MobX               █████████████                              34K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 106K | 0.009ms | 0.012ms | 1000 |
| Preact Signals | 106K | 0.010ms | 0.015ms | 1000 |
| Zen | 104K | 0.010ms | 0.013ms | 1000 |
| Zustand | 61K | 0.017ms | 0.026ms | 1000 |
| Valtio | 42K | 0.024ms | 0.035ms | 1000 |
| MobX | 34K | 0.030ms | 0.044ms | 1000 |
| Jotai | 6K | 0.183ms | 0.763ms | 1000 |
| Redux Toolkit | 3K | 0.365ms | 1.043ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Zen                ███████████████████████                    12.1M ops/sec
🥉 Preact Signals     ██████████████████████                     11.9M ops/sec
 Zustand            █████████                                  5.0M ops/sec
 MobX               ████                                       2.1M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         193K ops/sec
 Redux Toolkit                                                 139K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 193K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 139K | 0.007ms | 0.019ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.6M ops/sec
🥈 Zen                ███████████████████████████████████████    19.2M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          440K ops/sec
 Valtio             █                                          263K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 440K | 0.002ms | 0.004ms | 1000 |
| Valtio | 263K | 0.004ms | 0.006ms | 1000 |
| Jotai | 156K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 68K | 0.016ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.7M ops/sec
🥈 Preact Signals     █                                          107K ops/sec
🥉 Zen                █                                          93K ops/sec
 Zustand            █                                          75K ops/sec
 Redux Toolkit                                                 34K ops/sec
 Valtio                                                        26K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 107K | 0.011ms | 0.020ms | 1000 |
| Zen | 93K | 0.012ms | 0.021ms | 1000 |
| Zustand | 75K | 0.014ms | 0.025ms | 1000 |
| Redux Toolkit | 34K | 0.053ms | 0.095ms | 1000 |
| Valtio | 26K | 0.186ms | 0.081ms | 1000 |
| MobX | 11K | 0.121ms | 0.951ms | 1000 |
| Jotai | 7K | 0.158ms | 0.833ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   14.0M ops/sec
🥈 Preact Signals     ███████████████████████████████████        12.2M ops/sec
🥉 Zustand            ███████████                                3.7M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 118K ops/sec
 Jotai                                                         104K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 118K | 0.010ms | 0.024ms | 1000 |
| Jotai | 104K | 0.010ms | 0.019ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             ████████████████                           847K ops/sec
🥉 MobX               ████                                       213K ops/sec
 Jotai              ███                                        150K ops/sec
 Zustand            ██                                         124K ops/sec
 Preact Signals     ██                                         103K ops/sec
 Zen                ██                                         99K ops/sec
 Redux Toolkit                                                 796 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.001ms | 0.001ms | 1000 |
| Valtio | 847K | 0.001ms | 0.007ms | 1000 |
| MobX | 213K | 0.006ms | 0.022ms | 1000 |
| Jotai | 150K | 0.008ms | 0.013ms | 1000 |
| Zustand | 124K | 0.008ms | 0.014ms | 1000 |
| Preact Signals | 103K | 0.010ms | 0.016ms | 1000 |
| Zen | 99K | 0.010ms | 0.020ms | 1000 |
| Redux Toolkit | 796 | 1.284ms | 3.031ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         278 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 64K | 0.016ms | 0.023ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| Valtio | 5K | 0.221ms | 0.732ms | 1000 |
| MobX | 4K | 0.271ms | 0.310ms | 1000 |
| Jotai | 278 | 3.617ms | 4.209ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   38K ops/sec
🥈 Zen                ███████████                                10K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          739 ops/sec
 MobX               █                                          478 ops/sec
 Valtio                                                        410 ops/sec
 Jotai                                                         32 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 38K | 0.032ms | 0.407ms | 1000 |
| Zen | 10K | 0.100ms | 0.109ms | 1000 |
| Preact Signals | 8K | 0.118ms | 0.129ms | 1000 |
| Zustand | 739 | 1.366ms | 1.919ms | 1000 |
| MobX | 478 | 2.102ms | 2.762ms | 1000 |
| Valtio | 410 | 2.451ms | 3.133ms | 1000 |
| Jotai | 32 | 31.007ms | 34.831ms | 1000 |
| Redux Toolkit | 14 | 70.452ms | 73.202ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Preact Signals     ██████████                                 5.1M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          275K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 275K | 0.004ms | 0.008ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.7M ops/sec
🥈 Preact Signals     █████████                                  5.1M ops/sec
🥉 Zen                ██████                                     3.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          322K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 322K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Preact Signals     ██████████████                             7.7M ops/sec
🥉 Zen                █████████████                              6.9M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.5M ops/sec
 MobX               █                                          765K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 765K | 0.001ms | 0.004ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.3M ops/sec
🥈 Zen                ████████████████                           7.8M ops/sec
🥉 Preact Signals     █████████████                              6.0M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         762K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 762K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         436K ops/sec
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
| Solid.js | 436K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 34K | 0.030ms | 0.038ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.050ms | 1000 |
| Valtio | 8K | 0.123ms | 0.147ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.171ms | 0.205ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Preact Signals     █                                          801K ops/sec
🥉 Zen                                                           249K ops/sec
 MobX                                                          117K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        71K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 801K | 0.001ms | 0.001ms | 1000 |
| Zen | 249K | 0.004ms | 0.008ms | 1000 |
| MobX | 117K | 0.009ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 71K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Zen                ████                                       334K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        276K ops/sec
 Valtio             █                                          89K ops/sec
 MobX               █                                          81K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 334K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 276K | 0.004ms | 0.004ms | 1000 |
| Valtio | 89K | 0.011ms | 0.020ms | 1000 |
| MobX | 81K | 0.012ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.3M ops/sec
🥈 Solid.js           ██████████████████████████████████████     12.7M ops/sec
🥉 Preact Signals     █████████                                  2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          111K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 111K | 0.011ms | 0.028ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.32.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T22:17:15.796Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
