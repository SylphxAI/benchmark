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

### 11-batching-native - MobX

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████      1.6M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 1,591,403 | ±0.61% | 1.8500ms | 7.6000ms | 5292938 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [MobX](https://github.com/mobxjs/mobx) | Unbatched Updates | 3,824,650 | ±1.83% | 0.3000ms | 0.3000ms | 1912325 |
|  | Batched with Observers | 3,306,212 | ±0.18% | 0.3000ms | 0.4000ms | 1653107 |
|  | Batched Updates | 3,301,370 | ±0.40% | 0.3000ms | 0.4000ms | 1650686 |
|  | Large Batch | 153,640 | ±0.03% | 6.5000ms | 7.6000ms | 76820 |

### 11-batching-native - Solid Signals

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     37.8M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 37,849,602 | ±0.46% | N/A | 0.1000ms | 76864518 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Solid Signals](https://github.com/solidjs/solid) | Unbatched Updates | 43,009,352 | ±0.06% | N/A | 0.1000ms | 21504676 |
|  | Batched Updates | 41,556,589 | ±1.51% | N/A | 0.1000ms | 20778296 |
|  | Batched with Observers | 41,482,071 | ±0.23% | N/A | 0.1000ms | 20741037 |
|  | Large Batch | 27,681,017 | ±0.05% | N/A | N/A | 13840509 |

### 11-batching-native - Valtio

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      1.7M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,657,338 | ±0.17% | 3.8500ms | 17.4000ms | 7257614 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Valtio](https://github.com/pmndrs/valtio) | Unbatched Updates | 4,869,433 | ±0.12% | 0.2000ms | 0.3000ms | 2434717 |
|  | Batched Updates | 4,795,324 | ±0.15% | 0.2000ms | 0.3000ms | 2397662 |
|  | Batched with Observers | 4,782,912 | ±0.19% | 0.2000ms | 0.3000ms | 2391457 |
|  | Large Batch | 67,555 | ±0.24% | 14.8000ms | 17.4000ms | 33778 |

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
*Last generated: 2025-11-11T05:05:14.017Z*
