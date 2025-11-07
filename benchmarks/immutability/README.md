# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:09:02 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.1/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 78.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 74.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.5% |
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
🥇 Craft                ████████████████████████████████████████ 221.21K
🥈 Immer                ████████████████████ 111.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.21K | ±1.88% | 4.5207ms | 9.0170ms | 110.60K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.94K | ±1.75% | 8.9333ms | 25.8490ms | 55.97K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 991.72K
🥈 Immer                █████ 129.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 991.72K | ±0.43% | 1.0084ms | 1.4420ms | 495.86K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.90K | ±1.38% | 7.6980ms | 17.2920ms | 64.95K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 178.40K
🥈 Immer                ██████████████ 60.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 178.40K | ±1.59% | 5.6055ms | 11.1810ms | 89.20K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.83K | ±1.45% | 16.4380ms | 28.4230ms | 30.42K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 735.91K
🥈 Mutative             ██████████████████████████ 476.61K
🥉 Immer                ██████████ 175.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 735.91K | ±1.52% | 1.3589ms | 2.8250ms | 367.95K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 476.61K | ±0.69% | 2.0982ms | 2.4450ms | 238.30K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.80K | ±0.94% | 5.6881ms | 8.8570ms | 87.90K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 422.27K
🥉 Immer                █████ 159.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.25M | ±0.42% | 0.8017ms | 1.1530ms | 623.66K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 422.27K | ±0.47% | 2.3682ms | 2.8750ms | 211.13K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.52K | ±0.53% | 6.2686ms | 12.3730ms | 79.76K |

**Key Insight:** Craft is **7.82x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 843.33K
🥈 Mutative             ██████████████████████ 457.60K
🥉 Immer                ████████ 162.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 843.33K | ±0.36% | 1.1858ms | 1.8230ms | 421.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.60K | ±0.37% | 2.1853ms | 2.5540ms | 228.80K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 162.13K | ±0.44% | 6.1678ms | 14.4870ms | 81.07K |

**Key Insight:** Craft is **5.20x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 822.59K
🥈 Mutative             ██████████████████████ 442.99K
🥉 Immer                █████████ 181.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 822.59K | ±0.40% | 1.2157ms | 1.5330ms | 411.29K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 442.99K | ±0.47% | 2.2574ms | 3.2560ms | 221.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.52K | ±0.33% | 5.5090ms | 7.2040ms | 90.76K |

**Key Insight:** Craft is **4.53x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.85K
🥈 Mutative             █████████████████████████████████ 149.58K
🥉 Immer                █████████████████ 79.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.85K | ±0.55% | 5.4691ms | 8.1150ms | 91.42K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.58K | ±0.49% | 6.6854ms | 10.2600ms | 74.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.31K | ±0.81% | 12.6089ms | 23.9450ms | 39.66K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.20K
🥈 Mutative             ██████████████ 76.78K
🥉 Immer                ██ 13.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.20K | ±0.41% | 4.4405ms | 5.8510ms | 112.60K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.78K | ±0.42% | 13.0239ms | 22.4520ms | 38.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.52K | ±0.31% | 73.9791ms | 89.8380ms | 6.76K |

**Key Insight:** Craft is **16.66x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.34K
🥈 Immer                ████████████ 70.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.34K | ±0.34% | 4.3987ms | 6.9840ms | 113.67K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.22K | ±0.35% | 14.2403ms | 24.8970ms | 35.11K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.04M
🥈 Mutative             ██████████████████████████████████████ 979.42K
🥉 Immutability Helper  █████████████████████████████████████ 958.03K
   Craft                ███████████████████████████████████ 913.70K
   Immer                ███████████████████████████ 691.18K
   Seamless Immutable   █████ 129.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.59M | ±0.09% | 0.0685ms | 0.1000ms | 7.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.04M | ±0.16% | 0.9619ms | 1.5730ms | 519.82K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 979.42K | ±0.38% | 1.0210ms | 1.2820ms | 489.71K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 958.03K | ±0.33% | 1.0438ms | 1.6930ms | 479.01K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 913.70K | ±2.68% | 1.0944ms | 2.7150ms | 456.85K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 691.18K | ±1.80% | 1.4468ms | 3.2370ms | 345.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.99K | ±0.22% | 7.6928ms | 14.5280ms | 65.00K |

**Key Insight:** Native Spread is **112.25x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 521.99K
🥈 Mutative             ██████████████████████████████ 396.98K
🥉 Craft                ██████████████████████████ 343.17K
   Immutable.js         █████████████████ 225.15K
   Immer                ████████████ 154.24K
   Seamless Immutable   ███ 37.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.75M | ±0.13% | 0.0851ms | 0.1200ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 521.99K | ±0.52% | 1.9157ms | 2.2850ms | 261.00K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 396.98K | ±0.70% | 2.5190ms | 4.5790ms | 198.49K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.17K | ±2.45% | 2.9140ms | 5.3400ms | 171.58K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 225.15K | ±1.57% | 4.4416ms | 7.0630ms | 112.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.24K | ±2.00% | 6.4836ms | 14.5570ms | 77.12K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.67K | ±0.33% | 26.5496ms | 37.4600ms | 18.83K |

