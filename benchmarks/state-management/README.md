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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 80.0/100 score
- **⚖️ Best Balance**: Zustand - Great performance (58.7/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 80.0/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zustand** (Score: 58.7/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Preact Signals** (Score: 58.5/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 50.4/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 25.1/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 46.7/100 | 57% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 46.0/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.7/100 | 56% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.7/100 | 22% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.7/100 | 19% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.6/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 80.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 58.7/100 | 73% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 58.5/100 | 73% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 50.4/100 | 63% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.1/100 | 31% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 20.1/100 | 25% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.8/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **80.0** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **58.7** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **58.5** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **50.4** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.1** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **20.1** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.2M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████████    21.7M ops/sec
 Preact Signals     ██████████████████████████████████████     21.4M ops/sec
 Zen                ████████████████████████████████           18.0M ops/sec
 MobX               ███████████████████████████████            17.1M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   13.2M ops/sec
🥈 Solid.js           ██████████████████████████████████████     12.4M ops/sec
🥉 Zustand            █████████████████████████████              9.4M ops/sec
 Zen                █████████████                              4.3M ops/sec
 Preact Signals     ████████████                               3.9M ops/sec
 MobX               ███                                        864K ops/sec
 Valtio             ██                                         498K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 13.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 864K | 0.001ms | 0.001ms | 1000 |
| Valtio | 498K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.032ms | 0.060ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ██████████████████████                     1.5M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  616K ops/sec
 MobX               █                                          89K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 616K | 0.002ms | 0.004ms | 1000 |
| MobX | 89K | 0.011ms | 0.018ms | 1000 |
| Valtio | 53K | 0.020ms | 0.034ms | 1000 |
| Jotai | 3K | 0.327ms | 0.755ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Zen                █████████████████████████████████          17.4M ops/sec
🥉 Preact Signals     ████████████████████████████               14.6M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 MobX               ██████                                     3.1M ops/sec
 Jotai              █                                          361K ops/sec
 Redux Toolkit                                                 162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 361K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 162K | 0.007ms | 0.014ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   8.9M ops/sec
🥈 Preact Signals     ██████████████████████████                 5.7M ops/sec
🥉 Zen                ██████████████████                         4.1M ops/sec
 Zustand            ███                                        694K ops/sec
 MobX               ██                                         546K ops/sec
 Valtio             ██                                         361K ops/sec
 Jotai                                                         34K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 8.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 694K | 0.002ms | 0.003ms | 1000 |
| MobX | 546K | 0.002ms | 0.003ms | 1000 |
| Valtio | 361K | 0.003ms | 0.005ms | 1000 |
| Jotai | 34K | 0.030ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.100ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Zen                ███████████████████                        1.8M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          71K ops/sec
 Valtio                                                        37K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 71K | 0.014ms | 0.023ms | 1000 |
| Valtio | 37K | 0.027ms | 0.043ms | 1000 |
| Jotai | 3K | 0.298ms | 0.597ms | 1000 |
| Redux Toolkit | 2K | 0.630ms | 1.439ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   376K ops/sec
🥈 Preact Signals     ██████████████████████████████████         317K ops/sec
🥉 Zen                █████████████████████████                  239K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         343 ops/sec
 Redux Toolkit                                                 157 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 376K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 239K | 0.004ms | 0.005ms | 1000 |
| Zustand | 8K | 0.133ms | 0.152ms | 1000 |
| MobX | 7K | 0.141ms | 0.167ms | 1000 |
| Valtio | 4K | 0.255ms | 0.289ms | 1000 |
| Jotai | 343 | 2.972ms | 5.687ms | 1000 |
| Redux Toolkit | 157 | 6.373ms | 7.447ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   11.2M ops/sec
🥈 Zen                ███████████████████████████                7.5M ops/sec
🥉 Solid.js           █████████████                              3.7M ops/sec
 Zustand            █████████████                              3.6M ops/sec
 Valtio             ██                                         437K ops/sec
 Jotai              █                                          326K ops/sec
 MobX               █                                          216K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 437K | 0.002ms | 0.004ms | 1000 |
| Jotai | 326K | 0.003ms | 0.006ms | 1000 |
| MobX | 216K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 61K | 0.019ms | 0.042ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.7M ops/sec
🥈 Zen                ████████████████████████████████████████   8.6M ops/sec
🥉 Zustand            ████████████████                           3.4M ops/sec
 Solid.js           █████████████                              2.8M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              █                                          314K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 314K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.8M ops/sec
🥈 Solid.js           █████████████████████████████              16.8M ops/sec
🥉 Preact Signals     ██████████████████████████                 14.6M ops/sec
 Valtio             ████████████████████████                   13.7M ops/sec
 Redux Toolkit      ███████████████████████                    13.1M ops/sec
 Zen                ██████████████████████                     12.7M ops/sec
 MobX               ██████████████                             7.9M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 16.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.0M ops/sec
🥈 Preact Signals     ██████████████████████████████             5.1M ops/sec
🥉 Zustand            ███████████████                            2.6M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 MobX               ███████                                    1.2M ops/sec
 Jotai              ██                                         336K ops/sec
 Redux Toolkit                                                 79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 336K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 79K | 0.013ms | 0.026ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   103K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    100K ops/sec
🥉 Zen                ███████████████████████████████████████    100K ops/sec
 Zustand            ███████████████████████                    58K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               ██████████████                             35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 103K | 0.011ms | 0.020ms | 1000 |
| Preact Signals | 100K | 0.011ms | 0.020ms | 1000 |
| Zen | 100K | 0.010ms | 0.019ms | 1000 |
| Zustand | 58K | 0.017ms | 0.027ms | 1000 |
| Valtio | 43K | 0.023ms | 0.034ms | 1000 |
| MobX | 35K | 0.029ms | 0.042ms | 1000 |
| Jotai | 6K | 0.178ms | 0.230ms | 1000 |
| Redux Toolkit | 3K | 0.373ms | 0.580ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Preact Signals     █████████████████████                      11.1M ops/sec
🥉 Zen                ██████████                                 5.1M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         176K ops/sec
 Redux Toolkit                                                 135K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 176K | 0.006ms | 0.016ms | 1000 |
| Redux Toolkit | 135K | 0.008ms | 0.019ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.9M ops/sec
🥈 Zen                ██████████████████████████████             14.7M ops/sec
🥉 Zustand            ██████                                     3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          439K ops/sec
 Valtio             █                                          281K ops/sec
 Jotai                                                         164K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 439K | 0.002ms | 0.005ms | 1000 |
| Valtio | 281K | 0.004ms | 0.005ms | 1000 |
| Jotai | 164K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 68K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Preact Signals     █                                          120K ops/sec
🥉 Zen                █                                          109K ops/sec
 Zustand            █                                          90K ops/sec
 Valtio                                                        58K ops/sec
 Redux Toolkit                                                 44K ops/sec
 MobX                                                          13K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 120K | 0.009ms | 0.016ms | 1000 |
| Zen | 109K | 0.010ms | 0.024ms | 1000 |
| Zustand | 90K | 0.012ms | 0.027ms | 1000 |
| Valtio | 58K | 0.022ms | 0.042ms | 1000 |
| Redux Toolkit | 44K | 0.052ms | 0.051ms | 1000 |
| MobX | 13K | 0.108ms | 0.754ms | 1000 |
| Jotai | 7K | 0.154ms | 0.445ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.9M ops/sec
🥈 Zen                █████████████████████████████████          11.4M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 121K ops/sec
 Jotai                                                         102K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 121K | 0.008ms | 0.018ms | 1000 |
| Jotai | 102K | 0.010ms | 0.021ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             ██████████████                             788K ops/sec
🥉 MobX               ████                                       241K ops/sec
 Jotai              ███                                        166K ops/sec
 Preact Signals     ██                                         131K ops/sec
 Zen                ██                                         107K ops/sec
 Zustand            █                                          80K ops/sec
 Redux Toolkit                                                 817 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 788K | 0.001ms | 0.005ms | 1000 |
| MobX | 241K | 0.005ms | 0.019ms | 1000 |
| Jotai | 166K | 0.008ms | 0.019ms | 1000 |
| Preact Signals | 131K | 0.008ms | 0.012ms | 1000 |
| Zen | 107K | 0.009ms | 0.019ms | 1000 |
| Zustand | 80K | 0.013ms | 0.024ms | 1000 |
| Redux Toolkit | 817 | 1.241ms | 1.577ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████                       160K ops/sec
🥉 Solid.js           ████████████████████                       159K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ██                                         19K ops/sec
 MobX               █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         278 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.007ms | 1000 |
| Solid.js | 159K | 0.006ms | 0.015ms | 1000 |
| Zen | 80K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| MobX | 7K | 0.140ms | 0.149ms | 1000 |
| Valtio | 5K | 0.223ms | 0.689ms | 1000 |
| Jotai | 278 | 3.604ms | 4.241ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   27K ops/sec
🥈 Zen                ██████████████                             10K ops/sec
🥉 Preact Signals     ████████████                               8K ops/sec
 Zustand            █                                          737 ops/sec
 MobX               █                                          486 ops/sec
 Valtio             █                                          391 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 27K | 0.044ms | 0.113ms | 1000 |
| Zen | 10K | 0.103ms | 0.121ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.131ms | 1000 |
| Zustand | 737 | 1.367ms | 1.947ms | 1000 |
| MobX | 486 | 2.066ms | 2.678ms | 1000 |
| Valtio | 391 | 2.570ms | 3.276ms | 1000 |
| Jotai | 33 | 30.308ms | 34.366ms | 1000 |
| Redux Toolkit | 15 | 68.574ms | 71.315ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Zen                ████████████████████████████               14.1M ops/sec
🥉 Preact Signals     ██████████                                 4.9M ops/sec
 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          277K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 277K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Zen                █████████████████████████████              16.2M ops/sec
🥉 Preact Signals     █████████                                  4.7M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          322K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 322K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                ██████████████████████████████             16.3M ops/sec
🥉 Preact Signals     █████████████                              6.9M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          783K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 783K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.1M ops/sec
🥈 Preact Signals     ██████████████                             6.6M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ███████                                    3.5M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         759K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 759K | 0.001ms | 0.003ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         433K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Zen                                                           8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 433K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.045ms | 1000 |
| Valtio | 8K | 0.126ms | 0.157ms | 1000 |
| Zen | 8K | 0.129ms | 0.146ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.168ms | 0.191ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Zen                ████████████████████████████               15.2M ops/sec
🥉 Preact Signals     █                                          743K ops/sec
 Zustand                                                       112K ops/sec
 MobX                                                          112K ops/sec
 Valtio                                                        67K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 743K | 0.001ms | 0.001ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| MobX | 112K | 0.009ms | 0.011ms | 1000 |
| Valtio | 67K | 0.015ms | 0.029ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        276K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          79K ops/sec
 Zen                █                                          79K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 276K | 0.004ms | 0.004ms | 1000 |
| Valtio | 92K | 0.011ms | 0.019ms | 1000 |
| MobX | 79K | 0.013ms | 0.029ms | 1000 |
| Zen | 79K | 0.014ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.8M ops/sec
🥈 Solid.js           ████████████████████████████████████       12.6M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          115K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.6M | 0.000ms | 0.000ms | 1000 |
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
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.19.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T04:36:37.108Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
