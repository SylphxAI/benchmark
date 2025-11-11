# Read Operations

Simple read and high-frequency read patterns.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [01-read - Jotai](#01-read---jotai)
  - [01-read - MobX](#01-read---mobx)
  - [01-read - Preact Signals](#01-read---preact-signals)
  - [01-read - Redux Toolkit](#01-read---redux-toolkit)
  - [01-read - Solid Signals](#01-read---solid-signals)
  - [01-read - Valtio](#01-read---valtio)
  - [01-read - Zen](#01-read---zen)
  - [01-read - Zustand](#01-read---zustand)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**:
- Each library's raw performance (ops/sec) is measured for each test in this group
- The group score is calculated using geometric mean of all test results
- Formula: `Group Score = ⁿ√(Test₁ × Test₂ × ... × Testₙ)`
- Geometric mean gives balanced weight to all tests regardless of their magnitude

**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 31.5M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 26.7M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 23.8M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 15.7M |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 10.1M |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.5M |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.5M |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 1.1M |

---

## Detailed Results

### High Frequency Read

```
🥇   MobX               ████████████████████████████████████████     26.5M ops/sec
🥈   Solid Signals      ██████████████████████████████████████       25.0M ops/sec
🥉   Jotai              ██████████████████████████████               19.6M ops/sec
4.   Zen                ███████████████████████████                  18.0M ops/sec
5.   Preact Signals     ███████████                                   7.3M ops/sec
6.   Redux Toolkit      ██████████                                    6.5M ops/sec
7.   Zustand            █████                                         3.2M ops/sec
8.   Valtio             ██                                            1.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 26,483,124 | ±0.02% | N/A | N/A | 13241563 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 25,020,205 | ±0.12% | N/A | 0.1000ms | 12510103 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 19,557,537 | ±0.03% | 0.1000ms | 0.1000ms | 9778769 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 18,040,774 | ±0.17% | 0.1000ms | 0.1000ms | 9020387 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 7,318,541 | ±0.13% | 0.1000ms | 0.2000ms | 3659271 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 6,507,009 | ±0.05% | 0.2000ms | 0.2000ms | 3253505 |
| 7 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,245,544 | ±0.02% | 0.3000ms | 0.4000ms | 1622773 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,280,244 | ±0.03% | 0.8000ms | 1.0000ms | 640123 |

**Key Insight:** MobX is 20.69x faster than Valtio in this test.

### Simple Read

```
🥇   Solid Signals      ████████████████████████████████████████     39.6M ops/sec
🥈   Jotai              █████████████████████████████████████        36.4M ops/sec
🥉   Preact Signals     ██████████████████████████████████           33.8M ops/sec
4.   Zen                ████████████████████████████████             31.5M ops/sec
5.   Valtio             █████                                         4.9M ops/sec
6.   MobX               ████                                          3.8M ops/sec
7.   Redux Toolkit      █                                             951K ops/sec
8.   Zustand                                                          376K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 39,633,391 | ±0.08% | N/A | N/A | 19816697 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 36,406,970 | ±0.09% | N/A | N/A | 18203486 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 33,823,774 | ±1.01% | N/A | N/A | 16911887 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 31,505,127 | ±0.08% | N/A | N/A | 15752564 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,885,532 | ±0.14% | 0.2000ms | 0.3000ms | 2442767 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 3,848,893 | ±0.63% | 0.3000ms | 0.3000ms | 1924447 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 950,871 | ±0.30% | 1.1000ms | 1.6000ms | 475436 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 376,397 | ±0.17% | 2.7000ms | 3.3000ms | 188199 |

**Key Insight:** Solid Signals is 105.30x faster than Zustand in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:read

# Or run specific test file
npx vitest bench groups/01-read/*.bench.ts
```

---
*Last generated: 2025-11-11T05:07:41.702Z*
