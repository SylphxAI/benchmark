# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:08:06 AM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 12.7/100 | 12.7% |
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
🥇 Zen Router           ████████████████████████████████████████ 7.10M
🥈 Wouter               █████████ 1.55M
🥉 React Router         █ 31.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.10M | ±0.43% | 0.1408ms | 0.1900ms | 3.55M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.55M | ±0.55% | 0.6433ms | 0.9020ms | 777.22K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.31K | ±0.51% | 31.9363ms | 59.3820ms | 15.66K |

**Key Insight:** Zen Router is **226.83x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.87M
🥈 Wouter               ██████ 923.93K
🥉 React Router         █ 33.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.87M | ±0.38% | 0.1705ms | 0.2200ms | 2.93M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 923.93K | ±0.30% | 1.0823ms | 1.2830ms | 461.97K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 33.69K | ±0.50% | 29.6849ms | 51.7060ms | 16.84K |

**Key Insight:** Zen Router is **174.11x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.23M
🥈 Wouter               █████ 305.72K
🥉 React Router         █ 37.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.23M | ±0.38% | 0.4490ms | 0.8310ms | 1.11M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 305.72K | ±0.46% | 3.2710ms | 6.4920ms | 152.86K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 37.78K | ±1.32% | 26.4680ms | 51.8670ms | 18.89K |

**Key Insight:** Zen Router is **58.95x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 192.64K
🥉 React Router         █ 50.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.59M | ±0.10% | 0.6303ms | 0.7020ms | 793.27K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 192.64K | ±0.36% | 5.1910ms | 6.8730ms | 96.32K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 50.67K | ±0.57% | 19.7364ms | 44.3630ms | 25.33K |

**Key Insight:** Zen Router is **31.31x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.64M
🥈 Wouter               █████ 190.44K
🥉 React Router         █ 26.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.64M | ±0.10% | 0.6112ms | 0.7220ms | 818.11K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.44K | ±0.33% | 5.2510ms | 5.9410ms | 95.22K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.46K | ±0.42% | 37.7995ms | 52.7890ms | 13.23K |

**Key Insight:** Zen Router is **61.85x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.15M
🥈 Wouter               █████ 131.28K
🥉 React Router         █ 41.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.15M | ±0.16% | 0.8715ms | 0.9520ms | 573.74K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 131.28K | ±0.44% | 7.6176ms | 15.6190ms | 65.64K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.29K | ±0.50% | 24.2198ms | 38.2620ms | 20.64K |

**Key Insight:** Zen Router is **27.79x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.39M
🥈 Wouter               ████ 133.28K
🥉 React Router         █ 34.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.39M | ±0.13% | 0.7198ms | 0.9120ms | 694.65K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 133.28K | ±0.32% | 7.5032ms | 12.3830ms | 66.64K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.20K | ±0.79% | 29.2357ms | 57.8380ms | 17.10K |

**Key Insight:** Zen Router is **40.62x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 360.37K
🥈 Wouter               ████ 37.33K
🥉 React Router         █ 5.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 360.37K | ±0.25% | 2.7749ms | 3.2960ms | 180.19K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 37.33K | ±0.35% | 26.7904ms | 40.2850ms | 18.66K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.23K | ±0.97% | 191.2715ms | 377.5270ms | 2.62K |

**Key Insight:** Zen Router is **68.93x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 131.90K
🥉 React Router         █ 41.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.13% | 0.8810ms | 0.9620ms | 567.57K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 131.90K | ±0.37% | 7.5816ms | 11.2410ms | 65.95K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.52K | ±0.43% | 24.0826ms | 36.3880ms | 20.76K |

**Key Insight:** Zen Router is **27.34x faster** than React Router in this category.

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

*Last generated: 2025-11-07T09:15:26.404Z*
