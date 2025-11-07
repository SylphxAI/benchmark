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
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 64.8/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 62.3/100 | 96.1% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 53.2/100 | 82.1% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 13.0/100 | 20.1% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.5/100 | 11.6% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.8/100 | 7.4% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.1/100 | 6.3% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.9/100 | 4.5% |

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
🥇 Preact Signals       ████████████████████████████████████████ 33.22M
🥈 Solid Signals        ████████████████████████████████████████ 33.17M
🥉 Zen                  ████████████████████████████████████████ 33.11M
   MobX                 ███████ 5.76M
   Valtio               ███████ 5.56M
   Jotai                ██ 1.66M
   Redux Toolkit        █ 886.73K
   Zustand               373.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 33.22M | ±0.05% | 0.0301ms | 0.0420ms | 16.61M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 33.17M | ±0.05% | 0.0301ms | 0.0420ms | 16.59M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 33.11M | ±0.07% | 0.0302ms | 0.0420ms | 16.55M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.76M | ±1.68% | 0.1735ms | 0.2090ms | 2.88M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.56M | ±0.14% | 0.1798ms | 0.2090ms | 2.78M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.66M | ±0.83% | 0.6007ms | 1.0000ms | 832.33K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 886.73K | ±0.16% | 1.1277ms | 1.3750ms | 443.37K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 373.37K | ±1.31% | 2.6783ms | 3.5830ms | 186.69K |

**Key Insight:** Preact Signals is **88.97x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 36.56M
🥈 Solid Signals        ███████████████████████████████████████ 35.82M
🥉 Redux Toolkit        ███████████████████████████████████████ 35.73M
   Preact Signals       ██████████████████████████████████████ 34.43M
   Zustand              ██████████████████████████████████ 31.09M
   Valtio               ███████████████████████████ 24.39M
   MobX                 ███████████ 9.63M
   Jotai                ███ 2.73M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 36.56M | ±0.06% | 0.0274ms | 0.0420ms | 18.28M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 35.82M | ±0.27% | 0.0279ms | 0.0420ms | 17.91M |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 35.73M | ±0.05% | 0.0280ms | 0.0420ms | 17.86M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 34.43M | ±0.05% | 0.0290ms | 0.0420ms | 17.21M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 31.09M | ±0.06% | 0.0322ms | 0.0420ms | 15.54M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.39M | ±0.04% | 0.0410ms | 0.0830ms | 12.19M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 9.63M | ±4.83% | 0.1039ms | 0.1670ms | 4.81M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.73M | ±0.27% | 0.3664ms | 0.4580ms | 1.36M |

**Key Insight:** Zen is **13.40x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 26.51M
🥈 Solid Signals        ██████████████████████████████████████ 25.50M
🥉 Preact Signals       █████████████████████████████████████ 24.23M
   MobX                 ████████ 5.36M
   Valtio               ███████ 4.45M
   Jotai                ███ 2.05M
   Redux Toolkit        █ 648.10K
   Zustand              █ 367.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 26.51M | ±0.05% | 0.0377ms | 0.0830ms | 13.26M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 25.50M | ±0.50% | 0.0392ms | 0.0840ms | 12.78M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 24.23M | ±1.46% | 0.0413ms | 0.0840ms | 12.11M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.36M | ±1.52% | 0.1865ms | 0.2500ms | 2.68M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.45M | ±0.85% | 0.2250ms | 0.5410ms | 2.22M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.05M | ±5.16% | 0.4881ms | 0.6670ms | 1.02M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 648.10K | ±0.35% | 1.5430ms | 1.9160ms | 324.05K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 367.28K | ±0.17% | 2.7227ms | 3.2920ms | 183.64K |

**Key Insight:** Zen is **72.19x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 462.51K
🥈 Valtio               █████████████████████████████████ 382.67K
🥉 Zustand              █ 14.92K
   Jotai                █ 14.20K
   Zen                  █ 13.88K
   Solid Signals        █ 13.70K
   Preact Signals       █ 13.56K
   Redux Toolkit        █ 7.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 462.51K | ±8.69% | 2.1621ms | 2.1670ms | 233.33K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 382.67K | ±15.07% | 2.6132ms | 2.7920ms | 191.34K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 14.92K | ±12.79% | 67.0304ms | 121.7500ms | 7.46K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 14.20K | ±13.89% | 70.3981ms | 129.9580ms | 7.13K |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 13.88K | ±14.71% | 72.0292ms | 127.1250ms | 6.94K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 13.70K | ±14.99% | 72.9789ms | 130.5830ms | 6.85K |
