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
- **Last Run:** 1:09:44 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 11, 2025 | 📦 v2.0.0 available |
| **react** | `v18.3.1` | 2.52KB | Nov 11, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 11, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 11, 2025 | ⚠️ v7.9.5 incompatible |
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
🥇 Zen Router           ████████████████████████████████████████ 7.11M
🥈 Wouter               █████████ 1.56M
🥉 React Router         █ 30.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.11M | ±0.50% | 0.1407ms | 0.2210ms | 3.55M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.56M | ±0.64% | 0.6427ms | 1.1930ms | 777.92K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 30.80K | ±0.71% | 32.4661ms | 63.0570ms | 15.40K |

**Key Insight:** Zen Router is **230.76x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.33M
🥈 Wouter               ██████ 916.84K
🥉 React Router         █ 36.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.33M | ±0.39% | 0.1580ms | 0.1910ms | 3.17M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 916.84K | ±0.51% | 1.0907ms | 1.2330ms | 458.42K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 36.09K | ±0.65% | 27.7094ms | 39.8550ms | 18.05K |

**Key Insight:** Zen Router is **175.41x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.38M
🥈 Wouter               █████ 309.39K
🥉 React Router         █ 40.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.38M | ±0.54% | 0.4207ms | 0.7920ms | 1.19M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 309.39K | ±0.43% | 3.2322ms | 5.7110ms | 154.69K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.16K | ±0.78% | 24.9019ms | 43.9810ms | 20.08K |

**Key Insight:** Zen Router is **59.19x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.58M
🥈 Wouter               █████ 193.00K
🥉 React Router         █ 56.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.58M | ±0.09% | 0.6326ms | 0.7210ms | 790.35K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 193.00K | ±0.43% | 5.1812ms | 5.8620ms | 96.50K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 56.28K | ±0.57% | 17.7668ms | 30.1370ms | 28.14K |

**Key Insight:** Zen Router is **28.08x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.65M
🥈 Wouter               █████ 186.93K
🥉 React Router         █ 27.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.65M | ±0.09% | 0.6064ms | 0.7520ms | 824.52K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 186.93K | ±0.56% | 5.3497ms | 9.2770ms | 93.46K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.22K | ±0.60% | 36.7399ms | 65.5420ms | 13.61K |

**Key Insight:** Zen Router is **60.59x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 148.37K
🥉 React Router         █ 41.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.21% | 0.8816ms | 0.9820ms | 567.16K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.37K | ±0.55% | 6.7399ms | 12.6230ms | 74.19K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.72K | ±0.95% | 23.9706ms | 38.2710ms | 20.86K |

**Key Insight:** Zen Router is **27.19x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.41M
🥈 Wouter               ████ 149.70K
🥉 React Router         █ 35.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.41M | ±0.17% | 0.7103ms | 0.7710ms | 703.93K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.70K | ±0.65% | 6.6799ms | 7.5840ms | 74.85K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.33K | ±1.10% | 28.3019ms | 42.7990ms | 17.67K |

**Key Insight:** Zen Router is **39.85x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 365.26K
🥈 Wouter               ████ 38.79K
🥉 React Router         █ 5.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 365.26K | ±0.60% | 2.7378ms | 3.2460ms | 182.63K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.79K | ±0.57% | 25.7769ms | 35.8390ms | 19.40K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.48K | ±0.65% | 182.5934ms | 381.9050ms | 2.74K |

**Key Insight:** Zen Router is **66.69x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 150.43K
🥉 React Router         █ 42.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.19% | 0.8755ms | 0.9420ms | 571.10K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 150.43K | ±0.30% | 6.6474ms | 8.0350ms | 75.22K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.28K | ±0.62% | 23.6500ms | 36.1380ms | 21.14K |

**Key Insight:** Zen Router is **27.01x faster** than React Router in this category.

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

*Last generated: 2025-11-11T01:18:20.409Z*
