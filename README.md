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
| **[🗃️ State Management](./benchmarks/state-management/)** | React state management libraries | 8 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/state-management/)** |
| **[🔄 Immutability](./benchmarks/immutability/)** | Immutability helper libraries | 6 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/immutability/)** |
| **[🧭 Router](./benchmarks/router/)** | React routing libraries | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/router/)** |
| **[🎨 CSS Frameworks](./benchmarks/css-frameworks/)** | CSS-in-JS and utility-first CSS frameworks | 4 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/css-frameworks/)** |

Each category has its own detailed README with benchmark results, methodology, and insights.

---

## 📈 Test Group Performance

### 🗃️ State Management

**[01 - Read Operations](./benchmarks/state-management/#01---read-operations)**

Simple read and high-frequency read patterns

```
🥇   Solid Signals      ████████████████████████████████████████     28.3M ops/sec
🥈   Jotai              ███████████████████████████████████          24.6M ops/sec
🥉   Zen                ████████████████████████████████             22.6M ops/sec
4.   Preact Signals     █████████████████████                        14.7M ops/sec
5.   MobX               ██████████████                                9.8M ops/sec
6.   Redux Toolkit      ████                                          2.5M ops/sec
7.   Valtio             ████                                          2.5M ops/sec
8.   Zustand            █                                             993K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 28.3M |
| 🥈 2 | **Jotai** | 24.6M |
| 🥉 3 | **Zen** | 22.6M |

[View all 8 results →](./benchmarks/state-management/#01---read-operations)

---

**[02 - Write Operations](./benchmarks/state-management/#02---write-operations)**

Simple increments and burst updates

```
🥇   Solid Signals      ████████████████████████████████████████     31.2M ops/sec
🥈   Jotai              ██████████████████████████                   20.3M ops/sec
🥉   Preact Signals     ████████████████████████                     18.4M ops/sec
4.   Zen                ██████████████████████                       16.8M ops/sec
5.   Valtio             ██                                            1.5M ops/sec
6.   MobX               █                                             1.1M ops/sec
7.   Redux Toolkit                                                    242K ops/sec
8.   Zustand                                                          105K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 31.2M |
| 🥈 2 | **Jotai** | 20.3M |
| 🥉 3 | **Preact Signals** | 18.4M |

[View all 8 results →](./benchmarks/state-management/#02---write-operations)

---

**[03 - Store Creation](./benchmarks/state-management/#03---store-creation)**

Instance creation overhead

```
🥇   Preact Signals     ████████████████████████████████████████     33.4M ops/sec
🥈   Zen                ███████████████████████████████████████      32.2M ops/sec
🥉   Solid Signals      ██████████████████████████████████████       32.1M ops/sec
4.   Zustand            █████████████                                10.9M ops/sec
5.   Jotai              ███                                           2.3M ops/sec
6.   Valtio                                                           235K ops/sec
7.   Redux Toolkit                                                    173K ops/sec
8.   MobX                                                              278 ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Preact Signals** | 33.4M |
| 🥈 2 | **Zen** | 32.2M |
| 🥉 3 | **Solid Signals** | 32.1M |

[View all 8 results →](./benchmarks/state-management/#03---store-creation)

---

**[04 - Complexity](./benchmarks/state-management/#04---complexity)**

Deep nested state

```
🥇   MobX               ████████████████████████████████████████       925 ops/sec
🥈   Zen                ████████████████████████████████████████       924 ops/sec
🥉   Solid Signals      ████████████████████████████████████████       923 ops/sec
4.   Jotai              ████████████████████████████████████████       917 ops/sec
5.   Zustand            ███████████████████████████████████████        907 ops/sec
6.   Preact Signals     ███████████████████████████████████████        904 ops/sec
7.   Valtio             ███████████████████████████████████████        898 ops/sec
8.   Redux Toolkit      ███████████████████████████████████████        892 ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **MobX** | 925 |
| 🥈 2 | **Zen** | 924 |
| 🥉 3 | **Solid Signals** | 923 |

[View all 8 results →](./benchmarks/state-management/#04---complexity)

---

**[05 - Cache Performance](./benchmarks/state-management/#05---cache-performance)**

Repeated access patterns

```
🥇   MobX               ████████████████████████████████████████       925 ops/sec
🥈   Zen                ████████████████████████████████████████       924 ops/sec
🥉   Solid Signals      ████████████████████████████████████████       923 ops/sec
4.   Jotai              ████████████████████████████████████████       917 ops/sec
5.   Zustand            ███████████████████████████████████████        907 ops/sec
6.   Preact Signals     ███████████████████████████████████████        904 ops/sec
7.   Valtio             ███████████████████████████████████████        898 ops/sec
8.   Redux Toolkit      ███████████████████████████████████████        892 ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **MobX** | 925 |
| 🥈 2 | **Zen** | 924 |
| 🥉 3 | **Solid Signals** | 923 |

[View all 8 results →](./benchmarks/state-management/#05---cache-performance)

---

**[06 - Memory Allocation](./benchmarks/state-management/#06---memory-allocation)**

Large state allocation performance

```
🥇   MobX               ████████████████████████████████████████       925 ops/sec
🥈   Zen                ████████████████████████████████████████       924 ops/sec
🥉   Solid Signals      ████████████████████████████████████████       923 ops/sec
4.   Jotai              ████████████████████████████████████████       917 ops/sec
5.   Zustand            ███████████████████████████████████████        907 ops/sec
6.   Preact Signals     ███████████████████████████████████████        904 ops/sec
7.   Valtio             ███████████████████████████████████████        898 ops/sec
8.   Redux Toolkit      ███████████████████████████████████████        892 ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **MobX** | 925 |
| 🥈 2 | **Zen** | 924 |
| 🥉 3 | **Solid Signals** | 923 |

[View all 8 results →](./benchmarks/state-management/#06---memory-allocation)

**[View All State Management Results →](./benchmarks/state-management/)**

---

## 🔬 How It Works

- **Automated**: Runs hourly via GitHub Actions for per-library checks
- **Smart Execution**: Only benchmarks libraries with new versions (75-85% cost reduction)
- **Independent Results**: Each library tested and stored separately
- **Comprehensive**: Multiple real-world test scenarios per category
- **Transparent**: Open source, reproducible locally

> 📖 **[Read the Architecture Documentation →](./ARCHITECTURE.md)**
>
> Learn about the per-library benchmark system, cost optimization strategies, and how to add new libraries.

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
npx tsx ../../scripts/generate-readme.ts .
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
