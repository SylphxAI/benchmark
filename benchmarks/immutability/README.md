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

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 98.9/100 score
- **⚖️ Best Balance**: Craft - Great performance (43.0/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 98.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 43.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/craft)


**Immutability Helper** (Score: 20.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 16.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 16.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 98.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](#)** | 43.0/100 | 43% of fastest | [📦](https://www.npmjs.com/package/craft) [📊](https://bundlephobia.com/package/craft) |
| 🥉 3 | **[Immutability Helper](#)** | 20.4/100 | 21% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](#)** | 16.6/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](#)** | 16.4/100 | 17% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](#)** | 7.7/100 | 8% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](#)** | 3.2/100 | 3% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **98.9** | N/A | State management solution... | General purpose... |
| **[Craft](#)** | **43.0** | **2.76 KB** | State management solution... | General purpose... |
| **[Immutability Helper](#)** | **20.4** | **1.65 KB** | State management solution... | General purpose... |
| **[Mutative](#)** | **16.6** | **7.16 KB** | State management solution... | General purpose... |
| **[Immer](#)** | **16.4** | **4.70 KB** | State management solution... | General purpose... |
| **[Immutable.js](#)** | **7.7** | **17.74 KB** | State management solution... | General purpose... |
| **[Seamless Immutable](#)** | **3.2** | **2.71 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   686K ops/sec
🥈 Immutability Helper █████████████                              220K ops/sec
🥉 Craft              ███████████                                194K ops/sec
 Immutable.js       ███████                                    125K ops/sec
 Immer              ███████                                    122K ops/sec
 Mutative           ██████                                     96K ops/sec
 Seamless Immutable █████                                      79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 686K | 0.001ms | 0.010ms | 1000 |
| Immutability Helper | 220K | 0.005ms | 0.023ms | 1000 |
| Craft | 194K | 0.005ms | 0.023ms | 1000 |
| Immutable.js | 125K | 0.008ms | 0.026ms | 1000 |
| Immer | 122K | 0.008ms | 0.028ms | 1000 |
| Mutative | 96K | 0.010ms | 0.032ms | 1000 |
| Seamless Immutable | 79K | 0.013ms | 0.032ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   1.4M ops/sec
🥈 Immutability Helper ██████████                                 351K ops/sec
🥉 Craft              █████                                      192K ops/sec
 Mutative           ███                                        92K ops/sec
 Immutable.js       ██                                         81K ops/sec
 Seamless Immutable ██                                         70K ops/sec
 Immer              ██                                         69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.4M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 351K | 0.003ms | 0.009ms | 1000 |
| Craft | 192K | 0.005ms | 0.023ms | 1000 |
| Mutative | 92K | 0.011ms | 0.040ms | 1000 |
| Immutable.js | 81K | 0.012ms | 0.045ms | 1000 |
| Seamless Immutable | 70K | 0.014ms | 0.036ms | 1000 |
| Immer | 69K | 0.014ms | 0.045ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   2.0M ops/sec
🥈 Immutability Helper ████████                                   407K ops/sec
🥉 Immutable.js       ███████                                    370K ops/sec
 Craft              ████                                       221K ops/sec
 Immer              ██                                         117K ops/sec
 Mutative           ██                                         98K ops/sec
 Seamless Immutable █                                          44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.0M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 407K | 0.002ms | 0.014ms | 1000 |
| Immutable.js | 370K | 0.003ms | 0.012ms | 1000 |
| Craft | 221K | 0.005ms | 0.018ms | 1000 |
| Immer | 117K | 0.009ms | 0.031ms | 1000 |
| Mutative | 98K | 0.010ms | 0.034ms | 1000 |
| Seamless Immutable | 44K | 0.023ms | 0.045ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   884K ops/sec
🥈 Immutability Helper █████████████████                          373K ops/sec
🥉 Craft              ████████                                   188K ops/sec
 Immutable.js       ██████                                     137K ops/sec
 Immer              ████                                       90K ops/sec
 Mutative           ████                                       79K ops/sec
 Seamless Immutable ██                                         49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 884K | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 373K | 0.003ms | 0.010ms | 1000 |
| Craft | 188K | 0.005ms | 0.021ms | 1000 |
| Immutable.js | 137K | 0.007ms | 0.029ms | 1000 |
| Immer | 90K | 0.011ms | 0.031ms | 1000 |
| Mutative | 79K | 0.013ms | 0.043ms | 1000 |
| Seamless Immutable | 49K | 0.020ms | 0.048ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   1.2M ops/sec
🥈 Immutability Helper ████████                                   249K ops/sec
🥉 Craft              ██████                                     174K ops/sec
 Immer              ███                                        101K ops/sec
 Mutative           ███                                        91K ops/sec
 Immutable.js       ██                                         59K ops/sec
 Seamless Immutable █                                          38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.2M | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 249K | 0.004ms | 0.012ms | 1000 |
| Craft | 174K | 0.006ms | 0.023ms | 1000 |
| Immer | 101K | 0.010ms | 0.031ms | 1000 |
| Mutative | 91K | 0.011ms | 0.034ms | 1000 |
| Immutable.js | 59K | 0.017ms | 0.040ms | 1000 |
| Seamless Immutable | 38K | 0.026ms | 0.058ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   1.6M ops/sec
🥈 Craft              █████                                      208K ops/sec
🥉 Immutability Helper ████                                       171K ops/sec
 Immutable.js       ██                                         93K ops/sec
 Immer              ██                                         91K ops/sec
 Mutative           ██                                         66K ops/sec
 Seamless Immutable █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.6M | 0.001ms | 0.002ms | 1000 |
| Craft | 208K | 0.005ms | 0.010ms | 1000 |
| Immutability Helper | 171K | 0.006ms | 0.018ms | 1000 |
| Immutable.js | 93K | 0.011ms | 0.029ms | 1000 |
| Immer | 91K | 0.011ms | 0.025ms | 1000 |
| Mutative | 66K | 0.015ms | 0.041ms | 1000 |
| Seamless Immutable | 36K | 0.028ms | 0.064ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.7M ops/sec
🥈 Craft              █████                                      215K ops/sec
🥉 Immutability Helper ███                                        132K ops/sec
 Immer              ██                                         105K ops/sec
 Immutable.js       ██                                         94K ops/sec
 Mutative           ██                                         82K ops/sec
 Seamless Immutable █                                          34K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.7M | 0.001ms | 0.001ms | 1000 |
| Craft | 215K | 0.005ms | 0.015ms | 1000 |
| Immutability Helper | 132K | 0.008ms | 0.025ms | 1000 |
| Immer | 105K | 0.010ms | 0.027ms | 1000 |
| Immutable.js | 94K | 0.011ms | 0.029ms | 1000 |
| Mutative | 82K | 0.012ms | 0.036ms | 1000 |
| Seamless Immutable | 34K | 0.029ms | 0.063ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   43K ops/sec
🥈 Native Spread      █████████████████████████████████████      39K ops/sec
🥉 Immutability Helper ██████████                                 11K ops/sec
 Craft              ██████                                     6K ops/sec
 Immer              ██                                         2K ops/sec
 Immutable.js       █                                          1K ops/sec
 Seamless Immutable                                            477 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 43K | 0.023ms | 0.079ms | 1000 |
| Native Spread | 39K | 0.026ms | 0.070ms | 1000 |
| Immutability Helper | 11K | 0.091ms | 0.168ms | 1000 |
| Craft | 6K | 0.165ms | 0.222ms | 1000 |
| Immer | 2K | 0.582ms | 1.189ms | 1000 |
| Immutable.js | 1K | 0.906ms | 1.749ms | 1000 |
| Seamless Immutable | 477 | 2.096ms | 3.401ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   397K ops/sec
🥈 Immer              ████████                                   78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 397K | 0.003ms | 0.009ms | 1000 |
| Immer | 78K | 0.013ms | 0.029ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   117K ops/sec
🥈 Immer              ███████████████████████                    67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 117K | 0.009ms | 0.026ms | 1000 |
| Immer | 67K | 0.015ms | 0.037ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   169K ops/sec
🥈 Immer              █████████████                              53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 169K | 0.006ms | 0.015ms | 1000 |
| Immer | 53K | 0.019ms | 0.040ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   124K ops/sec
🥈 Immer              ███████████████████                        58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 124K | 0.008ms | 0.019ms | 1000 |
| Immer | 58K | 0.017ms | 0.043ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Mutative           ████████████████████████████████████████   32K ops/sec
🥈 Craft              ██████████████████████████████████         27K ops/sec
🥉 Immer              █████████████                              10K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 32K | 0.032ms | 0.082ms | 1000 |
| Craft | 27K | 0.038ms | 0.071ms | 1000 |
| Immer | 10K | 0.097ms | 0.164ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   273K ops/sec
🥈 Mutative           ██████████████████                         121K ops/sec
🥉 Immer              ██████████████                             93K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 273K | 0.004ms | 0.016ms | 1000 |
| Mutative | 121K | 0.008ms | 0.030ms | 1000 |
| Immer | 93K | 0.011ms | 0.028ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   432K ops/sec
🥈 Immer              █████████                                  99K ops/sec
🥉 Mutative           ██████                                     69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 432K | 0.002ms | 0.011ms | 1000 |
| Immer | 99K | 0.010ms | 0.034ms | 1000 |
| Mutative | 69K | 0.014ms | 0.042ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   323K ops/sec
🥈 Immer              █████████████████                          135K ops/sec
🥉 Mutative           █████████████                              105K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 323K | 0.003ms | 0.016ms | 1000 |
| Immer | 135K | 0.007ms | 0.031ms | 1000 |
| Mutative | 105K | 0.010ms | 0.031ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   409K ops/sec
🥈 Immer              ███████████████                            155K ops/sec
🥉 Mutative           ███████████                                113K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 409K | 0.002ms | 0.009ms | 1000 |
| Immer | 155K | 0.006ms | 0.023ms | 1000 |
| Mutative | 113K | 0.009ms | 0.027ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   91K ops/sec
🥈 Mutative           █████████████                              29K ops/sec
🥉 Immer              ███████                                    16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 91K | 0.011ms | 0.025ms | 1000 |
| Mutative | 29K | 0.034ms | 0.073ms | 1000 |
| Immer | 16K | 0.062ms | 0.117ms | 1000 |


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
- **[Craft](#)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/craft) • [📊 bundle size](https://bundlephobia.com/package/craft)
- **[Immutability Helper](#)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Mutative](#)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](#)** (`immer`) v10.2.0 • 4.70 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](#)** (`immutable`) v5.1.4 • 17.74 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](#)** (`seamless-immutable`) v7.1.4 • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-13T11:59:12.994Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
