# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 8:59:41 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 7, 2025 | ⚠️ v7.9.5 incompatible |
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.0/100 | 13.0% |
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

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.28M
🥈 Wouter               █████████ 1.56M
🥉 React Router         █ 32.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.28M | ±0.52% | 0.1374ms | 0.2300ms | 3.64M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.56M | ±0.67% | 0.6413ms | 0.9820ms | 779.65K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 32.01K | ±0.60% | 31.2439ms | 56.7660ms | 16.00K |

**Key Insight:** Zen Router is **227.45x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.98M
🥈 Wouter               ██████ 913.83K
🥉 React Router         █ 34.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.98M | ±0.49% | 0.1673ms | 0.2810ms | 2.99M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 913.83K | ±0.81% | 1.0943ms | 1.6330ms | 456.92K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.27K | ±0.95% | 29.1813ms | 63.5190ms | 17.14K |

**Key Insight:** Zen Router is **174.47x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.31M
🥈 Wouter               █████ 308.71K
🥉 React Router         █ 39.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.31M | ±0.57% | 0.4326ms | 0.4910ms | 1.16M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 308.71K | ±0.51% | 3.2393ms | 5.3000ms | 154.35K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.57K | ±0.60% | 25.2708ms | 45.1240ms | 19.79K |

**Key Insight:** Zen Router is **58.41x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.56M
🥈 Wouter               █████ 190.78K
🥉 React Router         █ 54.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.56M | ±0.21% | 0.6391ms | 0.7310ms | 782.32K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.78K | ±0.59% | 5.2415ms | 6.3120ms | 95.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.95K | ±0.70% | 18.1997ms | 37.3900ms | 27.47K |

**Key Insight:** Zen Router is **28.48x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.63M
🥈 Wouter               █████ 186.54K
🥉 React Router         █ 26.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.63M | ±0.16% | 0.6118ms | 1.0220ms | 817.22K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 186.54K | ±0.54% | 5.3607ms | 6.2820ms | 93.27K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.79K | ±0.77% | 37.3252ms | 54.5420ms | 13.40K |

**Key Insight:** Zen Router is **61.01x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 148.82K
🥉 React Router         █ 41.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.16M | ±0.14% | 0.8598ms | 0.9510ms | 581.52K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.82K | ±0.26% | 6.7195ms | 13.1050ms | 74.41K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.50K | ±0.79% | 24.0977ms | 40.6460ms | 20.75K |

**Key Insight:** Zen Router is **28.03x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.42M
🥈 Wouter               ████ 148.59K
🥉 React Router         █ 35.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.42M | ±0.10% | 0.7038ms | 0.7610ms | 710.48K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.59K | ±0.42% | 6.7299ms | 10.7600ms | 74.30K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.21K | ±0.84% | 28.4010ms | 49.1620ms | 17.61K |

**Key Insight:** Zen Router is **40.36x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 369.60K
🥈 Wouter               ████ 38.26K
🥉 React Router         █ 5.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 369.60K | ±0.30% | 2.7056ms | 3.1660ms | 184.80K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.26K | ±0.43% | 26.1356ms | 36.7990ms | 19.13K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.32K | ±1.18% | 188.1394ms | 399.5470ms | 2.66K |

**Key Insight:** Zen Router is **69.54x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.15M
🥈 Wouter               █████ 146.53K
🥉 React Router         █ 41.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.15M | ±0.17% | 0.8729ms | 0.9720ms | 572.78K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 146.53K | ±0.30% | 6.8248ms | 14.3780ms | 73.26K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.77K | ±0.55% | 23.9427ms | 40.1460ms | 20.88K |

**Key Insight:** Zen Router is **27.43x faster** than React Router in this category.

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

*Last generated: 2025-11-07T09:08:06.402Z*
