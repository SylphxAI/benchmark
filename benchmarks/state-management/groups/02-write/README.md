# Write Operations

Simple increments and burst updates.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [02-write - Jotai](#02-write---jotai)
  - [02-write - MobX](#02-write---mobx)
  - [02-write - Preact Signals](#02-write---preact-signals)
  - [02-write - Redux Toolkit](#02-write---redux-toolkit)
  - [02-write - Solid Signals](#02-write---solid-signals)
  - [02-write - Valtio](#02-write---valtio)
  - [02-write - Zen](#02-write---zen)
  - [02-write - Zustand](#02-write---zustand)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 38.2M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 22.7M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 22.0M |
|  4 | [**Zen**](https://github.com/SylphxAI/zen) | 21.2M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.7M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 1.2M |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 303K |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 113K |

---

## Detailed Results

### Burst Updates

```
🥇   Solid Signals      ████████████████████████████████████████     36.5M ops/sec
🥈   Jotai              ████████████████                             14.2M ops/sec
🥉   Preact Signals     ███████████████                              13.4M ops/sec
4.   Zen                ██████████████                               13.0M ops/sec
5.   Valtio             █                                             576K ops/sec
6.   MobX                                                             409K ops/sec
7.   Redux Toolkit                                                     96K ops/sec
8.   Zustand                                                           35K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 36,486,929 | ±0.06% | N/A | N/A | 18243465 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 14,221,233 | ±0.06% | 0.1000ms | 0.1000ms | 7110617 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 13,360,720 | ±0.06% | 0.1000ms | 0.1000ms | 6680361 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 12,998,806 | ±0.03% | 0.1000ms | 0.1000ms | 6499403 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 576,258 | ±0.86% | 1.7000ms | 2.2000ms | 288130 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 408,984 | ±0.68% | 2.4000ms | 3.0000ms | 204493 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 96,371 | ±1.56% | 10.4000ms | 20.5000ms | 48186 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 35,210 | ±1.22% | 28.4000ms | 42.8000ms | 17605 |

**Key Insight:** Solid Signals is 1036.27x faster than Zustand in this test.

### Simple Increment

```
🥇   Solid Signals      ████████████████████████████████████████     40.0M ops/sec
🥈   Preact Signals     ████████████████████████████████████         36.3M ops/sec
🥉   Jotai              ████████████████████████████████████         36.2M ops/sec
4.   Zen                ██████████████████████████████████           34.5M ops/sec
5.   Valtio             █████                                         5.1M ops/sec
6.   MobX               ████                                          3.6M ops/sec
7.   Redux Toolkit      █                                             951K ops/sec
8.   Zustand                                                          365K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 40,015,677 | ±0.06% | N/A | N/A | 20007840 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 36,334,502 | ±0.12% | N/A | N/A | 18167251 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 36,172,992 | ±0.10% | N/A | N/A | 18086497 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 34,466,747 | ±0.26% | N/A | N/A | 17233374 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,070,716 | ±0.16% | 0.2000ms | 0.3000ms | 2535359 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 3,628,966 | ±0.65% | 0.3000ms | 0.4000ms | 1814484 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 951,114 | ±0.30% | 1.1000ms | 1.5000ms | 475559 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 365,484 | ±0.09% | 2.7000ms | 3.3000ms | 182742 |

**Key Insight:** Solid Signals is 109.49x faster than Zustand in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:write

# Or run specific test file
npx vitest bench groups/02-write/*.bench.ts
```

---
*Last generated: 2025-11-11T05:07:41.738Z*
