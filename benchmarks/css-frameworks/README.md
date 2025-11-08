# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 3:19:05 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v0.49.1` | 4.88KB | Nov 7, 2025 | ✅ Latest |
| **[@sylphx/silk](https://github.com/sylphxltd/silk)** | `v1.0.0` | 9.46KB | Nov 8, 2025 | ⚠️ v2.0.2 incompatible |
| **react** | `v18.3.1` | 2.52KB | Nov 8, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 8, 2025 | 📦 v19.2.0 available |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 516.69KB | Nov 8, 2025 | ⚠️ v4.1.17 incompatible |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 8, 2025 | ⚠️ v66.5.5 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **react** | 2.52KB | 6.44KB | Baseline |
| 🥈 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 1.36x |
| 🥉 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 4.88KB | 12.70KB | 1.94x |
| 4 | **[@sylphx/silk](https://github.com/sylphxltd/silk)** | 9.46KB | 30.18KB | 3.76x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 16.67x |
| 6 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 2085.29KB | 205.39x |

**Size Insight:** react is the most lightweight at 2.52KB (gzip), while tailwindcss is 205.39x larger at 516.69KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 99.1/100 | Baseline |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 98.9/100 | 99.8% |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 98.8/100 | 99.7% |
| 4 | **[Silk](https://github.com/sylphxltd/silk)** | 97.9/100 | 98.8% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 4.88KB | 81/100 | Good |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk)** | 9.46KB | 66/100 | Average |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 0/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 7/7 | 100% |
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 7/7 | 100% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7/7 | 100% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 7/7 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across CSS frameworks

| Feature | **Panda CSS** | **Silk** | **Tailwind CSS** | **UnoCSS** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Native TypeScript support without runtime overhead</sub> | [✅](https://panda-css.com/docs/concepts/type-safety) | [✅](https://github.com/sylphxltd/silk#type-safety) | ❌ | ❌ |
| **Codegen Required**<br/><sub>Requires code generation step for type safety</sub> | [✅](https://panda-css.com/docs/installation/cli) | ❌ | ❌ | ❌ |
| **Design Tokens**<br/><sub>Built-in design token/theme configuration system</sub> | [✅](https://panda-css.com/docs/theming/tokens) | [✅](https://github.com/sylphxltd/silk#design-tokens) | [✅](https://tailwindcss.com/docs/theme) | [✅](https://unocss.dev/config/theme) |
| **Preset System**<br/><sub>Installable preset packages for complete design systems</sub> | [Community presets](https://panda-css.com/docs/customization/presets) | [2 official (Material, Minimal)](https://github.com/sylphxltd/silk#presets) | ❌ | [20+ official presets](https://unocss.dev/presets/) |
| **Critical CSS**<br/><sub>Automatic critical CSS extraction for performance</sub> | ❌ | [✅](https://github.com/sylphxltd/silk#critical-css) | ❌ | ❌ |
| **Pure CSS Icons**<br/><sub>Icon support via pure CSS classes (no SVG/font)</sub> | ❌ | ❌ | ❌ | [✅](https://unocss.dev/presets/icons) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Apply 100 inline styles

**Performance Comparison:**

```
🥇 Panda CSS - Apply... ████████████████████████████████████████ 306.03K
🥈 UnoCSS - Apply st... ██████████████████████████████████████ 293.91K
🥉 Silk - Apply styles  ██████████████████████████████████████ 292.66K
   Tailwind CSS - Ap... ██████████████████████████████████████ 289.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 306.03K | ±0.70% | 3.2677ms | 5.1200ms | 153.01K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 293.91K | ±0.62% | 3.4024ms | 4.4890ms | 146.96K |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 292.66K | ±0.78% | 3.4169ms | 6.4220ms | 146.33K |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Apply styles** | 289.62K | ±0.46% | 3.4528ms | 4.2780ms | 144.81K |

**Key Insight:** Panda CSS - Apply styles is **1.06x faster** than Tailwind CSS - Apply styles in this category.

### Conditional styling (1000 iterations)

**Performance Comparison:**

```
🥇 UnoCSS - Conditio... ████████████████████████████████████████ 2.58M
🥈 Tailwind CSS - Co... ████████████████████████████████████████ 2.58M
🥉 Silk - Conditiona... ████████████████████████████████████████ 2.57M
   Panda CSS - Condi... ███████████████████████████████████████ 2.55M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 2.58M | ±0.10% | 0.3875ms | 0.6720ms | 1.29M |
| 🥈 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Conditional styles** | 2.58M | ±0.10% | 0.3879ms | 0.6710ms | 1.29M |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 2.57M | ±0.15% | 0.3887ms | 0.6710ms | 1.29M |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 2.55M | ±0.17% | 0.3926ms | 0.7220ms | 1.27M |

**Key Insight:** UnoCSS - Conditional styles is **1.01x faster** than Panda CSS - Conditional styles in this category.

### String concatenation (complex className)

**Performance Comparison:**

```
🥇 Tailwind CSS - Co... ████████████████████████████████████████ 18.09M
🥈 Panda CSS - Conca... ████████████████████████████████████████ 18.03M
🥉 Silk - Concat 10 ... ████████████████████████████████████████ 18.00M
   UnoCSS - Concat 1... ████████████████████████████████████████ 17.90M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Concat 10 classes** | 18.09M | ±0.16% | 0.0553ms | 0.0610ms | 9.04M |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 18.03M | ±0.20% | 0.0555ms | 0.0610ms | 9.02M |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 18.00M | ±0.09% | 0.0556ms | 0.0800ms | 9.00M |
| 4 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 17.90M | ±0.14% | 0.0559ms | 0.0800ms | 8.95M |

**Key Insight:** Tailwind CSS - Concat 10 classes is **1.01x faster** than UnoCSS - Concat 10 classes in this category.

### Theme toggle (dark/light mode)

**Performance Comparison:**

```
🥇 UnoCSS - Toggle t... ████████████████████████████████████████ 516.58K
🥈 Panda CSS - Toggl... ████████████████████████████████████████ 516.54K
🥉 Tailwind CSS - To... ████████████████████████████████████████ 513.37K
   Silk - Toggle the... ███████████████████████████████████████ 503.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 516.58K | ±0.18% | 1.9358ms | 1.9240ms | 258.29K |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 516.54K | ±0.16% | 1.9360ms | 2.0540ms | 258.27K |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Toggle theme 1000x** | 513.37K | ±0.15% | 1.9479ms | 1.9240ms | 256.69K |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 503.05K | ±0.17% | 1.9879ms | 4.0680ms | 251.52K |

**Key Insight:** UnoCSS - Toggle theme 1000x is **1.03x faster** than Silk - Toggle theme 1000x in this category.

### Responsive breakpoint matching

**Performance Comparison:**

```
🥇 Tailwind CSS - Ma... ████████████████████████████████████████ 307.83K
🥈 UnoCSS - Match br... ████████████████████████████████████████ 307.09K
🥉 Silk - Match brea... ███████████████████████████████████████ 300.11K
   Panda CSS - Match... ███████████████████████████████████████ 299.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Match breakpoint 1000x** | 307.83K | ±0.08% | 3.2485ms | 3.4660ms | 153.92K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 307.09K | ±0.09% | 3.2563ms | 4.1980ms | 153.55K |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 300.11K | ±0.08% | 3.3321ms | 3.4560ms | 150.05K |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 299.71K | ±0.09% | 3.3366ms | 3.4660ms | 149.85K |

**Key Insight:** Tailwind CSS - Match breakpoint 1000x is **1.03x faster** than Panda CSS - Match breakpoint 1000x in this category.

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

*Last generated: 2025-11-08T00:15:17.921Z*
