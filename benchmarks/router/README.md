<div align="center">

# Router Benchmarks

Comprehensive performance benchmarks for React router libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-3-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-9-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Wouter - Great performance (23.3/100) with good ecosystem
- **🎯 Popular Choice**: React Router - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**Wouter** (Score: 23.3/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 4.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/react-router)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](#)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥈 2 | **[Wouter](#)** | 23.3/100 | 23% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
| 🥉 3 | **[React Router](#)** | 4.4/100 | 4% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](#)** | **100.0** | **1.57 KB** | State management solution... | General purpose... |
| **[Wouter](#)** | **23.3** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **4.4** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   660K ops/sec
🥈 Wouter             ███████████████████                        315K ops/sec
🥉 React Router       ██                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 660K | 0.002ms | 0.004ms | 1000 |
| Wouter | 315K | 0.003ms | 0.011ms | 1000 |
| React Router | 31K | 0.032ms | 0.082ms | 1000 |

#### Static Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   485K ops/sec
🥈 Wouter             ██████████████████                         214K ops/sec
🥉 React Router       ██                                         20K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 485K | 0.002ms | 0.012ms | 1000 |
| Wouter | 214K | 0.005ms | 0.018ms | 1000 |
| React Router | 20K | 0.051ms | 0.105ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 Zen Router         ████████████████████████████████████████   456K ops/sec
🥈 Wouter             █████████████                              150K ops/sec
🥉 React Router       ███                                        29K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 456K | 0.002ms | 0.008ms | 1000 |
| Wouter | 150K | 0.007ms | 0.023ms | 1000 |
| React Router | 29K | 0.035ms | 0.085ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   695K ops/sec
🥈 Wouter             ███████████                                194K ops/sec
🥉 React Router       ███                                        52K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 695K | 0.001ms | 0.007ms | 1000 |
| Wouter | 194K | 0.005ms | 0.014ms | 1000 |
| React Router | 52K | 0.019ms | 0.057ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 Zen Router         ████████████████████████████████████████   863K ops/sec
🥈 Wouter             ███████                                    157K ops/sec
🥉 React Router       ██                                         40K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 863K | 0.001ms | 0.004ms | 1000 |
| Wouter | 157K | 0.006ms | 0.018ms | 1000 |
| React Router | 40K | 0.025ms | 0.063ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 Zen Router         ████████████████████████████████████████   986K ops/sec
🥈 Wouter             ███████                                    162K ops/sec
🥉 React Router       ██                                         43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 986K | 0.001ms | 0.002ms | 1000 |
| Wouter | 162K | 0.006ms | 0.016ms | 1000 |
| React Router | 43K | 0.024ms | 0.047ms | 1000 |

#### Wildcard Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   999K ops/sec
🥈 Wouter             █████                                      131K ops/sec
🥉 React Router       █                                          25K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 999K | 0.001ms | 0.005ms | 1000 |
| Wouter | 131K | 0.008ms | 0.028ms | 1000 |
| React Router | 25K | 0.039ms | 0.088ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 Zen Router         ████████████████████████████████████████   299K ops/sec
🥈 Wouter             ██████                                     41K ops/sec
🥉 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 299K | 0.003ms | 0.017ms | 1000 |
| Wouter | 41K | 0.024ms | 0.056ms | 1000 |
| React Router | 7K | 0.143ms | 0.209ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 Zen Router         ████████████████████████████████████████   870K ops/sec
🥈 Wouter             ████████                                   172K ops/sec
🥉 React Router       ██                                         48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 870K | 0.001ms | 0.004ms | 1000 |
| Wouter | 172K | 0.006ms | 0.014ms | 1000 |
| React Router | 48K | 0.021ms | 0.049ms | 1000 |


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
cd /Users/kyle/benchmark-state/benchmarks/router

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

**Total**: 9 tests × 3 libraries = 27 benchmark runs

---

## 🚀 Libraries Tested

- **[Zen Router](#)** (`@sylphx/zen-router`) v1.0.2 • 1.57 KB gzip - [📦 npm](https://www.npmjs.com/package/zen-router) • [📊 bundle size](https://bundlephobia.com/package/zen-router)
- **[Wouter](#)** (`wouter`) v3.7.1 • 2.37 KB gzip - [📦 npm](https://www.npmjs.com/package/wouter) • [📊 bundle size](https://bundlephobia.com/package/wouter)
- **[React Router](#)** (`react-router-dom`) v6.30.1 • 26.34 KB gzip - [📦 npm](https://www.npmjs.com/package/react-router) • [📊 bundle size](https://bundlephobia.com/package/react-router)

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

*Generated on 2025-11-13T11:45:41.842Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
