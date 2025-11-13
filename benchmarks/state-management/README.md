<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-28-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Zen - Fastest overall with 64.0/100 score
- **⚖️ Best Balance**: Solid Signals - Great performance (54.7/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen** (Score: 64.0/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Solid Signals** (Score: 54.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 47.3/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 24.8/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 20.2/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 28 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 64.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Solid Signals](https://github.com/solidjs/solid)** | 54.7/100 | 86% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 47.3/100 | 74% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.8/100 | 39% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 20.2/100 | 32% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen](https://github.com/SylphxAI/zen)** | **64.0** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **54.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **47.3** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **24.8** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **20.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **0.0** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **0.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **0.0** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Zen                ████████████████████████████████████████   24.0M ops/sec
🥈 Valtio             ███████████████████████████████████████    23.6M ops/sec
🥉 Preact Signals     ███████████████████████████████████████    23.3M ops/sec
 Solid Signals      ██████████████████████████████████         20.5M ops/sec
 Redux Toolkit      ██████████████████                         10.7M ops/sec
 Zustand            ██████████████                             8.3M ops/sec
 MobX               ███████████                                6.8M ops/sec
 Jotai              ██                                         1.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 24.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 23.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 23.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 20.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 10.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.4M | 0.001ms | 0.007ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zen                ████████████████████████████████████████   20.1M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     18.9M ops/sec
🥉 Solid Signals      ██████████████████████                     11.0M ops/sec
 Valtio             ██████████████████                         8.9M ops/sec
 Zustand            ██████████████████                         8.9M ops/sec
 Redux Toolkit      ████████████████                           8.1M ops/sec
 MobX               ███████████████                            7.6M ops/sec
 Jotai              ███                                        1.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 11.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 8.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.5M | 0.001ms | 0.007ms | 1000 |

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   19.9M ops/sec
🥈 Zustand            ███████████████████████████████████████    19.6M ops/sec
🥉 Solid Signals      █████████████████████████████████████      18.4M ops/sec
 Preact Signals     ██████████████████████████████████         16.8M ops/sec
 Valtio             █████████████████████                      10.5M ops/sec
 MobX               ████████████                               5.9M ops/sec
 Redux Toolkit      █████████                                  4.7M ops/sec
 Jotai              ███                                        1.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 19.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 16.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 10.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 4.7M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.4M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   22.5M ops/sec
🥈 Preact Signals     █████████████████████████████              16.4M ops/sec
🥉 Solid Signals      █████████                                  5.3M ops/sec
 Zustand            █████████                                  5.2M ops/sec
 MobX               ████████                                   4.3M ops/sec
 Valtio             ██████                                     3.4M ops/sec
 Jotai              █                                          462K ops/sec
 Redux Toolkit                                                 211K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 462K | 0.002ms | 0.015ms | 1000 |
| Redux Toolkit | 211K | 0.005ms | 0.009ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   21.7M ops/sec
🥈 Solid Signals      ██████████████████████████████████████     20.9M ops/sec
🥉 Preact Signals     ███████████████████████████████████        19.2M ops/sec
 MobX               ██████████████                             7.5M ops/sec
 Zustand            ██████████                                 5.5M ops/sec
 Valtio             ████████                                   4.4M ops/sec
 Jotai              █                                          688K ops/sec
 Redux Toolkit                                                 271K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 688K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 271K | 0.004ms | 0.008ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   23.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████         19.6M ops/sec
🥉 Solid Signals      ██████████                                 6.0M ops/sec
 Valtio             ████████                                   4.9M ops/sec
 MobX               ███████                                    3.8M ops/sec
 Zustand            █████                                      3.2M ops/sec
 Jotai              █                                          707K ops/sec
 Redux Toolkit                                                 207K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 23.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 707K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 207K | 0.005ms | 0.009ms | 1000 |

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   22.7M ops/sec
🥈 Preact Signals     ████████████████████████████████████       20.6M ops/sec
🥉 Solid Signals      ████████████████                           9.2M ops/sec
 Zustand            ███████                                    4.2M ops/sec
 Valtio             ████                                       2.1M ops/sec
 MobX               ██                                         1.1M ops/sec
 Jotai              █                                          418K ops/sec
 Redux Toolkit                                                 134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.003ms | 1000 |
| Jotai | 418K | 0.002ms | 0.010ms | 1000 |
| Redux Toolkit | 134K | 0.007ms | 0.028ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   999K ops/sec
🥈 Valtio             ████████████████████████████████████       895K ops/sec
🥉 Zustand            ███████████████████████████████████        881K ops/sec
 Jotai              ██████████████████                         443K ops/sec
 MobX               █████████████                              336K ops/sec
 Preact Signals     █                                          28K ops/sec
 Zen                █                                          28K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 999K | 0.001ms | 0.002ms | 1000 |
| Valtio | 895K | 0.001ms | 0.005ms | 1000 |
| Zustand | 881K | 0.001ms | 0.003ms | 1000 |
| Jotai | 443K | 0.002ms | 0.005ms | 1000 |
| MobX | 336K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 28K | 0.037ms | 0.045ms | 1000 |
| Zen | 28K | 0.040ms | 0.093ms | 1000 |
| Redux Toolkit | 3K | 0.287ms | 0.617ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.2M ops/sec
🥈 Zen                ███████████████████████████████████████    7.9M ops/sec
🥉 Solid Signals      ███████████████████████████████████        7.2M ops/sec
 Valtio             ████████████████████████████               5.7M ops/sec
 Zustand            ████████████████████████                   4.9M ops/sec
 MobX               ████████████                               2.4M ops/sec
 Jotai              ███                                        642K ops/sec
 Redux Toolkit      █                                          144K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 7.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.002ms | 1000 |
| Jotai | 642K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 144K | 0.007ms | 0.013ms | 1000 |

#### Computed Value Access

```
🥇 Solid Signals      ████████████████████████████████████████   28.1M ops/sec
🥈 Zen                ████████████████████████████████           22.5M ops/sec
🥉 Preact Signals     ████████████████████████████               19.5M ops/sec
 Valtio             █████████████                              9.3M ops/sec
 Zustand            ███████                                    4.8M ops/sec
 Redux Toolkit      ████                                       2.9M ops/sec
 Jotai              ███                                        1.9M ops/sec
 MobX               ██                                         1.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 28.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.9M | 0.001ms | 0.002ms | 1000 |
| MobX | 1.5M | 0.001ms | 0.005ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   11.0M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     10.4M ops/sec
🥉 Solid Signals      ███████████████                            4.1M ops/sec
 Zustand            ███████████████                            4.1M ops/sec
 Valtio             ████████████                               3.3M ops/sec
 MobX               ██████                                     1.6M ops/sec
 Jotai              █                                          320K ops/sec
 Redux Toolkit      █                                          199K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 4.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.6M | 0.001ms | 0.004ms | 1000 |
| Jotai | 320K | 0.003ms | 0.013ms | 1000 |
| Redux Toolkit | 199K | 0.005ms | 0.013ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Solid Signals      ████████████████████████████████████████   609K ops/sec
🥈 Zen                ██████████████████████████████             460K ops/sec
🥉 Preact Signals     ██████████████████████████████             455K ops/sec
 Zustand            █████████████████████                      318K ops/sec
 MobX               █████████████████                          254K ops/sec
 Valtio             ████████████████                           244K ops/sec
 Jotai              ███                                        45K ops/sec
 Redux Toolkit      █                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 609K | 0.002ms | 0.005ms | 1000 |
| Zen | 460K | 0.003ms | 0.009ms | 1000 |
| Preact Signals | 455K | 0.002ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.007ms | 1000 |
| MobX | 254K | 0.004ms | 0.011ms | 1000 |
| Valtio | 244K | 0.004ms | 0.009ms | 1000 |
| Jotai | 45K | 0.022ms | 0.059ms | 1000 |
| Redux Toolkit | 14K | 0.071ms | 0.118ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   162K ops/sec
🥈 MobX               ████████████████████████                   95K ops/sec
🥉 Zustand            ███████████████████████                    93K ops/sec
 Zen                ██████████████████████                     91K ops/sec
 Preact Signals     █████████████████████                      84K ops/sec
 Valtio             ████████████████████                       82K ops/sec
 Jotai              ████                                       15K ops/sec
 Redux Toolkit      ██                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 162K | 0.006ms | 0.012ms | 1000 |
| MobX | 95K | 0.010ms | 0.018ms | 1000 |
| Zustand | 93K | 0.011ms | 0.015ms | 1000 |
| Zen | 91K | 0.011ms | 0.017ms | 1000 |
| Preact Signals | 84K | 0.012ms | 0.023ms | 1000 |
| Valtio | 82K | 0.012ms | 0.020ms | 1000 |
| Jotai | 15K | 0.066ms | 0.102ms | 1000 |
| Redux Toolkit | 6K | 0.163ms | 0.543ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   23.5M ops/sec
🥈 Solid Signals      ██████████████████████████████             17.7M ops/sec
🥉 Preact Signals     ██████████████████████                     13.1M ops/sec
 MobX               █████████                                  5.4M ops/sec
 Valtio             █████████                                  5.2M ops/sec
 Zustand            █████                                      3.2M ops/sec
 Jotai              █                                          352K ops/sec
 Redux Toolkit                                                 268K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 23.5M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 17.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 352K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 268K | 0.004ms | 0.008ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.5M ops/sec
🥈 Valtio             ██████████████████████████████████████     1.4M ops/sec
🥉 Zustand            ██████████                                 393K ops/sec
 Solid Signals      █████████                                  344K ops/sec
 Jotai              █████                                      190K ops/sec
 Preact Signals     █                                          19K ops/sec
 Zen                                                           17K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.5M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.002ms | 1000 |
| Zustand | 393K | 0.003ms | 0.004ms | 1000 |
| Solid Signals | 344K | 0.003ms | 0.004ms | 1000 |
| Jotai | 190K | 0.005ms | 0.009ms | 1000 |
| Preact Signals | 19K | 0.054ms | 0.127ms | 1000 |
| Zen | 17K | 0.068ms | 0.179ms | 1000 |
| Redux Toolkit | 3K | 0.380ms | 0.898ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   2.4M ops/sec
🥈 Zen                ██                                         142K ops/sec
🥉 Preact Signals     ██                                         112K ops/sec
 Zustand            ██                                         103K ops/sec
 Valtio             █                                          49K ops/sec
 Redux Toolkit      █                                          48K ops/sec
 Jotai                                                         15K ops/sec
 MobX                                                          12K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.4M | 0.000ms | 0.005ms | 1000 |
| Zen | 142K | 0.008ms | 0.014ms | 1000 |
| Preact Signals | 112K | 0.009ms | 0.016ms | 1000 |
| Zustand | 103K | 0.010ms | 0.041ms | 1000 |
| Valtio | 49K | 0.020ms | 0.043ms | 1000 |
| Redux Toolkit | 48K | 0.021ms | 0.054ms | 1000 |
| Jotai | 15K | 0.068ms | 0.423ms | 1000 |
| MobX | 12K | 0.081ms | 1.014ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   8.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      8.1M ops/sec
🥉 Valtio             █████████████████████████████████          7.4M ops/sec
 Solid Signals      ████████████████████████████               6.2M ops/sec
 MobX               ████████████                               2.6M ops/sec
 Zustand            █████████                                  2.1M ops/sec
 Jotai              █                                          297K ops/sec
 Redux Toolkit                                                 106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 8.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 7.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 297K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 106K | 0.009ms | 0.016ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Valtio             ████████████████████████████████████████   26.3M ops/sec
🥈 Zen                ███████████████████████████████████████    25.8M ops/sec
🥉 Preact Signals     ████████████████████████████████████       23.4M ops/sec
 Redux Toolkit      ██████████████████████                     14.3M ops/sec
 Zustand            ██████████████████                         11.8M ops/sec
 MobX               ███████████████                            9.7M ops/sec
 Solid Signals      ████████████                               8.2M ops/sec
 Jotai              █                                          848K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 26.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 25.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 23.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 14.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 8.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 848K | 0.001ms | 0.007ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Preact Signals     ████████████████████████████████████████   20.9M ops/sec
🥈 Zen                ████████████████████████████████████████   20.9M ops/sec
🥉 Solid Signals      ████████████████████████████████           16.6M ops/sec
 MobX               ██████████████                             7.4M ops/sec
 Valtio             ██████████                                 5.4M ops/sec
 Zustand            ██████                                     3.4M ops/sec
 Jotai              ██                                         837K ops/sec
 Redux Toolkit      █                                          294K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 20.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 7.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 837K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 294K | 0.003ms | 0.008ms | 1000 |

#### Large Array (1000 items)

```
🥇 Preact Signals     ████████████████████████████████████████   181K ops/sec
🥈 Zen                ████████████████████████████████           147K ops/sec
🥉 Zustand            █████████████████████████████              131K ops/sec
 Solid Signals      ███████████████████████████                121K ops/sec
 Jotai              ██████████████████████                     98K ops/sec
 MobX               ███                                        16K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 181K | 0.006ms | 0.008ms | 1000 |
| Zen | 147K | 0.008ms | 0.019ms | 1000 |
| Zustand | 131K | 0.008ms | 0.011ms | 1000 |
| Solid Signals | 121K | 0.008ms | 0.013ms | 1000 |
| Jotai | 98K | 0.010ms | 0.014ms | 1000 |
| MobX | 16K | 0.063ms | 0.126ms | 1000 |
| Valtio | 6K | 0.175ms | 0.504ms | 1000 |
| Redux Toolkit | 1K | 0.871ms | 1.500ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Zen                ████████████████████████████████████████   18.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             13.7M ops/sec
🥉 MobX               ██████████████                             6.5M ops/sec
 Valtio             ████████                                   3.9M ops/sec
 Solid Signals      ████████                                   3.7M ops/sec
 Zustand            ██                                         961K ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 18.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.7M | 0.000ms | 0.002ms | 1000 |
| Zustand | 961K | 0.001ms | 0.003ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Zen                ████████████████████████████████████████   20.5M ops/sec
🥈 Preact Signals     ██████████████████                         9.3M ops/sec
🥉 Solid Signals      ██████████████                             7.2M ops/sec
 Valtio             ███                                        1.5M ops/sec
 MobX               ██                                         1.1M ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 7.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.002ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.003ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Zen                ████████████████████████████████████████   22.1M ops/sec
🥈 Solid Signals      ██████████████████████████████             16.8M ops/sec
🥉 Preact Signals     ████████████████████████                   13.2M ops/sec
 Valtio             ████████                                   4.6M ops/sec
 MobX               ████                                       2.3M ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.1M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 4.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.003ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Dynamic Dependencies

```
🥇 MobX               ████████████████████████████████████████   16.4M ops/sec
🥈 Zen                █████████████████████████████████          13.7M ops/sec
🥉 Preact Signals     █████████████████████████████              11.7M ops/sec
 Solid Signals      ██████████████████████████                 10.5M ops/sec
 Zustand            ███████████████                            6.1M ops/sec
 Valtio             █████████████                              5.3M ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 16.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 6.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 Solid Signals      █████████████████                          1.1M ops/sec
🥉 MobX               ███████████████                            973K ops/sec
 Preact Signals     ████████                                   502K ops/sec
 Valtio             ███                                        214K ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.004ms | 1000 |
| MobX | 973K | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 502K | 0.002ms | 0.002ms | 1000 |
| Valtio | 214K | 0.005ms | 0.009ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   20.0M ops/sec
🥈 Solid Signals      █████████████                              6.7M ops/sec
🥉 Preact Signals     ███████                                    3.3M ops/sec
 Valtio             ███                                        1.3M ops/sec
 MobX               ██                                         779K ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 779K | 0.001ms | 0.004ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid Signals      ████████████████████████████████████████   1.3M ops/sec
🥈 Zen                █████████████████████████████████████      1.2M ops/sec
🥉 Preact Signals     ██████████████████████████████             989K ops/sec
 MobX               ██████████████████                         586K ops/sec
 Valtio             ███████████████                            478K ops/sec
 Zustand            ███                                        103K ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.3M | 0.001ms | 0.003ms | 1000 |
| Zen | 1.2M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 989K | 0.001ms | 0.001ms | 1000 |
| MobX | 586K | 0.002ms | 0.004ms | 1000 |
| Valtio | 478K | 0.002ms | 0.005ms | 1000 |
| Zustand | 103K | 0.010ms | 0.012ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zen                ████████████████████████████████████████   10.4M ops/sec
🥈 Preact Signals     █████████████                              3.4M ops/sec
🥉 MobX               █████████                                  2.4M ops/sec
 Solid Signals      ██████                                     1.5M ops/sec
 Valtio             ████                                       1.1M ops/sec
 Jotai                                                         0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.003ms | 1000 |
| Solid Signals | 1.5M | 0.001ms | 0.006ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

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
- **Async Operations**: 2 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 28 tests × 8 libraries = 224 benchmark runs

---

## 🚀 Libraries Tested

- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)

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

*Generated on 2025-11-13T21:16:35.409Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