| 7 | **[Preact Signals](https://github.com/preactjs/signals)** | 13.56K | ±15.01% | 73.7590ms | 123.6250ms | 6.78K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.22K | ±1.46% | 138.5164ms | 269.0000ms | 3.61K |

**Key Insight:** MobX is **64.06x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 26.79M
🥈 Preact Signals       ██████████████████████████████████ 22.47M
🥉 Zen                  █████████████████████████████ 19.31M
   Valtio               ███████████ 7.66M
   MobX                 █████████ 6.27M
   Jotai                ███ 2.17M
   Redux Toolkit        █ 993.51K
   Zustand              █ 360.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 26.79M | ±0.05% | 0.0373ms | 0.0840ms | 13.39M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 22.47M | ±15.80% | 0.0445ms | 0.0840ms | 11.24M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 19.31M | ±0.05% | 0.0518ms | 0.0840ms | 9.65M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.66M | ±0.76% | 0.1306ms | 0.2500ms | 3.83M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 6.27M | ±0.76% | 0.1594ms | 0.2090ms | 3.14M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.17M | ±1.02% | 0.4614ms | 1.1660ms | 1.08M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 993.51K | ±1.05% | 1.0065ms | 1.3750ms | 496.75K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 360.22K | ±0.49% | 2.7761ms | 3.4160ms | 180.11K |

**Key Insight:** Solid Signals is **74.36x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 11.75M
🥈 Zen                  ██████████ 2.86M
🥉 Preact Signals       ██████ 1.71M
   Redux Toolkit        █ 272.82K
   Zustand              █ 225.23K
   MobX                 █ 151.95K
   Jotai                 109.26K
   Valtio                12.64
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 11.75M | ±1.44% | 0.0851ms | 0.1250ms | 5.87M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.86M | ±1.59% | 0.3493ms | 0.5830ms | 1.43M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.71M | ±0.92% | 0.5847ms | 0.7500ms | 855.16K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 272.82K | ±9.56% | 3.6654ms | 5.0420ms | 136.41K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 225.23K | ±10.39% | 4.4399ms | 4.8750ms | 112.61K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 151.95K | ±10.17% | 6.5810ms | 7.2090ms | 75.98K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 109.26K | ±4.84% | 9.1521ms | 85.2080ms | 54.64K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 12.64 | ±18.67% | 79095.7208ms | 126811.5000ms | 10.00 |

**Key Insight:** Solid Signals is **929290.78x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 22.17M
🥈 Preact Signals       ████████████████████████████████ 17.82M
🥉 Zen                  ████████████████████████ 13.21M
   Valtio               ████ 2.35M
   MobX                 ████ 2.19M
   Jotai                █ 717.14K
   Redux Toolkit        █ 549.65K
   Zustand              █ 365.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.17M | ±0.08% | 0.0451ms | 0.0840ms | 11.09M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 17.82M | ±1.00% | 0.0561ms | 0.1250ms | 8.91M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 13.21M | ±0.06% | 0.0757ms | 0.1250ms | 6.60M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.35M | ±1.83% | 0.4260ms | 0.9590ms | 1.17M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.19M | ±0.96% | 0.4567ms | 0.5420ms | 1.09M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 717.14K | ±1.29% | 1.3944ms | 3.0420ms | 358.57K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 549.65K | ±1.12% | 1.8193ms | 2.2090ms | 274.82K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 365.82K | ±0.77% | 2.7336ms | 3.2920ms | 182.91K |

**Key Insight:** Solid Signals is **60.62x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.40K
🥈 Preact Signals       ████████████████████████████████████████ 4.36K
🥉 Solid Signals        ███████████████████████████████████████ 4.32K
   Zustand              ███████████████████████████████████████ 4.26K
   Jotai                ███████████████████████████████████████ 4.26K
   Redux Toolkit        ███ 377.62
   MobX                  12.11
   Valtio                4.77
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.40K | ±6.52% | 227.2984ms | 333.3750ms | 2.20K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.36K | ±6.76% | 229.4811ms | 285.2090ms | 2.19K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.32K | ±6.88% | 231.6069ms | 280.5840ms | 2.16K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.26K | ±7.02% | 234.5328ms | 330.3330ms | 2.13K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.26K | ±6.92% | 234.6460ms | 493.7500ms | 2.13K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 377.62 | ±1.30% | 2648.1607ms | 3559.5420ms | 189.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 12.11 | ±3.86% | 82556.3957ms | 94002.7920ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.77 | ±2.59% | 209461.2542ms | 224880.0410ms | 10.00 |

**Key Insight:** Zen is **921.53x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.43K
🥈 Jotai                ██████████████████████████████████████ 10.79K
🥉 Preact Signals       ████████████████████ 5.64K
   Solid Signals        ███████████████████ 5.48K
   Zustand              ████████████████ 4.45K
   Redux Toolkit        ████ 1.03K
   Valtio                37.33
   MobX                  14.57
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.43K | ±1.06% | 87.5085ms | 101.3750ms | 5.71K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.79K | ±1.04% | 92.6800ms | 221.0000ms | 5.39K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.64K | ±18.38% | 177.3771ms | 225.3750ms | 2.82K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.48K | ±19.32% | 182.3585ms | 234.6670ms | 2.74K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.45K | ±21.56% | 224.8252ms | 532.4160ms | 2.22K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±1.05% | 974.1965ms | 1555.5830ms | 514.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 37.33 | ±0.83% | 26789.1162ms | 27944.2080ms | 19.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 14.57 | ±5.67% | 68625.0127ms | 83815.5000ms | 10.00 |

**Key Insight:** Zen is **784.21x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.83K
🥈 Jotai                ██████████████████ 5.36K
🥉 Solid Signals        ██████████████████ 5.27K
   Zustand              █████████████████ 5.07K
   Preact Signals       █████████████████ 4.99K
   Redux Toolkit        ███ 1.01K
   Valtio                37.61
   MobX                  13.68
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.83K | ±0.12% | 84.5461ms | 97.7090ms | 5.91K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.36K | ±16.46% | 186.6489ms | 237.1250ms | 2.68K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.27K | ±16.02% | 189.9284ms | 243.0410ms | 2.63K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.07K | ±17.83% | 197.2552ms | 247.2080ms | 2.54K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.99K | ±17.83% | 200.3509ms | 250.2500ms | 2.50K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.01K | ±1.10% | 989.1180ms | 1593.8750ms | 506.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 37.61 | ±1.22% | 26590.8049ms | 29022.6250ms | 19.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 13.68 | ±8.67% | 73099.8916ms | 88477.1660ms | 10.00 |

**Key Insight:** Zen is **864.62x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 22.57M
🥈 Solid Signals        ███████████████████████████████████████ 22.01M
🥉 Zen                  ███████████████████████████████████ 19.98M
   Valtio               ████████ 4.26M
   MobX                 ████ 2.44M
   Jotai                ███ 1.96M
   Zustand              █ 365.56K
   Redux Toolkit         222.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 22.57M | ±1.31% | 0.0443ms | 0.0840ms | 11.28M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.01M | ±1.20% | 0.0454ms | 0.0840ms | 11.01M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 19.98M | ±0.74% | 0.0500ms | 0.0840ms | 9.99M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.26M | ±0.71% | 0.2349ms | 0.2920ms | 2.13M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.44M | ±0.78% | 0.4091ms | 0.5000ms | 1.22M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.96M | ±0.12% | 0.5095ms | 1.2080ms | 981.42K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 365.56K | ±0.74% | 2.7355ms | 3.3340ms | 182.78K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 222.49K | ±0.94% | 4.4947ms | 5.2920ms | 111.24K |

**Key Insight:** Preact Signals is **101.43x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 222.32K
🥈 Solid Signals        ███████████████████████████████████████ 214.66K
🥉 Jotai                ██████████████████████████████████████ 211.00K
   Zen                  ███████████████████████████████ 172.21K
   Zustand              ██████████████████████████ 144.92K
   Valtio               ███████████ 62.91K
   MobX                 █████ 26.90K
   Redux Toolkit        █ 3.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 222.32K | ±2.05% | 4.4981ms | 18.2910ms | 111.16K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 214.66K | ±2.37% | 4.6586ms | 16.8340ms | 107.33K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 211.00K | ±1.71% | 4.7393ms | 9.4580ms | 105.50K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 172.21K | ±0.92% | 5.8070ms | 13.4590ms | 86.11K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 144.92K | ±0.76% | 6.9004ms | 9.9170ms | 72.46K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 62.91K | ±2.27% | 15.8945ms | 33.8330ms | 31.46K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 26.90K | ±1.07% | 37.1790ms | 76.3340ms | 13.45K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.79K | ±2.35% | 263.7455ms | 487.7500ms | 1.90K |

**Key Insight:** Preact Signals is **58.64x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.60M
🥈 Jotai                █████████████████ 1.98M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.60M | ±0.59% | 0.2176ms | 0.2920ms | 2.30M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.98M | ±0.75% | 0.5062ms | 0.6670ms | 987.72K |

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

*Last generated: 2025-11-07T01:27:18.883Z*
