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
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 7, 2025 | ⚠️ v1.3.0 incompatible |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | 7.16KB | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.1/100 | 77.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.2/100 | 75.7% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.0/100 | 42.5% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.5% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |
| 2025-11-03 | [View Results](./results/2025-11-03.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 218.76K
🥈 Immer                █████████████████████ 115.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 218.76K | ±1.94% | 4.5713ms | 9.1770ms | 109.38K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.07K | ±1.46% | 8.6901ms | 18.8150ms | 57.54K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 944.34K
🥈 Immer                █████ 129.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 944.34K | ±0.48% | 1.0589ms | 1.8530ms | 472.17K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.08K | ±1.59% | 7.7474ms | 17.4530ms | 64.54K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.66K
🥈 Immer                ██████████████ 60.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.66K | ±1.72% | 5.7255ms | 11.6720ms | 87.33K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.74K | ±1.43% | 16.4637ms | 31.7900ms | 30.37K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 744.24K
🥈 Mutative             █████████████████████████ 465.24K
🥉 Immer                █████████ 175.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 744.24K | ±1.70% | 1.3437ms | 2.9660ms | 372.42K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 465.24K | ±0.69% | 2.1494ms | 3.5360ms | 232.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.74K | ±1.01% | 5.6903ms | 11.7420ms | 87.87K |

**Key Insight:** Craft is **4.23x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             █████████████ 421.36K
🥉 Immer                █████ 154.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.51% | 0.7958ms | 1.2620ms | 628.29K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 421.36K | ±0.58% | 2.3733ms | 3.0260ms | 210.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.94K | ±0.69% | 6.4539ms | 12.7240ms | 77.47K |

**Key Insight:** Craft is **8.11x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 859.85K
🥈 Mutative             █████████████████████ 455.05K
🥉 Immer                ████████ 168.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 859.85K | ±0.41% | 1.1630ms | 1.5320ms | 429.93K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.05K | ±0.46% | 2.1976ms | 2.6250ms | 227.53K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.59K | ±0.47% | 5.9315ms | 7.0630ms | 84.30K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 839.78K
🥈 Mutative             █████████████████████ 450.73K
🥉 Immer                █████████ 183.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 839.78K | ±0.47% | 1.1908ms | 1.5230ms | 419.89K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.73K | ±0.45% | 2.2186ms | 2.5950ms | 225.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.50K | ±0.43% | 5.4496ms | 9.2370ms | 91.75K |

**Key Insight:** Craft is **4.58x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.21K
🥈 Mutative             █████████████████████████████████ 147.56K
🥉 Immer                █████████████████ 79.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.21K | ±0.50% | 5.5185ms | 8.4750ms | 90.61K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.56K | ±0.50% | 6.7767ms | 12.1130ms | 73.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.18K | ±0.70% | 12.6291ms | 23.6340ms | 39.59K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.79K
🥈 Mutative             █████████████ 76.54K
🥉 Immer                ██ 13.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 229.79K | ±0.44% | 4.3519ms | 5.1190ms | 114.89K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.54K | ±0.44% | 13.0653ms | 23.0930ms | 38.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.72K | ±0.76% | 72.8660ms | 135.2520ms | 6.86K |

**Key Insight:** Craft is **16.74x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.63K
🥈 Immer                █████████████ 71.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.63K | ±0.38% | 4.4320ms | 5.0390ms | 112.82K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.40K | ±0.42% | 14.0062ms | 25.2870ms | 35.70K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 984.44K
🥉 Craft                ████████████████████████████████████ 973.83K
   Mutative             ████████████████████████████████████ 972.87K
   Immer                █████████████████████████ 673.49K
   Seamless Immutable   █████ 127.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.71M | ±0.10% | 0.0680ms | 0.0900ms | 7.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.10% | 0.9334ms | 1.1230ms | 535.67K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 984.44K | ±0.48% | 1.0158ms | 1.3530ms | 492.22K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 973.83K | ±2.57% | 1.0269ms | 2.6360ms | 486.92K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 972.87K | ±0.42% | 1.0279ms | 1.3920ms | 486.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 673.49K | ±2.01% | 1.4848ms | 3.2860ms | 336.75K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.81K | ±0.39% | 7.8239ms | 12.9950ms | 63.91K |

**Key Insight:** Native Spread is **115.12x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 534.79K
🥈 Mutative             ████████████████████████████ 372.46K
🥉 Craft                ███████████████████████ 305.65K
   Immutable.js         ████████████████ 212.76K
   Immer                ███████████ 149.94K
   Seamless Immutable   ███ 36.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.17% | 0.0852ms | 0.1200ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 534.79K | ±0.33% | 1.8699ms | 2.1840ms | 267.40K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 372.46K | ±4.81% | 2.6848ms | 5.1190ms | 186.23K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 305.65K | ±2.81% | 3.2717ms | 6.7120ms | 152.83K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 212.76K | ±1.48% | 4.7000ms | 9.6880ms | 106.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 149.94K | ±2.17% | 6.6694ms | 14.0860ms | 74.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.53K | ±0.60% | 27.3783ms | 47.7190ms | 18.26K |

**Key Insight:** Native Spread is **321.40x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.66M
🥈 Immutability Helper  ███████████████████████████████████ 1.44M
🥉 Craft                ████████████ 506.65K
   Mutative             ██████████ 418.03K
   Immer                ███████ 280.84K
   Seamless Immutable   █ 59.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.02M | ±0.88% | 0.0832ms | 0.1210ms | 6.01M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.66M | ±2.07% | 0.6010ms | 1.0820ms | 831.90K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.27% | 0.6961ms | 0.7810ms | 718.30K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 506.65K | ±0.86% | 1.9737ms | 2.5340ms | 253.33K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 418.03K | ±0.53% | 2.3922ms | 4.0070ms | 209.02K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 280.84K | ±0.79% | 3.5608ms | 5.2500ms | 140.42K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.81K | ±0.54% | 16.7192ms | 27.0910ms | 29.91K |

**Key Insight:** Native Spread is **201.01x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 768.60K
🥈 Immutability Helper  ██████████████████████████████ 584.93K
🥉 Craft                █████████████████ 317.81K
   Mutative             ███████████ 217.28K
   Immer                ███████ 141.72K
   Seamless Immutable   ███ 58.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.26M | ±2.12% | 0.0888ms | 0.1200ms | 5.63M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 768.60K | ±1.32% | 1.3011ms | 1.8630ms | 384.30K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 584.93K | ±0.36% | 1.7096ms | 1.8940ms | 292.47K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 317.81K | ±0.64% | 3.1465ms | 3.9770ms | 158.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.28K | ±0.71% | 4.6025ms | 5.7410ms | 108.64K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.72K | ±0.68% | 7.0563ms | 10.6690ms | 70.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.87K | ±0.83% | 16.9865ms | 27.2400ms | 29.44K |

**Key Insight:** Native Filter is **191.23x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 500.20K
🥈 Mutative             ████████████████████████████████████ 445.27K
🥉 Immutability Helper  ████████████████████████████████ 398.02K
   Immer                ███████████████████████ 282.76K
   Immutable.js         ██████████████ 176.96K
   Seamless Immutable   ███ 31.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.00M | ±1.54% | 0.0909ms | 0.1210ms | 5.50M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 500.20K | ±0.70% | 1.9992ms | 2.4050ms | 250.10K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 445.27K | ±1.12% | 2.2458ms | 2.7450ms | 222.63K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 398.02K | ±0.27% | 2.5125ms | 4.9690ms | 199.01K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.76K | ±0.43% | 3.5365ms | 6.8920ms | 141.38K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 176.96K | ±0.61% | 5.6510ms | 9.7080ms | 88.48K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.29K | ±0.90% | 31.9613ms | 42.3080ms | 15.64K |

**Key Insight:** Native Map is **351.69x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.16K
🥈 Craft                ███████████████████████████████████ 268.65K
🥉 Mutative             ███████████████████████████ 208.57K
   Immutable.js         ██████████████████████ 172.06K
   Immer                █████████████ 97.41K
   Seamless Immutable   ███ 22.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.17M | ±0.70% | 0.1091ms | 0.1410ms | 4.58M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.16K | ±0.60% | 3.2346ms | 3.7370ms | 154.58K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 268.65K | ±0.51% | 3.7224ms | 4.5090ms | 134.32K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 208.57K | ±0.63% | 4.7946ms | 7.7240ms | 104.28K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.06K | ±0.49% | 5.8120ms | 9.4070ms | 86.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.41K | ±0.72% | 10.2663ms | 19.5460ms | 48.70K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.15K | ±0.51% | 45.1500ms | 55.8840ms | 11.07K |

**Key Insight:** Native Spread is **413.81x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 355.86K
🥈 Immer                ███ 29.84K
🥉 Craft                ██ 21.70K
   Immutability Helper  █ 6.38K
   Immutable.js          675.77
   Seamless Immutable    256.82
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 355.86K | ±0.85% | 2.8101ms | 3.8170ms | 177.93K |
| 🥈 | **Native Map** | 354.11K | ±0.70% | 2.8240ms | 3.3760ms | 177.06K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.84K | ±0.59% | 33.5124ms | 45.1650ms | 14.92K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.70K | ±0.64% | 46.0923ms | 65.7030ms | 10.85K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.38K | ±0.34% | 156.8282ms | 174.7160ms | 3.19K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 675.77 | ±1.29% | 1479.7974ms | 2040.7070ms | 338.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.82 | ±0.52% | 3893.8007ms | 4338.0240ms | 129.00 |

**Key Insight:** Mutative is **1385.64x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.38K
🥈 Craft                ███████████████████████████████████████ 272.52K
🥉 Mutative             ████████████████████████████ 194.77K
   Immutable.js         ███████████████████████ 159.30K
   Immer                ██████████████████ 126.98K
   Seamless Immutable   ███ 18.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.37M | ±1.27% | 0.1571ms | 0.1800ms | 3.18M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.38K | ±0.67% | 3.6182ms | 4.2880ms | 138.19K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 272.52K | ±0.50% | 3.6695ms | 6.1910ms | 136.26K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 194.77K | ±0.49% | 5.1343ms | 9.5980ms | 97.38K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.30K | ±0.58% | 6.2775ms | 8.4350ms | 79.65K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.98K | ±0.50% | 7.8756ms | 11.7620ms | 63.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.79K | ±0.72% | 53.2108ms | 74.5390ms | 9.40K |

**Key Insight:** Native Spread is **338.79x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T03:55:44.621Z*
