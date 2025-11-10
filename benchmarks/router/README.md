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

- **Last Updated:** November 10, 2025
- **Last Run:** 11:49:23 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 10, 2025 | 📦 v2.0.0 available |
| **react** | `v18.3.1` | 2.52KB | Nov 10, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 10, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 10, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.1/100 | 13.1% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.7/100 | 1.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across React router libraries

| Feature | **Zen Router** | **TanStack Router** | **React Router** | **Wouter** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#typescript-support) |
| **File-based Routing**<br/><sub>Automatic route generation from file system</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing) | [✅](https://reactrouter.com/how-to/file-route-conventions) | ❌ |
| **Data Loaders**<br/><sub>Built-in data loading/fetching mechanism</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading) | [✅](https://reactrouter.com/start/modes) | ❌ |
| **Nested Routes**<br/><sub>Support for nested route hierarchies</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/outlets) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#nesting-routes) |
| **Code Splitting**<br/><sub>Automatic route-based code splitting</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/automatic-code-splitting) | [✅](https://reactrouter.com/explanation/code-splitting) | ❌ |
| **Search Params**<br/><sub>Type-safe search/query parameter handling</sub> | [✅](https://github.com/sylphxltd/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/api/hooks/useSearchParams) | [✅](https://github.com/molefrog/wouter#usesearch-working-with-query-strings) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
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
🥇 Zen Router           ████████████████████████████████████████ 6.90M
🥈 Wouter               █████████ 1.54M
🥉 React Router         █ 32.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.90M | ±0.41% | 0.1449ms | 0.2300ms | 3.45M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.54M | ±0.55% | 0.6491ms | 1.0920ms | 770.24K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 32.00K | ±0.46% | 31.2472ms | 47.5820ms | 16.00K |

**Key Insight:** Zen Router is **215.61x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.13M
🥈 Wouter               ██████ 935.53K
🥉 React Router         █ 35.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.13M | ±0.33% | 0.1630ms | 0.2710ms | 3.07M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 935.53K | ±0.27% | 1.0689ms | 1.1520ms | 467.77K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.85K | ±0.42% | 27.8920ms | 39.8040ms | 17.93K |

**Key Insight:** Zen Router is **171.10x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.41M
🥈 Wouter               █████ 310.15K
🥉 React Router         █ 39.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.41M | ±0.36% | 0.4156ms | 0.4710ms | 1.20M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 310.15K | ±0.34% | 3.2243ms | 5.2600ms | 155.07K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.49K | ±0.51% | 25.3226ms | 47.9890ms | 19.75K |

**Key Insight:** Zen Router is **60.94x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.53M
🥈 Wouter               █████ 191.72K
🥉 React Router         █ 54.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.53M | ±0.09% | 0.6526ms | 0.7110ms | 766.11K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 191.72K | ±0.30% | 5.2159ms | 5.9410ms | 95.86K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.58K | ±0.44% | 18.3205ms | 36.5090ms | 27.29K |

**Key Insight:** Zen Router is **28.07x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.67M
🥈 Wouter               █████ 190.03K
🥉 React Router         █ 26.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.67M | ±0.09% | 0.5992ms | 0.6610ms | 834.44K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.03K | ±0.28% | 5.2622ms | 5.6710ms | 95.02K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.64K | ±0.45% | 37.5382ms | 65.3420ms | 13.32K |

**Key Insight:** Zen Router is **62.65x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 144.70K
🥉 React Router         █ 41.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.17% | 0.8793ms | 1.0720ms | 568.60K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 144.70K | ±0.24% | 6.9109ms | 13.0940ms | 72.35K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.64K | ±0.44% | 24.0129ms | 36.5380ms | 20.82K |

**Key Insight:** Zen Router is **27.31x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.39M
🥈 Wouter               ████ 145.01K
🥉 React Router         █ 35.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.39M | ±0.19% | 0.7169ms | 0.7810ms | 697.47K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 145.01K | ±0.67% | 6.8961ms | 15.7090ms | 72.50K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.21K | ±0.48% | 28.4048ms | 41.5480ms | 17.60K |

**Key Insight:** Zen Router is **39.62x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 361.07K
🥈 Wouter               ████ 39.06K
🥉 React Router         █ 5.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 361.07K | ±0.21% | 2.7696ms | 3.1060ms | 180.53K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 39.06K | ±0.29% | 25.6006ms | 37.3700ms | 19.53K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.43K | ±0.47% | 184.3060ms | 309.0180ms | 2.71K |

**Key Insight:** Zen Router is **66.55x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 148.89K
🥉 React Router         █ 41.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.09% | 0.8805ms | 0.9610ms | 567.85K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.89K | ±0.21% | 6.7163ms | 12.2030ms | 74.45K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.57K | ±0.43% | 24.0549ms | 36.2080ms | 20.79K |

**Key Insight:** Zen Router is **27.32x faster** than React Router in this category.

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

*Last generated: 2025-11-10T23:53:44.521Z*
