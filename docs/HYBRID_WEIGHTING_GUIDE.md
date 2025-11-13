# Hybrid Weighting Configuration Guide

## Overview

The hybrid weighting system allows categories to define **functional importance** weights that combine with **data-driven variance** weights for more representative rankings.

This is an **opt-in** system:
- Categories **with** `weighting-config.json` → Dual rankings displayed
- Categories **without** config → Variance-based only (backward compatible)

## When to Use Hybrid Weighting

Use hybrid weighting when:
- ✅ Different test groups have significantly different **real-world importance**
- ✅ You want to **balance** usage frequency with functional value
- ✅ Pure variance-based weighting over/under-emphasizes certain operations

Don't use if:
- ❌ All test groups are equally important
- ❌ You prefer purely data-driven rankings
- ❌ The category is experimental/unstable

## Quick Start

### 1. Create Configuration File

Create `weighting-config.json` in your category folder:

```bash
cd benchmarks/your-category
touch weighting-config.json
```

### 2. Define Category Weights

```json
{
  "$schema": "../../schemas/weighting-config.schema.json",
  "version": "1.0",
  "description": "Hybrid weighting for [your category]",
  "categoryWeights": {
    "group-name-1": {
      "weight": 0.40,
      "rationale": "Most common operation in real apps"
    },
    "group-name-2": {
      "weight": 0.25,
      "rationale": "Core differentiator"
    },
    "group-name-3": {
      "weight": 0.20,
      "rationale": "Important edge cases"
    },
    "group-name-4": {
      "weight": 0.15,
      "rationale": "Specialized patterns"
    }
  },
  "metadata": {
    "lastUpdated": "2025-11-13",
    "author": "your-name",
    "reviewedBy": "team-name"
  }
}
```

**Rules:**
- Weights must sum to **exactly 1.0**
- Group names must match your test group IDs (lowercase, dash-separated)
- Each weight needs a rationale explaining the value
- Use 2 decimal precision (e.g., 0.35, not 0.3500001)

### 3. Map Group Names

Group names are determined by test classification. Check how your tests are grouped:

```bash
# Run this to see group classification
bun scripts/calculate-hybrid-weights.ts benchmarks/your-category
```

Common patterns:
- `basic-read`, `basic-write` - Simple CRUD operations
- `advanced-operations` - Complex transformations
- `performance-stress` - Extreme/high-volume tests
- `reactivity-patterns` - Reactive/computed patterns
- `real-world` - Integration scenarios
- `async-operations` - Async patterns

If your groups don't match these patterns, update `classifyTestGroup()` in `scripts/calculate-hybrid-weights.ts`.

### 4. Validate Configuration

```bash
# Generate README and check for hybrid weighting message
bun scripts/generate-simple-readme.ts benchmarks/your-category

# Should see: "✓ Loaded hybrid weighting config with N categories"
```

### 5. Review Generated README

Check that dual rankings appear:

```markdown
## 📊 Overall Performance Rankings

> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting**...

### 🎯 Hybrid Weighted Rankings
(primary rankings)

### 📐 Variance-Based Rankings (Reference)
(data-driven rankings)
```

## Example: State Management

### Determining Weights

**Step 1**: Understand test groups

```
basic-read          → 3 tests  (Single, Moderate, High-Frequency)
basic-write         → 4 tests  (Single, Batch, Burst, Heavy)
advanced-operations → 9 tests  (Nested, Array, Computed, etc.)
reactivity-patterns → 8 tests  (Diamond, Chain, Fanout, etc.)
performance-stress  → 3 tests  (Extreme Read/Write, Large Array)
async-operations    → 2 tests  (Throughput, Concurrent)
real-world          → 4 tests  (Forms, Cache, Memory)
```

**Step 2**: Assess functional importance

- Read operations: Most common → **35%**
- Reactivity: Core differentiator → **15%** (variance gave only 5.9%)
- Performance stress: Critical for scale → **15%**
- Advanced ops: Complex patterns → **15%**
- Write operations: Less frequent → **10%**
- Real-world: Integration → **5%**
- Async: Specialized → **5%**

**Step 3**: Create config

```json
{
  "categoryWeights": {
    "basic-read": {
      "weight": 0.35,
      "rationale": "Most common operation in real-world apps"
    },
    "reactivity-patterns": {
      "weight": 0.15,
      "rationale": "Core state management functionality (variance underweighted at 5.9%)"
    },
    // ... rest of groups
  }
}
```

