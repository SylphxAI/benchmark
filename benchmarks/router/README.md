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
- **Last Run:** 5:01:17 AM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.8/100 | 13.8% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.8/100 | 1.8% |

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
🥇 Zen Router           ████████████████████████████████████████ 7.12M
🥈 Wouter               █████████ 1.55M
🥉 React Router         █ 31.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 7.12M | ±0.44% | 0.1404ms | 0.1810ms | 3.56M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.55M | ±0.61% | 0.6465ms | 0.9620ms | 773.35K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.50K | ±0.78% | 31.7445ms | 61.0340ms | 15.75K |

**Key Insight:** Zen Router is **226.09x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.66M
🥈 Wouter               ███████ 932.33K
🥉 React Router         █ 35.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 5.66M | ±0.39% | 0.1766ms | 0.2510ms | 2.83M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 932.33K | ±0.37% | 1.0726ms | 1.2920ms | 466.17K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.87K | ±0.60% | 27.8814ms | 40.6860ms | 17.93K |

**Key Insight:** Zen Router is **157.89x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.13M
🥈 Wouter               ██████ 308.05K
🥉 React Router         █ 39.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 2.13M | ±0.54% | 0.4699ms | 0.7610ms | 1.06M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 308.05K | ±0.41% | 3.2462ms | 5.5800ms | 154.03K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.69K | ±0.58% | 25.1975ms | 45.6260ms | 19.84K |

**Key Insight:** Zen Router is **53.62x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.49M
🥈 Wouter               █████ 190.79K
🥉 React Router         █ 55.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.49M | ±0.15% | 0.6711ms | 0.7610ms | 745.07K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.79K | ±0.33% | 5.2414ms | 8.2750ms | 95.40K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 55.53K | ±0.50% | 18.0085ms | 34.5550ms | 27.77K |

**Key Insight:** Zen Router is **26.84x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.54M
🥈 Wouter               █████ 186.84K
🥉 React Router         █ 26.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.54M | ±0.10% | 0.6492ms | 0.7420ms | 770.17K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 186.84K | ±0.44% | 5.3522ms | 7.0530ms | 93.42K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.96K | ±0.67% | 37.0956ms | 56.5260ms | 13.48K |

**Key Insight:** Zen Router is **57.14x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.11M
🥈 Wouter               █████ 148.41K
🥉 React Router         █ 41.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.11M | ±0.19% | 0.9026ms | 0.9920ms | 553.98K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.41K | ±0.37% | 6.7381ms | 8.2960ms | 74.21K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.37K | ±0.68% | 24.1724ms | 37.3200ms | 20.68K |

**Key Insight:** Zen Router is **26.78x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.30M
🥈 Wouter               ████ 145.59K
🥉 React Router         █ 35.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.30M | ±0.25% | 0.7665ms | 1.3220ms | 652.30K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 145.59K | ±0.72% | 6.8685ms | 14.1870ms | 72.80K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.35K | ±0.57% | 28.2861ms | 44.1930ms | 17.68K |

**Key Insight:** Zen Router is **36.90x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 347.10K
🥈 Wouter               ████ 38.62K
🥉 React Router         █ 5.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 347.10K | ±0.31% | 2.8810ms | 5.5100ms | 173.55K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.62K | ±0.38% | 25.8941ms | 36.4690ms | 19.31K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.42K | ±0.61% | 184.5926ms | 371.7480ms | 2.71K |

**Key Insight:** Zen Router is **64.07x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.09M
🥈 Wouter               █████ 148.99K
🥉 React Router         █ 40.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.09M | ±0.15% | 0.9208ms | 1.0020ms | 543.00K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.99K | ±0.22% | 6.7117ms | 12.0530ms | 74.50K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.62K | ±0.65% | 24.6188ms | 63.0190ms | 20.31K |

**Key Insight:** Zen Router is **26.74x faster** than React Router in this category.

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

*Last generated: 2025-11-11T05:09:40.396Z*
