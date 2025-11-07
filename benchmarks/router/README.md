# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** January 1, 2025
- **Last Run:** 12:00:00 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@tanstack/react-router](https://github.com/TanStack/router)** | `v1.94.1` | 24.22KB | Nov 7, 2025 | ⚠️ v1.134.13 incompatible |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v7.1.1` | 0.33KB | Nov 7, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.3.5` | 2.37KB | Nov 7, 2025 | ⚠️ v3.7.1 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[react-router-dom](https://github.com/remix-run/react-router)** | 0.33KB | 0.59KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 7.25x |
| 🥉 | **react** | 2.52KB | 6.44KB | 7.69x |
| 4 | **[@tanstack/react-router](https://github.com/TanStack/router)** | 24.22KB | 79.70KB | 74.04x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 128.19x |

**Size Insight:** react-router-dom is the most lightweight at 0.33KB (gzip), while react-dom is 128.19x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **Placeholder test** | 100.0/100 | Baseline |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **Placeholder test** | 1/1 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Router Placeholder

**Performance Comparison:**

```
🥇 Placeholder test     ████████████████████████████████████████ 18.05M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Placeholder test** | 18.05M | ±0.09% | 0.0554ms | 0.0700ms | 9.02M |

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

*Last generated: 2025-11-07T03:54:36.412Z*
