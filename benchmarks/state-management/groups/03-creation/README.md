# Store Creation

Instance creation overhead.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [03-creation - Jotai](#03-creation---jotai)
  - [03-creation - MobX](#03-creation---mobx)
  - [03-creation - Preact Signals](#03-creation---preact-signals)
  - [03-creation - Redux Toolkit](#03-creation---redux-toolkit)
  - [03-creation - Solid Signals](#03-creation---solid-signals)
  - [03-creation - Valtio](#03-creation---valtio)
  - [03-creation - Zen](#03-creation---zen)
  - [03-creation - Zustand](#03-creation---zustand)
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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 40.4M |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 40.1M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 38.6M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12.8M |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.4M |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 640K |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 260K |
|  8 | [**MobX**](https://github.com/mobxjs/mobx) | 399 |

---

## Detailed Results

### Store Creation

```
🥇   Zen                ████████████████████████████████████████     40.4M ops/sec
🥈   Preact Signals     ████████████████████████████████████████     40.1M ops/sec
🥉   Solid Signals      ██████████████████████████████████████       38.6M ops/sec
4.   Zustand            █████████████                                12.8M ops/sec
5.   Jotai              ██                                            2.4M ops/sec
6.   Valtio             █                                             640K ops/sec
7.   Redux Toolkit                                                    260K ops/sec
8.   MobX                                                              399 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 40,368,887 | ±0.04% | N/A | N/A | 20184444 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 40,097,070 | ±0.06% | N/A | N/A | 20048536 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,643,032 | ±0.46% | N/A | N/A | 19321517 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,785,973 | ±1.22% | 0.1000ms | 0.2000ms | 6392987 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,399,742 | ±2.06% | 0.4000ms | 1.0000ms | 1199871 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 639,684 | ±61.45% | 1.6000ms | 1.0000ms | 323942 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 260,270 | ±0.63% | 3.8000ms | 4.9000ms | 130136 |
| 8 | [**MobX**](https://github.com/mobxjs/mobx) | 399 | ±7.37% | 2503.7000ms | 7867.4000ms | 200 |

**Key Insight:** Zen is 101071.30x faster than MobX in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:creation

# Or run specific test file
npx vitest bench groups/03-creation/*.bench.ts
```

---
*Last generated: 2025-11-11T05:07:41.775Z*
