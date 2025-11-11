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
| 🥇 1 | [**Preact Signals**](https://github.com/preactjs/signals) | 👑 50.3M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 50.1M |
| 🥉 3 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 50.0M |
|  4 | [**Solid Signals**](https://github.com/solidjs/solid) | 3.2M |
|  5 | [**Zustand**](https://github.com/pmndrs/zustand) | 180K |
|  6 | [**Jotai**](https://github.com/pmndrs/jotai) | 14K |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 8K |
|  8 | [**Valtio**](https://github.com/pmndrs/valtio) | 5K |

---

## Detailed Results

### Store Creation

```
🥇   Preact Signals     ████████████████████████████████████████     50.3M ops/sec
🥈   Zen                ████████████████████████████████████████     50.1M ops/sec
🥉   Redux Toolkit      ████████████████████████████████████████     50.0M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 50,261,789 | ±0.09% | 0.0000ms | 0.0000ms | 25130895 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 50,070,802 | ±0.05% | 0.0000ms | 0.0000ms | 25035402 |
| 🥉 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 50,023,499 | ±0.07% | 0.0000ms | 0.0000ms | 25011751 |

**Key Insight:** Preact Signals is 1.00x faster than Redux Toolkit in this test.

### Store Creation (x1)

```
🥇   Solid Signals      ████████████████████████████████████████     43.0M ops/sec
🥈   Zustand            ████████████                                 13.4M ops/sec
🥉   Jotai              █                                             1.4M ops/sec
4.   MobX               █                                             736K ops/sec
5.   Valtio                                                           427K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 43,030,860 | ±0.10% | 0.0000ms | 0.0000ms | 21515431 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 13,389,168 | ±1.67% | 0.1000ms | 0.2000ms | 6694585 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,448,846 | ±20.19% | 0.7000ms | 0.6000ms | 728805 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 735,923 | ±0.85% | 1.4000ms | 1.9000ms | 367962 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 426,920 | ±113.44% | 2.3000ms | 1.8000ms | 228007 |

**Key Insight:** Solid Signals is 100.79x faster than Valtio in this test.

### Store Creation (x10)

```
🥇   Solid Signals      ████████████████████████████████████████     28.1M ops/sec
🥈   Zustand            ███                                           1.9M ops/sec
🥉   Jotai                                                            141K ops/sec
4.   MobX                                                              76K ops/sec
5.   Valtio                                                            50K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 28,109,285 | ±0.33% | 0.0000ms | 0.1000ms | 14054643 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,874,081 | ±0.22% | 0.5000ms | 0.8000ms | 937041 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 141,158 | ±22.88% | 7.1000ms | 3.3000ms | 71020 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 76,162 | ±1.30% | 13.1000ms | 20.2000ms | 38081 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 50,155 | ±69.76% | 19.9000ms | 9.0000ms | 32395 |

**Key Insight:** Solid Signals is 560.45x faster than Valtio in this test.

### Store Creation (x100)

```
🥇   Solid Signals      ████████████████████████████████████████      6.3M ops/sec
🥈   Zustand            █                                             192K ops/sec
🥉   Jotai                                                             15K ops/sec
4.   MobX                                                               8K ops/sec
5.   Valtio                                                             5K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 6,271,459 | ±0.44% | 0.2000ms | 0.4000ms | 3135730 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 192,276 | ±0.21% | 5.2000ms | 6.5000ms | 96138 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 14,545 | ±22.83% | 68.8000ms | 58.3000ms | 7273 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 7,832 | ±0.85% | 127.7000ms | 144.4000ms | 3916 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,318 | ±67.53% | 188.0000ms | 94.0000ms | 3173 |

**Key Insight:** Solid Signals is 1179.27x faster than Valtio in this test.

### Store Creation (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      651K ops/sec
🥈   Zustand            █                                              20K ops/sec
🥉   Jotai                                                              1K ops/sec
4.   MobX                                                              743 ops/sec
5.   Valtio                                                            503 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 651,288 | ±0.54% | 1.5000ms | 3.2000ms | 325658 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 19,684 | ±0.26% | 50.8000ms | 88.8000ms | 9843 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,433 | ±22.30% | 697.9000ms | 10674.4000ms | 719 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 743 | ±3.07% | 1346.0000ms | 2329.2000ms | 372 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 503 | ±69.78% | 1987.3000ms | 10355.4000ms | 317 |

**Key Insight:** Solid Signals is 1294.27x faster than Valtio in this test.

### Store Creation (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████       71K ops/sec
🥈   Zustand            █                                               2K ops/sec
🥉   Jotai                                                             139 ops/sec
4.   MobX                                                               79 ops/sec
5.   Valtio                                                             45 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 71,093 | ±0.41% | 14.1000ms | 29.1000ms | 35547 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,966 | ±0.29% | 508.7000ms | 591.6000ms | 983 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 139 | ±17.43% | 7195.9000ms | 14265.4000ms | 71 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 79 | ±0.67% | 12579.1000ms | 13161.3000ms | 40 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 45 | ±95.62% | 22319.7000ms | 300710.0000ms | 31 |

**Key Insight:** Solid Signals is 1586.77x faster than Valtio in this test.

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
*Last generated: 2025-11-11T10:02:59.078Z*
