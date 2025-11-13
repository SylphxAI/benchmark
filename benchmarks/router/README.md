<div align="center">

# Router Benchmarks

Comprehensive performance benchmarks for React router libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
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

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 98.6/100 score
- **⚖️ Best Balance**: SolidJS Router - Great performance (93.0/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 98.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**SolidJS Router** (Score: 93.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/solidjs-router)


**Wouter** (Score: 20.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 3.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/react-router)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](#)** | 98.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥈 2 | **[SolidJS Router](#)** | 93.0/100 | 94% of fastest | [📦](https://www.npmjs.com/package/solidjs-router) [📊](https://bundlephobia.com/package/solidjs-router) |
| 🥉 3 | **[Wouter](#)** | 20.4/100 | 21% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](#)** | 3.6/100 | 4% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](#)** | **98.6** | **1.57 KB** | State management solution... | General purpose... |
| **[SolidJS Router](#)** | **93.0** | N/A | State management solution... | General purpose... |
| **[Wouter](#)** | **20.4** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **3.6** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   738K ops/sec
🥈 SolidJS Router     ███████████████████████████████            576K ops/sec
🥉 Wouter             ████████████████                           299K ops/sec
 React Router       ██                                         33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 738K | 0.001ms | 0.003ms | 1000 |
| SolidJS Router | 576K | 0.002ms | 0.004ms | 1000 |
| Wouter | 299K | 0.003ms | 0.019ms | 1000 |
| React Router | 33K | 0.030ms | 0.074ms | 1000 |

#### Static Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   655K ops/sec
🥈 SolidJS Router     ████████████████████████████████           530K ops/sec
🥉 Wouter             ███████████████                            243K ops/sec
 React Router       █                                          19K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 655K | 0.002ms | 0.011ms | 1000 |
| SolidJS Router | 530K | 0.002ms | 0.012ms | 1000 |
| Wouter | 243K | 0.004ms | 0.018ms | 1000 |
| React Router | 19K | 0.053ms | 0.106ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 Zen Router         ████████████████████████████████████████   1.0M ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    1.0M ops/sec
🥉 Wouter             ████████                                   206K ops/sec
 React Router       ██                                         40K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.0M | 0.001ms | 0.004ms | 1000 |
| SolidJS Router | 1.0M | 0.001ms | 0.003ms | 1000 |
| Wouter | 206K | 0.005ms | 0.019ms | 1000 |
| React Router | 40K | 0.025ms | 0.046ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   616K ops/sec
🥈 SolidJS Router     ██████████████████████████████████         518K ops/sec
🥉 Wouter             ███████████                                172K ops/sec
 React Router       ██                                         34K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 616K | 0.002ms | 0.009ms | 1000 |
| SolidJS Router | 518K | 0.002ms | 0.012ms | 1000 |
| Wouter | 172K | 0.006ms | 0.023ms | 1000 |
| React Router | 34K | 0.030ms | 0.071ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   839K ops/sec
🥈 Zen Router         ██████████████████████████████████████     807K ops/sec
🥉 Wouter             ███████                                    143K ops/sec
 React Router       ██                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 839K | 0.001ms | 0.005ms | 1000 |
| Zen Router | 807K | 0.001ms | 0.006ms | 1000 |
| Wouter | 143K | 0.007ms | 0.022ms | 1000 |
| React Router | 32K | 0.032ms | 0.074ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 SolidJS Router     ████████████████████████████████████████   941K ops/sec
🥈 Zen Router         ██████████████████████████████████████     903K ops/sec
🥉 Wouter             ██████                                     145K ops/sec
 React Router       █                                          35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 941K | 0.001ms | 0.003ms | 1000 |
| Zen Router | 903K | 0.001ms | 0.003ms | 1000 |
| Wouter | 145K | 0.007ms | 0.022ms | 1000 |
| React Router | 35K | 0.029ms | 0.066ms | 1000 |

#### Wildcard Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   1.0M ops/sec
🥈 Zen Router         ███████████████████████████████████████    984K ops/sec
🥉 Wouter             █████                                      121K ops/sec
 React Router       █                                          24K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.0M | 0.001ms | 0.005ms | 1000 |
| Zen Router | 984K | 0.001ms | 0.003ms | 1000 |
| Wouter | 121K | 0.008ms | 0.028ms | 1000 |
| React Router | 24K | 0.042ms | 0.090ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   349K ops/sec
🥈 Zen Router         ████████████████████████████████████████   345K ops/sec
🥉 Wouter             ████                                       39K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 349K | 0.003ms | 0.014ms | 1000 |
| Zen Router | 345K | 0.003ms | 0.015ms | 1000 |
| Wouter | 39K | 0.025ms | 0.047ms | 1000 |
| React Router | 7K | 0.149ms | 0.316ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 SolidJS Router     ████████████████████████████████████████   844K ops/sec
🥈 Zen Router         ███████████████████████████████████████    830K ops/sec
🥉 Wouter             ████████                                   170K ops/sec
 React Router       ██                                         51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 844K | 0.001ms | 0.004ms | 1000 |
| Zen Router | 830K | 0.001ms | 0.004ms | 1000 |
| Wouter | 170K | 0.006ms | 0.014ms | 1000 |
| React Router | 51K | 0.019ms | 0.038ms | 1000 |


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
cd benchmarks/router

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

**Total**: 9 tests × 4 libraries = 36 benchmark runs

---

## 🚀 Libraries Tested

- **[Zen Router](#)** (`@sylphx/zen-router`) v1.0.2 • 1.57 KB gzip - [📦 npm](https://www.npmjs.com/package/zen-router) • [📊 bundle size](https://bundlephobia.com/package/zen-router)
- **[SolidJS Router](#)** (`@solidjs/router`) v0.15.9 - [📦 npm](https://www.npmjs.com/package/solidjs-router) • [📊 bundle size](https://bundlephobia.com/package/solidjs-router)
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

*Generated on 2025-11-13T11:52:55.498Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
