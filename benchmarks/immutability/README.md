<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-18-orange?style=flat-square)](#-test-coverage)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🔬 Methodology](#-methodology) • [🚀 Run Locally](#-run-locally)

</div>

---

## 📑 Table of Contents

- [🎯 Quick Recommendations](#-quick-recommendations)
- [📊 Overall Performance Rankings](#-overall-performance-rankings)
- [📈 Library Comparison](#-library-comparison)
- [📊 Performance by Test Group](#-performance-by-test-group)
- [🔬 Methodology](#-methodology)
- [🚀 Run Locally](#-run-locally)
- [🚀 Libraries Tested](#-libraries-tested)

---

## 🎯 Quick Recommendations

**TL;DR** - Choose based on your needs:

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 99.4/100 score
- **⚖️ Best Balance**: Craft - Great performance (38.6/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 99.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 38.6/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 18.7/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Immer** (Score: 14.7/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 13.7/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 99.4/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 38.6/100 | 39% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 18.7/100 | 19% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Immer](https://github.com/immerjs/immer)** | 14.7/100 | 15% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 13.7/100 | 14% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 6.2/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.5/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **99.4** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **38.6** | **2.84 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **18.7** | **2.40 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **14.7** | **9.21 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **13.7** | **12.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **6.2** | **36.25 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **2.5** | **5.99 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.4M ops/sec
🥈 Immutability Helper ██████                                     350K ops/sec
🥉 Craft              ████                                       239K ops/sec
 Immutable.js       ███                                        194K ops/sec
 Immer              ██                                         133K ops/sec
 Seamless Immutable ██                                         119K ops/sec
 Mutative           ██                                         97K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.4M | 0.000ms | 0.003ms | 1000 |
| Immutability Helper | 350K | 0.003ms | 0.013ms | 1000 |
| Craft | 239K | 0.004ms | 0.027ms | 1000 |
| Immutable.js | 194K | 0.005ms | 0.025ms | 1000 |
| Immer | 133K | 0.007ms | 0.031ms | 1000 |
| Seamless Immutable | 119K | 0.008ms | 0.030ms | 1000 |
| Mutative | 97K | 0.010ms | 0.036ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   2.9M ops/sec
🥈 Immutability Helper ███                                        222K ops/sec
🥉 Craft              ███                                        192K ops/sec
 Immer              █                                          100K ops/sec
 Mutative           █                                          89K ops/sec
 Immutable.js       █                                          81K ops/sec
 Seamless Immutable █                                          54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 222K | 0.004ms | 0.021ms | 1000 |
| Craft | 192K | 0.005ms | 0.021ms | 1000 |
| Immer | 100K | 0.010ms | 0.044ms | 1000 |
| Mutative | 89K | 0.011ms | 0.044ms | 1000 |
| Immutable.js | 81K | 0.012ms | 0.034ms | 1000 |
| Seamless Immutable | 54K | 0.019ms | 0.049ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   2.5M ops/sec
🥈 Immutability Helper ██████████████                             878K ops/sec
🥉 Immutable.js       ████████                                   506K ops/sec
 Craft              ████                                       236K ops/sec
 Mutative           ██                                         131K ops/sec
 Immer              ██                                         120K ops/sec
 Seamless Immutable █                                          57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.5M | 0.000ms | 0.003ms | 1000 |
| Immutability Helper | 878K | 0.001ms | 0.003ms | 1000 |
| Immutable.js | 506K | 0.002ms | 0.009ms | 1000 |
| Craft | 236K | 0.004ms | 0.022ms | 1000 |
| Mutative | 131K | 0.008ms | 0.028ms | 1000 |
| Immer | 120K | 0.008ms | 0.037ms | 1000 |
| Seamless Immutable | 57K | 0.017ms | 0.038ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   1.3M ops/sec
🥈 Immutability Helper ███████████████                            477K ops/sec
🥉 Craft              █████                                      171K ops/sec
 Immutable.js       ████                                       116K ops/sec
 Immer              ███                                        87K ops/sec
 Mutative           ██                                         68K ops/sec
 Seamless Immutable ██                                         52K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.3M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 477K | 0.002ms | 0.009ms | 1000 |
| Craft | 171K | 0.006ms | 0.021ms | 1000 |
| Immutable.js | 116K | 0.009ms | 0.033ms | 1000 |
| Immer | 87K | 0.011ms | 0.039ms | 1000 |
| Mutative | 68K | 0.015ms | 0.047ms | 1000 |
| Seamless Immutable | 52K | 0.019ms | 0.049ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   1.6M ops/sec
🥈 Immutability Helper █████████                                  363K ops/sec
🥉 Craft              ██████                                     240K ops/sec
 Mutative           ███                                        108K ops/sec
 Immer              ██                                         88K ops/sec
 Immutable.js       ██                                         64K ops/sec
 Seamless Immutable █                                          38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.6M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 363K | 0.003ms | 0.009ms | 1000 |
| Craft | 240K | 0.004ms | 0.024ms | 1000 |
| Mutative | 108K | 0.009ms | 0.029ms | 1000 |
| Immer | 88K | 0.011ms | 0.038ms | 1000 |
| Immutable.js | 64K | 0.016ms | 0.054ms | 1000 |
| Seamless Immutable | 38K | 0.026ms | 0.064ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   1.1M ops/sec
🥈 Immutability Helper ███████████                                299K ops/sec
🥉 Craft              █████████                                  229K ops/sec
 Immer              ████                                       101K ops/sec
 Immutable.js       ████                                       99K ops/sec
 Mutative           ██                                         67K ops/sec
 Seamless Immutable ██                                         41K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 299K | 0.003ms | 0.008ms | 1000 |
| Craft | 229K | 0.004ms | 0.014ms | 1000 |
| Immer | 101K | 0.010ms | 0.023ms | 1000 |
| Immutable.js | 99K | 0.010ms | 0.033ms | 1000 |
| Mutative | 67K | 0.015ms | 0.045ms | 1000 |
| Seamless Immutable | 41K | 0.025ms | 0.050ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.7M ops/sec
🥈 Craft              ████                                       176K ops/sec
🥉 Immer              ███                                        114K ops/sec
 Immutability Helper ██                                         92K ops/sec
 Immutable.js       ██                                         77K ops/sec
 Mutative           ██                                         68K ops/sec
 Seamless Immutable █                                          27K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.7M | 0.001ms | 0.002ms | 1000 |
| Craft | 176K | 0.006ms | 0.019ms | 1000 |
| Immer | 114K | 0.009ms | 0.027ms | 1000 |
| Immutability Helper | 92K | 0.011ms | 0.028ms | 1000 |
| Immutable.js | 77K | 0.013ms | 0.039ms | 1000 |
| Mutative | 68K | 0.015ms | 0.044ms | 1000 |
| Seamless Immutable | 27K | 0.037ms | 0.081ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   34K ops/sec
🥈 Native Spread      ██████████████████████████████████████     33K ops/sec
🥉 Immutability Helper ████████████                               10K ops/sec
 Craft              ██████                                     5K ops/sec
 Immer              ██                                         2K ops/sec
 Immutable.js       █                                          1K ops/sec
 Seamless Immutable                                            405 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 34K | 0.029ms | 0.093ms | 1000 |
| Native Spread | 33K | 0.031ms | 0.073ms | 1000 |
| Immutability Helper | 10K | 0.098ms | 0.154ms | 1000 |
| Craft | 5K | 0.190ms | 0.394ms | 1000 |
| Immer | 2K | 0.644ms | 1.485ms | 1000 |
| Immutable.js | 1K | 0.970ms | 2.239ms | 1000 |
| Seamless Immutable | 405 | 2.471ms | 4.375ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   613K ops/sec
🥈 Immer              ██████                                     91K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 613K | 0.002ms | 0.005ms | 1000 |
| Immer | 91K | 0.011ms | 0.036ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   131K ops/sec
🥈 Immer              ██████████████████████████                 86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 131K | 0.008ms | 0.025ms | 1000 |
| Immer | 86K | 0.012ms | 0.044ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   150K ops/sec
🥈 Immer              ██████████████████                         68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 150K | 0.007ms | 0.018ms | 1000 |
| Immer | 68K | 0.015ms | 0.034ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   164K ops/sec
🥈 Immer              ███████████████                            63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 164K | 0.006ms | 0.019ms | 1000 |
| Immer | 63K | 0.016ms | 0.041ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Mutative           ████████████████████████████████████████   29K ops/sec
🥈 Craft              ██████████████████████████████████         25K ops/sec
🥉 Immer              ████████████                               8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 29K | 0.034ms | 0.067ms | 1000 |
| Craft | 25K | 0.040ms | 0.214ms | 1000 |
| Immer | 8K | 0.118ms | 0.261ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   334K ops/sec
🥈 Mutative           ██████████████                             118K ops/sec
🥉 Immer              ████████████                               96K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 334K | 0.003ms | 0.017ms | 1000 |
| Mutative | 118K | 0.008ms | 0.026ms | 1000 |
| Immer | 96K | 0.010ms | 0.037ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   546K ops/sec
🥈 Mutative           ███████                                    99K ops/sec
🥉 Immer              ██████                                     86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 546K | 0.002ms | 0.009ms | 1000 |
| Mutative | 99K | 0.010ms | 0.029ms | 1000 |
| Immer | 86K | 0.012ms | 0.034ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   389K ops/sec
🥈 Immer              ███████████████                            146K ops/sec
🥉 Mutative           ███████████                                105K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 389K | 0.003ms | 0.014ms | 1000 |
| Immer | 146K | 0.007ms | 0.026ms | 1000 |
| Mutative | 105K | 0.009ms | 0.030ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   323K ops/sec
🥈 Immer              █████████████████                          139K ops/sec
🥉 Mutative           ████████████                               101K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 323K | 0.003ms | 0.013ms | 1000 |
| Immer | 139K | 0.007ms | 0.025ms | 1000 |
| Mutative | 101K | 0.010ms | 0.036ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   66K ops/sec
🥈 Immer              ████████████                               19K ops/sec
🥉 Mutative           ███████████                                17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 66K | 0.015ms | 0.042ms | 1000 |
| Immer | 19K | 0.052ms | 0.100ms | 1000 |
| Mutative | 17K | 0.058ms | 0.135ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

### Reproducibility
All tests are deterministic and reproducible:
1. Same versions locked in package.json
2. Same test scenarios for all libraries
3. Multiple runs to ensure consistency
4. Automated via GitHub Actions

</details>

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd benchmarks/immutability

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README
npx tsx ../../scripts/generate-simple-readme.ts .
```

**View Test Code**: [./groups/](./groups/) contains all test implementations

---

## 📦 Test Coverage

- **Basic Operations**: 0 tests
- **Advanced Operations**: 0 tests
- **Async Operations**: 0 tests
- **Real-World Scenarios**: 0 tests
- **Stress Tests**: 0 tests

**Total**: 18 tests × 7 libraries = 126 benchmark runs

---

## 🚀 Libraries Tested

- **[Native Spread](#)** (`native`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.84 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 2.40 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 9.21 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 12.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 36.25 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`seamless-immutable`) v7.1.4 • 5.99 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

---

## 🤝 Contributing

Want to add a library or improve tests?

- **Add a Library**: Update `package.json` and `library-metadata.json`, then implement tests
- **Improve Tests**: Edit files in `./groups/` directory
- **Report Issues**: [Open an issue](https://github.com/SylphxAI/benchmark/issues)
- **Suggest Features**: [Start a discussion](https://github.com/SylphxAI/benchmark/discussions)

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Related

- [📊 All Benchmark Categories](../../README.md#-benchmark-categories)
- [🏗️ Architecture Documentation](../../ARCHITECTURE.md)
- [⚙️ GitHub Actions Workflow](../../.github/workflows/benchmarks-per-library.yml)
- [🔄 CI/CD Results](https://github.com/SylphxAI/benchmark/actions)

---

<div align="center">

**Found this useful? Give it a ⭐️!**

*Generated on 2025-11-13T16:08:17.832Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
