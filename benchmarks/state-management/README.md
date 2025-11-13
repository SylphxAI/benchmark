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

- **⚡ Maximum Performance**: Zen - Fastest overall with 65.5/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (50.5/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen** (Score: 65.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 50.5/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Solid Signals** (Score: 50.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zustand** (Score: 23.8/100)
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

Based on geometric mean of normalized scores across all 28 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 65.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.5/100 | 77% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Solid Signals](https://github.com/solidjs/solid)** | 50.2/100 | 77% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 23.8/100 | 36% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.5/100 | 36% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 20.8/100 | 32% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.3/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.9/100 | 3% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen](https://github.com/SylphxAI/zen)** | **65.5** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **50.5** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **50.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **23.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **23.5** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **20.8** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.9** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Valtio             ████████████████████████████████████████   30.1M ops/sec
🥈 Zen                █████████████████████████████              22.2M ops/sec
🥉 Preact Signals     ██████████████████████████                 19.8M ops/sec
 Zustand            █████████████████                          13.0M ops/sec
 Redux Toolkit      ████████████████                           12.4M ops/sec
 Solid Signals      █████████████                              9.8M ops/sec
 MobX               ███████████                                8.5M ops/sec
 Jotai              █████                                      3.9M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 30.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 12.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 9.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.5M | 0.000ms | 0.002ms | 1000 |
| Jotai | 3.9M | 0.000ms | 0.002ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zen                ████████████████████████████████████████   22.2M ops/sec
🥈 Preact Signals     █████████████████████████████████████      20.5M ops/sec
🥉 Solid Signals      ██████████████████████████████████         18.8M ops/sec
 Valtio             ████████████████████                       11.3M ops/sec
 Redux Toolkit      ███████████████                            8.6M ops/sec
 Zustand            ███████                                    4.0M ops/sec
 MobX               ██████                                     3.4M ops/sec
 Jotai              █████                                      2.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.5M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 11.3M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 8.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.6M | 0.000ms | 0.002ms | 1000 |

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   22.4M ops/sec
🥈 Zen                ████████████████████████████████████       19.9M ops/sec
🥉 Solid Signals      ████████████████████████████████           18.0M ops/sec
 Preact Signals     █████████████████████████████              16.5M ops/sec
 Redux Toolkit      ███████████████████████████                14.9M ops/sec
 Valtio             █████████████████                          9.3M ops/sec
 MobX               █████████                                  4.8M ops/sec
 Jotai              ███                                        1.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 14.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 9.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.5M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   21.0M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     20.1M ops/sec
🥉 Zustand            ██████████                                 5.1M ops/sec
 MobX               ████████                                   4.1M ops/sec
 Solid Signals      ███████                                    3.6M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          585K ops/sec
 Redux Toolkit                                                 200K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.1M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.002ms | 1000 |
| Jotai | 585K | 0.002ms | 0.006ms | 1000 |
| Redux Toolkit | 200K | 0.005ms | 0.012ms | 1000 |

#### Burst Write (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   19.6M ops/sec
🥈 Solid Signals      █████████████████████████████████          16.2M ops/sec
🥉 Zen                █████████████████████████████              14.5M ops/sec
 MobX               ███████████                                5.5M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Zustand            ███                                        1.7M ops/sec
 Jotai              █                                          677K ops/sec
 Redux Toolkit      █                                          275K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.5M | 0.000ms | 0.002ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.7M | 0.001ms | 0.002ms | 1000 |
| Jotai | 677K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 275K | 0.004ms | 0.008ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   20.9M ops/sec
🥈 Preact Signals     █████████████████████████████████████      19.1M ops/sec
🥉 Solid Signals      ███████████                                5.6M ops/sec
 MobX               ████████                                   4.3M ops/sec
 Valtio             ███████                                    3.6M ops/sec
 Zustand            ██████                                     3.0M ops/sec
 Jotai              █                                          548K ops/sec
 Redux Toolkit                                                 239K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.1M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.002ms | 1000 |
| Jotai | 548K | 0.002ms | 0.007ms | 1000 |
| Redux Toolkit | 239K | 0.004ms | 0.008ms | 1000 |

#### Single Write

```
🥇 Preact Signals     ████████████████████████████████████████   18.6M ops/sec
🥈 Zen                ████████████████████████████████████████   18.4M ops/sec
🥉 Solid Signals      ████████                                   3.9M ops/sec
 Zustand            ██████                                     2.8M ops/sec
 Valtio             ██                                         925K ops/sec
 MobX               ██                                         747K ops/sec
 Jotai              █                                          367K ops/sec
 Redux Toolkit                                                 124K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 3.9M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.003ms | 1000 |
| Valtio | 925K | 0.001ms | 0.006ms | 1000 |
| MobX | 747K | 0.001ms | 0.009ms | 1000 |
| Jotai | 367K | 0.003ms | 0.010ms | 1000 |
| Redux Toolkit | 124K | 0.008ms | 0.051ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   1.1M ops/sec
🥈 Zustand            █████████████████████████████████          916K ops/sec
🥉 Valtio             █████████████████████████████              792K ops/sec
 Jotai              ███████████████                            412K ops/sec
 MobX               █████████████                              353K ops/sec
 Preact Signals     █                                          29K ops/sec
 Zen                █                                          27K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Zustand | 916K | 0.001ms | 0.002ms | 1000 |
| Valtio | 792K | 0.001ms | 0.005ms | 1000 |
| Jotai | 412K | 0.002ms | 0.005ms | 1000 |
| MobX | 353K | 0.003ms | 0.009ms | 1000 |
| Preact Signals | 29K | 0.037ms | 0.057ms | 1000 |
| Zen | 27K | 0.044ms | 0.292ms | 1000 |
| Redux Toolkit | 3K | 0.308ms | 0.717ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   7.0M ops/sec
🥈 Zen                ███████████████████████████████████████    6.9M ops/sec
🥉 Valtio             ████████████████████                       3.5M ops/sec
 Solid Signals      ██████████████████                         3.2M ops/sec
 Zustand            ████████████████                           2.7M ops/sec
 MobX               ████████████                               2.1M ops/sec
 Jotai              ██                                         403K ops/sec
 Redux Toolkit      █                                          100K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 3.2M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.002ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.003ms | 1000 |
| Jotai | 403K | 0.002ms | 0.011ms | 1000 |
| Redux Toolkit | 100K | 0.010ms | 0.044ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   21.2M ops/sec
🥈 Solid Signals      ██████████████████████████████             15.8M ops/sec
🥉 Preact Signals     █████████████████████████████              15.2M ops/sec
 Valtio             █████████████████                          9.2M ops/sec
 Zustand            ██████████                                 5.1M ops/sec
 Redux Toolkit      █████████                                  4.8M ops/sec
 MobX               ██                                         1.0M ops/sec
 Jotai              █                                          778K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 15.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 4.8M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.013ms | 1000 |
| Jotai | 778K | 0.001ms | 0.005ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.6M ops/sec
🥈 Zen                ████████████████████████████████████       7.7M ops/sec
🥉 Solid Signals      █████████████████                          3.7M ops/sec
 Zustand            █████████████████                          3.7M ops/sec
 Valtio             ████████████████                           3.4M ops/sec
 MobX               ██████████                                 2.1M ops/sec
 Jotai              ███                                        604K ops/sec
 Redux Toolkit      █                                          208K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 3.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.002ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.003ms | 1000 |
| Jotai | 604K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 208K | 0.005ms | 0.013ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Preact Signals     ████████████████████████████████████████   512K ops/sec
🥈 Zen                █████████████████████████████████████      477K ops/sec
🥉 Solid Signals      ████████████████████████                   302K ops/sec
 Zustand            █████████████████████                      270K ops/sec
 MobX               ████████████████                           198K ops/sec
 Valtio             ███████████████                            186K ops/sec
 Jotai              ██                                         25K ops/sec
 Redux Toolkit      █                                          13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 512K | 0.002ms | 0.003ms | 1000 |
| Zen | 477K | 0.002ms | 0.003ms | 1000 |
| Solid Signals | 302K | 0.003ms | 0.008ms | 1000 |
| Zustand | 270K | 0.004ms | 0.011ms | 1000 |
| MobX | 198K | 0.005ms | 0.010ms | 1000 |
| Valtio | 186K | 0.005ms | 0.014ms | 1000 |
| Jotai | 25K | 0.039ms | 0.127ms | 1000 |
| Redux Toolkit | 13K | 0.076ms | 0.172ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   138K ops/sec
🥈 Preact Signals     ███████████████████████████████            108K ops/sec
🥉 Zen                ███████████████████████████████            106K ops/sec
 Zustand            ███████████████████████████                94K ops/sec
 MobX               ██████████████████████████                 91K ops/sec
 Valtio             ██████████████████████                     75K ops/sec
 Jotai              ████                                       15K ops/sec
 Redux Toolkit      ██                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 138K | 0.007ms | 0.019ms | 1000 |
| Preact Signals | 108K | 0.010ms | 0.014ms | 1000 |
| Zen | 106K | 0.010ms | 0.013ms | 1000 |
| Zustand | 94K | 0.011ms | 0.016ms | 1000 |
| MobX | 91K | 0.011ms | 0.019ms | 1000 |
| Valtio | 75K | 0.013ms | 0.021ms | 1000 |
| Jotai | 15K | 0.068ms | 0.134ms | 1000 |
| Redux Toolkit | 6K | 0.167ms | 0.600ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   20.5M ops/sec
🥈 Solid Signals      ███████████████████████████                14.0M ops/sec
🥉 Preact Signals     ███████████████████████                    11.6M ops/sec
 MobX               ████████                                   4.1M ops/sec
 Zustand            ███████                                    3.6M ops/sec
 Valtio             ███████                                    3.5M ops/sec
 Jotai              █                                          336K ops/sec
 Redux Toolkit      █                                          268K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.5M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 14.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 11.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.001ms | 1000 |
| Jotai | 336K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 268K | 0.004ms | 0.009ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.6M ops/sec
🥈 Valtio             ██████████████████████████████             1.2M ops/sec
🥉 Zustand            ███████████                                439K ops/sec
 Solid Signals      █████████                                  360K ops/sec
 Jotai              ██████                                     236K ops/sec
 Preact Signals     █                                          20K ops/sec
 Zen                                                           18K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.6M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.003ms | 1000 |
| Zustand | 439K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 360K | 0.003ms | 0.005ms | 1000 |
| Jotai | 236K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 20K | 0.060ms | 0.337ms | 1000 |
| Zen | 18K | 0.072ms | 0.467ms | 1000 |
| Redux Toolkit | 2K | 0.409ms | 1.021ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   1.4M ops/sec
🥈 Zen                ████                                       149K ops/sec
🥉 Preact Signals     ████                                       129K ops/sec
 Zustand            ███                                        101K ops/sec
 Redux Toolkit      █                                          50K ops/sec
 Valtio             █                                          44K ops/sec
 Jotai                                                         14K ops/sec
 MobX                                                          11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.4M | 0.001ms | 0.005ms | 1000 |
| Zen | 149K | 0.007ms | 0.011ms | 1000 |
| Preact Signals | 129K | 0.009ms | 0.015ms | 1000 |
| Zustand | 101K | 0.010ms | 0.068ms | 1000 |
| Redux Toolkit | 50K | 0.020ms | 0.101ms | 1000 |
| Valtio | 44K | 0.023ms | 0.089ms | 1000 |
| Jotai | 14K | 0.073ms | 0.432ms | 1000 |
| MobX | 11K | 0.089ms | 0.922ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   7.9M ops/sec
🥈 Preact Signals     █████████████████████████████████████      7.4M ops/sec
🥉 Valtio             ███████████████████████████████            6.2M ops/sec
 Solid Signals      ██████████████████████████████             5.9M ops/sec
 MobX               ████████████                               2.5M ops/sec
 Zustand            ██████████                                 2.1M ops/sec
 Jotai              █                                          283K ops/sec
 Redux Toolkit      █                                          110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 6.2M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 5.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.5M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 283K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 110K | 0.009ms | 0.013ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Valtio             ████████████████████████████████████████   25.6M ops/sec
🥈 MobX               █████████████████████████████████          21.0M ops/sec
🥉 Zen                █████████████████████████████████          21.0M ops/sec
 Preact Signals     ████████████████████████████████           20.7M ops/sec
 Zustand            ███████████████████████                    14.9M ops/sec
 Solid Signals      █████████████████████                      13.2M ops/sec
 Redux Toolkit      ██████████████████                         11.3M ops/sec
 Jotai              ███████                                    4.7M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 25.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 21.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 14.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 13.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.7M | 0.000ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   21.2M ops/sec
🥈 Preact Signals     ███████████████████████████████            16.3M ops/sec
🥉 Solid Signals      █████████████████████                      10.9M ops/sec
 MobX               ████████████████                           8.4M ops/sec
 Zustand            ███████████                                6.1M ops/sec
 Valtio             ████████                                   4.3M ops/sec
 Jotai              ██                                         901K ops/sec
 Redux Toolkit                                                 166K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 6.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 901K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 166K | 0.006ms | 0.023ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   219K ops/sec
🥈 Preact Signals     ████████████████████████████████           177K ops/sec
🥉 Solid Signals      ██████████████████████                     121K ops/sec
 Zustand            ████████████████████                       108K ops/sec
 Jotai              ███████████████                            85K ops/sec
 MobX               ██                                         13K ops/sec
 Valtio             █                                          5K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 219K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 177K | 0.007ms | 0.018ms | 1000 |
| Solid Signals | 121K | 0.008ms | 0.013ms | 1000 |
| Zustand | 108K | 0.009ms | 0.015ms | 1000 |
| Jotai | 85K | 0.012ms | 0.024ms | 1000 |
| MobX | 13K | 0.075ms | 0.191ms | 1000 |
| Valtio | 5K | 0.204ms | 0.641ms | 1000 |
| Redux Toolkit | 1K | 0.914ms | 1.504ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████         12.0M ops/sec
🥉 MobX               ████████████████████                       7.0M ops/sec
 Valtio             ██████████                                 3.6M ops/sec
 Solid Signals      █████████                                  3.1M ops/sec
 Zustand            ██                                         788K ops/sec
 Jotai                                                         91K ops/sec
 Redux Toolkit                                                 33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 788K | 0.001ms | 0.003ms | 1000 |
| Jotai | 91K | 0.011ms | 0.015ms | 1000 |
| Redux Toolkit | 33K | 0.030ms | 0.049ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Zen                ████████████████████████████████████████   19.0M ops/sec
🥈 Preact Signals     ████████████████████                       9.4M ops/sec
🥉 Solid Signals      █████████████████                          8.0M ops/sec
 Zustand            ████                                       1.8M ops/sec
 Valtio             ███                                        1.6M ops/sec
 MobX               ███                                        1.3M ops/sec
 Jotai                                                         140K ops/sec
 Redux Toolkit                                                 51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 8.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.8M | 0.001ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.002ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 140K | 0.007ms | 0.010ms | 1000 |
| Redux Toolkit | 51K | 0.020ms | 0.026ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Zen                ████████████████████████████████████████   20.8M ops/sec
🥈 Solid Signals      █████████████████████████                  12.9M ops/sec
🥉 Preact Signals     ████████████████████████                   12.4M ops/sec
 Valtio             ████████                                   4.3M ops/sec
 Zustand            ████████                                   4.0M ops/sec
 MobX               ████                                       2.2M ops/sec
 Jotai              █                                          484K ops/sec
 Redux Toolkit      █                                          284K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.8M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 12.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 12.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.003ms | 1000 |
| Jotai | 484K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 284K | 0.004ms | 0.007ms | 1000 |

#### Dynamic Dependencies

```
🥇 Zen                ████████████████████████████████████████   20.3M ops/sec
🥈 MobX               ████████████████████████████████           16.5M ops/sec
🥉 Preact Signals     ███████████████████████████████            15.8M ops/sec
 Solid Signals      ██████████████████████                     11.1M ops/sec
 Valtio             ██████████                                 5.1M ops/sec
 Zustand            ██████████                                 4.8M ops/sec
 Jotai              █                                          432K ops/sec
 Redux Toolkit      █                                          328K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.8M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 11.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 432K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 328K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 Solid Signals      █████████████████                          1.2M ops/sec
🥉 MobX               █████████████                              851K ops/sec
 Zustand            ██████████                                 647K ops/sec
 Preact Signals     ████████                                   514K ops/sec
 Redux Toolkit      ████                                       241K ops/sec
 Valtio             ████                                       239K ops/sec
 Jotai                                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| MobX | 851K | 0.001ms | 0.004ms | 1000 |
| Zustand | 647K | 0.002ms | 0.006ms | 1000 |
| Preact Signals | 514K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 241K | 0.004ms | 0.009ms | 1000 |
| Valtio | 239K | 0.004ms | 0.007ms | 1000 |
| Jotai | 6K | 0.173ms | 0.527ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   18.6M ops/sec
🥈 Solid Signals      ████████████████                           7.5M ops/sec
🥉 Preact Signals     ███████████                                5.0M ops/sec
 Zustand            ████                                       1.7M ops/sec
 Valtio             ███                                        1.2M ops/sec
 MobX               ██                                         794K ops/sec
 Jotai                                                         94K ops/sec
 Redux Toolkit                                                 53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 18.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 7.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.7M | 0.001ms | 0.002ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.002ms | 1000 |
| MobX | 794K | 0.001ms | 0.004ms | 1000 |
| Jotai | 94K | 0.011ms | 0.014ms | 1000 |
| Redux Toolkit | 53K | 0.019ms | 0.028ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 MobX               ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                ██████████████████████████████████████     1.1M ops/sec
🥉 Solid Signals      ██████████████████████████████████████     1.1M ops/sec
 Preact Signals     ███████████████████████████████            898K ops/sec
 Valtio             ██████████████                             395K ops/sec
 Zustand            ████                                       106K ops/sec
 Jotai                                                         11K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.2M | 0.001ms | 0.004ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.006ms | 1000 |
| Preact Signals | 898K | 0.001ms | 0.001ms | 1000 |
| Valtio | 395K | 0.003ms | 0.008ms | 1000 |
| Zustand | 106K | 0.009ms | 0.015ms | 1000 |
| Jotai | 11K | 0.091ms | 0.123ms | 1000 |
| Redux Toolkit | 4K | 0.284ms | 0.716ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zen                ████████████████████████████████████████   11.1M ops/sec
🥈 Preact Signals     ██████████████                             3.9M ops/sec
🥉 Solid Signals      █████████████                              3.5M ops/sec
 Zustand            █████████                                  2.5M ops/sec
 MobX               ███████                                    1.9M ops/sec
 Valtio             ██████                                     1.6M ops/sec
 Redux Toolkit      █                                          235K ops/sec
 Jotai                                                         51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 3.5M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.5M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.005ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 235K | 0.004ms | 0.011ms | 1000 |
| Jotai | 51K | 0.020ms | 0.032ms | 1000 |


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
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-13T21:25:20.329Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
