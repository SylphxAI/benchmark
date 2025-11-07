# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:00:27 AM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.8/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.4/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 217.56K
🥈 Immer                █████████████████████ 114.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.56K | ±2.09% | 4.5964ms | 9.0870ms | 108.78K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.16K | ±1.67% | 8.7597ms | 18.9060ms | 57.08K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 973.22K
🥈 Immer                █████ 131.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 973.22K | ±0.51% | 1.0275ms | 1.2820ms | 486.61K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.24K | ±1.64% | 7.6196ms | 13.4950ms | 65.62K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.01K
🥈 Immer                ██████████████ 60.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.01K | ±1.78% | 5.6816ms | 11.2110ms | 88.00K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.44K | ±1.66% | 16.5459ms | 31.3290ms | 30.22K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 740.81K
🥈 Mutative             █████████████████████████ 471.66K
🥉 Immer                ██████████ 180.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 740.81K | ±1.63% | 1.3499ms | 2.9960ms | 370.40K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 471.66K | ±0.68% | 2.1202ms | 3.1760ms | 235.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.11K | ±1.15% | 5.5521ms | 9.2870ms | 90.06K |

**Key Insight:** Craft is **4.11x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 429.61K
🥉 Immer                █████ 159.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.43% | 0.7925ms | 1.1520ms | 630.94K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.61K | ±0.42% | 2.3277ms | 2.9050ms | 214.81K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.80K | ±0.58% | 6.2579ms | 12.2030ms | 79.90K |

**Key Insight:** Craft is **7.90x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 854.69K
🥈 Mutative             █████████████████████ 453.38K
🥉 Immer                ████████ 169.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 854.69K | ±0.50% | 1.1700ms | 1.6120ms | 427.34K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.38K | ±0.47% | 2.2057ms | 3.0660ms | 226.69K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.28K | ±0.43% | 5.9075ms | 12.7340ms | 84.64K |

**Key Insight:** Craft is **5.05x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 837.91K
🥈 Mutative             ██████████████████████ 452.66K
🥉 Immer                █████████ 184.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 837.91K | ±0.45% | 1.1934ms | 1.5920ms | 418.96K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 452.66K | ±0.44% | 2.2092ms | 2.8360ms | 226.33K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 184.57K | ±0.45% | 5.4181ms | 7.3440ms | 92.28K |

**Key Insight:** Craft is **4.54x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.42K
🥈 Mutative             ████████████████████████████████ 150.56K
🥉 Immer                █████████████████ 79.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.42K | ±0.52% | 5.3931ms | 8.9260ms | 92.71K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.56K | ±0.49% | 6.6419ms | 10.6600ms | 75.28K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.96K | ±0.68% | 12.5062ms | 23.7750ms | 39.98K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.55K
🥈 Mutative             █████████████ 76.03K
🥉 Immer                ██ 13.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.55K | ±0.41% | 4.3946ms | 6.2520ms | 113.78K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.03K | ±0.48% | 13.1532ms | 24.7960ms | 38.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.00K | ±1.63% | 76.9288ms | 110.4570ms | 6.50K |

**Key Insight:** Craft is **17.51x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.74K
🥈 Immer                █████████████ 71.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.74K | ±0.41% | 4.4103ms | 5.6200ms | 113.37K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.05K | ±0.36% | 14.0737ms | 28.9140ms | 35.53K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  ████████████████████████████████████ 973.20K
🥉 Mutative             ███████████████████████████████████ 953.83K
   Craft                ███████████████████████████████████ 949.63K
   Immer                █████████████████████████ 676.27K
   Seamless Immutable   █████ 128.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.68M | ±0.09% | 0.0681ms | 0.1000ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.19% | 0.9282ms | 1.1330ms | 538.68K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 973.20K | ±0.38% | 1.0275ms | 1.2430ms | 486.60K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 953.83K | ±0.67% | 1.0484ms | 1.6630ms | 476.92K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 949.63K | ±2.81% | 1.0530ms | 2.6750ms | 474.81K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 676.27K | ±2.02% | 1.4787ms | 3.2560ms | 338.13K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.90K | ±0.38% | 7.7578ms | 13.5950ms | 64.48K |

**Key Insight:** Native Spread is **113.87x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 510.34K
🥈 Mutative             ███████████████████████████████ 390.15K
🥉 Craft                ███████████████████████ 299.40K
   Immutable.js         ██████████████████ 225.57K
   Immer                ███████████ 142.91K
   Seamless Immutable   ███ 36.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.81M | ±0.12% | 0.0847ms | 0.1100ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 510.34K | ±0.43% | 1.9595ms | 2.7660ms | 255.17K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 390.15K | ±3.13% | 2.5631ms | 5.0000ms | 195.07K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 299.40K | ±2.81% | 3.3400ms | 6.7930ms | 150.02K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 225.57K | ±0.75% | 4.4331ms | 9.2870ms | 112.79K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.91K | ±2.25% | 6.9975ms | 15.1690ms | 71.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.73K | ±0.39% | 27.2268ms | 44.7630ms | 18.36K |

