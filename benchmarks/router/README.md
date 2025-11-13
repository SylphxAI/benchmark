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

- **⚡ Maximum Performance**: SolidJS Router - Fastest overall with 97.6/100 score
- **⚖️ Best Balance**: Zen Router - Great performance (90.9/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**SolidJS Router** (Score: 97.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/solidjs-router)


**Zen Router** (Score: 90.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**Wouter** (Score: 21.6/100)
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
| 🥇 1 | **[SolidJS Router](#)** | 97.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solidjs-router) [📊](https://bundlephobia.com/package/solidjs-router) |
| 🥈 2 | **[Zen Router](#)** | 90.9/100 | 93% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥉 3 | **[Wouter](#)** | 21.6/100 | 22% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](#)** | 4.4/100 | 4% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[SolidJS Router](#)** | **97.6** | N/A | State management solution... | General purpose... |
| **[Zen Router](#)** | **90.9** | **1.57 KB** | State management solution... | General purpose... |
| **[Wouter](#)** | **21.6** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **4.4** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   559K ops/sec
🥈 Zen Router         ██████████████████████████████████████     530K ops/sec
🥉 Wouter             ██████████████████                         254K ops/sec
 React Router       ██                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 559K | 0.002ms | 0.004ms | 1000 |
| Zen Router | 530K | 0.002ms | 0.005ms | 1000 |
| Wouter | 254K | 0.004ms | 0.015ms | 1000 |
| React Router | 31K | 0.032ms | 0.086ms | 1000 |

#### Static Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   521K ops/sec
🥈 Zen Router         ████████████████████████████████████████   520K ops/sec
🥉 Wouter             ████████████████                           211K ops/sec
 React Router       █                                          17K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 521K | 0.002ms | 0.012ms | 1000 |
| Zen Router | 520K | 0.002ms | 0.010ms | 1000 |
| Wouter | 211K | 0.005ms | 0.022ms | 1000 |
| React Router | 17K | 0.059ms | 0.112ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 SolidJS Router     ████████████████████████████████████████   650K ops/sec
🥈 Zen Router         ████████████████████████████████           519K ops/sec
🥉 Wouter             ████████                                   126K ops/sec
 React Router       ██                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 650K | 0.002ms | 0.006ms | 1000 |
| Zen Router | 519K | 0.002ms | 0.009ms | 1000 |
| Wouter | 126K | 0.008ms | 0.030ms | 1000 |
| React Router | 32K | 0.031ms | 0.070ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   424K ops/sec
🥈 SolidJS Router     ███████████████████████████████████        376K ops/sec
🥉 Wouter             ████████████████                           165K ops/sec
 React Router       ████                                       44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 424K | 0.002ms | 0.009ms | 1000 |
| SolidJS Router | 376K | 0.003ms | 0.017ms | 1000 |
| Wouter | 165K | 0.006ms | 0.021ms | 1000 |
| React Router | 44K | 0.023ms | 0.058ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   862K ops/sec
🥈 Zen Router         ████████████████████████████████████████   852K ops/sec
🥉 Wouter             ███████                                    154K ops/sec
 React Router       ██                                         48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 862K | 0.001ms | 0.005ms | 1000 |
| Zen Router | 852K | 0.001ms | 0.006ms | 1000 |
| Wouter | 154K | 0.007ms | 0.015ms | 1000 |
| React Router | 48K | 0.021ms | 0.043ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 Zen Router         ████████████████████████████████████████   970K ops/sec
🥈 SolidJS Router     █████████████████████████████████████      890K ops/sec
🥉 Wouter             ███████                                    161K ops/sec
 React Router       ██                                         43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 970K | 0.001ms | 0.002ms | 1000 |
| SolidJS Router | 890K | 0.001ms | 0.003ms | 1000 |
| Wouter | 161K | 0.006ms | 0.016ms | 1000 |
| React Router | 43K | 0.023ms | 0.043ms | 1000 |

#### Wildcard Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   1.0M ops/sec
🥈 Zen Router         ██████████████████████████████████         873K ops/sec
🥉 Wouter             █████                                      133K ops/sec
 React Router       █                                          22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.0M | 0.001ms | 0.003ms | 1000 |
| Zen Router | 873K | 0.001ms | 0.006ms | 1000 |
| Wouter | 133K | 0.008ms | 0.026ms | 1000 |
| React Router | 22K | 0.045ms | 0.091ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   335K ops/sec
🥈 Zen Router         ███████████████████████████                225K ops/sec
🥉 Wouter             ████                                       35K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 335K | 0.003ms | 0.014ms | 1000 |
| Zen Router | 225K | 0.004ms | 0.017ms | 1000 |
| Wouter | 35K | 0.029ms | 0.067ms | 1000 |
| React Router | 7K | 0.147ms | 0.251ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 Zen Router         ████████████████████████████████████████   873K ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    861K ops/sec
🥉 Wouter             ████████                                   168K ops/sec
 React Router       ██                                         50K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 873K | 0.001ms | 0.004ms | 1000 |
| SolidJS Router | 861K | 0.001ms | 0.004ms | 1000 |
| Wouter | 168K | 0.006ms | 0.015ms | 1000 |
| React Router | 50K | 0.020ms | 0.045ms | 1000 |


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

- **[SolidJS Router](#)** (`@solidjs/router`) v0.15.9 - [📦 npm](https://www.npmjs.com/package/solidjs-router) • [📊 bundle size](https://bundlephobia.com/package/solidjs-router)
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

*Generated on 2025-11-13T11:59:13.838Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
