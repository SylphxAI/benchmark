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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 84.1/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (60.3/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 84.1/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 60.3/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 59.6/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 59.1/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 88.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 50.0/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.2/100 | 53% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.7/100 | 52% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 18.1/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.0/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.5/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 84.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 60.3/100 | 72% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 59.6/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 59.1/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.4/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.2/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.1/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **84.1** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **60.3** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **59.6** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **59.1** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.1** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   22.4M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   22.2M ops/sec
🥉 Solid.js           ████████████████████████████████████████   22.2M ops/sec
 Zen                ███████████████████████████████████████    21.7M ops/sec
 Preact Signals     █████████████████████████████████          18.2M ops/sec
 MobX               █████████████████████████████              16.3M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.2M ops/sec
🥈 Redux Toolkit      █████████████████████████████              9.6M ops/sec
🥉 Solid.js           ████████████████████████████               9.3M ops/sec
 Preact Signals     ███████████████████████████                8.8M ops/sec
 Zen                ████████████████                           5.2M ops/sec
 MobX               ███                                        843K ops/sec
 Valtio             ██                                         524K ops/sec
 Jotai                                                         28K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 843K | 0.001ms | 0.001ms | 1000 |
| Valtio | 524K | 0.002ms | 0.003ms | 1000 |
| Jotai | 28K | 0.036ms | 0.051ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Zen                ███████████                                779K ops/sec
 Preact Signals     ███████████                                778K ops/sec
 MobX               █                                          89K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 779K | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 778K | 0.001ms | 0.001ms | 1000 |
| MobX | 89K | 0.011ms | 0.018ms | 1000 |
| Valtio | 52K | 0.021ms | 0.032ms | 1000 |
| Jotai | 3K | 0.353ms | 0.838ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Preact Signals     ████████████████████████████               14.8M ops/sec
🥉 Zen                ████████████████████████████               14.5M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 MobX               ██████                                     3.1M ops/sec
 Jotai              █                                          331K ops/sec
 Redux Toolkit                                                 154K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 331K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 154K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   9.0M ops/sec
🥈 Preact Signals     █████████████████████████                  5.7M ops/sec
🥉 Zen                ███████████████████                        4.2M ops/sec
 Zustand            ███                                        723K ops/sec
 MobX               ███                                        589K ops/sec
 Valtio             ██                                         416K ops/sec
 Jotai                                                         34K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 9.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 723K | 0.001ms | 0.002ms | 1000 |
| MobX | 589K | 0.002ms | 0.003ms | 1000 |
| Valtio | 416K | 0.002ms | 0.003ms | 1000 |
| Jotai | 34K | 0.031ms | 0.053ms | 1000 |
| Redux Toolkit | 16K | 0.066ms | 0.103ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Preact Signals     ███████████████████████████████            2.7M ops/sec
🥉 Zen                ██████████████████                         1.6M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          72K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zustand | 76K | 0.013ms | 0.022ms | 1000 |
| MobX | 72K | 0.015ms | 0.024ms | 1000 |
| Valtio | 41K | 0.025ms | 0.034ms | 1000 |
| Jotai | 3K | 0.305ms | 0.994ms | 1000 |
| Redux Toolkit | 2K | 0.656ms | 1.412ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   374K ops/sec
🥈 Preact Signals     ██████████████████████████████████         317K ops/sec
🥉 Zen                ████████████████████                       184K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         343 ops/sec
 Redux Toolkit                                                 151 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 374K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 184K | 0.005ms | 0.006ms | 1000 |
| Zustand | 8K | 0.133ms | 0.163ms | 1000 |
| MobX | 6K | 0.157ms | 0.181ms | 1000 |
| Valtio | 4K | 0.235ms | 0.299ms | 1000 |
| Jotai | 343 | 2.968ms | 5.239ms | 1000 |
| Redux Toolkit | 151 | 6.665ms | 8.013ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.6M ops/sec
🥈 Zen                ███████████████████████████                7.2M ops/sec
🥉 Solid.js           ██████████████                             3.8M ops/sec
 Zustand            █████████████                              3.4M ops/sec
 Valtio             ██                                         424K ops/sec
 Jotai              █                                          321K ops/sec
 MobX               █                                          209K ops/sec
 Redux Toolkit                                                 60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 424K | 0.006ms | 0.004ms | 1000 |
| Jotai | 321K | 0.003ms | 0.006ms | 1000 |
| MobX | 209K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.034ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   9.0M ops/sec
🥈 Zen                ██████████████████████████████████████     8.6M ops/sec
🥉 Zustand            ███████████████                            3.4M ops/sec
 Solid.js           █████████████                              3.0M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               ████                                       990K ops/sec
 Jotai              █                                          219K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 990K | 0.001ms | 0.002ms | 1000 |
| Jotai | 219K | 0.007ms | 0.011ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.045ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.6M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.6M ops/sec
🥉 Zen                ███████████████████████████████████████    22.3M ops/sec
 Preact Signals     ███████████████████████████████████████    21.8M ops/sec
 Valtio             ████████████████████████                   13.8M ops/sec
 Redux Toolkit      ████████████████████████                   13.6M ops/sec
 MobX               █████████                                  5.3M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.1M ops/sec
🥈 Preact Signals     ██████████████████████████████             5.3M ops/sec
🥉 Zustand            █████████████████                          3.0M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 Solid.js           ██████████████                             2.5M ops/sec
 MobX               ███████                                    1.2M ops/sec
 Jotai              ██                                         305K ops/sec
 Redux Toolkit                                                 79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 305K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 79K | 0.014ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   104K ops/sec
🥈 Solid.js           ████████████████████████████████████████   104K ops/sec
🥉 Zen                ███████████████████████████████████████    101K ops/sec
 Zustand            ███████████████████████                    60K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 104K | 0.010ms | 0.019ms | 1000 |
| Solid.js | 104K | 0.010ms | 0.013ms | 1000 |
| Zen | 101K | 0.010ms | 0.014ms | 1000 |
| Zustand | 60K | 0.017ms | 0.027ms | 1000 |
| Valtio | 43K | 0.023ms | 0.040ms | 1000 |
| MobX | 35K | 0.029ms | 0.041ms | 1000 |
| Jotai | 6K | 0.184ms | 0.358ms | 1000 |
| Redux Toolkit | 3K | 0.357ms | 0.469ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Preact Signals     ██████████████████████                     11.7M ops/sec
🥉 Zen                ██████████                                 5.4M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         185K ops/sec
 Redux Toolkit                                                 136K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 185K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 136K | 0.008ms | 0.015ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.9M ops/sec
🥈 Zen                ██████████████████████████████             15.0M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          435K ops/sec
 Valtio             █                                          270K ops/sec
 Jotai                                                         153K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 435K | 0.002ms | 0.005ms | 1000 |
| Valtio | 270K | 0.004ms | 0.007ms | 1000 |
| Jotai | 153K | 0.007ms | 0.011ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.028ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.5M ops/sec
🥈 Preact Signals     █                                          128K ops/sec
🥉 Zen                █                                          105K ops/sec
 Zustand            █                                          87K ops/sec
 Valtio             █                                          58K ops/sec
 Redux Toolkit                                                 43K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 128K | 0.009ms | 0.016ms | 1000 |
| Zen | 105K | 0.010ms | 0.014ms | 1000 |
| Zustand | 87K | 0.018ms | 0.035ms | 1000 |
| Valtio | 58K | 0.049ms | 0.044ms | 1000 |
| Redux Toolkit | 43K | 0.050ms | 0.059ms | 1000 |
| MobX | 11K | 0.124ms | 1.042ms | 1000 |
| Jotai | 7K | 0.161ms | 0.866ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.8M ops/sec
🥈 Zen                ██████████████████████████████████         11.7M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.2M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 124K ops/sec
 Jotai                                                         111K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 124K | 0.008ms | 0.020ms | 1000 |
| Jotai | 111K | 0.009ms | 0.015ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.1M ops/sec
🥈 Valtio             ██████████████                             713K ops/sec
🥉 MobX               ████                                       202K ops/sec
 Jotai              ███                                        150K ops/sec
 Preact Signals     ███                                        134K ops/sec
 Zen                ██                                         107K ops/sec
 Zustand            ██                                         93K ops/sec
 Redux Toolkit                                                 795 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 713K | 0.002ms | 0.007ms | 1000 |
| MobX | 202K | 0.007ms | 0.024ms | 1000 |
| Jotai | 150K | 0.008ms | 0.019ms | 1000 |
| Preact Signals | 134K | 0.008ms | 0.012ms | 1000 |
| Zen | 107K | 0.010ms | 0.016ms | 1000 |
| Zustand | 93K | 0.011ms | 0.021ms | 1000 |
| Redux Toolkit | 795 | 1.302ms | 3.221ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   317K ops/sec
🥈 Solid.js           ████████████████████████████████████████   317K ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   314K ops/sec
 Zen                █████████                                  71K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          3K ops/sec
 Jotai                                                         272 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 317K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 314K | 0.003ms | 0.007ms | 1000 |
| Zen | 71K | 0.014ms | 0.021ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.066ms | 1000 |
| Valtio | 5K | 0.208ms | 0.711ms | 1000 |
| MobX | 3K | 0.290ms | 0.339ms | 1000 |
| Jotai | 272 | 3.696ms | 4.354ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   38K ops/sec
🥈 Zen                ███████████                                10K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          739 ops/sec
 MobX                                                          458 ops/sec
 Valtio                                                        402 ops/sec
 Jotai                                                         32 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 38K | 0.033ms | 0.409ms | 1000 |
| Zen | 10K | 0.100ms | 0.117ms | 1000 |
| Preact Signals | 8K | 0.122ms | 0.133ms | 1000 |
| Zustand | 739 | 1.369ms | 1.991ms | 1000 |
| MobX | 458 | 2.192ms | 2.876ms | 1000 |
| Valtio | 402 | 2.501ms | 3.187ms | 1000 |
| Jotai | 32 | 31.262ms | 35.790ms | 1000 |
| Redux Toolkit | 14 | 70.588ms | 75.055ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.5M ops/sec
🥈 Zen                █████████████████████████████              14.8M ops/sec
🥉 Preact Signals     ██████████                                 5.1M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          278K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 278K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zen                █████████████████████████████              15.9M ops/sec
🥉 Preact Signals     █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          333K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 333K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Zen                ███████████████████████████                15.4M ops/sec
🥉 Preact Signals     ██████████████                             7.8M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          787K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 787K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.2M ops/sec
🥈 Preact Signals     ██████████████                             6.6M ops/sec
🥉 Zustand            ████████████                               5.2M ops/sec
 Zen                ████████                                   3.4M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         782K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 782K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         434K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Zen                                                           8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 434K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.045ms | 1000 |
| Valtio | 8K | 0.122ms | 0.133ms | 1000 |
| Zen | 8K | 0.139ms | 0.195ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.165ms | 0.188ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Zen                █████████████████████████████              16.1M ops/sec
🥉 Preact Signals     █                                          716K ops/sec
 MobX                                                          118K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        73K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 716K | 0.001ms | 0.001ms | 1000 |
| MobX | 118K | 0.009ms | 0.010ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 73K | 0.015ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        270K ops/sec
 Valtio             █                                          94K ops/sec
 Zen                █                                          83K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 270K | 0.004ms | 0.007ms | 1000 |
| Valtio | 94K | 0.011ms | 0.015ms | 1000 |
| Zen | 83K | 0.012ms | 0.021ms | 1000 |
| MobX | 80K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.0M ops/sec
🥈 Solid.js           ████████████████████████████████████████   12.9M ops/sec
🥉 Preact Signals     █████████                                  2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          117K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.19.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T04:52:18.608Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
