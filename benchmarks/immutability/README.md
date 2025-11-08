# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 3:19:28 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 8, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.2/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.6/100 | 74.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.9% |
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

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/sylphxltd/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/sylphxltd/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/sylphxltd/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/sylphxltd/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 221.96K
🥈 Immer                ████████████████████ 112.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.96K | ±2.09% | 4.5054ms | 8.9170ms | 110.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.51K | ±1.61% | 8.8880ms | 24.5760ms | 56.26K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 984.21K
🥈 Immer                █████ 130.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 984.21K | ±0.47% | 1.0160ms | 1.5430ms | 492.11K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.55K | ±1.59% | 7.6602ms | 17.8030ms | 65.27K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.71K
🥈 Immer                ██████████████ 60.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.71K | ±1.76% | 5.7236ms | 11.0400ms | 87.36K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.21K | ±1.78% | 16.6090ms | 32.5110ms | 30.11K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 754.35K
🥈 Mutative             █████████████████████████ 465.98K
🥉 Immer                █████████ 178.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 754.35K | ±1.64% | 1.3257ms | 2.7650ms | 377.17K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 465.98K | ±0.48% | 2.1460ms | 2.7050ms | 232.99K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.71K | ±0.96% | 5.5956ms | 10.8710ms | 89.36K |

**Key Insight:** Craft is **4.22x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 429.91K
🥉 Immer                █████ 161.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.28M | ±0.67% | 0.7838ms | 1.1730ms | 637.90K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.91K | ±0.43% | 2.3261ms | 2.8050ms | 214.96K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 161.86K | ±0.31% | 6.1781ms | 9.2380ms | 80.93K |

**Key Insight:** Craft is **7.88x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 856.87K
🥈 Mutative             █████████████████████ 447.08K
🥉 Immer                ████████ 167.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 856.87K | ±0.41% | 1.1670ms | 1.5430ms | 428.43K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 447.08K | ±0.44% | 2.2367ms | 2.7550ms | 223.54K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.01K | ±0.65% | 5.9878ms | 11.4610ms | 83.50K |

**Key Insight:** Craft is **5.13x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 851.52K
🥈 Mutative             █████████████████████ 443.14K
🥉 Immer                ████████ 180.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 851.52K | ±0.42% | 1.1744ms | 1.4930ms | 425.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.14K | ±0.42% | 2.2566ms | 2.7140ms | 221.57K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.23K | ±0.37% | 5.5485ms | 7.2030ms | 90.11K |

**Key Insight:** Craft is **4.72x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.42K
🥈 Mutative             ████████████████████████████████ 148.94K
🥉 Immer                █████████████████ 77.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.42K | ±0.51% | 5.4519ms | 8.6760ms | 91.71K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.94K | ±0.54% | 6.7142ms | 11.3010ms | 74.47K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.55K | ±0.45% | 12.8943ms | 23.4540ms | 38.78K |

**Key Insight:** Craft is **2.37x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.20K
🥈 Mutative             █████████████ 75.10K
🥉 Immer                ██ 13.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.20K | ±0.44% | 4.4603ms | 5.6610ms | 112.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.10K | ±0.51% | 13.3165ms | 23.4740ms | 37.55K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.43K | ±0.48% | 74.4534ms | 150.7400ms | 6.72K |

**Key Insight:** Craft is **16.69x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.68K
🥈 Immer                ████████████ 70.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.68K | ±0.72% | 4.4310ms | 7.5640ms | 112.84K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.18K | ±0.40% | 14.2487ms | 25.1260ms | 35.09K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  ████████████████████████████████████ 981.98K
🥉 Mutative             ████████████████████████████████████ 973.18K
   Craft                ███████████████████████████████████ 957.50K
   Immer                ██████████████████████████ 698.46K
   Seamless Immutable   █████ 129.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.66M | ±0.09% | 0.0682ms | 0.0910ms | 7.33M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.10% | 0.9267ms | 1.1020ms | 539.52K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 981.98K | ±0.51% | 1.0183ms | 1.1730ms | 490.99K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 973.18K | ±0.45% | 1.0276ms | 1.3920ms | 486.59K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 957.50K | ±2.74% | 1.0444ms | 2.6450ms | 478.75K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 698.46K | ±1.89% | 1.4317ms | 3.2260ms | 349.23K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.46K | ±0.40% | 7.7244ms | 13.8350ms | 64.73K |

**Key Insight:** Native Spread is **113.26x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 524.56K
🥈 Mutative             █████████████████████████████ 376.11K
🥉 Craft                ██████████████████████████ 337.76K
   Immutable.js         ████████████████ 212.06K
   Immer                ████████████ 156.32K
   Seamless Immutable   ███ 36.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.70M | ±0.15% | 0.0855ms | 0.1300ms | 5.85M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 524.56K | ±0.40% | 1.9064ms | 3.5860ms | 262.28K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 376.11K | ±1.29% | 2.6588ms | 5.0600ms | 188.06K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 337.76K | ±2.71% | 2.9607ms | 5.6100ms | 168.88K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 212.06K | ±1.76% | 4.7157ms | 9.2170ms | 106.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.32K | ±2.13% | 6.3969ms | 12.0720ms | 78.16K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.19K | ±0.33% | 27.6287ms | 46.0260ms | 18.10K |

