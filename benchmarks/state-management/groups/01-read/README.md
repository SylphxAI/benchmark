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

### 01-read - Jotai

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████     26.7M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 26,683,903 | ±0.06% | 0.0500ms | 0.1000ms | 27982255 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Jotai](https://github.com/pmndrs/jotai) | Simple Read | 36,406,970 | ±0.09% | N/A | N/A | 18203486 |
|  | High Frequency Read | 19,557,537 | ±0.03% | 0.1000ms | 0.1000ms | 9778769 |

### 01-read - MobX

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████     10.1M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 10,096,075 | ±0.33% | 0.1500ms | 0.3000ms | 15166010 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [MobX](https://github.com/mobxjs/mobx) | High Frequency Read | 26,483,124 | ±0.02% | N/A | N/A | 13241563 |
|  | Simple Read | 3,848,893 | ±0.63% | 0.3000ms | 0.3000ms | 1924447 |

### 01-read - Preact Signals

**Performance Comparison:**

```
🥇   Preact Signals     ████████████████████████████████████████     15.7M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 15,733,425 | ±0.57% | 0.0500ms | 0.2000ms | 20571158 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Preact Signals](https://github.com/preactjs/signals) | Simple Read | 33,823,774 | ±1.01% | N/A | N/A | 16911887 |
|  | High Frequency Read | 7,318,541 | ±0.13% | 0.1000ms | 0.2000ms | 3659271 |

### 01-read - Redux Toolkit

**Performance Comparison:**

```
🥇   Redux Toolkit      ████████████████████████████████████████      2.5M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2,487,434 | ±0.17% | 0.6500ms | 1.6000ms | 3728941 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) | High Frequency Read | 6,507,009 | ±0.05% | 0.2000ms | 0.2000ms | 3253505 |
|  | Simple Read | 950,871 | ±0.30% | 1.1000ms | 1.6000ms | 475436 |

### 01-read - Solid Signals

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     31.5M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 31,490,246 | ±0.10% | N/A | 0.1000ms | 32326800 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Solid Signals](https://github.com/solidjs/solid) | Simple Read | 39,633,391 | ±0.08% | N/A | N/A | 19816697 |
|  | High Frequency Read | 25,020,205 | ±0.12% | N/A | 0.1000ms | 12510103 |

### 01-read - Valtio

**Performance Comparison:**

```
🥇   Valtio             ████████████████████████████████████████      2.5M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 2,500,935 | ±0.09% | 0.5000ms | 1.0000ms | 3082890 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Valtio](https://github.com/pmndrs/valtio) | Simple Read | 4,885,532 | ±0.14% | 0.2000ms | 0.3000ms | 2442767 |
|  | High Frequency Read | 1,280,244 | ±0.03% | 0.8000ms | 1.0000ms | 640123 |

### 01-read - Zen

**Performance Comparison:**

```
🥇   Zen                ████████████████████████████████████████     23.8M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 23,840,656 | ±0.13% | 0.0500ms | 0.1000ms | 24772951 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Zen](https://github.com/SylphxAI/zen) | Simple Read | 31,505,127 | ±0.08% | N/A | N/A | 15752564 |
|  | High Frequency Read | 18,040,774 | ±0.17% | 0.1000ms | 0.1000ms | 9020387 |

### 01-read - Zustand

**Performance Comparison:**

```
🥇   Zustand            ████████████████████████████████████████      1.1M ops/sec
```

**Overall Performance (Geometric Mean):**

| Rank | Library | Geometric Mean | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|----------------|--------------|----------|---------|---------------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,105,266 | ±0.10% | 1.5000ms | 3.3000ms | 1810972 |

**Individual Test Results:**

| Library | Test | Ops/sec | Variance | Mean | p99 | Samples |
|---------|------|---------|----------|------|-----|---------|
| [Zustand](https://github.com/pmndrs/zustand) | High Frequency Read | 3,245,544 | ±0.02% | 0.3000ms | 0.4000ms | 1622773 |
|  | Simple Read | 376,397 | ±0.17% | 2.7000ms | 3.3000ms | 188199 |

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
*Last generated: 2025-11-11T05:05:13.873Z*
