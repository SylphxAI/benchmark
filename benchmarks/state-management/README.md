<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2018,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
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

- **⚡ Maximum Performance**: Preact Signals - Fastest overall with 80.8/100 score
- **⚖️ Best Balance**: Zen - Great performance (71.3/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Preact Signals** (Score: 80.8/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 71.3/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 68.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 29.7/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 17.1/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


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
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 69.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 69.3/100 | 99% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 52.5/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 27.1/100 | 39% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 19.7/100 | 28% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.3/100 | 15% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.0/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 80.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 71.3/100 | 88% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 68.1/100 | 84% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 29.7/100 | 37% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 17.1/100 | 21% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.2/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.3/100 | 7% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Preact Signals](https://github.com/preactjs/signals)** | **80.8** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **71.3** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **68.1** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **29.7** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.1** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.2** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Preact Signals     ████████████████████████████████████████   22.4M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zen                ███████████████████████████████            17.1M ops/sec
 MobX               ████████████████████████████               15.7M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   9.2M ops/sec
🥈 Zen                ███████████████████████████████████████    9.1M ops/sec
🥉 Zustand            ███████████████████████████████████████    8.9M ops/sec
 Redux Toolkit      ██████████████████████████████████████     8.7M ops/sec
 MobX               ████                                       832K ops/sec
 Valtio             ██                                         526K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 832K | 0.001ms | 0.001ms | 1000 |
| Valtio | 526K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.032ms | 0.048ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   2.7M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.7M ops/sec
🥉 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                ███████████████                            1.0M ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 52K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.323ms | 0.800ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   20.3M ops/sec
🥈 Preact Signals     ██████████████████████████████             15.1M ops/sec
🥉 Zustand            █████████                                  4.8M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     2.9M ops/sec
 Jotai              █                                          371K ops/sec
 Redux Toolkit                                                 160K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 371K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 160K | 0.007ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   12.4M ops/sec
🥈 Preact Signals     █████████████████████████████████████      11.4M ops/sec
🥉 Zustand            ██                                         682K ops/sec
 MobX               ██                                         565K ops/sec
 Valtio             █                                          379K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 682K | 0.001ms | 0.002ms | 1000 |
| MobX | 565K | 0.002ms | 0.006ms | 1000 |
| Valtio | 379K | 0.003ms | 0.004ms | 1000 |
| Jotai | 37K | 0.027ms | 0.041ms | 1000 |
| Redux Toolkit | 16K | 0.066ms | 0.105ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.7M ops/sec
🥈 Preact Signals     █████████                                  1.0M ops/sec
🥉 MobX               █                                          75K ops/sec
 Zustand            █                                          74K ops/sec
 Valtio                                                        38K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 75K | 0.013ms | 0.023ms | 1000 |
| Zustand | 74K | 0.014ms | 0.022ms | 1000 |
| Valtio | 38K | 0.026ms | 0.036ms | 1000 |
| Jotai | 4K | 0.290ms | 0.853ms | 1000 |
| Redux Toolkit | 2K | 0.629ms | 1.314ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   623K ops/sec
🥈 Preact Signals     ████████████████████                       318K ops/sec
🥉 Zustand                                                       8K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         344 ops/sec
 Redux Toolkit                                                 163 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 623K | 0.002ms | 0.002ms | 1000 |
| Preact Signals | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 8K | 0.133ms | 0.158ms | 1000 |
| MobX | 7K | 0.141ms | 0.167ms | 1000 |
| Valtio | 4K | 0.269ms | 0.343ms | 1000 |
| Jotai | 344 | 2.966ms | 5.136ms | 1000 |
| Redux Toolkit | 163 | 6.171ms | 7.134ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    11.0M ops/sec
🥉 Zustand            ███████████                                3.2M ops/sec
 Valtio             █                                          421K ops/sec
 Jotai              █                                          272K ops/sec
 MobX               █                                          196K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 421K | 0.003ms | 0.004ms | 1000 |
| Jotai | 272K | 0.006ms | 0.013ms | 1000 |
| MobX | 196K | 0.005ms | 0.014ms | 1000 |
| Redux Toolkit | 58K | 0.019ms | 0.040ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      9.1M ops/sec
🥉 Zustand            ██████████████                             3.4M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               ████                                       976K ops/sec
 Jotai              █                                          296K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 976K | 0.001ms | 0.002ms | 1000 |
| Jotai | 296K | 0.005ms | 0.007ms | 1000 |
| Redux Toolkit | 58K | 0.017ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.5M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     21.3M ops/sec
🥉 Zen                ██████████████████████████████████████     21.3M ops/sec
 Redux Toolkit      ███████████████████████████████            17.2M ops/sec
 Valtio             ███████████████████████                    13.2M ops/sec
 MobX               ██████████                                 5.6M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.5M ops/sec
🥈 Preact Signals     █████████████████████████████████████      6.9M ops/sec
🥉 Zustand            ██████████████████                         3.3M ops/sec
 Valtio             ███████████████                            2.9M ops/sec
 MobX               ███████                                    1.3M ops/sec
 Jotai              ██                                         334K ops/sec
 Redux Toolkit                                                 77K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 334K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 77K | 0.014ms | 0.032ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Zen                ████████████████████████████████████████   99K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   98K ops/sec
🥉 Zustand            ███████████████████████                    57K ops/sec
 Valtio             ██████████████████                         43K ops/sec
 MobX               ██████████████                             35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 99K | 0.010ms | 0.014ms | 1000 |
| Preact Signals | 98K | 0.011ms | 0.020ms | 1000 |
| Zustand | 57K | 0.018ms | 0.030ms | 1000 |
| Valtio | 43K | 0.024ms | 0.041ms | 1000 |
| MobX | 35K | 0.029ms | 0.048ms | 1000 |
| Jotai | 6K | 0.180ms | 0.790ms | 1000 |
| Redux Toolkit | 3K | 0.372ms | 1.127ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   13.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████        11.7M ops/sec
🥉 Zustand            ███████████████                            5.0M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Jotai              █                                          189K ops/sec
 Redux Toolkit                                                 134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 189K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 134K | 0.008ms | 0.019ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.4M ops/sec
🥈 Zen                ███████████████████████████████████████    18.1M ops/sec
🥉 Zustand            ███████                                    3.1M ops/sec
 MobX               █                                          434K ops/sec
 Valtio                                                        222K ops/sec
 Jotai                                                         160K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 434K | 0.002ms | 0.005ms | 1000 |
| Valtio | 222K | 0.005ms | 0.009ms | 1000 |
| Jotai | 160K | 0.006ms | 0.013ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Preact Signals     ████████████████████████████████████████   117K ops/sec
🥈 Zustand            █████████████████████████████████          97K ops/sec
🥉 Zen                ██████████████████████████                 77K ops/sec
 Valtio             ███████████████████                        56K ops/sec
 Redux Toolkit      ██████████████                             40K ops/sec
 MobX               ████                                       12K ops/sec
 Jotai              ███                                        7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 117K | 0.010ms | 0.018ms | 1000 |
| Zustand | 97K | 0.016ms | 0.032ms | 1000 |
| Zen | 77K | 0.015ms | 0.025ms | 1000 |
| Valtio | 56K | 0.065ms | 0.043ms | 1000 |
| Redux Toolkit | 40K | 0.058ms | 0.060ms | 1000 |
| MobX | 12K | 0.117ms | 0.960ms | 1000 |
| Jotai | 7K | 0.154ms | 0.848ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   10.1M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   10.1M ops/sec
🥉 Zustand            █████████████                              3.2M ops/sec
 MobX               ████████                                   2.1M ops/sec
 Valtio             ████                                       1.1M ops/sec
 Redux Toolkit                                                 120K ops/sec
 Jotai                                                         106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 120K | 0.009ms | 0.018ms | 1000 |
| Jotai | 106K | 0.011ms | 0.021ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Valtio             ████████████████████████████████████████   862K ops/sec
🥈 MobX               ███████████                                236K ops/sec
🥉 Jotai              ████████                                   178K ops/sec
 Zustand            █████                                      103K ops/sec
 Zen                █████                                      102K ops/sec
 Preact Signals     █████                                      101K ops/sec
 Redux Toolkit                                                 836 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 862K | 0.001ms | 0.004ms | 1000 |
| MobX | 236K | 0.005ms | 0.019ms | 1000 |
| Jotai | 178K | 0.007ms | 0.009ms | 1000 |
| Zustand | 103K | 0.010ms | 0.018ms | 1000 |
| Zen | 102K | 0.010ms | 0.021ms | 1000 |
| Preact Signals | 101K | 0.010ms | 0.019ms | 1000 |
| Redux Toolkit | 836 | 1.214ms | 2.583ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████                       160K ops/sec
🥉 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         284 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.013ms | 0.020ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.057ms | 1000 |
| Valtio | 5K | 0.208ms | 0.699ms | 1000 |
| MobX | 4K | 0.280ms | 0.316ms | 1000 |
| Jotai | 284 | 3.542ms | 4.158ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   10K ops/sec
🥈 Preact Signals     ████████████████████████████████           8K ops/sec
🥉 Zustand            ███                                        746 ops/sec
 MobX               ██                                         488 ops/sec
 Valtio             ██                                         413 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10K | 0.097ms | 0.105ms | 1000 |
| Preact Signals | 8K | 0.121ms | 0.226ms | 1000 |
| Zustand | 746 | 1.351ms | 1.870ms | 1000 |
| MobX | 488 | 2.057ms | 2.672ms | 1000 |
| Valtio | 413 | 2.434ms | 3.082ms | 1000 |
| Jotai | 33 | 30.164ms | 33.299ms | 1000 |
| Redux Toolkit | 14 | 70.306ms | 74.815ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.4M ops/sec
🥈 Valtio             ███████████████                            2.1M ops/sec
🥉 Zen                ███████████████                            2.0M ops/sec
 Zustand            ████████                                   1.0M ops/sec
 MobX               ██                                         286K ops/sec
 Jotai              █                                          110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.001ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 286K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.0M ops/sec
🥈 Zen                █████████████████████████                  3.1M ops/sec
🥉 Zustand            ████████████████                           2.0M ops/sec
 Valtio             ████████████                               1.5M ops/sec
 MobX               ███                                        336K ops/sec
 Jotai              █                                          156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 336K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   7.9M ops/sec
🥈 Zen                ████████████████████████████████           6.3M ops/sec
🥉 Zustand            ████████████████████████                   4.7M ops/sec
 Valtio             █████████████                              2.6M ops/sec
 MobX               ████                                       795K ops/sec
 Jotai              ███                                        524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 795K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Zen                ████████████████████████████████████████   7.2M ops/sec
🥈 Preact Signals     ████████████████████████████████████       6.4M ops/sec
🥉 Zustand            █████████████████████████████              5.2M ops/sec
 Valtio             ██████                                     1.1M ops/sec
 MobX               ████                                       780K ops/sec
 Jotai              ████                                       729K ops/sec
 Redux Toolkit      ██                                         344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 780K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Redux Toolkit      █████████                                  230K ops/sec
🥉 Zen                █                                          31K ops/sec
 Preact Signals     █                                          22K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 31K | 0.032ms | 0.044ms | 1000 |
| Preact Signals | 22K | 0.046ms | 0.057ms | 1000 |
| Valtio | 8K | 0.124ms | 0.145ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.176ms | 0.227ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   805K ops/sec
🥈 Zen                ████████████                               244K ops/sec
🥉 MobX               ██████                                     121K ops/sec
 Zustand            ██████                                     112K ops/sec
 Valtio             ████                                       73K ops/sec
 Jotai              █                                          14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 805K | 0.001ms | 0.001ms | 1000 |
| Zen | 244K | 0.004ms | 0.004ms | 1000 |
| MobX | 121K | 0.008ms | 0.010ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 73K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zustand            ████████████████████████████████████████   2.9M ops/sec
🥈 Zen                ████                                       296K ops/sec
🥉 Redux Toolkit      ████                                       290K ops/sec
 Preact Signals     ████                                       268K ops/sec
 Valtio             █                                          91K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 296K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 268K | 0.004ms | 0.004ms | 1000 |
| Valtio | 91K | 0.011ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.024ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   12.3M ops/sec
🥈 Preact Signals     █████████                                  2.8M ops/sec
🥉 Zustand            ███████                                    2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          109K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 109K | 0.010ms | 0.021ms | 1000 |
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

**Total**: 27 tests × 7 libraries = 189 benchmark runs

---

## 🚀 Libraries Tested

- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.45.2`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-18T05:06:55.264Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