**Key Insight:** Native Spread is **321.63x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.73M
🥈 Immutability Helper  ██████████████████████████████ 1.32M
🥉 Craft                ████████████ 500.12K
   Mutative             ██████████ 421.80K
   Immer                ███████ 283.74K
   Seamless Immutable   █ 60.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.92M | ±0.97% | 0.0839ms | 0.1100ms | 5.96M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.73M | ±0.61% | 0.5766ms | 0.8320ms | 867.22K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.32M | ±0.87% | 0.7580ms | 0.8610ms | 659.60K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 500.12K | ±0.72% | 1.9995ms | 2.4650ms | 250.06K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 421.80K | ±0.62% | 2.3708ms | 2.9360ms | 210.90K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 283.74K | ±0.55% | 3.5244ms | 4.4180ms | 141.87K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.68K | ±0.78% | 16.4802ms | 26.4090ms | 30.34K |

**Key Insight:** Native Spread is **196.49x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 764.87K
🥈 Immutability Helper  ██████████████████████████████ 576.93K
🥉 Craft                █████████████████ 316.33K
   Mutative             ███████████ 215.57K
   Immer                ███████ 142.10K
   Seamless Immutable   ███ 60.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.66M | ±14.99% | 0.0858ms | 0.1100ms | 5.83M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 764.87K | ±1.17% | 1.3074ms | 1.7230ms | 382.43K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 576.93K | ±0.23% | 1.7333ms | 1.8940ms | 288.47K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 316.33K | ±0.96% | 3.1613ms | 3.8270ms | 158.17K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 215.57K | ±0.89% | 4.6389ms | 7.6940ms | 107.78K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.10K | ±0.80% | 7.0371ms | 11.6310ms | 71.05K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.11K | ±0.71% | 16.6349ms | 25.9390ms | 30.06K |

**Key Insight:** Native Filter is **193.95x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 488.97K
🥈 Mutative             ██████████████████████████████████████ 458.86K
🥉 Immutability Helper  █████████████████████████████████ 400.29K
   Immer                ███████████████████████ 285.88K
   Immutable.js         ███████████████ 189.08K
   Seamless Immutable   ███ 31.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.15M | ±1.10% | 0.0897ms | 0.1200ms | 5.58M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 488.97K | ±0.75% | 2.0451ms | 2.7150ms | 244.49K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 458.86K | ±0.69% | 2.1793ms | 2.8860ms | 229.43K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.29K | ±0.24% | 2.4982ms | 3.0060ms | 200.15K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 285.88K | ±0.23% | 3.4979ms | 4.7090ms | 142.94K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.08K | ±0.51% | 5.2888ms | 6.1010ms | 94.54K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.17K | ±0.73% | 32.0789ms | 43.0310ms | 15.59K |

**Key Insight:** Native Map is **357.80x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 304.63K
🥈 Craft                ████████████████████████████████████ 271.26K
🥉 Mutative             ███████████████████████████ 208.98K
   Immutable.js         █████████████████████ 161.53K
   Immer                █████████████ 96.61K
   Seamless Immutable   ███ 22.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.23M | ±13.46% | 0.1215ms | 0.1500ms | 4.12M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 304.63K | ±0.76% | 3.2826ms | 3.8270ms | 152.32K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.26K | ±0.71% | 3.6865ms | 4.4290ms | 135.63K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 208.98K | ±0.96% | 4.7852ms | 7.4940ms | 104.49K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.53K | ±1.09% | 6.1910ms | 12.8640ms | 80.76K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.61K | ±0.94% | 10.3510ms | 19.7870ms | 48.30K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.51K | ±0.83% | 44.4271ms | 55.7850ms | 11.26K |

**Key Insight:** Native Spread is **365.73x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 350.12K
🥈 Immer                ███ 29.90K
🥉 Craft                ███ 22.04K
   Immutability Helper  █ 6.34K
   Immutable.js         █ 730.30
   Seamless Immutable   █ 255.53
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 350.12K | ±0.71% | 2.8562ms | 3.8570ms | 175.06K |
| 🥈 | **Native Map** | 330.84K | ±0.66% | 3.0226ms | 4.1070ms | 165.42K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.90K | ±0.48% | 33.4396ms | 44.6440ms | 14.95K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.04K | ±0.41% | 45.3639ms | 54.2210ms | 11.02K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.34K | ±0.56% | 157.6382ms | 206.7970ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 730.30 | ±1.25% | 1369.2920ms | 1982.8620ms | 366.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 255.53 | ±0.69% | 3913.4676ms | 4509.1830ms | 128.00 |

**Key Insight:** Mutative is **1370.17x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.20K
🥈 Craft                ███████████████████████████████████████ 271.68K
🥉 Mutative             █████████████████████████████ 197.22K
   Immutable.js         ███████████████████████ 157.22K
   Immer                ██████████████████ 127.05K
   Seamless Immutable   ███ 19.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.50M | ±0.57% | 0.1539ms | 0.1900ms | 3.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.20K | ±0.27% | 3.6337ms | 4.3290ms | 137.60K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.68K | ±0.35% | 3.6808ms | 4.5090ms | 135.84K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.22K | ±0.70% | 5.0705ms | 10.5500ms | 98.61K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 157.22K | ±0.77% | 6.3604ms | 13.3650ms | 78.61K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.05K | ±0.46% | 7.8708ms | 14.9080ms | 63.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.02K | ±0.40% | 52.5890ms | 95.1070ms | 9.51K |

**Key Insight:** Native Spread is **341.68x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T09:09:02.695Z*
