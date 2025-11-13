<div align="center">

# Validation Benchmarks

Comprehensive performance benchmarks for React validation libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-10-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Superstruct - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Yup - Great performance (16.9/100) with good ecosystem
- **🎯 Popular Choice**: Joi - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Yup** (Score: 16.9/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Joi** (Score: 13.4/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Zod** (Score: 10.9/100)
- TypeScript-first schema declaration and validation library with static type inference
- **Best for**: General purpose state management
- [GitHub](https://github.com/colinhacks/zod) • [npm](https://www.npmjs.com/package/zod)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 10 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/superstruct) [📊](https://bundlephobia.com/package/superstruct) |
| 🥈 2 | **[Yup](https://github.com/jquense/yup)** | 16.9/100 | 17% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
| 🥉 3 | **[Joi](git://github.com/hapijs/joi)** | 13.4/100 | 13% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 10.9/100 | 11% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **16.9** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **13.4** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **10.9** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   247K ops/sec
🥈 Yup                ██                                         15K ops/sec
🥉 Zod                ██                                         12K ops/sec
 Joi                █                                          8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 247K | 0.004ms | 0.016ms | 1000 |
| Yup | 15K | 0.068ms | 0.134ms | 1000 |
| Zod | 12K | 0.086ms | 0.193ms | 1000 |
| Joi | 8K | 0.133ms | 0.293ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   522K ops/sec
🥈 Zod                ███                                        37K ops/sec
🥉 Yup                ██                                         31K ops/sec
 Joi                ██                                         23K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 522K | 0.002ms | 0.012ms | 1000 |
| Zod | 37K | 0.027ms | 0.098ms | 1000 |
| Yup | 31K | 0.032ms | 0.094ms | 1000 |
| Joi | 23K | 0.044ms | 0.130ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   538K ops/sec
🥈 Yup                █████████                                  121K ops/sec
🥉 Joi                █████                                      68K ops/sec
 Zod                ██                                         24K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 538K | 0.002ms | 0.007ms | 1000 |
| Yup | 121K | 0.008ms | 0.026ms | 1000 |
| Joi | 68K | 0.015ms | 0.045ms | 1000 |
| Zod | 24K | 0.042ms | 0.075ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   308K ops/sec
🥈 Yup                ████████                                   61K ops/sec
🥉 Joi                ███████                                    55K ops/sec
 Zod                ███████                                    54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 308K | 0.003ms | 0.011ms | 1000 |
| Yup | 61K | 0.016ms | 0.047ms | 1000 |
| Joi | 55K | 0.018ms | 0.047ms | 1000 |
| Zod | 54K | 0.018ms | 0.052ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   281K ops/sec
🥈 Yup                ███████████                                76K ops/sec
🥉 Joi                ████████                                   58K ops/sec
 Zod                █████                                      34K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 281K | 0.003ms | 0.022ms | 1000 |
| Yup | 76K | 0.013ms | 0.041ms | 1000 |
| Joi | 58K | 0.017ms | 0.051ms | 1000 |
| Zod | 34K | 0.029ms | 0.078ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   35K ops/sec
🥈 Zod                ██████████████████                         15K ops/sec
🥉 Joi                ██████████████                             12K ops/sec
 Yup                █████████████                              11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 35K | 0.029ms | 0.068ms | 1000 |
| Zod | 15K | 0.066ms | 0.139ms | 1000 |
| Joi | 12K | 0.085ms | 0.209ms | 1000 |
| Yup | 11K | 0.088ms | 0.148ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   54K ops/sec
🥈 Yup                ███████████                                15K ops/sec
🥉 Joi                █████████                                  12K ops/sec
 Zod                ██████                                     8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 54K | 0.018ms | 0.046ms | 1000 |
| Yup | 15K | 0.068ms | 0.144ms | 1000 |
| Joi | 12K | 0.084ms | 0.171ms | 1000 |
| Zod | 8K | 0.122ms | 0.260ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   41K ops/sec
🥈 Yup                ████████████                               12K ops/sec
🥉 Joi                █████████                                  9K ops/sec
 Zod                █████                                      5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 41K | 0.025ms | 0.051ms | 1000 |
| Yup | 12K | 0.084ms | 0.193ms | 1000 |
| Joi | 9K | 0.109ms | 0.223ms | 1000 |
| Zod | 5K | 0.201ms | 0.333ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   92K ops/sec
🥈 Yup                ██████████                                 23K ops/sec
🥉 Joi                █████████                                  22K ops/sec
 Zod                ███████                                    16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 92K | 0.011ms | 0.029ms | 1000 |
| Yup | 23K | 0.043ms | 0.082ms | 1000 |
| Joi | 22K | 0.046ms | 0.096ms | 1000 |
| Zod | 16K | 0.063ms | 0.134ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   153K ops/sec
🥈 Joi                ███                                        12K ops/sec
🥉 Yup                ███                                        10K ops/sec
 Zod                ██                                         8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 153K | 0.006ms | 0.022ms | 1000 |
| Joi | 12K | 0.085ms | 0.185ms | 1000 |
| Yup | 10K | 0.097ms | 0.162ms | 1000 |
| Zod | 8K | 0.124ms | 0.206ms | 1000 |


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
cd benchmarks/validation

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

**Total**: 10 tests × 4 libraries = 40 benchmark runs

---

## 🚀 Libraries Tested

- **[Superstruct](git://github.com/ianstormtaylor/superstruct)** (`superstruct`) v2.0.2 • 3.44 KB gzip - [📦 npm](https://www.npmjs.com/package/superstruct) • [📊 bundle size](https://bundlephobia.com/package/superstruct)
- **[Yup](https://github.com/jquense/yup)** (`yup`) v1.7.1 • 13.33 KB gzip - [📦 npm](https://www.npmjs.com/package/yup) • [📊 bundle size](https://bundlephobia.com/package/yup)
- **[Joi](git://github.com/hapijs/joi)** (`joi`) v18.0.1 • 52.64 KB gzip - [📦 npm](https://www.npmjs.com/package/joi) • [📊 bundle size](https://bundlephobia.com/package/joi)
- **[Zod](https://github.com/colinhacks/zod)** (`zod`) v4.1.12 • 52.88 KB gzip - [📦 npm](https://www.npmjs.com/package/zod) • [📊 bundle size](https://bundlephobia.com/package/zod)

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

*Generated on 2025-11-13T16:08:18.051Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
