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
- **Last Run:** 1:44:55 AM UTC
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
🥇 Zen Router           ████████████████████████████████████████ 7.08M
🥈 Wouter               █████████ 1.55M
🥉 React Router         █ 31.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 7.08M | ±0.46% | 0.1412ms | 0.2210ms | 3.54M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.55M | ±0.66% | 0.6469ms | 1.0420ms | 772.97K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.15K | ±0.57% | 32.1050ms | 65.8330ms | 15.57K |

**Key Insight:** Zen Router is **227.32x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.10M
🥈 Wouter               ██████ 905.92K
🥉 React Router         █ 35.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 6.10M | ±0.51% | 0.1638ms | 0.2010ms | 3.05M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 905.92K | ±0.94% | 1.1039ms | 1.6530ms | 452.96K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.48K | ±0.75% | 28.1858ms | 41.0160ms | 17.74K |

**Key Insight:** Zen Router is **172.03x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.31M
🥈 Wouter               █████ 310.48K
🥉 React Router         █ 38.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 2.31M | ±0.49% | 0.4326ms | 0.8110ms | 1.16M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 310.48K | ±0.46% | 3.2208ms | 5.3100ms | 155.24K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 38.99K | ±1.11% | 25.6461ms | 46.3260ms | 19.50K |

**Key Insight:** Zen Router is **59.29x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.55M
🥈 Wouter               █████ 186.65K
🥉 React Router         █ 54.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.55M | ±0.10% | 0.6467ms | 1.0730ms | 773.16K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 186.65K | ±0.48% | 5.3576ms | 9.2270ms | 93.33K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.50K | ±0.63% | 18.3498ms | 32.2920ms | 27.25K |

**Key Insight:** Zen Router is **28.37x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 188.31K
🥉 React Router         █ 26.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.59M | ±0.16% | 0.6293ms | 1.0310ms | 794.57K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 188.31K | ±0.41% | 5.3104ms | 6.0610ms | 94.16K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.82K | ±0.64% | 37.2866ms | 61.3340ms | 13.41K |

**Key Insight:** Zen Router is **59.25x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 149.13K
🥉 React Router         █ 41.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.16M | ±0.18% | 0.8642ms | 1.4630ms | 578.58K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.13K | ±0.30% | 6.7057ms | 10.9310ms | 74.56K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.23K | ±0.76% | 24.2556ms | 38.9830ms | 20.61K |

**Key Insight:** Zen Router is **28.07x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.39M
🥈 Wouter               ████ 147.59K
🥉 React Router         █ 35.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.39M | ±0.15% | 0.7216ms | 0.7920ms | 692.87K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.59K | ±0.35% | 6.7756ms | 11.6020ms | 73.80K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.08K | ±0.83% | 28.5056ms | 43.1710ms | 17.54K |

**Key Insight:** Zen Router is **39.50x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 362.59K
🥈 Wouter               ████ 38.94K
🥉 React Router         █ 5.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 362.59K | ±0.31% | 2.7579ms | 3.2860ms | 181.30K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.94K | ±0.34% | 25.6799ms | 37.0390ms | 19.47K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.36K | ±0.97% | 186.5516ms | 393.5540ms | 2.68K |

**Key Insight:** Zen Router is **67.64x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 149.13K
🥉 React Router         █ 40.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.14M | ±0.18% | 0.8799ms | 0.9720ms | 568.27K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.13K | ±0.28% | 6.7055ms | 7.9150ms | 74.57K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.66K | ±0.64% | 24.5971ms | 46.5570ms | 20.33K |

**Key Insight:** Zen Router is **27.96x faster** than React Router in this category.

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

*Last generated: 2025-11-11T02:15:04.780Z*
