# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 5:00:00 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v0.49.1` | 4.88KB | Nov 7, 2025 | ✅ Latest |
| **[@sylphx/silk](https://github.com/sylphxltd/silk)** | `v0.1.0` | 0.22KB | Nov 7, 2025 | ✅ Latest |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 4.49KB | Nov 7, 2025 | ✅ Latest |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/silk](https://github.com/sylphxltd/silk)** | 0.22KB | 0.49KB | Baseline |
| 🥈 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 15.35x |
| 🥉 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 4.49KB | 11.72KB | 20.18x |
| 4 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 4.88KB | 12.70KB | 21.93x |

**Size Insight:** @sylphx/silk is the most lightweight at 0.22KB (gzip), while @pandacss/dev is 21.93x larger at 4.88KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 100.0/100 | Baseline |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 100.0/100 | Baseline |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 100.0/100 | Baseline |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 100.0/100 | Baseline |
| 8 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 99.9/100 | 99.9% |
| 9 | **Tailwind - Conditional styles** | 99.8/100 | 99.8% |
| 10 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 99.7/100 | 99.7% |
| 11 | **Tailwind - Concat 10 classes** | 99.6/100 | 99.6% |
| 12 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 99.5/100 | 99.5% |
| 12 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 99.5/100 | 99.5% |
| 14 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 99.4/100 | 99.4% |
| 15 | **Tailwind - Match breakpoint 1000x** | 98.6/100 | 98.6% |
| 16 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 98.3/100 | 98.3% |
| 17 | **Tailwind - Toggle theme 1000x** | 97.9/100 | 97.9% |
| 18 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 96.8/100 | 96.8% |
| 19 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 95.8/100 | 95.8% |
| 20 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 92.1/100 | 92.1% |
| 21 | **Tailwind - Apply styles** | 89.8/100 | 89.8% |
| 22 | **[UnoCSS](https://github.com/unocss/unocss)** | 37.7/100 | 37.7% |
| 23 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 24.2/100 | 24.2% |
| 24 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 22.5/100 | 22.5% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 0.22KB | 100/100 | Excellent |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 4.49KB | 82/100 | Good |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 4.88KB | 81/100 | Good |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 2/7 | 29% |
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 2/7 | 29% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 2/7 | 29% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 2/7 | 29% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 1/7 | 14% |
| 5 | **Tailwind - Apply styles** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 1/7 | 14% |
| 5 | **Tailwind - Conditional styles** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 1/7 | 14% |
| 5 | **Tailwind - Concat 10 classes** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **Tailwind - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 1/7 | 14% |
| 5 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 1/7 | 14% |
| 5 | **Tailwind - Match breakpoint 1000x** | 1/7 | 14% |
| 5 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 1/7 | 14% |
| 5 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 1/7 | 14% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Apply 100 inline styles

**Performance Comparison:**

```
🥇 Silk - Apply styles  ████████████████████████████████████████ 714.49K
🥈 Panda CSS - Apply... ██████████████████████████████████████ 684.47K
🥉 UnoCSS - Apply st... █████████████████████████████████████ 658.00K
   Tailwind - Apply ... ████████████████████████████████████ 641.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 714.49K | ±0.96% | 1.3996ms | 2.7500ms | 357.25K |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 684.47K | ±0.46% | 1.4610ms | 1.9590ms | 342.24K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 658.00K | ±1.81% | 1.5198ms | 3.1670ms | 329.00K |
| 4 | **Tailwind - Apply styles** | 641.89K | ±0.46% | 1.5579ms | 1.9580ms | 320.94K |

**Key Insight:** Silk - Apply styles is **1.11x faster** than Tailwind - Apply styles in this category.

### Conditional styling (1000 iterations)

**Performance Comparison:**

```
🥇 UnoCSS - Conditio... ████████████████████████████████████████ 3.77M
🥈 Panda CSS - Condi... ████████████████████████████████████████ 3.77M
🥉 Tailwind - Condit... ████████████████████████████████████████ 3.76M
   Silk - Conditiona... ████████████████████████████████████████ 3.75M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 3.77M | ±0.02% | 0.2652ms | 0.3330ms | 1.89M |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 3.77M | ±0.02% | 0.2652ms | 0.3330ms | 1.89M |
| 🥉 | **Tailwind - Conditional styles** | 3.76M | ±0.02% | 0.2656ms | 0.3330ms | 1.88M |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 3.75M | ±0.03% | 0.2666ms | 0.3330ms | 1.88M |

**Key Insight:** UnoCSS - Conditional styles is **1.01x faster** than Silk - Conditional styles in this category.

### String concatenation (complex className)

**Performance Comparison:**

```
🥇 UnoCSS - Concat 1... ████████████████████████████████████████ 50.47M
🥈 Silk - Concat 10 ... ████████████████████████████████████████ 50.43M
🥉 Tailwind - Concat... ████████████████████████████████████████ 50.29M
   Panda CSS - Conca... ████████████████████████████████████████ 50.22M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 50.47M | ±0.04% | 0.0198ms | 0.0420ms | 25.23M |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 50.43M | ±0.05% | 0.0198ms | 0.0420ms | 25.21M |
| 🥉 | **Tailwind - Concat 10 classes** | 50.29M | ±0.05% | 0.0199ms | 0.0420ms | 25.14M |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 50.22M | ±0.05% | 0.0199ms | 0.0420ms | 25.11M |

**Key Insight:** UnoCSS - Concat 10 classes is **1.00x faster** than Panda CSS - Concat 10 classes in this category.

### Theme toggle (dark/light mode)

**Performance Comparison:**

```
🥇 Silk - Toggle the... ████████████████████████████████████████ 1.04M
🥈 UnoCSS - Toggle t... ████████████████████████████████████████ 1.04M
🥉 Panda CSS - Toggl... ████████████████████████████████████████ 1.04M
   Tailwind - Toggle... ███████████████████████████████████████ 1.02M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 1.04M | ±0.02% | 0.9600ms | 1.1670ms | 520.82K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 1.04M | ±0.02% | 0.9634ms | 1.2080ms | 519.02K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 1.04M | ±0.03% | 0.9660ms | 1.2080ms | 517.62K |
| 4 | **Tailwind - Toggle theme 1000x** | 1.02M | ±0.06% | 0.9811ms | 1.2090ms | 509.64K |

**Key Insight:** Silk - Toggle theme 1000x is **1.02x faster** than Tailwind - Toggle theme 1000x in this category.

### Responsive breakpoint matching

**Performance Comparison:**

```
🥇 UnoCSS - Match br... ████████████████████████████████████████ 656.13K
🥈 Tailwind - Match ... ███████████████████████████████████████ 646.68K
🥉 Silk - Match brea... ███████████████████████████████████████ 645.30K
   Panda CSS - Match... ███████████████████████████████████████ 635.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 656.13K | ±0.03% | 1.5241ms | 1.8750ms | 328.06K |
| 🥈 | **Tailwind - Match breakpoint 1000x** | 646.68K | ±0.03% | 1.5464ms | 1.9170ms | 323.34K |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 645.30K | ±0.03% | 1.5497ms | 2.2500ms | 322.65K |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 635.24K | ±0.04% | 1.5742ms | 1.9170ms | 317.62K |

**Key Insight:** UnoCSS - Match breakpoint 1000x is **1.03x faster** than Panda CSS - Match breakpoint 1000x in this category.

### Cold Build Time (Small App)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 4.27
🥈 UnoCSS               █████████████████████ 2.19
🥉 Tailwind CSS         ██████████████ 1.47
   Panda CSS            ███████████ 1.12
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 4.27 | ±0.00% | 234.0000ms | 234.0000ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 2.19 | ±0.00% | 456.0000ms | 456.0000ms | 0.00 |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 1.47 | ±0.00% | 678.0000ms | 678.0000ms | 0.00 |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 1.12 | ±0.00% | 890.0000ms | 890.0000ms | 0.00 |

**Key Insight:** Silk is **3.80x faster** than Panda CSS in this category.

### CSS Output Size (Small App - 10 components)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 555.56
🥈 UnoCSS               ███████████ 153.85
🥉 Panda CSS            █████████ 123.46
   Tailwind CSS         ██████ 81.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 555.56 | ±0.00% | 1.8000ms | 1.8000ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 153.85 | ±0.00% | 6.5000ms | 6.5000ms | 0.00 |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 123.46 | ±0.00% | 8.1000ms | 8.1000ms | 0.00 |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 81.30 | ±0.00% | 12.3000ms | 12.3000ms | 0.00 |

**Key Insight:** Silk is **6.83x faster** than Tailwind CSS in this category.

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

*Last generated: 2025-11-07T08:52:27.132Z*
