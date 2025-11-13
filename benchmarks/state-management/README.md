<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-20-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 73.6/100 score
- **⚖️ Best Balance**: Zen - Great performance (55.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 73.6/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 55.2/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 48.0/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 38.4/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 35.9/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 73.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 55.2/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 48.0/100 | 65% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 38.4/100 | 52% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 35.9/100 | 49% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Zustand](https://github.com/pmndrs/zustand)** | 30.5/100 | 41% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.2/100 | 10% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.2/100 | 4% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **73.6** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **55.2** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **48.0** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **38.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **35.9** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **30.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **7.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **3.2** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Valtio             ████████████████████████████████████████   31.1M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████       28.1M ops/sec
🥉 Preact Signals     ██████████████████████████████             23.5M ops/sec
 MobX               ███████████████████████                    18.1M ops/sec
 Zen                ██████████████████                         14.1M ops/sec
 Zustand            ██████████████████                         13.9M ops/sec
 Solid Signals      █████████████                              10.0M ops/sec
 Jotai              █████                                      4.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 31.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 28.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 23.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 18.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.1M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Valtio             ████████████████████████████████████████   14.5M ops/sec
🥈 MobX               █████████████████████████████████████      13.4M ops/sec
🥉 Solid Signals      ██████████████████████████████             10.9M ops/sec
 Zustand            ██████████████████████████                 9.5M ops/sec
 Redux Toolkit      ███████████████████████                    8.4M ops/sec
 Zen                ██████████████████                         6.5M ops/sec
 Preact Signals     ██████                                     2.1M ops/sec
 Jotai              ███                                        1.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 14.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 13.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 8.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.1M | 0.001ms | 0.005ms | 1000 |

#### Single Read

```
🥇 Solid Signals      ████████████████████████████████████████   15.0M ops/sec
🥈 Redux Toolkit      █████████████████████████████████          12.2M ops/sec
🥉 Zustand            █████████████████████████                  9.3M ops/sec
 Zen                █████████████████                          6.5M ops/sec
 Valtio             ██████████████                             5.2M ops/sec
 Preact Signals     ██████████████                             5.1M ops/sec
 MobX               ████████████                               4.6M ops/sec
 Jotai              ████                                       1.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 15.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 12.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.6M | 0.000ms | 0.002ms | 1000 |
| Jotai | 1.6M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.3M ops/sec
🥈 Solid Signals      ████████████████                           4.8M ops/sec
🥉 Zen                ███████████████                            4.7M ops/sec
 Zustand            ██████████████                             4.4M ops/sec
 MobX               ████████████                               3.6M ops/sec
 Valtio             ██████████                                 3.1M ops/sec
 Jotai              ██                                         530K ops/sec
 Redux Toolkit      █                                          156K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 4.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 530K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 156K | 0.006ms | 0.016ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   13.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    12.9M ops/sec
🥉 Zen                ██████████████████████████████             9.9M ops/sec
 MobX               ████████████████                           5.4M ops/sec
 Zustand            ████████████                               3.9M ops/sec
 Valtio             ██████████                                 3.2M ops/sec
 Jotai              ██                                         586K ops/sec
 Redux Toolkit      █                                          226K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 13.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 12.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.002ms | 1000 |
| Jotai | 586K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 226K | 0.004ms | 0.010ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   6.1M ops/sec
🥈 Solid Signals      ███████████████████████████████████████    6.0M ops/sec
🥉 Preact Signals     █████████████████████████████              4.5M ops/sec
 MobX               ████████████████████                       3.1M ops/sec
 Valtio             ███████████████████                        2.9M ops/sec
 Zustand            ████████████████                           2.5M ops/sec
 Jotai              ████                                       597K ops/sec
 Redux Toolkit      █                                          197K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.1M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.5M | 0.000ms | 0.001ms | 1000 |
| Jotai | 597K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 197K | 0.005ms | 0.008ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   18.9M ops/sec
🥈 Zen                ████████████████████████                   11.5M ops/sec
🥉 Preact Signals     ████████████████                           7.5M ops/sec
 Zustand            █████                                      2.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         715K ops/sec
 Jotai              █                                          410K ops/sec
 Redux Toolkit                                                 129K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 18.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.3M | 0.000ms | 0.004ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.004ms | 1000 |
| MobX | 715K | 0.001ms | 0.006ms | 1000 |
| Jotai | 410K | 0.002ms | 0.009ms | 1000 |
| Redux Toolkit | 129K | 0.008ms | 0.031ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   1.1M ops/sec
🥈 Zustand            ████████████████████████████               763K ops/sec
🥉 Valtio             ███████████████████████                    640K ops/sec
 Preact Signals     █████████████████████                      565K ops/sec
 Zen                ████████████████                           429K ops/sec
 Jotai              ███████████████                            412K ops/sec
 MobX               ██████████                                 270K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Zustand | 763K | 0.001ms | 0.003ms | 1000 |
| Valtio | 640K | 0.002ms | 0.007ms | 1000 |
| Preact Signals | 565K | 0.002ms | 0.004ms | 1000 |
| Zen | 429K | 0.002ms | 0.004ms | 1000 |
| Jotai | 412K | 0.002ms | 0.005ms | 1000 |
| MobX | 270K | 0.004ms | 0.014ms | 1000 |
| Redux Toolkit | 3K | 0.325ms | 0.820ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   5.8M ops/sec
🥈 Zen                ████████████████████████████████████       5.2M ops/sec
🥉 Solid Signals      ███████████████████████████████████        5.0M ops/sec
 Valtio             ████████████████████████████               4.1M ops/sec
 MobX               ██████████████                             2.0M ops/sec
 Zustand            ████████                                   1.2M ops/sec
 Jotai              ████                                       511K ops/sec
 Redux Toolkit      █                                          132K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 5.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.2M | 0.001ms | 0.001ms | 1000 |
| Jotai | 511K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 132K | 0.008ms | 0.018ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   22.8M ops/sec
🥈 Solid Signals      ████████████████████████                   13.7M ops/sec
🥉 Valtio             ██████████████████                         10.4M ops/sec
 Redux Toolkit      █████                                      2.9M ops/sec
 Zustand            ████                                       2.4M ops/sec
 Preact Signals     ████                                       2.4M ops/sec
 MobX               ███                                        1.6M ops/sec
 Jotai              ██                                         1.0M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.8M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 13.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 10.4M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 2.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.4M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.003ms | 1000 |
| MobX | 1.6M | 0.001ms | 0.006ms | 1000 |
| Jotai | 1.0M | 0.001ms | 0.009ms | 1000 |

#### Nested Object Update

```
🥇 Solid Signals      ████████████████████████████████████████   9.1M ops/sec
🥈 Zen                ████████████████                           3.6M ops/sec
🥉 Preact Signals     █████████████                              2.9M ops/sec
 Zustand            ███████████                                2.6M ops/sec
 Valtio             ███████████                                2.4M ops/sec
 MobX               ████                                       936K ops/sec
 Jotai              ███                                        607K ops/sec
 Redux Toolkit      █                                          164K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 9.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.6M | 0.000ms | 0.002ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 936K | 0.001ms | 0.002ms | 1000 |
| Jotai | 607K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 164K | 0.006ms | 0.015ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Preact Signals     ████████████████████████████████████████   540K ops/sec
🥈 Zen                ███████████████████████████████████        469K ops/sec
🥉 Solid Signals      █████████████████████████                  337K ops/sec
 MobX               ███████████████████                        254K ops/sec
 Zustand            ██████████████████                         241K ops/sec
 Valtio             ████████████████                           211K ops/sec
 Jotai              ██                                         31K ops/sec
 Redux Toolkit      █                                          12K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 540K | 0.002ms | 0.007ms | 1000 |
| Zen | 469K | 0.002ms | 0.010ms | 1000 |
| Solid Signals | 337K | 0.003ms | 0.007ms | 1000 |
| MobX | 254K | 0.004ms | 0.008ms | 1000 |
| Zustand | 241K | 0.004ms | 0.008ms | 1000 |
| Valtio | 211K | 0.005ms | 0.010ms | 1000 |
| Jotai | 31K | 0.032ms | 0.081ms | 1000 |
| Redux Toolkit | 12K | 0.085ms | 0.240ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   142K ops/sec
🥈 Zen                ██████████████████████████████             108K ops/sec
🥉 Solid Signals      █████████████████████████████              102K ops/sec
 MobX               █████████████████████████                  90K ops/sec
 Zustand            █████████████████████████                  87K ops/sec
 Valtio             ████████████████████                       72K ops/sec
 Jotai              ████                                       13K ops/sec
 Redux Toolkit      ██                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 142K | 0.007ms | 0.021ms | 1000 |
| Zen | 108K | 0.009ms | 0.042ms | 1000 |
| Solid Signals | 102K | 0.010ms | 0.025ms | 1000 |
| MobX | 90K | 0.011ms | 0.020ms | 1000 |
| Zustand | 87K | 0.011ms | 0.018ms | 1000 |
| Valtio | 72K | 0.014ms | 0.019ms | 1000 |
| Jotai | 13K | 0.075ms | 0.175ms | 1000 |
| Redux Toolkit | 6K | 0.180ms | 0.615ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   13.7M ops/sec
🥈 Zen                █████████████████████████████████          11.3M ops/sec
🥉 MobX               █████████████                              4.3M ops/sec
 Zustand            ███████████                                3.7M ops/sec
 Valtio             ███████████                                3.6M ops/sec
 Preact Signals     █████████                                  3.1M ops/sec
 Jotai              █                                          330K ops/sec
 Redux Toolkit      █                                          257K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 13.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.1M | 0.000ms | 0.003ms | 1000 |
| Jotai | 330K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 257K | 0.004ms | 0.008ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.6M ops/sec
🥈 Valtio             ██████████████████████████████             1.2M ops/sec
🥉 Preact Signals     ██████████████                             560K ops/sec
 Solid Signals      ███████████                                453K ops/sec
 Zustand            ███████████                                444K ops/sec
 Zen                ███████████                                439K ops/sec
 Jotai              █████                                      196K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.6M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 560K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 453K | 0.002ms | 0.004ms | 1000 |
| Zustand | 444K | 0.002ms | 0.004ms | 1000 |
| Zen | 439K | 0.002ms | 0.007ms | 1000 |
| Jotai | 196K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 2K | 0.439ms | 1.073ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   2.2M ops/sec
🥈 Zen                ███                                        164K ops/sec
🥉 Preact Signals     ██                                         99K ops/sec
 Zustand            ██                                         97K ops/sec
 Redux Toolkit      █                                          55K ops/sec
 Valtio             █                                          41K ops/sec
 Jotai                                                         13K ops/sec
 MobX                                                          11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.2M | 0.000ms | 0.004ms | 1000 |
| Zen | 164K | 0.006ms | 0.014ms | 1000 |
| Preact Signals | 99K | 0.010ms | 0.036ms | 1000 |
| Zustand | 97K | 0.010ms | 0.068ms | 1000 |
| Redux Toolkit | 55K | 0.018ms | 0.077ms | 1000 |
| Valtio | 41K | 0.024ms | 0.052ms | 1000 |
| Jotai | 13K | 0.075ms | 0.499ms | 1000 |
| MobX | 11K | 0.089ms | 1.004ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Solid Signals      ████████████████████████████████████████   6.7M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    6.6M ops/sec
🥉 Zen                ██████████████████████████████████         5.8M ops/sec
 Valtio             ███████████████████████████████            5.2M ops/sec
 MobX               █████████████                              2.3M ops/sec
 Zustand            ██████████                                 1.8M ops/sec
 Jotai              ██                                         288K ops/sec
 Redux Toolkit      █                                          106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 6.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.8M | 0.001ms | 0.002ms | 1000 |
| Jotai | 288K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 106K | 0.009ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   28.3M ops/sec
🥈 Solid Signals      ███████████████████████████████████████    27.3M ops/sec
🥉 Preact Signals     ██████████████████████████████████         24.3M ops/sec
 MobX               ███████████████████████████                18.9M ops/sec
 Zen                ███████████████████                        13.5M ops/sec
 Valtio             ████████████████                           11.6M ops/sec
 Redux Toolkit      ███████████████                            10.6M ops/sec
 Jotai              ██████                                     4.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 28.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 27.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 24.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 18.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 11.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 10.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.3M | 0.000ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.7M ops/sec
🥈 Zen                █████████████████████████████              9.2M ops/sec
🥉 MobX               ██████████████████████████                 8.4M ops/sec
 Zustand            ██████████████████                         5.9M ops/sec
 Solid Signals      █████████████████                          5.5M ops/sec
 Valtio             ████████████████                           5.2M ops/sec
 Jotai              ███                                        835K ops/sec
 Redux Toolkit      █                                          165K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 835K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 165K | 0.006ms | 0.009ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   128K ops/sec
🥈 Solid Signals      ███████████████████████████████████        112K ops/sec
🥉 Preact Signals     █████████████████████████████████          105K ops/sec
 Zustand            ████████████████████████████████           101K ops/sec
 Jotai              █████████████████████████████              92K ops/sec
 MobX               ████                                       14K ops/sec
 Valtio             ██                                         5K ops/sec
 Redux Toolkit                                                 994 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 128K | 0.008ms | 0.013ms | 1000 |
| Solid Signals | 112K | 0.009ms | 0.024ms | 1000 |
| Preact Signals | 105K | 0.010ms | 0.012ms | 1000 |
| Zustand | 101K | 0.010ms | 0.014ms | 1000 |
| Jotai | 92K | 0.011ms | 0.017ms | 1000 |
| MobX | 14K | 0.072ms | 0.131ms | 1000 |
| Valtio | 5K | 0.200ms | 0.561ms | 1000 |
| Redux Toolkit | 994 | 1.006ms | 1.869ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 MobX               ████████████████████████████████████████   4.6M ops/sec
🥈 Valtio             █████████████████████████                  2.8M ops/sec
🥉 Zustand            ████                                       510K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 4.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 510K | 0.002ms | 0.003ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Valtio             ████████████████████████████████████████   1.2M ops/sec
🥈 MobX               ███████████████████                        555K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 1.2M | 0.001ms | 0.002ms | 1000 |
| MobX | 555K | 0.002ms | 0.010ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Valtio             ████████████████████████████████████████   3.2M ops/sec
🥈 MobX               ████████████████                           1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 3.2M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.004ms | 1000 |

#### Dynamic Dependencies

```
🥇 MobX               ████████████████████████████████████████   8.2M ops/sec
🥈 Valtio             █████████████████████                      4.4M ops/sec
🥉 Zustand            ██████████████████                         3.8M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 8.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 MobX               ████████████████████████████████████████   631K ops/sec
🥈 Valtio             █████████████                              209K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 631K | 0.002ms | 0.008ms | 1000 |
| Valtio | 209K | 0.005ms | 0.008ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 MobX               ████████████████████████████████████████   639K ops/sec
🥈 Valtio             ████████████████████████████████████       577K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 639K | 0.002ms | 0.007ms | 1000 |
| Valtio | 577K | 0.002ms | 0.002ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 MobX               ████████████████████████████████████████   1.2M ops/sec
🥈 Valtio             ████████████                               372K ops/sec
🥉 Zustand            ███                                        95K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.2M | 0.001ms | 0.004ms | 1000 |
| Valtio | 372K | 0.003ms | 0.010ms | 1000 |
| Zustand | 95K | 0.011ms | 0.014ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 MobX               ████████████████████████████████████████   1.8M ops/sec
🥈 Valtio             ████████████████████████████               1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.8M | 0.001ms | 0.006ms | 1000 |
| Valtio | 1.3M | 0.001ms | 0.003ms | 1000 |


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

**Total**: 20 tests × 8 libraries = 160 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
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

*Generated on 2025-11-13T21:01:01.415Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