**Key Insight:** Native Spread is **323.17x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  ████████████████████████████████ 1.40M
🥉 Craft                ████████████ 507.43K
   Mutative             ██████████ 427.03K
   Immer                ███████ 285.03K
   Seamless Immutable   █ 62.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.91M | ±0.85% | 0.0839ms | 0.1110ms | 5.96M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±3.93% | 0.5732ms | 0.9420ms | 872.25K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.37% | 0.7135ms | 0.9210ms | 700.73K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 507.43K | ±0.44% | 1.9707ms | 2.3650ms | 253.72K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 427.03K | ±0.54% | 2.3418ms | 2.8850ms | 213.51K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.03K | ±0.47% | 3.5084ms | 6.2820ms | 142.51K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.22K | ±0.41% | 16.0715ms | 25.5680ms | 31.11K |

**Key Insight:** Native Spread is **191.48x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 813.52K
🥈 Immutability Helper  ████████████████████████████ 573.05K
🥉 Craft                ████████████████ 321.16K
   Mutative             ███████████ 219.26K
   Immer                ███████ 141.42K
   Seamless Immutable   ███ 62.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.22M | ±1.23% | 0.0818ms | 0.1100ms | 6.11M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 813.52K | ±0.69% | 1.2292ms | 1.6030ms | 406.76K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 573.05K | ±0.17% | 1.7450ms | 1.8530ms | 286.52K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 321.16K | ±0.51% | 3.1137ms | 3.7370ms | 160.58K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.26K | ±0.37% | 4.5608ms | 5.2400ms | 109.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.42K | ±0.44% | 7.0709ms | 16.2000ms | 70.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.44K | ±0.49% | 16.0149ms | 25.5480ms | 31.22K |

**Key Insight:** Native Filter is **195.74x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 469.14K
🥈 Mutative             ██████████████████████████████████████ 451.24K
🥉 Immutability Helper  ██████████████████████████████████ 401.33K
   Immer                ████████████████████████ 283.49K
   Immutable.js         ████████████████ 190.01K
   Seamless Immutable   ███ 31.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.29M | ±1.09% | 0.0886ms | 0.1310ms | 5.65M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 469.14K | ±0.77% | 2.1315ms | 2.5840ms | 234.57K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 451.24K | ±0.78% | 2.2161ms | 2.6940ms | 225.62K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.33K | ±0.28% | 2.4917ms | 2.9550ms | 200.67K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.49K | ±0.32% | 3.5275ms | 5.6800ms | 141.75K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 190.01K | ±0.75% | 5.2629ms | 7.4840ms | 95.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.50K | ±0.66% | 31.7452ms | 42.1790ms | 15.75K |

**Key Insight:** Native Map is **358.47x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.50K
🥈 Craft                ██████████████████████████████████ 262.02K
🥉 Mutative             ████████████████████████████ 213.46K
   Immutable.js         ███████████████████████ 173.95K
   Immer                █████████████ 99.94K
   Seamless Immutable   ███ 22.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.92M | ±1.01% | 0.1121ms | 0.1600ms | 4.46M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.50K | ±0.54% | 3.2520ms | 4.6990ms | 153.75K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 262.02K | ±0.70% | 3.8166ms | 4.5490ms | 131.01K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.46K | ±0.50% | 4.6847ms | 5.7010ms | 106.73K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 173.95K | ±0.28% | 5.7487ms | 6.9030ms | 86.98K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.94K | ±0.52% | 10.0064ms | 19.2960ms | 49.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.32K | ±0.58% | 44.8077ms | 57.2270ms | 11.16K |

**Key Insight:** Native Spread is **399.83x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 349.77K
🥈 Immer                ███ 29.05K
🥉 Craft                ██ 21.72K
   Immutability Helper  █ 6.29K
   Immutable.js         █ 709.04
   Seamless Immutable   █ 254.57
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 349.77K | ±0.94% | 2.8590ms | 5.4200ms | 174.88K |
| 🥈 | **Native Map** | 347.82K | ±0.82% | 2.8750ms | 3.7070ms | 173.91K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.05K | ±0.75% | 34.4241ms | 47.5990ms | 14.53K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.72K | ±0.67% | 46.0404ms | 90.5590ms | 10.86K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.29K | ±0.82% | 159.0526ms | 282.8260ms | 3.14K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 709.04 | ±1.62% | 1410.3495ms | 2199.2000ms | 355.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.57 | ±0.88% | 3928.1745ms | 4631.4290ms | 128.00 |

**Key Insight:** Mutative is **1373.95x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 272.42K
🥈 Craft                ███████████████████████████████████████ 265.54K
🥉 Mutative             █████████████████████████████ 195.26K
   Immutable.js         ████████████████████████ 161.12K
   Immer                ███████████████████ 126.88K
   Seamless Immutable   ███ 18.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.35M | ±1.22% | 0.1575ms | 0.1810ms | 3.17M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 272.42K | ±0.64% | 3.6708ms | 4.2680ms | 136.21K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.54K | ±0.77% | 3.7659ms | 4.3890ms | 132.77K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.26K | ±0.83% | 5.1213ms | 5.9110ms | 97.63K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.12K | ±0.87% | 6.2066ms | 10.7000ms | 80.56K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.88K | ±0.83% | 7.8814ms | 16.2610ms | 63.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.83K | ±0.75% | 53.0993ms | 77.8650ms | 9.42K |

**Key Insight:** Native Spread is **337.16x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-08T00:15:34.790Z*
