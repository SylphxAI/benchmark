<div align="center">

# 🏆 JavaScript Library Benchmarks

### *Automated performance benchmarks for popular JavaScript libraries*

[![Automated Daily](https://img.shields.io/badge/Automated-Daily-brightgreen?style=for-the-badge)](https://github.com/SylphxAI/benchmark/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vitest](https://img.shields.io/badge/Vitest-Bench-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📊 Benchmark Categories

| Category | Description | Libraries | Status | View Results |
|----------|-------------|-----------|--------|--------------|
| **[🎨 CSS Frameworks](./benchmarks/css-frameworks/)** | Build-time performance and CSS output size benchmarks | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/css-frameworks/)** |
| **[🔒 Immutability](./benchmarks/immutability/)** | Performance benchmarks for immutable data structure libraries | 6 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/immutability/)** |
| **[🧭 Router](./benchmarks/router/)** | Performance benchmarks for React routing libraries | 5 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/router/)** |
| **[🗃️ State Management](./benchmarks/state-management/)** | React state management libraries performance benchmarks | 8 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/state-management/)** |
| **[✅ Validation](./benchmarks/validation/)** | Schema validation library performance benchmarks | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/validation/)** |

Each category has its own detailed README with benchmark results, methodology, and insights.

---

**[View All State Management Results →](./benchmarks/state-management/)**

---

## 🔬 Methodology

Our benchmarks follow **professional-grade methodology** (88/100 credibility rating, Tier 2):

- **Weighted Geometric Mean**: Following [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark) standards
- **Variance-Based Weighting**: Stable tests weighted higher, outliers weighted lower
- **Automated Execution**: GitHub Actions with isolated process per library
- **Reproducible**: All code open source, all calculations documented
- **Transparent**: Raw data published, methodology peer-reviewed

> 📖 **[Read the Methodology Analysis →](./BENCHMARK_METHODOLOGY_ANALYSIS.md)**
>
> Comprehensive analysis of our scoring system, comparison with authoritative benchmarks (krausest, milomg), and credibility assessment.

### Key Documents

- **[📊 Executive Summary](./EXECUTIVE_SUMMARY.md)** - Overview of methodology improvements and results
- **[⚖️ Weighted Scoring](./WEIGHTED_SCORING_COMPARISON.md)** - Before/after comparison of scoring system
- **[📈 Ranking Analysis](./RANKING_ANALYSIS.md)** - Detailed analysis of performance rankings
- **[🏗️ Architecture](./ARCHITECTURE.md)** - System design and cost optimization

---

## 🔬 How It Works

- **Automated**: Runs hourly via GitHub Actions for per-library checks
- **Smart Execution**: Only benchmarks libraries with new versions (75-85% cost reduction)
- **Independent Results**: Each library tested and stored separately
- **Comprehensive**: 28 tests across 7 categories for state management
- **Professional Tools**: Tinybench (Vitest's benchmark engine)

---

## 🚀 Quick Start

### View Results
Browse to any category folder to see detailed benchmark results and insights.

### Run Locally
```bash
# Clone the repo
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Run a specific category
cd benchmarks/state-management
npm install
npm run benchmark

# Generate report
node generate-readme.js
```

---

## 🤝 Contributing

### Adding a New Library
1. Update `package.json` in the category folder
2. Update `library-metadata.json` with GitHub link
3. Add benchmark tests in `src/benchmark.bench.ts`
4. Run benchmarks and generate README
5. Submit PR with results

### Adding a New Category
1. Create directory in `benchmarks/`
2. Copy structure from existing category
3. Add libraries and write tests
4. Update main README table
5. Submit PR with sample results

---

## 📈 Results Format

Each category README includes:
- **Library Versions**: Current versions with last updated dates
- **Bundle Sizes**: Minified + Gzipped sizes from Bundlephobia
- **Benchmark Results**: Operations/sec, variance, mean time, p99
- **Key Insights**: Performance comparisons and recommendations

---

<div align="center">

**Developed and maintained by [Sylph](https://github.com/SylphxAI)**

### Supporting Tools
[Vitest](https://vitest.dev) • [Bundlephobia](https://bundlephobia.com) • [GitHub Actions](https://github.com/features/actions)

---

### Star this repo if you find it useful! ⭐

[⬆ Back to Top](#-javascript-library-benchmarks)

</div>
