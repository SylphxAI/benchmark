# Reactive Async

Async atoms/computations.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [08-async-reactive - Jotai](#08-async-reactive---jotai)
  - [08-async-reactive - MobX](#08-async-reactive---mobx)
  - [08-async-reactive - Preact Signals](#08-async-reactive---preact-signals)
  - [08-async-reactive - Redux Toolkit](#08-async-reactive---redux-toolkit)
  - [08-async-reactive - Solid Signals](#08-async-reactive---solid-signals)
  - [08-async-reactive - Valtio](#08-async-reactive---valtio)
  - [08-async-reactive - Zen](#08-async-reactive---zen)
  - [08-async-reactive - Zustand](#08-async-reactive---zustand)
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
| 🥇 1 | [**Zustand**](https://github.com/pmndrs/zustand) | 👑 704K |
| 🥈 2 | [**Solid Signals**](https://github.com/solidjs/solid) | 647K |
| 🥉 3 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 636K |
|  4 | [**Valtio**](https://github.com/pmndrs/valtio) | 613K |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 592K |
|  6 | [**Preact Signals**](https://github.com/preactjs/signals) | 577K |
|  7 | [**Zen**](https://github.com/SylphxAI/zen) | 570K |
|  8 | [**Jotai**](https://github.com/pmndrs/jotai) | 455K |

---

## Detailed Results

### Async Reactive Chained

```
🥇   Solid Signals      ████████████████████████████████████████      1.3M ops/sec
🥈   Valtio             ████████████████████████████████████          1.2M ops/sec
🥉   MobX               ███████████████████████████████████           1.1M ops/sec
4.   Preact Signals     ██████████████████████████████                979K ops/sec
5.   Zustand            ████████████████████████████                  888K ops/sec
6.   Zen                ███████████████████████████                   878K ops/sec
7.   Redux Toolkit      ████████████████████████                      778K ops/sec
8.   Jotai              ███████████████████████                       748K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,291,065 | ±38.95% | 0.8000ms | 0.3000ms | 650150 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,151,265 | ±45.00% | 0.9000ms | 0.4000ms | 618205 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 1,139,783 | ±39.78% | 0.9000ms | 0.4000ms | 590879 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 978,829 | ±41.16% | 1.0000ms | 0.4000ms | 510247 |
| 5 | [**Zustand**](https://github.com/pmndrs/zustand) | 887,711 | ±39.58% | 1.1000ms | 0.3000ms | 448944 |
| 6 | [**Zen**](https://github.com/SylphxAI/zen) | 877,767 | ±73.66% | 1.1000ms | 0.3000ms | 672401 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 777,994 | ±41.93% | 1.3000ms | 0.3000ms | 396444 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 747,946 | ±43.82% | 1.3000ms | 0.4000ms | 392183 |

**Key Insight:** Solid Signals is 1.73x faster than Jotai in this test.

### Async Reactive Complex

```
🥇   Zustand            ████████████████████████████████████████      600K ops/sec
🥈   Solid Signals      █████████████████████████████████             501K ops/sec
🥉   Redux Toolkit      ███████████████████████████████               461K ops/sec
4.   Zen                █████████████████████████████                 430K ops/sec
5.   Valtio             █████████████████████████                     379K ops/sec
6.   MobX               █████████████████████████                     379K ops/sec
7.   Preact Signals     █████████████████████████                     376K ops/sec
8.   Jotai              ████████████                                  183K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 600,033 | ±35.99% | 1.7000ms | 0.6000ms | 304464 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 500,706 | ±36.67% | 2.0000ms | 0.8000ms | 251998 |
| 🥉 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 461,101 | ±40.44% | 2.2000ms | 0.7000ms | 233209 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 430,301 | ±41.97% | 2.3000ms | 0.7000ms | 220950 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 379,452 | ±43.24% | 2.6000ms | 0.7000ms | 199633 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 378,652 | ±40.62% | 2.6000ms | 0.9000ms | 189326 |
| 7 | [**Preact Signals**](https://github.com/preactjs/signals) | 376,200 | ±49.96% | 2.7000ms | 0.8000ms | 194671 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 182,938 | ±100.86% | 5.5000ms | 0.9000ms | 93223 |

**Key Insight:** Zustand is 3.28x faster than Jotai in this test.

### Async Reactive Concurrent

```
🥇   Preact Signals     ████████████████████████████████████████      327K ops/sec
🥈   Jotai              ████████████████████████████████████████      327K ops/sec
🥉   Redux Toolkit      ███████████████████████████████████████       322K ops/sec
4.   Zustand            ███████████████████████████████████████       316K ops/sec
5.   Valtio             ████████████████████████████████████          296K ops/sec
6.   MobX               ██████████████████████████████████            281K ops/sec
7.   Solid Signals      ██████████████████████████████                243K ops/sec
8.   Zen                █████████████████████████████                 235K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 326,985 | ±40.12% | 3.1000ms | 0.8000ms | 169393 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 326,886 | ±40.12% | 3.1000ms | 1.0000ms | 166401 |
| 🥉 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 321,720 | ±47.70% | 3.1000ms | 0.8000ms | 160860 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 316,326 | ±43.56% | 3.2000ms | 0.7000ms | 162681 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 296,329 | ±44.28% | 3.4000ms | 0.8000ms | 148454 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 280,953 | ±43.64% | 3.6000ms | 1.0000ms | 148737 |
| 7 | [**Solid Signals**](https://github.com/solidjs/solid) | 242,558 | ±47.76% | 4.1000ms | 0.9000ms | 122965 |
| 8 | [**Zen**](https://github.com/SylphxAI/zen) | 235,085 | ±51.44% | 4.3000ms | 1.1000ms | 121138 |

**Key Insight:** Preact Signals is 1.39x faster than Zen in this test.

### Async Reactive Read

```
🥇   Zustand            ████████████████████████████████████████      1.5M ops/sec
🥈   Redux Toolkit      ███████████████████████████████████████       1.4M ops/sec
🥉   Zen                █████████████████████████████████             1.2M ops/sec
4.   Solid Signals      ███████████████████████████████               1.1M ops/sec
5.   Valtio             ██████████████████████████████                1.1M ops/sec
6.   MobX               ████████████████████████████                  1.0M ops/sec
7.   Jotai              ██████████████████████████                    961K ops/sec
8.   Preact Signals     █████████████████████████                     919K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,456,123 | ±39.27% | 0.7000ms | 0.3000ms | 746045 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1,419,462 | ±42.23% | 0.7000ms | 0.4000ms | 738162 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 1,188,809 | ±41.29% | 0.8000ms | 0.3000ms | 602748 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,120,522 | ±43.63% | 0.9000ms | 0.3000ms | 563905 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,091,613 | ±50.44% | 0.9000ms | 0.4000ms | 565198 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 1,015,614 | ±63.45% | 1.0000ms | 0.5000ms | 507807 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 960,543 | ±65.08% | 1.0000ms | 0.4000ms | 496534 |
| 8 | [**Preact Signals**](https://github.com/preactjs/signals) | 918,962 | ±59.65% | 1.1000ms | 0.3000ms | 477127 |

**Key Insight:** Zustand is 1.58x faster than Preact Signals in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:async-reactive

# Or run specific test file
npx vitest bench groups/08-async-reactive/*.bench.ts
```

---
*Last generated: 2025-11-11T10:30:05.387Z*