**Key Insight:** Native Spread is **312.05x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.76M
🥈 Immutability Helper  ███████████████████████████████ 1.35M
🥉 Craft                ████████████ 506.21K
   Mutative             ██████████ 419.01K
   Immer                ███████ 289.42K
   Seamless Immutable   █ 56.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.61M | ±1.07% | 0.0861ms | 0.1110ms | 5.81M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.76M | ±0.50% | 0.5697ms | 0.7520ms | 877.59K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.35M | ±0.55% | 0.7419ms | 0.7920ms | 673.90K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 506.21K | ±0.37% | 1.9755ms | 2.3540ms | 253.11K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 419.01K | ±0.51% | 2.3866ms | 2.9360ms | 209.53K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 289.42K | ±0.38% | 3.4552ms | 4.1680ms | 144.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 56.90K | ±0.75% | 17.5735ms | 70.9630ms | 28.45K |

**Key Insight:** Native Spread is **204.09x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 790.75K
🥈 Immutability Helper  █████████████████████████████ 570.39K
🥉 Craft                ████████████████ 320.86K
   Mutative             ███████████ 218.97K
   Immer                ███████ 141.96K
   Seamless Immutable   ███ 59.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.76M | ±0.73% | 0.0784ms | 0.1100ms | 6.38M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 790.75K | ±0.87% | 1.2646ms | 1.5930ms | 395.38K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 570.39K | ±0.33% | 1.7532ms | 1.9140ms | 285.20K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.86K | ±0.66% | 3.1167ms | 3.5360ms | 160.43K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.97K | ±0.41% | 4.5669ms | 7.8240ms | 109.48K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.96K | ±0.46% | 7.0442ms | 11.5620ms | 70.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.60K | ±0.71% | 16.7786ms | 26.0280ms | 29.80K |

**Key Insight:** Native Filter is **214.08x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 491.91K
🥈 Mutative             █████████████████████████████████████ 458.71K
🥉 Immutability Helper  ████████████████████████████████ 399.23K
   Immer                ███████████████████████ 282.76K
   Immutable.js         ████████████████ 190.88K
   Seamless Immutable   ███ 31.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.96M | ±1.42% | 0.0912ms | 0.1200ms | 5.48M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 491.91K | ±0.39% | 2.0329ms | 2.3740ms | 245.96K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 458.71K | ±0.57% | 2.1800ms | 2.5940ms | 229.36K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.23K | ±0.17% | 2.5048ms | 2.9850ms | 199.62K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.76K | ±0.21% | 3.5365ms | 6.0210ms | 141.38K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 190.88K | ±0.52% | 5.2388ms | 7.9450ms | 95.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.60K | ±0.55% | 31.6438ms | 41.3980ms | 15.80K |

**Key Insight:** Native Map is **346.92x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.34K
🥈 Craft                ██████████████████████████████████ 264.63K
🥉 Mutative             ████████████████████████████ 212.81K
   Immutable.js         ██████████████████████ 171.27K
   Immer                █████████████ 99.28K
   Seamless Immutable   ███ 22.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.87M | ±1.08% | 0.1127ms | 0.1500ms | 4.44M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.34K | ±0.64% | 3.2537ms | 3.7370ms | 153.67K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.63K | ±0.71% | 3.7789ms | 6.4220ms | 132.31K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 212.81K | ±0.61% | 4.6990ms | 5.6400ms | 106.41K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.27K | ±0.41% | 5.8386ms | 8.6060ms | 85.64K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.28K | ±0.55% | 10.0727ms | 19.2960ms | 49.64K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.34K | ±0.56% | 44.7678ms | 54.5520ms | 11.17K |

**Key Insight:** Native Spread is **397.26x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 357.29K
🥈 Immer                ███ 29.68K
🥉 Craft                ██ 21.88K
   Immutability Helper  █ 6.35K
   Immutable.js         █ 723.70
   Seamless Immutable   █ 256.16
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 357.29K | ±0.71% | 2.7988ms | 4.7690ms | 178.65K |
| 🥈 | **Native Map** | 354.64K | ±0.53% | 2.8198ms | 3.3860ms | 177.32K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.68K | ±0.47% | 33.6907ms | 63.9100ms | 14.84K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.88K | ±0.44% | 45.7088ms | 68.5490ms | 10.94K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.35K | ±0.42% | 157.4736ms | 177.7420ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 723.70 | ±1.26% | 1381.7813ms | 1888.0070ms | 362.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.16 | ±0.74% | 3903.7874ms | 4563.8770ms | 129.00 |

**Key Insight:** Mutative is **1394.80x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 273.12K
🥈 Craft                ████████████████████████████████████████ 270.43K
🥉 Mutative             █████████████████████████████ 197.32K
   Immutable.js         ███████████████████████ 158.57K
   Immer                ███████████████████ 129.33K
   Seamless Immutable   ███ 19.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.40M | ±0.81% | 0.1561ms | 0.2000ms | 3.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 273.12K | ±0.59% | 3.6613ms | 4.3180ms | 136.56K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 270.43K | ±0.50% | 3.6978ms | 4.2770ms | 135.22K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.32K | ±0.48% | 5.0678ms | 9.0880ms | 98.69K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.57K | ±0.60% | 6.3065ms | 13.2050ms | 79.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 129.33K | ±0.44% | 7.7320ms | 14.1770ms | 64.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.17K | ±0.35% | 52.1777ms | 62.2860ms | 9.58K |

**Key Insight:** Native Spread is **334.16x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T09:16:11.653Z*