## Best Practices

### Weight Distribution

**Balanced** (recommended):
- Top category: 30-40%
- Core categories: 15-25% each
- Supporting categories: 5-15% each
- Specialized: <5%

**Avoid**:
- ❌ Single category >50% (too concentrated)
- ❌ >5 categories with <5% (too fragmented)
- ❌ Weights not backed by rationale

### Rationale Quality

**Good rationale:**
> "Most common operation in real-world apps"
> "Core differentiator for reactive state libraries"
> "Critical for high-load scenarios"

**Bad rationale:**
> "Seems important"
> "Same as other benchmarks"
> "IDK, random guess"

### Validation Checklist

Before committing weighting-config.json:

- [ ] Weights sum to exactly 1.0
- [ ] All group names match actual test groups
- [ ] Each weight has clear rationale
- [ ] Weights reflect real-world usage patterns
- [ ] Reviewed by at least one other person
- [ ] README generates without errors
- [ ] Dual rankings appear correctly

## Troubleshooting

### "Category weights must sum to 1.0"

**Problem:** Weights don't add up to 1.0 (with 0.001 tolerance)

**Fix:**
```javascript
// Calculate sum
const sum = 0.35 + 0.15 + 0.15 + 0.15 + 0.10 + 0.05 + 0.05;
// = 1.0 ✓

// If using many decimal places:
const weights = [0.35, 0.15, 0.15, 0.15, 0.10, 0.05, 0.05];
const sum = weights.reduce((a, b) => a + b, 0);
console.log(sum.toFixed(2)); // Should be "1.00"
```

### "weighting-config.json missing categoryWeights"

**Problem:** Config file has wrong structure

**Fix:**
```json
{
  "categoryWeights": {  // ← Must have this key
    "group-1": { "weight": 0.5, "rationale": "..." },
    "group-2": { "weight": 0.5, "rationale": "..." }
  }
}
```

### Group names don't match

**Problem:** Config uses `basic_read` but tests are grouped as `basic-read`

**Fix:** Use lowercase with dashes:
- ✅ `basic-read`
- ❌ `basic_read`
- ❌ `basicRead`
- ❌ `Basic Read`

### No hybrid rankings in README

**Problem:** README still shows only variance-based

**Checklist:**
1. Is `weighting-config.json` in the correct directory?
2. Does it have valid JSON syntax?
3. Do group names match exactly?
4. Did you regenerate the README after adding config?

```bash
# Force regenerate
bun scripts/generate-simple-readme.ts benchmarks/your-category
```

## Advanced: Custom Group Classification

If your test names don't match default patterns, update `classifyTestGroup()`:

```typescript
// In scripts/calculate-hybrid-weights.ts
function classifyTestGroup(testName: string): string {
  const lower = testName.toLowerCase();

  // Add your custom patterns
  if (lower.includes('your-pattern')) {
    return 'your-custom-group';
  }

  // ... existing patterns
}
```

Then add corresponding weight in your config:

```json
{
  "categoryWeights": {
    "your-custom-group": {
      "weight": 0.20,
      "rationale": "Your explanation"
    }
  }
}
```

## Schema Reference

Full JSON schema: [`schemas/weighting-config.schema.json`](../schemas/weighting-config.schema.json)

Required fields:
- `version`: String (e.g., "1.0")
- `categoryWeights`: Object with group weights

Optional fields:
- `description`: Human-readable description
- `metadata`: Author, date, reviewer info

Each category weight object:
- `weight`: Number (0-1)
- `rationale`: String (explanation)

## FAQ

**Q: Can I use hybrid weighting for all categories?**
A: Yes, but only add it where functional importance differs significantly. Not all categories need it.

**Q: How often should I update weights?**
A: Only when test groups change or usage patterns shift significantly. Weights should be stable.

**Q: What if new tests are added?**
A: If they fit existing groups, no change needed. If new groups are added, update config to maintain sum=1.0.

**Q: Can weights change over time?**
A: Yes, but document changes in git commit messages and update `lastUpdated` in metadata.

**Q: How do I remove hybrid weighting?**
A: Delete `weighting-config.json`. README will automatically revert to variance-based.

## Support

Questions or issues:
1. Check this guide
2. Review state-management example: `benchmarks/state-management/weighting-config.json`
3. Review schema: `schemas/weighting-config.schema.json`
4. Open GitHub issue with `hybrid-weighting` label
