<div align="center">

# Css Frameworks Benchmarks

Comprehensive performance benchmarks for React css-frameworks libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-5-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Panda CSS - Fastest overall with 85.1/100 score
- **⚖️ Best Balance**: UnoCSS - Great performance (84.8/100) with good ecosystem
- **🎯 Popular Choice**: Tailwind CSS - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Panda CSS** (Score: 85.1/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/panda)


**UnoCSS** (Score: 84.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/unocss)


**Tailwind CSS** (Score: 83.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/tailwind)


**Silk** (Score: 82.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/silk)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 5 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Panda CSS](#)** | 85.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/panda) [📊](https://bundlephobia.com/package/panda) |
| 🥈 2 | **[UnoCSS](#)** | 84.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/unocss) [📊](https://bundlephobia.com/package/unocss) |
| 🥉 3 | **[Tailwind CSS](#)** | 83.9/100 | 99% of fastest | [📦](https://www.npmjs.com/package/tailwind) [📊](https://bundlephobia.com/package/tailwind) |
|  4 | **[Silk](#)** | 82.6/100 | 97% of fastest | [📦](https://www.npmjs.com/package/silk) [📊](https://bundlephobia.com/package/silk) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Panda CSS](#)** | **85.1** | **8.02 KB** | State management solution... | General purpose... |
| **[UnoCSS](#)** | **84.8** | **3.42 KB** | State management solution... | General purpose... |
| **[Tailwind CSS](#)** | **83.9** | **516.69 KB** | State management solution... | General purpose... |
| **[Silk](#)** | **82.6** | **9.46 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-style-application

#### Apply 100 inline styles

```
🥇 UnoCSS             ████████████████████████████████████████   118K ops/sec
🥈 Panda CSS          ██████████████████████████████████████     113K ops/sec
🥉 Silk               █████████████████████████████████          98K ops/sec
 Tailwind CSS       █████████████████████████████████          96K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| UnoCSS | 118K | 0.008ms | 0.019ms | 1000 |
| Panda CSS | 113K | 0.009ms | 0.020ms | 1000 |
| Silk | 98K | 0.010ms | 0.030ms | 1000 |
| Tailwind CSS | 96K | 0.010ms | 0.029ms | 1000 |

#### Conditional styling (1000 iterations)

```
🥇 Silk               ████████████████████████████████████████   783K ops/sec
🥈 Tailwind CSS       ███████████████████████████████            608K ops/sec
🥉 Panda CSS          █████████████████████████████              561K ops/sec
 UnoCSS             ██████████████████████████                 514K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 783K | 0.001ms | 0.004ms | 1000 |
| Tailwind CSS | 608K | 0.002ms | 0.007ms | 1000 |
| Panda CSS | 561K | 0.002ms | 0.008ms | 1000 |
| UnoCSS | 514K | 0.002ms | 0.007ms | 1000 |

#### String concatenation (complex className)

```
🥇 UnoCSS             ████████████████████████████████████████   1.0M ops/sec
🥈 Panda CSS          ████████████████████████████████████       934K ops/sec
🥉 Silk               ███████████████████████████████            803K ops/sec
 Tailwind CSS       ██████████████████████████████             768K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| UnoCSS | 1.0M | 0.001ms | 0.006ms | 1000 |
| Panda CSS | 934K | 0.001ms | 0.008ms | 1000 |
| Silk | 803K | 0.001ms | 0.008ms | 1000 |
| Tailwind CSS | 768K | 0.001ms | 0.007ms | 1000 |

### 02-dynamic-updates

#### Responsive breakpoint matching

```
🥇 Silk               ████████████████████████████████████████   451K ops/sec
🥈 Tailwind CSS       ████████████████████████████████████████   448K ops/sec
🥉 Panda CSS          █████████████████████████████              326K ops/sec
 UnoCSS             ███████████████████████████                303K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 451K | 0.002ms | 0.016ms | 1000 |
| Tailwind CSS | 448K | 0.002ms | 0.015ms | 1000 |
| Panda CSS | 326K | 0.003ms | 0.016ms | 1000 |
| UnoCSS | 303K | 0.003ms | 0.025ms | 1000 |

#### Theme toggle (dark/light mode)

```
🥇 Panda CSS          ████████████████████████████████████████   613K ops/sec
🥈 UnoCSS             ████████████████████████████████████████   610K ops/sec
🥉 Tailwind CSS       ████████████████████████████████████       552K ops/sec
 Silk               ████████████████████████                   368K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Panda CSS | 613K | 0.002ms | 0.003ms | 1000 |
| UnoCSS | 610K | 0.002ms | 0.003ms | 1000 |
| Tailwind CSS | 552K | 0.002ms | 0.006ms | 1000 |
| Silk | 368K | 0.003ms | 0.006ms | 1000 |


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
cd benchmarks/css-frameworks

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

**Total**: 5 tests × 4 libraries = 20 benchmark runs

---

## 🚀 Libraries Tested

- **[Panda CSS](#)** (`@pandacss/dev`) (8.02 KB gzip) - [📦 npm](https://www.npmjs.com/package/panda) • [📊 bundle size](https://bundlephobia.com/package/panda)
- **[UnoCSS](#)** (`unocss`) (3.42 KB gzip) - [📦 npm](https://www.npmjs.com/package/unocss) • [📊 bundle size](https://bundlephobia.com/package/unocss)
- **[Tailwind CSS](#)** (`tailwindcss`) (516.69 KB gzip) - [📦 npm](https://www.npmjs.com/package/tailwind) • [📊 bundle size](https://bundlephobia.com/package/tailwind)
- **[Silk](#)** (`@sylphx/silk`) (9.46 KB gzip) - [📦 npm](https://www.npmjs.com/package/silk) • [📊 bundle size](https://bundlephobia.com/package/silk)

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

*Generated on 2025-11-13T11:36:08.359Z*

[⬆️ Back to Top](#css-frameworks-benchmarks) • [⬅️ Main README](../../README.md)

</div>
