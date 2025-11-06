# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 6, 2025
- **Last Run:** 5:14:06 PM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.3.2` | 3.04KB | Dec 6, 2024 | ✅ Latest |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.0.0` | 4.10KB | Dec 6, 2024 | ✅ Latest |
| **[jotai](https://github.com/pmndrs/jotai)** | `v2.15.1` | 4.29KB | Dec 6, 2024 | ✅ Latest |
| **[mobx](https://github.com/mobxjs/mobx)** | `v6.15.0` | 17.56KB | Dec 6, 2024 | ✅ Latest |
| **[recoil](https://github.com/facebookexperimental/Recoil)** | `v0.7.7` | 23.48KB | Nov 6, 2025 | ✅ Latest |
| **[solid-js](https://github.com/solidjs/solid)** | `v1.9.10` | 3.96KB | Dec 6, 2024 | ✅ Latest |
| **[valtio](https://github.com/pmndrs/valtio)** | `v1.13.2` | 3.07KB | Nov 6, 2025 | 📦 v2.2.0 available |
| **[zustand](https://github.com/pmndrs/zustand)** | `v4.5.7` | 1.17KB | Nov 6, 2025 | 📦 v5.0.8 available |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 3.08KB | Baseline |
| 🥈 | **[@preact/signals](https://github.com/preactjs/signals)** | 3.04KB | 8.97KB | 2.59x |
| 🥉 | **[valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 8.27KB | 2.62x |
| 4 | **[solid-js](https://github.com/solidjs/solid)** | 3.96KB | 11.91KB | 3.38x |
| 5 | **[@sylphx/zen](https://github.com/sylphxltd/zen)** | 4.10KB | 14.49KB | 3.50x |
| 6 | **[jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 11.12KB | 3.66x |
| 7 | **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 40.60KB | 11.79x |
| 8 | **[mobx](https://github.com/mobxjs/mobx)** | 17.56KB | 63.65KB | 14.97x |
| 9 | **[recoil](https://github.com/facebookexperimental/Recoil)** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand) - Async Fetch** | 100.0/100 | Baseline |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals) - Async Fetch** | 99.5/100 | 99.5% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid) - Async Fetch** | 99.3/100 | 99.3% |
| 4 | **[MobX](https://github.com/mobxjs/mobx) - Async Fetch** | 98.6/100 | 98.6% |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Async Fetch** | 98.4/100 | 98.4% |
| 6 | **[Zen](https://github.com/sylphxltd/zen) - Async Fetch** | 97.9/100 | 97.9% |
| 7 | **[Jotai](https://github.com/pmndrs/jotai) - Async Fetch** | 97.0/100 | 97.0% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio) - Async Fetch** | 96.5/100 | 96.5% |
| 9 | **[Solid Signals](https://github.com/solidjs/solid)** | 63.8/100 | 63.8% |
| 10 | **[Zen](https://github.com/sylphxltd/zen)** | 59.9/100 | 59.9% |
| 11 | **[Preact Signals](https://github.com/preactjs/signals)** | 53.4/100 | 53.4% |
| 12 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.1/100 | 11.1% |
| 13 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.1/100 | 7.1% |
| 14 | **[MobX](https://github.com/mobxjs/mobx)** | 4.3/100 | 4.3% |
| 15 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.9/100 | 3.9% |
| 16 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.7/100 | 2.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 100/100 | Excellent |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.04KB | 91/100 | Excellent |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 91/100 | Excellent |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.96KB | 85/100 | Good |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 4.10KB | 84/100 | Good |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 83/100 | Good |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 58/100 | Average |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 17.56KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12/13 | 92% |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 12/13 | 92% |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 12/13 | 92% |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 12/13 | 92% |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 12/13 | 92% |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 12/13 | 92% |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 12/13 | 92% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 12/13 | 92% |
| 9 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Async Fetch** | 1/13 | 8% |
| 9 | **[Zustand](https://github.com/pmndrs/zustand) - Async Fetch** | 1/13 | 8% |
| 9 | **[Jotai](https://github.com/pmndrs/jotai) - Async Fetch** | 1/13 | 8% |
| 9 | **[MobX](https://github.com/mobxjs/mobx) - Async Fetch** | 1/13 | 8% |
| 9 | **[Valtio](https://github.com/pmndrs/valtio) - Async Fetch** | 1/13 | 8% |
| 9 | **[Preact Signals](https://github.com/preactjs/signals) - Async Fetch** | 1/13 | 8% |
| 9 | **[Solid Signals](https://github.com/solidjs/solid) - Async Fetch** | 1/13 | 8% |
| 9 | **[Zen](https://github.com/sylphxltd/zen) - Async Fetch** | 1/13 | 8% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 32.46M
🥈 Preact Signals       ████████████████████████████████████████ 32.10M
🥉 Solid Signals        ███████████████████████████████████████ 31.26M
   MobX                 ███████ 5.75M
   Valtio               █████ 4.14M
   Jotai                ██ 1.54M
   Redux Toolkit        █ 867.85K
   Zustand               375.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 32.46M | ±0.94% | 0.0308ms | 0.0830ms | 16.23M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 32.10M | ±0.10% | 0.0312ms | 0.0420ms | 16.05M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 31.26M | ±0.51% | 0.0320ms | 0.0840ms | 15.63M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.75M | ±0.22% | 0.1738ms | 0.2500ms | 2.88M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.14M | ±2.50% | 0.2415ms | 0.5420ms | 2.07M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.54M | ±3.17% | 0.6484ms | 1.5000ms | 771.12K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 867.85K | ±0.65% | 1.1523ms | 1.4580ms | 433.92K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 375.73K | ±0.18% | 2.6615ms | 3.2920ms | 187.86K |

**Key Insight:** Zen is **86.39x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 37.09M
🥈 Zen                  ████████████████████████████████████████ 37.00M
🥉 Redux Toolkit        ██████████████████████████████████████ 35.65M
   Preact Signals       █████████████████████████████████████ 34.34M
   Zustand              ███████████████████████████████ 28.33M
   Valtio               ███████████████████████ 21.14M
   MobX                 ██████████ 9.45M
   Jotai                ███ 2.69M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 37.09M | ±0.05% | 0.0270ms | 0.0420ms | 18.54M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 37.00M | ±0.07% | 0.0270ms | 0.0420ms | 18.50M |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 35.65M | ±0.22% | 0.0281ms | 0.0420ms | 17.82M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 34.34M | ±0.05% | 0.0291ms | 0.0420ms | 17.17M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 28.33M | ±0.30% | 0.0353ms | 0.0840ms | 14.17M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.14M | ±1.05% | 0.0473ms | 0.0840ms | 10.57M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 9.45M | ±0.48% | 0.1058ms | 0.2500ms | 4.73M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.69M | ±0.39% | 0.3713ms | 0.6250ms | 1.35M |

**Key Insight:** Solid Signals is **13.77x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 26.95M
🥈 Solid Signals        ████████████████████████████████████████ 26.81M
🥉 Preact Signals       ██████████████████████████████████████ 25.59M
   MobX                 █████████ 5.97M
   Valtio               ███████ 5.00M
   Jotai                ███ 2.17M
   Redux Toolkit        █ 621.21K
   Zustand               333.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 26.95M | ±0.04% | 0.0371ms | 0.0830ms | 13.47M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 26.81M | ±5.47% | 0.0373ms | 0.0830ms | 13.40M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 25.59M | ±3.60% | 0.0391ms | 0.0840ms | 12.79M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.97M | ±0.13% | 0.1674ms | 0.2090ms | 2.99M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.00M | ±0.99% | 0.1999ms | 0.2500ms | 2.50M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.17M | ±2.74% | 0.4608ms | 0.6250ms | 1.09M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 621.21K | ±0.84% | 1.6098ms | 2.2920ms | 310.61K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 333.55K | ±0.95% | 2.9980ms | 10.0830ms | 166.78K |

**Key Insight:** Zen is **80.79x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 444.44K
🥈 Valtio               █████████████████████████ 272.36K
🥉 Zustand              █ 16.13K
   Jotai                █ 15.64K
   Preact Signals       █ 14.24K
   Solid Signals        █ 14.14K
   Zen                  █ 13.92K
   Redux Toolkit        █ 7.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 444.44K | ±11.84% | 2.2500ms | 2.1660ms | 222.22K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 272.36K | ±17.27% | 3.6717ms | 5.0830ms | 140.30K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 16.13K | ±12.38% | 61.9890ms | 149.5420ms | 8.07K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 15.64K | ±12.74% | 63.9527ms | 141.6250ms | 7.82K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.24K | ±13.78% | 70.2105ms | 114.2920ms | 7.26K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 14.14K | ±14.36% | 70.7230ms | 118.0410ms | 7.07K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 13.92K | ±14.75% | 71.8604ms | 140.4590ms | 6.96K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.30K | ±0.88% | 136.9298ms | 193.9590ms | 3.65K |

**Key Insight:** MobX is **60.86x faster** than Redux Toolkit in this category.

### Async Operations

**Performance Comparison:**

```
🥇 Zustand - Async F... ████████████████████████████████████████ 879.98
🥈 Preact Signals - ... ████████████████████████████████████████ 875.47
🥉 Solid Signals - A... ████████████████████████████████████████ 873.91
   MobX - Async Fetch   ███████████████████████████████████████ 867.65
   Redux Toolkit - A... ███████████████████████████████████████ 865.52
   Zen - Async Fetch    ███████████████████████████████████████ 861.65
   Jotai - Async Fetch  ███████████████████████████████████████ 853.73
   Valtio - Async Fetch ███████████████████████████████████████ 849.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand) - Async Fetch** | 879.98 | ±1.25% | 1136.3956ms | 1208.4170ms | 441.00 |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals) - Async Fetch** | 875.47 | ±1.33% | 1142.2439ms | 1213.1250ms | 438.00 |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid) - Async Fetch** | 873.91 | ±1.40% | 1144.2842ms | 1259.0000ms | 437.00 |
| 4 | **[MobX](https://github.com/mobxjs/mobx) - Async Fetch** | 867.65 | ±1.81% | 1152.5358ms | 1291.1250ms | 434.00 |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Async Fetch** | 865.52 | ±1.31% | 1155.3690ms | 1281.6670ms | 433.00 |
| 6 | **[Zen](https://github.com/sylphxltd/zen) - Async Fetch** | 861.65 | ±1.48% | 1160.5634ms | 1488.5420ms | 431.00 |
| 7 | **[Jotai](https://github.com/pmndrs/jotai) - Async Fetch** | 853.73 | ±2.25% | 1171.3347ms | 1453.1250ms | 427.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio) - Async Fetch** | 849.30 | ±1.11% | 1177.4424ms | 1284.6660ms | 425.00 |

**Key Insight:** Zustand - Async Fetch is **1.04x faster** than Valtio - Async Fetch in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 31.56M
🥈 Solid Signals        █████████████████████████████████████ 29.18M
🥉 Preact Signals       █████████████████████████████████ 26.17M
   Valtio               █████████ 6.93M
   MobX                 ███████ 5.54M
   Jotai                ███ 2.06M
   Redux Toolkit        █ 1.01M
   Zustand               359.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 31.56M | ±0.19% | 0.0317ms | 0.0830ms | 15.78M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 29.18M | ±0.17% | 0.0343ms | 0.0830ms | 14.59M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 26.17M | ±0.05% | 0.0382ms | 0.0840ms | 13.09M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.93M | ±0.51% | 0.1443ms | 0.2500ms | 3.47M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 5.54M | ±1.30% | 0.1806ms | 0.4580ms | 2.77M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.06M | ±1.20% | 0.4861ms | 1.3330ms | 1.03M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.01M | ±0.61% | 0.9862ms | 1.3330ms | 507.02K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 359.20K | ±0.48% | 2.7839ms | 3.2090ms | 179.60K |

**Key Insight:** Zen is **87.86x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 13.25M
🥈 Preact Signals       █████ 1.76M
🥉 Zen                  ████ 1.42M
   Redux Toolkit        █ 245.46K
   Zustand              █ 185.48K
   MobX                  108.37K
   Jotai                 98.71K
   Valtio                15.77
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 13.25M | ±2.74% | 0.0754ms | 0.1250ms | 6.63M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.76M | ±1.37% | 0.5681ms | 0.7920ms | 880.73K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 1.42M | ±1.27% | 0.7055ms | 1.0000ms | 708.72K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 245.46K | ±11.16% | 4.0740ms | 7.6250ms | 122.73K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 185.48K | ±16.61% | 5.3913ms | 15.5840ms | 93.55K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 108.37K | ±18.55% | 9.2278ms | 13.1250ms | 54.18K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 98.71K | ±5.72% | 10.1308ms | 90.5410ms | 49.50K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 15.77 | ±3.94% | 63400.3959ms | 67821.5420ms | 10.00 |

**Key Insight:** Solid Signals is **840341.76x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 21.42M
🥈 Zen                  ██████████████████████████████████████ 20.60M
🥉 Preact Signals       ████████████████████████████████████ 19.47M
   Valtio               █████ 2.47M
   MobX                 ███ 1.84M
   Jotai                █ 711.40K
   Redux Toolkit        █ 553.27K
   Zustand              █ 364.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.42M | ±6.00% | 0.0467ms | 0.0840ms | 10.71M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 20.60M | ±0.54% | 0.0485ms | 0.1250ms | 10.30M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 19.47M | ±0.37% | 0.0514ms | 0.1250ms | 9.74M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.47M | ±0.65% | 0.4048ms | 0.5000ms | 1.24M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.84M | ±4.48% | 0.5449ms | 1.2500ms | 917.57K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 711.40K | ±1.21% | 1.4057ms | 2.0000ms | 355.70K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 553.27K | ±0.86% | 1.8074ms | 2.2080ms | 276.64K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 364.32K | ±0.47% | 2.7448ms | 3.2920ms | 182.16K |

**Key Insight:** Solid Signals is **58.79x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.72K
🥈 Preact Signals       ███████████████████████████████████████ 4.55K
🥉 Solid Signals        ██████████████████████████████████████ 4.50K
   Zustand              █████████████████████████████████████ 4.41K
   Jotai                █████████████████████████████████████ 4.39K
   Redux Toolkit        ███ 375.38
   MobX                  10.31
   Valtio                3.81
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.72K | ±5.89% | 211.8746ms | 253.5000ms | 2.36K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.55K | ±6.21% | 219.9513ms | 266.3750ms | 2.27K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.50K | ±6.50% | 221.9809ms | 266.8330ms | 2.25K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.41K | ±6.98% | 226.9670ms | 361.4580ms | 2.20K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.39K | ±6.46% | 227.8693ms | 270.5830ms | 2.19K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 375.38 | ±1.12% | 2663.9745ms | 3487.3750ms | 188.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 10.31 | ±16.94% | 97031.5625ms | 145248.0410ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.81 | ±17.02% | 262311.8707ms | 439088.1250ms | 10.00 |

**Key Insight:** Zen is **1238.05x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 12.28K
🥈 Jotai                ██████████████████████████████████████ 11.66K
🥉 Solid Signals        ████████████████████ 6.12K
   Zustand              ████████████████████ 6.03K
   Preact Signals       ███████████████████ 5.95K
   Redux Toolkit        ███ 1.02K
   Valtio                45.62
   MobX                  15.47
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 12.28K | ±0.06% | 81.4054ms | 89.3330ms | 6.14K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.66K | ±0.06% | 85.7519ms | 93.5000ms | 5.83K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.12K | ±14.44% | 163.3040ms | 210.6250ms | 3.06K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 6.03K | ±15.38% | 165.7075ms | 209.8750ms | 3.02K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.95K | ±15.12% | 168.1716ms | 215.8750ms | 2.97K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.02K | ±1.08% | 977.9364ms | 1672.7500ms | 512.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 45.62 | ±1.60% | 21921.3497ms | 25025.0410ms | 23.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.47 | ±6.41% | 64628.6998ms | 80678.5830ms | 10.00 |

**Key Insight:** Zen is **793.91x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.96K
🥈 Jotai                ██████████████████ 5.42K
🥉 Zustand              ██████████████████ 5.35K
   Solid Signals        █████████████████ 5.07K
   Preact Signals       █████████████████ 4.94K
   Redux Toolkit        ███ 1.03K
   Valtio                45.48
   MobX                  15.17
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.96K | ±0.10% | 83.5968ms | 91.8330ms | 5.98K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.42K | ±14.77% | 184.5849ms | 230.5000ms | 2.71K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.35K | ±16.76% | 186.8573ms | 230.9590ms | 2.68K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.07K | ±17.71% | 197.4116ms | 294.1670ms | 2.53K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.94K | ±16.86% | 202.4758ms | 436.0000ms | 2.47K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±0.90% | 973.8365ms | 1492.7910ms | 514.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 45.48 | ±1.95% | 21986.5743ms | 25224.5840ms | 23.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.17 | ±7.59% | 65930.2834ms | 85291.5420ms | 10.00 |

**Key Insight:** Zen is **788.67x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 23.57M
🥈 Preact Signals       ████████████████████████████████████████ 23.53M
🥉 Solid Signals        ████████████████████████████████ 18.94M
   Valtio               ███████ 4.14M
   MobX                 ████ 2.54M
   Jotai                ███ 1.95M
   Zustand              █ 364.21K
   Redux Toolkit         227.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 23.57M | ±0.48% | 0.0424ms | 0.0840ms | 11.78M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 23.53M | ±0.09% | 0.0425ms | 0.0840ms | 11.77M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 18.94M | ±26.52% | 0.0528ms | 0.0840ms | 9.47M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.14M | ±1.14% | 0.2415ms | 0.3330ms | 2.07M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.54M | ±0.49% | 0.3932ms | 0.4590ms | 1.27M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.95M | ±0.71% | 0.5127ms | 1.1670ms | 975.29K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 364.21K | ±0.74% | 2.7457ms | 3.2910ms | 182.10K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 227.77K | ±0.79% | 4.3905ms | 4.8750ms | 113.88K |

**Key Insight:** Zen is **103.48x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 277.49K
🥈 Preact Signals       ████████████████████████████████████████ 277.48K
🥉 Jotai                ███████████████████████████ 186.96K
   Zen                  ███████████████████████████ 184.30K
   Zustand              ████████████████████ 140.07K
   Valtio               ██████████ 72.25K
   MobX                 ████ 26.71K
   Redux Toolkit        █ 3.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 277.49K | ±1.18% | 3.6038ms | 6.3330ms | 138.74K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 277.48K | ±1.09% | 3.6039ms | 6.2500ms | 138.74K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 186.96K | ±2.91% | 5.3489ms | 10.6660ms | 93.48K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 184.30K | ±1.71% | 5.4259ms | 14.8330ms | 92.15K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 140.07K | ±0.96% | 7.1392ms | 9.6670ms | 70.04K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 72.25K | ±0.59% | 13.8413ms | 28.4170ms | 36.12K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 26.71K | ±1.20% | 37.4414ms | 77.0830ms | 13.36K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.77K | ±2.45% | 265.0200ms | 495.4590ms | 1.89K |

**Key Insight:** Solid Signals is **73.54x faster** than Redux Toolkit in this category.

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-06T21:50:21.542Z*
