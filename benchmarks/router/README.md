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

- **⚡ Maximum Performance**: SolidJS Router - Fastest overall with 92.1/100 score
- **⚖️ Best Balance**: Zen Router - Great performance (83.1/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**SolidJS Router** (Score: 92.1/100)
- Universal router for Solid with nested routing and data APIs
- **Best for**: General purpose state management
- [GitHub](https://github.com/solidjs/solid-router) • [npm](https://www.npmjs.com/package/@solidjs/router)


**Zen Router** (Score: 83.1/100)
- Tiny and fast router with regex-based matching
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/zen-router) • [npm](https://www.npmjs.com/package/@sylphx/zen-router)


**Wouter** (Score: 18.5/100)
- Minimalist-friendly ~2.1KB routing for React and Preact
- **Best for**: General purpose state management
- [GitHub](https://github.com/molefrog/wouter) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 2.9/100)
- Declarative routing for React
- **Best for**: General purpose state management
- [GitHub](https://github.com/remix-run/react-router) • [npm](https://www.npmjs.com/package/react-router-dom)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[SolidJS Router](https://github.com/solidjs/solid-router)** | 92.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@solidjs/router) [📊](https://bundlephobia.com/package/@solidjs/router) |
| 🥈 2 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 83.1/100 | 90% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen-router) [📊](https://bundlephobia.com/package/@sylphx/zen-router) |
| 🥉 3 | **[Wouter](https://github.com/molefrog/wouter)** | 18.5/100 | 20% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](https://github.com/remix-run/react-router)** | 2.9/100 | 3% of fastest | [📦](https://www.npmjs.com/package/react-router-dom) [📊](https://bundlephobia.com/package/react-router-dom) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[SolidJS Router](https://github.com/solidjs/solid-router)** | **92.1** | **15.68 KB** | Universal router for Solid with nested routing and... | General purpose... |
| **[Zen Router](https://github.com/SylphxAI/zen-router)** | **83.1** | **0.95 KB** | Tiny and fast router with regex-based matching... | General purpose... |
| **[Wouter](https://github.com/molefrog/wouter)** | **18.5** | **4.44 KB** | Minimalist-friendly ~2.1KB routing for React and P... | General purpose... |
| **[React Router](https://github.com/remix-run/react-router)** | **2.9** | **14.80 KB** | Declarative routing for React... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   956K ops/sec
🥈 SolidJS Router     ██████████████████████                     533K ops/sec
🥉 Wouter             █████████████                              315K ops/sec
 React Router       █                                          24K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 956K | 0.001ms | 0.002ms | 1000 |
| SolidJS Router | 533K | 0.002ms | 0.003ms | 1000 |
| Wouter | 315K | 0.003ms | 0.017ms | 1000 |
| React Router | 24K | 0.042ms | 0.098ms | 1000 |

#### Static Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   721K ops/sec
🥈 Zen Router         ████████████████                           285K ops/sec
🥉 Wouter             ███████████████                            276K ops/sec
 React Router       █                                          18K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 721K | 0.001ms | 0.006ms | 1000 |
| Zen Router | 285K | 0.003ms | 0.006ms | 1000 |
| Wouter | 276K | 0.004ms | 0.017ms | 1000 |
| React Router | 18K | 0.057ms | 0.106ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 SolidJS Router     ████████████████████████████████████████   897K ops/sec
🥈 Zen Router         █████████████████████████████████████      828K ops/sec
🥉 Wouter             ████████                                   190K ops/sec
 React Router       █                                          28K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 897K | 0.001ms | 0.004ms | 1000 |
| Zen Router | 828K | 0.001ms | 0.006ms | 1000 |
| Wouter | 190K | 0.005ms | 0.025ms | 1000 |
| React Router | 28K | 0.036ms | 0.076ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   614K ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    598K ops/sec
🥉 Wouter             ███████████                                161K ops/sec
 React Router       ██                                         37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 614K | 0.002ms | 0.007ms | 1000 |
| SolidJS Router | 598K | 0.002ms | 0.008ms | 1000 |
| Wouter | 161K | 0.006ms | 0.023ms | 1000 |
| React Router | 37K | 0.027ms | 0.058ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.2M ops/sec
🥈 Zen Router         █████████████████████████████████████      1.1M ops/sec
🥉 Wouter             ██████                                     167K ops/sec
 React Router       █                                          33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen Router | 1.1M | 0.001ms | 0.003ms | 1000 |
| Wouter | 167K | 0.006ms | 0.015ms | 1000 |
| React Router | 33K | 0.030ms | 0.064ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 Zen Router         ████████████████████████████████████████   1.4M ops/sec
🥈 SolidJS Router     ███████████████████████████████████        1.2M ops/sec
🥉 Wouter             █████                                      177K ops/sec
 React Router       █                                          46K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.4M | 0.001ms | 0.002ms | 1000 |
| SolidJS Router | 1.2M | 0.001ms | 0.005ms | 1000 |
| Wouter | 177K | 0.006ms | 0.013ms | 1000 |
| React Router | 46K | 0.022ms | 0.043ms | 1000 |

#### Wildcard Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   1.5M ops/sec
🥈 Zen Router         ███████████████████████████████████████    1.4M ops/sec
🥉 Wouter             █████                                      177K ops/sec
 React Router       █                                          23K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.5M | 0.001ms | 0.002ms | 1000 |
| Zen Router | 1.4M | 0.001ms | 0.003ms | 1000 |
| Wouter | 177K | 0.006ms | 0.018ms | 1000 |
| React Router | 23K | 0.043ms | 0.091ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   355K ops/sec
🥈 Zen Router         ███████████████████████                    206K ops/sec
🥉 Wouter             ████                                       40K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 355K | 0.003ms | 0.015ms | 1000 |
| Zen Router | 206K | 0.005ms | 0.023ms | 1000 |
| Wouter | 40K | 0.025ms | 0.058ms | 1000 |
| React Router | 7K | 0.139ms | 0.178ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.2M ops/sec
🥈 Zen Router         ████████████████████████████████████████   1.2M ops/sec
🥉 Wouter             ██████                                     177K ops/sec
 React Router       ██                                         50K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen Router | 1.2M | 0.001ms | 0.002ms | 1000 |
| Wouter | 177K | 0.006ms | 0.017ms | 1000 |
| React Router | 50K | 0.020ms | 0.042ms | 1000 |


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

- **[SolidJS Router](https://github.com/solidjs/solid-router)** (`@solidjs/router`) v0.15.9 • 15.68 KB gzip - [📦 npm](https://www.npmjs.com/package/@solidjs/router) • [📊 bundle size](https://bundlephobia.com/package/@solidjs/router)
- **[Zen Router](https://github.com/SylphxAI/zen-router)** (`@sylphx/zen-router`) v1.0.2 • 0.95 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen-router) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen-router)
- **[Wouter](https://github.com/molefrog/wouter)** (`wouter`) v3.7.1 • 4.44 KB gzip - [📦 npm](https://www.npmjs.com/package/wouter) • [📊 bundle size](https://bundlephobia.com/package/wouter)
- **[React Router](https://github.com/remix-run/react-router)** (`react-router-dom`) v6.30.1 • 14.80 KB gzip - [📦 npm](https://www.npmjs.com/package/react-router-dom) • [📊 bundle size](https://bundlephobia.com/package/react-router-dom)

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

*Generated on 2025-11-13T16:08:17.903Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
