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
- **Last Run:** 7:01:40 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.2/100 | 13.2% |
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
🥇 Zen Router           ████████████████████████████████████████ 6.54M
🥈 Wouter               █████████ 1.52M
🥉 React Router         █ 31.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.54M | ±0.48% | 0.1529ms | 0.1900ms | 3.27M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.52M | ±0.68% | 0.6576ms | 1.0220ms | 760.29K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.34K | ±0.98% | 31.9074ms | 62.8170ms | 15.67K |

**Key Insight:** Zen Router is **208.72x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.06M
🥈 Wouter               ██████ 892.24K
🥉 React Router         █ 35.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.06M | ±0.60% | 0.1650ms | 0.2400ms | 3.03M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 892.24K | ±0.53% | 1.1208ms | 1.4530ms | 446.12K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.40K | ±0.78% | 28.2484ms | 42.1580ms | 17.70K |

**Key Insight:** Zen Router is **171.25x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.25M
🥈 Wouter               █████ 298.74K
🥉 React Router         █ 39.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.25M | ±0.58% | 0.4438ms | 0.7220ms | 1.13M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 298.74K | ±0.98% | 3.3474ms | 5.8710ms | 149.37K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.40K | ±0.63% | 25.3805ms | 45.5450ms | 19.70K |

**Key Insight:** Zen Router is **57.19x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.54M
🥈 Wouter               █████ 184.68K
🥉 React Router         █ 54.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.54M | ±0.18% | 0.6505ms | 1.1230ms | 768.63K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 184.68K | ±0.56% | 5.4147ms | 10.0390ms | 92.34K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.79K | ±0.71% | 18.2525ms | 34.1840ms | 27.39K |

**Key Insight:** Zen Router is **28.06x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.61M
🥈 Wouter               █████ 183.49K
🥉 React Router         █ 27.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.61M | ±0.49% | 0.6206ms | 0.7620ms | 805.72K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 183.49K | ±0.54% | 5.4498ms | 6.3520ms | 91.75K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.11K | ±0.58% | 36.8919ms | 54.2910ms | 13.55K |

**Key Insight:** Zen Router is **59.45x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 146.37K
🥉 React Router         █ 41.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.18% | 0.8850ms | 1.0220ms | 564.95K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 146.37K | ±0.28% | 6.8319ms | 9.4670ms | 73.19K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.16K | ±0.78% | 24.2977ms | 43.6510ms | 20.58K |

**Key Insight:** Zen Router is **27.45x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.40M
🥈 Wouter               ████ 145.86K
🥉 React Router         █ 35.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.40M | ±0.13% | 0.7149ms | 0.7810ms | 699.35K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 145.86K | ±0.43% | 6.8557ms | 11.1710ms | 72.93K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.05K | ±0.84% | 28.5332ms | 47.0280ms | 17.52K |

**Key Insight:** Zen Router is **39.91x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 352.63K
🥈 Wouter               ████ 38.27K
🥉 React Router         █ 5.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 352.63K | ±0.36% | 2.8359ms | 3.4470ms | 176.31K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.27K | ±0.43% | 26.1274ms | 36.7290ms | 19.14K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.39K | ±0.91% | 185.4539ms | 379.2470ms | 2.70K |

**Key Insight:** Zen Router is **65.40x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 147.17K
🥉 React Router         █ 41.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.19% | 0.8815ms | 1.0020ms | 567.24K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.17K | ±0.24% | 6.7949ms | 9.9280ms | 73.58K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.86K | ±0.57% | 23.8874ms | 36.8990ms | 20.93K |

**Key Insight:** Zen Router is **27.10x faster** than React Router in this category.

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

*Last generated: 2025-11-10T19:10:48.979Z*
