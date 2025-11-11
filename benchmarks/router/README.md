# Router Benchmark 🛤️

Performance comparison of JavaScript routing libraries and frameworks.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 11, 2025
- **Last Run:** 3:50:37 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/SylphxAI/zen-router)** | `v1.0.2` | 1.57KB | Nov 11, 2025 | 📦 v2.0.0 available |
| **react** | `v18.3.1` | 2.52KB | Nov 11, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 11, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 11, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/SylphxAI/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.2/100 | 13.2% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.7/100 | 1.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across React router libraries

| Feature | **Zen Router** | **TanStack Router** | **React Router** | **Wouter** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#typescript-support) |
| **File-based Routing**<br/><sub>Automatic route generation from file system</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing) | [✅](https://reactrouter.com/how-to/file-route-conventions) | ❌ |
| **Data Loaders**<br/><sub>Built-in data loading/fetching mechanism</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading) | [✅](https://reactrouter.com/start/modes) | ❌ |
| **Nested Routes**<br/><sub>Support for nested route hierarchies</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/outlets) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#nesting-routes) |
| **Code Splitting**<br/><sub>Automatic route-based code splitting</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/automatic-code-splitting) | [✅](https://reactrouter.com/explanation/code-splitting) | ❌ |
| **Search Params**<br/><sub>Type-safe search/query parameter handling</sub> | [✅](https://github.com/SylphxAI/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/api/hooks/useSearchParams) | [✅](https://github.com/molefrog/wouter#usesearch-working-with-query-strings) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [Static Route Matching](#static-route-matching)
- [Simple Route Matching](#simple-route-matching)
- [Dynamic Route Matching (1 param)](#dynamic-route-matching-1-param)
- [Nested Dynamic Routes (2 params)](#nested-dynamic-routes-2-params)
- [Wildcard Route Matching](#wildcard-route-matching)
- [Optional Parameter Route (with param)](#optional-parameter-route-with-param)
- [Optional Parameter Route (without param)](#optional-parameter-route-without-param)
- [Mixed Route Matching (realistic usage)](#mixed-route-matching-realistic-usage)
- [Sequential Route Matching (worst case)](#sequential-route-matching-worst-case)

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.30M
🥈 Wouter               ████████ 1.55M
🥉 React Router         █ 31.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 7.30M | ±0.44% | 0.1369ms | 0.2400ms | 3.65M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.55M | ±0.60% | 0.6451ms | 1.3030ms | 775.09K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.25K | ±0.52% | 32.0022ms | 60.4430ms | 15.62K |

**Key Insight:** Zen Router is **233.70x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.04M
🥈 Wouter               ██████ 933.40K
🥉 React Router         █ 35.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 6.04M | ±0.34% | 0.1657ms | 0.2100ms | 3.02M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 933.40K | ±0.31% | 1.0714ms | 1.2630ms | 466.70K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.60K | ±0.54% | 28.0886ms | 41.1870ms | 17.80K |

**Key Insight:** Zen Router is **169.56x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.25M
🥈 Wouter               █████ 295.30K
🥉 React Router         █ 39.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 2.25M | ±0.35% | 0.4443ms | 0.8410ms | 1.13M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 295.30K | ±0.54% | 3.3864ms | 6.6720ms | 147.65K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.08K | ±1.28% | 25.5892ms | 44.5130ms | 19.54K |

**Key Insight:** Zen Router is **57.59x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.53M
🥈 Wouter               █████ 191.45K
🥉 React Router         █ 55.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.53M | ±0.18% | 0.6557ms | 0.7610ms | 762.56K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 191.45K | ±0.43% | 5.2233ms | 7.0840ms | 95.72K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 55.77K | ±0.47% | 17.9312ms | 29.6250ms | 27.89K |

**Key Insight:** Zen Router is **27.35x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 188.72K
🥉 React Router         █ 26.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.59M | ±0.11% | 0.6273ms | 1.1620ms | 797.11K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 188.72K | ±0.31% | 5.2989ms | 7.8750ms | 94.36K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.65K | ±0.53% | 37.5193ms | 60.9230ms | 13.33K |

**Key Insight:** Zen Router is **59.81x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.15M
🥈 Wouter               █████ 148.04K
🥉 React Router         █ 41.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.15M | ±0.12% | 0.8731ms | 1.1520ms | 572.67K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.04K | ±0.26% | 6.7548ms | 9.4370ms | 74.02K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.77K | ±0.46% | 23.9430ms | 36.1080ms | 20.88K |

**Key Insight:** Zen Router is **27.42x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.43M
🥈 Wouter               ████ 149.81K
🥉 React Router         █ 35.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.43M | ±0.13% | 0.7015ms | 0.7520ms | 712.73K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.81K | ±0.29% | 6.6749ms | 9.6080ms | 74.91K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.14K | ±0.61% | 28.4613ms | 45.8950ms | 17.57K |

**Key Insight:** Zen Router is **40.57x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 357.15K
🥈 Wouter               ████ 38.37K
🥉 React Router         █ 5.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 357.15K | ±0.25% | 2.7999ms | 3.2360ms | 178.58K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.37K | ±0.38% | 26.0641ms | 37.3200ms | 19.18K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.15K | ±1.11% | 194.0639ms | 374.8750ms | 2.58K |

**Key Insight:** Zen Router is **69.31x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.15M
🥈 Wouter               █████ 148.64K
🥉 React Router         █ 41.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.15M | ±0.15% | 0.8720ms | 1.0120ms | 573.37K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.64K | ±0.27% | 6.7277ms | 9.5680ms | 74.32K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.35K | ±0.53% | 24.1850ms | 40.8460ms | 20.67K |

**Key Insight:** Zen Router is **27.73x faster** than React Router in this category.

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

*Last generated: 2025-11-11T03:59:24.880Z*
