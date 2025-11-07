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
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.4.0` | 3.04KB | Nov 7, 2025 | ✅ Latest |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.2.0` | 5.20KB | Nov 7, 2025 | ✅ Latest |
| **[jotai](https://github.com/pmndrs/jotai)** | `v2.15.1` | 4.29KB | Dec 6, 2024 | ✅ Latest |
| **[mobx](https://github.com/mobxjs/mobx)** | `v6.15.0` | 17.56KB | Dec 6, 2024 | ✅ Latest |
| **[recoil](https://github.com/facebookexperimental/Recoil)** | `v0.7.7` | 23.48KB | Nov 6, 2025 | ✅ Latest |
| **[solid-js](https://github.com/solidjs/solid)** | `v1.9.10` | 3.96KB | Dec 6, 2024 | ✅ Latest |
| **[valtio](https://github.com/pmndrs/valtio)** | `v2.2.0` | 3.07KB | Nov 6, 2025 | ✅ Latest |
| **[zustand](https://github.com/pmndrs/zustand)** | `v5.0.8` | 1.17KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 3.08KB | Baseline |
| 🥈 | **[@preact/signals](https://github.com/preactjs/signals)** | 3.04KB | 8.97KB | 2.59x |
| 🥉 | **[valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 8.27KB | 2.62x |
| 4 | **[solid-js](https://github.com/solidjs/solid)** | 3.96KB | 11.91KB | 3.38x |
| 5 | **[jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 11.12KB | 3.66x |
| 6 | **[@sylphx/zen](https://github.com/sylphxltd/zen)** | 5.20KB | 18.41KB | 4.44x |
| 7 | **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 40.60KB | 11.79x |
| 8 | **[mobx](https://github.com/mobxjs/mobx)** | 17.56KB | 63.65KB | 14.97x |
| 9 | **[recoil](https://github.com/facebookexperimental/Recoil)** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 65.0/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 58.5/100 | 90.0% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 52.5/100 | 80.8% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 12.3/100 | 18.9% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.2/100 | 11.1% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.5/100 | 6.9% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.0/100 | 6.2% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.0/100 | 4.6% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 100/100 | Excellent |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.04KB | 91/100 | Excellent |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 91/100 | Excellent |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.96KB | 85/100 | Good |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 83/100 | Good |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 5.20KB | 79/100 | Good |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 58/100 | Average |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 17.56KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 13/13 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 13/13 | 100% |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12/13 | 92% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12/13 | 92% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 12/13 | 92% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 12/13 | 92% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 12/13 | 92% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 12/13 | 92% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 36.03M
🥈 Zen                  █████████████████████████████████████ 33.48M
🥉 Preact Signals       ███████████████████████████████████ 31.87M
   Valtio               ██████ 5.62M
   MobX                 ██████ 5.57M
   Jotai                ██ 1.47M
   Redux Toolkit        █ 848.71K
   Zustand               356.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 36.03M | ±0.12% | 0.0278ms | 0.0420ms | 18.02M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 33.48M | ±0.06% | 0.0299ms | 0.0420ms | 16.74M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 31.87M | ±0.09% | 0.0314ms | 0.0420ms | 15.93M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.62M | ±0.15% | 0.1778ms | 0.2500ms | 2.81M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 5.57M | ±2.09% | 0.1797ms | 0.2500ms | 2.78M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.47M | ±2.38% | 0.6809ms | 1.6670ms | 734.34K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 848.71K | ±2.09% | 1.1783ms | 2.4590ms | 424.35K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 356.95K | ±0.17% | 2.8015ms | 3.3330ms | 178.47K |

**Key Insight:** Solid Signals is **100.95x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 36.86M
🥈 Redux Toolkit        ███████████████████████████████████████ 36.20M
🥉 Preact Signals       █████████████████████████████████████ 33.81M
   Zen                  ███████████████████████████████████ 32.34M
   Zustand              ███████████████████████████████ 28.92M
   Valtio               ██████████████████████████ 23.70M
   MobX                 ███████████ 9.70M
   Jotai                ███ 2.74M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 36.86M | ±0.05% | 0.0271ms | 0.0420ms | 18.43M |
| 🥈 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 36.20M | ±0.06% | 0.0276ms | 0.0420ms | 18.10M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 33.81M | ±0.05% | 0.0296ms | 0.0420ms | 16.91M |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 32.34M | ±0.09% | 0.0309ms | 0.0420ms | 16.17M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 28.92M | ±0.44% | 0.0346ms | 0.0420ms | 14.46M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.70M | ±0.04% | 0.0422ms | 0.0830ms | 11.85M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 9.70M | ±0.33% | 0.1031ms | 0.1250ms | 4.85M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.74M | ±0.35% | 0.3652ms | 0.4580ms | 1.37M |

**Key Insight:** Solid Signals is **13.46x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 27.71M
🥈 Preact Signals       ████████████████████████████████████ 24.83M
🥉 Zen                  █████████████████████████████████ 23.18M
   Valtio               ███████ 5.05M
   MobX                 ███████ 4.95M
   Jotai                ███ 1.92M
   Redux Toolkit        █ 633.04K
   Zustand              █ 362.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 27.71M | ±0.06% | 0.0361ms | 0.0830ms | 13.86M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 24.83M | ±0.09% | 0.0403ms | 0.0840ms | 12.42M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 23.18M | ±0.50% | 0.0431ms | 0.0840ms | 11.59M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.05M | ±0.55% | 0.1982ms | 0.2500ms | 2.52M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 4.95M | ±0.61% | 0.2019ms | 0.3340ms | 2.48M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.92M | ±1.81% | 0.5208ms | 1.1670ms | 960.08K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 633.04K | ±0.44% | 1.5797ms | 1.9590ms | 316.52K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 362.04K | ±0.82% | 2.7621ms | 3.4160ms | 181.02K |

**Key Insight:** Solid Signals is **76.55x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 438.24K
🥈 Valtio               █████████████████████████████ 321.46K
🥉 Preact Signals       █ 14.35K
   Jotai                █ 14.33K
   Zustand              █ 14.15K
   Zen                  █ 14.01K
   Solid Signals        █ 13.72K
   Redux Toolkit        █ 6.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 438.24K | ±7.87% | 2.2818ms | 2.5420ms | 219.12K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 321.46K | ±17.69% | 3.1109ms | 3.4580ms | 160.73K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.35K | ±13.73% | 69.6736ms | 120.3340ms | 7.21K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 14.33K | ±13.19% | 69.7785ms | 122.7080ms | 7.17K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 14.15K | ±12.47% | 70.6717ms | 126.8750ms | 7.08K |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 14.01K | ±14.00% | 71.3573ms | 121.0830ms | 7.01K |
| 7 | **[Solid Signals](https://github.com/solidjs/solid)** | 13.72K | ±14.64% | 72.9048ms | 122.7090ms | 6.97K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 6.44K | ±1.28% | 155.2325ms | 335.4170ms | 3.22K |

**Key Insight:** MobX is **68.03x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 25.28M
🥈 Preact Signals       ██████████████████████████████████ 21.61M
🥉 Zen                  ███████████████████████████ 17.12M
   Valtio               ████████████ 7.61M
   MobX                 ██████████ 6.16M
   Jotai                ███ 1.97M
   Redux Toolkit        ██ 1.01M
   Zustand              █ 381.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 25.28M | ±0.07% | 0.0396ms | 0.0840ms | 12.64M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 21.61M | ±0.10% | 0.0463ms | 0.1250ms | 10.81M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 17.12M | ±0.94% | 0.0584ms | 0.1250ms | 8.56M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.61M | ±0.52% | 0.1314ms | 0.2500ms | 3.80M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 6.16M | ±1.27% | 0.1624ms | 0.2500ms | 3.08M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.97M | ±1.25% | 0.5071ms | 1.4160ms | 986.07K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.01M | ±1.04% | 0.9854ms | 1.3750ms | 507.42K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 381.46K | ±0.62% | 2.6215ms | 3.2080ms | 190.73K |

**Key Insight:** Solid Signals is **66.27x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.91M
🥈 Zen                  ██████████ 2.63M
🥉 Preact Signals       ██████ 1.66M
   Redux Toolkit        █ 258.50K
   Zustand              █ 211.18K
   Jotai                █ 144.68K
   MobX                 █ 144.59K
   Valtio                17.05
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.91M | ±2.59% | 0.0917ms | 0.1250ms | 5.46M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.63M | ±2.31% | 0.3809ms | 0.5420ms | 1.31M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.66M | ±1.28% | 0.6008ms | 0.7920ms | 832.21K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 258.50K | ±10.56% | 3.8685ms | 5.0000ms | 130.13K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 211.18K | ±12.06% | 4.7353ms | 5.0830ms | 105.82K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 144.68K | ±5.91% | 6.9119ms | 8.9170ms | 72.34K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 144.59K | ±10.87% | 6.9160ms | 7.7500ms | 72.30K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.05 | ±8.03% | 58647.9043ms | 75964.7910ms | 10.00 |

**Key Insight:** Solid Signals is **639880.98x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 22.39M
🥈 Preact Signals       ██████████████████████████████████ 18.87M
🥉 Zen                  ███████████████████████ 13.02M
   Valtio               █████ 2.60M
   MobX                 ███ 1.91M
   Redux Toolkit        █ 523.32K
   Jotai                █ 465.16K
   Zustand              █ 337.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.39M | ±0.05% | 0.0447ms | 0.0840ms | 11.19M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 18.87M | ±0.05% | 0.0530ms | 0.1250ms | 9.44M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 13.02M | ±0.05% | 0.0768ms | 0.1250ms | 6.51M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.60M | ±0.54% | 0.3852ms | 0.5000ms | 1.30M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 1.91M | ±5.47% | 0.5227ms | 0.6670ms | 956.61K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 523.32K | ±1.69% | 1.9109ms | 2.3750ms | 261.66K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 465.16K | ±20.06% | 2.1498ms | 4.0840ms | 232.58K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 337.57K | ±1.18% | 2.9623ms | 4.5830ms | 168.79K |

**Key Insight:** Solid Signals is **66.32x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 4.43K
🥈 Preact Signals       ███████████████████████████████████████ 4.33K
🥉 Solid Signals        ██████████████████████████████████████ 4.20K
   Jotai                ██████████████████████████████████████ 4.17K
   Zen                  █████████████████████████████████████ 4.11K
   Redux Toolkit        ████ 395.59
   MobX                  13.15
   Valtio                5.57
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.43K | ±6.36% | 225.5706ms | 281.8750ms | 2.22K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.33K | ±6.56% | 230.9594ms | 290.2090ms | 2.18K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.20K | ±7.02% | 238.3166ms | 302.7500ms | 2.10K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.17K | ±6.99% | 239.5564ms | 312.9170ms | 2.09K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 4.11K | ±7.30% | 243.6037ms | 350.6670ms | 2.05K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 395.59 | ±3.55% | 2527.8897ms | 3579.2920ms | 198.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 13.15 | ±1.97% | 76049.5831ms | 80786.3750ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.57 | ±1.98% | 179461.6126ms | 187645.6250ms | 10.00 |

**Key Insight:** Zustand is **795.59x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 11.67K
🥈 Zen                  ████████████████████████████████████████ 11.56K
🥉 Preact Signals       ██████████████████ 5.22K
   Zustand              ██████████████████ 5.15K
   Solid Signals        █████████████████ 5.09K
   Redux Toolkit        ███ 979.61
   Valtio                46.02
   MobX                  16.56
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.67K | ±0.18% | 85.6596ms | 104.9590ms | 5.84K |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 11.56K | ±0.13% | 86.5135ms | 97.5410ms | 5.78K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.22K | ±18.90% | 191.4746ms | 241.1670ms | 2.61K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.15K | ±17.55% | 194.0330ms | 321.1670ms | 2.58K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.09K | ±20.44% | 196.4879ms | 257.4160ms | 2.58K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 979.61 | ±2.26% | 1020.8189ms | 2333.0000ms | 490.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 46.02 | ±0.86% | 21730.5174ms | 22821.5830ms | 24.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 16.56 | ±2.51% | 60397.8539ms | 64914.9160ms | 10.00 |

**Key Insight:** Jotai is **705.09x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.16K
🥈 Zustand              ██████████████████ 5.05K
🥉 Preact Signals       ██████████████████ 4.98K
   Solid Signals        ██████████████████ 4.93K
   Jotai                ██████████████████ 4.93K
   Redux Toolkit        ████ 1.07K
   Valtio                44.82
   MobX                  15.75
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.16K | ±0.27% | 89.5685ms | 117.5420ms | 5.58K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.05K | ±18.25% | 198.0188ms | 251.3340ms | 2.53K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.98K | ±16.52% | 200.7337ms | 346.5410ms | 2.49K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.93K | ±18.69% | 202.6852ms | 251.4170ms | 2.47K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.93K | ±18.76% | 203.0328ms | 364.2920ms | 2.46K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.07K | ±1.40% | 933.2728ms | 1817.8330ms | 536.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 44.82 | ±1.00% | 22310.5544ms | 23943.4170ms | 23.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.75 | ±2.24% | 63482.5499ms | 67003.2080ms | 10.00 |

**Key Insight:** Zen is **708.76x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 22.79M
🥈 Preact Signals       ███████████████████████████████████ 20.01M
🥉 Zen                  ████████████████████████████ 15.95M
   Valtio               ███████ 4.01M
   MobX                 ████ 2.36M
   Jotai                ███ 1.73M
   Zustand              █ 331.19K
   Redux Toolkit         207.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.79M | ±0.95% | 0.0439ms | 0.0840ms | 11.40M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 20.01M | ±2.65% | 0.0500ms | 0.1250ms | 10.01M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 15.95M | ±1.46% | 0.0627ms | 0.1250ms | 7.98M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.01M | ±0.95% | 0.2494ms | 0.3340ms | 2.00M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.36M | ±0.89% | 0.4240ms | 0.5420ms | 1.18M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.73M | ±1.30% | 0.5797ms | 2.8330ms | 862.55K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 331.19K | ±0.79% | 3.0194ms | 3.7090ms | 165.60K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 207.64K | ±1.03% | 4.8160ms | 6.4590ms | 103.82K |

**Key Insight:** Solid Signals is **109.78x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 232.61K
🥈 Preact Signals       ███████████████████████████████████████ 225.81K
🥉 Zen                  █████████████████████████████ 166.40K
   Jotai                ███████████████████████████ 157.29K
   Zustand              ███████████████████ 110.25K
   Valtio               ██████████ 56.35K
   MobX                 ██ 13.32K
   Redux Toolkit        █ 3.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 232.61K | ±0.87% | 4.2991ms | 10.4170ms | 116.31K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 225.81K | ±0.91% | 4.4285ms | 9.0420ms | 112.91K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 166.40K | ±0.79% | 6.0096ms | 15.2920ms | 83.20K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 157.29K | ±1.55% | 6.3578ms | 22.6670ms | 78.64K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 110.25K | ±1.28% | 9.0707ms | 26.3750ms | 55.12K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 56.35K | ±0.84% | 17.7448ms | 44.9170ms | 28.18K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 13.32K | ±21.03% | 75.0570ms | 235.3330ms | 6.66K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.28K | ±2.65% | 304.5777ms | 720.2920ms | 1.64K |

**Key Insight:** Solid Signals is **70.85x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.02M
🥈 Jotai                ██████████████████ 1.82M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.02M | ±0.94% | 0.2490ms | 0.4160ms | 2.01M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.82M | ±1.12% | 0.5490ms | 0.8340ms | 910.77K |

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

*Last generated: 2025-11-07T02:14:09.657Z*
