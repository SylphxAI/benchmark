# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 3:18:35 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 8, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 8, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 8, 2025 | ⚠️ v7.9.5 incompatible |
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
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.39M
🥈 Wouter               ████████ 1.53M
🥉 React Router         █ 31.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.39M | ±0.40% | 0.1352ms | 0.1700ms | 3.70M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.53M | ±0.58% | 0.6535ms | 0.9120ms | 765.10K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.48K | ±0.52% | 31.7695ms | 63.1280ms | 15.74K |

**Key Insight:** Zen Router is **234.93x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.94M
🥈 Wouter               ██████ 915.46K
🥉 React Router         █ 35.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.94M | ±0.38% | 0.1685ms | 0.2400ms | 2.97M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 915.46K | ±0.41% | 1.0923ms | 1.3330ms | 457.73K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.87K | ±0.50% | 27.8752ms | 41.1360ms | 17.94K |

**Key Insight:** Zen Router is **165.44x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.32M
🥈 Wouter               █████ 311.57K
🥉 React Router         █ 39.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.32M | ±0.35% | 0.4315ms | 0.4710ms | 1.16M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 311.57K | ±0.29% | 3.2096ms | 5.2800ms | 155.78K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.01K | ±0.50% | 25.6374ms | 53.3890ms | 19.50K |

**Key Insight:** Zen Router is **59.42x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.53M
🥈 Wouter               █████ 192.38K
🥉 React Router         █ 54.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.53M | ±0.13% | 0.6529ms | 0.7110ms | 765.83K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 192.38K | ±0.41% | 5.1981ms | 5.9610ms | 96.19K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.50K | ±0.59% | 18.3491ms | 40.2660ms | 27.25K |

**Key Insight:** Zen Router is **28.10x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.58M
🥈 Wouter               █████ 187.10K
🥉 React Router         █ 27.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.58M | ±0.42% | 0.6321ms | 1.1720ms | 791.04K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 187.10K | ±0.35% | 5.3449ms | 6.9930ms | 93.55K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.01K | ±0.53% | 37.0245ms | 52.8590ms | 13.51K |

**Key Insight:** Zen Router is **58.58x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 147.71K
🥉 React Router         █ 40.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.17% | 0.8887ms | 0.9620ms | 562.59K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.71K | ±0.30% | 6.7699ms | 11.4720ms | 73.86K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.39K | ±0.77% | 24.7583ms | 54.1310ms | 20.20K |

**Key Insight:** Zen Router is **27.86x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.38M
🥈 Wouter               ████ 148.57K
🥉 React Router         █ 35.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.38M | ±0.19% | 0.7248ms | 0.8010ms | 689.88K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.57K | ±0.31% | 6.7310ms | 13.8460ms | 74.28K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.34K | ±0.82% | 28.2945ms | 44.5330ms | 17.67K |

**Key Insight:** Zen Router is **39.04x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 362.99K
🥈 Wouter               ████ 38.27K
🥉 React Router         █ 5.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 362.99K | ±0.26% | 2.7549ms | 4.6180ms | 181.50K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.27K | ±0.61% | 26.1299ms | 39.6240ms | 19.14K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.44K | ±0.49% | 183.7809ms | 320.4380ms | 2.72K |

**Key Insight:** Zen Router is **66.71x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.13M
🥈 Wouter               █████ 149.36K
🥉 React Router         █ 41.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.13M | ±0.16% | 0.8848ms | 0.9610ms | 565.13K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.36K | ±0.20% | 6.6952ms | 10.2090ms | 74.68K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.44K | ±0.68% | 24.1306ms | 38.8420ms | 20.72K |

**Key Insight:** Zen Router is **27.27x faster** than React Router in this category.

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

*Last generated: 2025-11-08T00:14:41.925Z*
