# Batching Native

Built-in batching.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [11-batching-native - MobX](#11-batching-native---mobx)
  - [11-batching-native - Solid Signals](#11-batching-native---solid-signals)
  - [11-batching-native - Valtio](#11-batching-native---valtio)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 37.8M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.7M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.6M |

---

## Detailed Results

### Batched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     41.6M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,556,589 | ±1.51% | N/A | 0.1000ms | 20778296 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,795,324 | ±0.15% | 0.2000ms | 0.3000ms | 2397662 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,301,370 | ±0.40% | 0.3000ms | 0.4000ms | 1650686 |

**Key Insight:** Solid Signals is 12.59x faster than MobX in this test.

### Batched with Observers

```
🥇   Solid Signals      ████████████████████████████████████████     41.5M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,482,071 | ±0.23% | N/A | 0.1000ms | 20741037 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,782,912 | ±0.19% | 0.2000ms | 0.3000ms | 2391457 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,306,212 | ±0.18% | 0.3000ms | 0.4000ms | 1653107 |

**Key Insight:** Solid Signals is 12.55x faster than MobX in this test.

### Large Batch

```
🥇   Solid Signals      ████████████████████████████████████████     27.7M ops/sec
🥈   MobX                                                             154K ops/sec
🥉   Valtio                                                            68K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 27,681,017 | ±0.05% | N/A | N/A | 13840509 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 153,640 | ±0.03% | 6.5000ms | 7.6000ms | 76820 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 67,555 | ±0.24% | 14.8000ms | 17.4000ms | 33778 |

**Key Insight:** Solid Signals is 409.76x faster than Valtio in this test.

### Unbatched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     43.0M ops/sec
🥈   Valtio             █████                                         4.9M ops/sec
🥉   MobX               ████                                          3.8M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 43,009,352 | ±0.06% | N/A | 0.1000ms | 21504676 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,869,433 | ±0.12% | 0.2000ms | 0.3000ms | 2434717 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,824,650 | ±1.83% | 0.3000ms | 0.3000ms | 1912325 |

**Key Insight:** Solid Signals is 11.25x faster than MobX in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:batching-native

# Or run specific test file
npx vitest bench groups/11-batching-native/*.bench.ts
```

---
*Last generated: 2025-11-11T05:07:41.891Z*
