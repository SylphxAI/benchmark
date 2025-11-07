# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:00:07 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v0.49.1` | 4.88KB | Nov 7, 2025 | ✅ Latest |
| **[@sylphx/silk](https://github.com/sylphxltd/silk)** | `v0.1.0` | 0.22KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 516.69KB | Nov 7, 2025 | ⚠️ v4.1.17 incompatible |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 7, 2025 | ⚠️ v66.5.4 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/silk](https://github.com/sylphxltd/silk)** | 0.22KB | 0.49KB | Baseline |
| 🥈 | **react** | 2.52KB | 6.44KB | 11.30x |
| 🥉 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 15.35x |
| 4 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 4.88KB | 12.70KB | 21.93x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 188.34x |
| 6 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 2085.29KB | 2320.56x |

**Size Insight:** @sylphx/silk is the most lightweight at 0.22KB (gzip), while tailwindcss is 2320.56x larger at 516.69KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 100.0/100 | Baseline |
| 🥇 | **Tailwind - Concat 10 classes** | 100.0/100 | Baseline |
| 🥇 | **Tailwind - Toggle theme 1000x** | 100.0/100 | Baseline |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 100.0/100 | Baseline |
| 6 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 99.9/100 | 99.9% |
| 6 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 99.9/100 | 99.9% |
| 8 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 99.7/100 | 99.7% |
| 9 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 99.6/100 | 99.6% |
| 10 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 99.4/100 | 99.4% |
| 11 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 99.3/100 | 99.3% |
| 11 | **Tailwind - Match breakpoint 1000x** | 99.3/100 | 99.3% |
| 13 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 99.0/100 | 99.0% |
| 14 | **Tailwind - Conditional styles** | 98.7/100 | 98.7% |
| 15 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 98.5/100 | 98.5% |
| 16 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 97.3/100 | 97.3% |
| 17 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 96.6/100 | 96.6% |
| 18 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 94.3/100 | 94.3% |
| 18 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 94.3/100 | 94.3% |
| 20 | **Tailwind - Apply styles** | 93.2/100 | 93.2% |
| 20 | **[Silk](https://github.com/sylphxltd/silk)** | NaN/100 | NaN% |
| 20 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | NaN/100 | NaN% |
| 20 | **[Panda CSS](https://github.com/chakra-ui/panda)** | NaN/100 | NaN% |
| 20 | **[UnoCSS](https://github.com/unocss/unocss)** | NaN/100 | NaN% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 0.22KB | 100/100 | Excellent |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 4.88KB | 81/100 | Good |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 0/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 1/7 | 14% |
| 🥇 | **Tailwind - Apply styles** | 1/7 | 14% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 1/7 | 14% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 1/7 | 14% |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 1/7 | 14% |
| 🥇 | **Tailwind - Conditional styles** | 1/7 | 14% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 1/7 | 14% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 1/7 | 14% |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 1/7 | 14% |
| 🥇 | **Tailwind - Concat 10 classes** | 1/7 | 14% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 1/7 | 14% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 1/7 | 14% |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 1/7 | 14% |
| 🥇 | **Tailwind - Toggle theme 1000x** | 1/7 | 14% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 1/7 | 14% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 1/7 | 14% |
| 🥇 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 1/7 | 14% |
| 🥇 | **Tailwind - Match breakpoint 1000x** | 1/7 | 14% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 1/7 | 14% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 1/7 | 14% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Apply 100 inline styles

**Performance Comparison:**

```
🥇 Panda CSS - Apply... ████████████████████████████████████████ 310.37K
🥈 Silk - Apply styles  ██████████████████████████████████████ 292.67K
🥉 UnoCSS - Apply st... ██████████████████████████████████████ 292.65K
   Tailwind - Apply ... █████████████████████████████████████ 289.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 310.37K | ±0.62% | 3.2220ms | 4.2580ms | 155.19K |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 292.67K | ±0.79% | 3.4168ms | 6.7220ms | 146.34K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 292.65K | ±0.63% | 3.4171ms | 5.9910ms | 146.32K |
| 4 | **Tailwind - Apply styles** | 289.40K | ±0.40% | 3.4554ms | 4.3780ms | 144.70K |

**Key Insight:** Panda CSS - Apply styles is **1.07x faster** than Tailwind - Apply styles in this category.

### Conditional styling (1000 iterations)

**Performance Comparison:**

```
🥇 UnoCSS - Conditio... ████████████████████████████████████████ 2.58M
🥈 Panda CSS - Condi... ████████████████████████████████████████ 2.56M
🥉 Tailwind - Condit... ███████████████████████████████████████ 2.55M
   Silk - Conditiona... ███████████████████████████████████████ 2.54M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 2.58M | ±0.09% | 0.3875ms | 0.3910ms | 1.29M |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 2.56M | ±0.09% | 0.3899ms | 0.6710ms | 1.28M |
| 🥉 | **Tailwind - Conditional styles** | 2.55M | ±0.09% | 0.3928ms | 0.6710ms | 1.27M |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 2.54M | ±0.11% | 0.3934ms | 0.6710ms | 1.27M |

**Key Insight:** UnoCSS - Conditional styles is **1.02x faster** than Silk - Conditional styles in this category.

### String concatenation (complex className)

**Performance Comparison:**

```
🥇 Tailwind - Concat... ████████████████████████████████████████ 17.20M
🥈 UnoCSS - Concat 1... ████████████████████████████████████████ 17.16M
🥉 Panda CSS - Conca... ████████████████████████████████████████ 17.13M
   Silk - Concat 10 ... ████████████████████████████████████████ 17.09M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Tailwind - Concat 10 classes** | 17.20M | ±0.17% | 0.0581ms | 0.0610ms | 8.60M |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 17.16M | ±0.14% | 0.0583ms | 0.0710ms | 8.58M |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 17.13M | ±0.13% | 0.0584ms | 0.0800ms | 8.57M |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 17.09M | ±0.19% | 0.0585ms | 0.0900ms | 8.54M |

**Key Insight:** Tailwind - Concat 10 classes is **1.01x faster** than Silk - Concat 10 classes in this category.

### Theme toggle (dark/light mode)

**Performance Comparison:**

```
🥇 Tailwind - Toggle... ████████████████████████████████████████ 515.42K
🥈 Silk - Toggle the... ████████████████████████████████████████ 515.12K
🥉 Panda CSS - Toggl... ████████████████████████████████████████ 515.10K
   UnoCSS - Toggle t... ████████████████████████████████████████ 510.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Tailwind - Toggle theme 1000x** | 515.42K | ±0.08% | 1.9401ms | 1.9340ms | 257.71K |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 515.12K | ±0.18% | 1.9413ms | 1.9240ms | 257.56K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 515.10K | ±0.24% | 1.9414ms | 1.9240ms | 257.55K |
| 4 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 510.48K | ±0.08% | 1.9589ms | 2.2840ms | 255.24K |

**Key Insight:** Tailwind - Toggle theme 1000x is **1.01x faster** than UnoCSS - Toggle theme 1000x in this category.

### Responsive breakpoint matching

**Performance Comparison:**

```
🥇 UnoCSS - Match br... ████████████████████████████████████████ 308.12K
🥈 Tailwind - Match ... ████████████████████████████████████████ 305.87K
🥉 Panda CSS - Match... ███████████████████████████████████████ 299.83K
   Silk - Match brea... ███████████████████████████████████████ 297.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 308.12K | ±0.08% | 3.2454ms | 3.3260ms | 154.06K |
| 🥈 | **Tailwind - Match breakpoint 1000x** | 305.87K | ±0.20% | 3.2693ms | 5.3100ms | 152.94K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 299.83K | ±0.08% | 3.3353ms | 3.4460ms | 149.91K |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 297.72K | ±0.09% | 3.3588ms | 6.1210ms | 148.86K |

**Key Insight:** UnoCSS - Match breakpoint 1000x is **1.03x faster** than Silk - Match breakpoint 1000x in this category.

### Cold Build Time (Small App)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 234.00ms
🥈 UnoCSS               ██████████████████████████ 456.00ms
🥉 Tailwind CSS         █████████████ 678.00ms
   Panda CSS            █ 890.00ms
```

| Rank | Library | Time | Variance | p75 | p99 | Samples |
|------|---------|------|----------|-----|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 234.00ms | ±0.00% | 234.00ms | 234.00ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 456.00ms | ±0.00% | 456.00ms | 456.00ms | 0.00 |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 678.00ms | ±0.00% | 678.00ms | 678.00ms | 0.00 |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 890.00ms | ±0.00% | 890.00ms | 890.00ms | 0.00 |

**Key Insight:** Silk is **3.80x faster** than Panda CSS in this category.

### CSS Output Size (Small App - 10 components)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 1.76KB
🥈 UnoCSS               ██████████████████████ 6.35KB
🥉 Panda CSS            ████████████████ 7.91KB
   Tailwind CSS         █ 12.01KB
```

| Rank | Library | Size | Min | Max | p99 | Samples |
|------|---------|------|-----|-----|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 1.76KB | 1.76KB | 1.76KB | 1.76KB | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 6.35KB | 6.35KB | 6.35KB | 6.35KB | 0.00 |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7.91KB | 7.91KB | 7.91KB | 7.91KB | 0.00 |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 12.01KB | 12.01KB | 12.01KB | 12.01KB | 0.00 |

**Key Insight:** Silk generates **6.83x smaller** CSS than Tailwind CSS in this category.

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

*Last generated: 2025-11-07T09:08:40.075Z*
