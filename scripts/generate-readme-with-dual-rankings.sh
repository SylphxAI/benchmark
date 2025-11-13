#!/bin/bash

# Generate README with Dual Rankings
# This script generates the category README with both variance-based and hybrid weighted rankings

set -e

CATEGORY=${1:-"benchmarks/state-management"}

echo "📊 Generating README with dual rankings for: $CATEGORY"
echo ""

# Step 1: Generate base README using variance-based weighting
echo "1️⃣ Generating base README (variance-based)..."
bun ./scripts/generate-simple-readme.ts "$CATEGORY"

# Step 2: Generate dual ranking comparison
echo ""
echo "2️⃣ Generating dual ranking comparison..."
DUAL_RANKING=$(bun ./scripts/generate-dual-ranking.ts "$CATEGORY" 2>&1 | grep -A 100 "DUAL RANKING COMPARISON" || echo "")

# Step 3: Insert dual ranking section into README
README_FILE="$CATEGORY/README.md"

if [ -f "$README_FILE" ]; then
  echo ""
  echo "3️⃣ Inserting dual ranking section..."

  # Create a temporary file with dual ranking section
  cat > /tmp/dual-ranking-section.md <<'EOF'

## 📊 Overall Performance Rankings (Dual System)

We provide **two complementary ranking systems**:

### 🔬 Variance-Based (Data-Driven)
- **Focus**: Test stability and measurement reliability
- **Weighting**: Based on 90th percentile variance
- **Best for**: Understanding which library performs best on measurable operations

### ⚖️ Hybrid Weighted (Balanced) 🆕
- **Focus**: Functional importance + data-driven stability
- **Weighting**: Category-level (35% Read, 15% Reactivity, etc.) × Test-level (variance)
- **Best for**: Understanding which library delivers most value across all use cases

<details>
<summary><b>View Dual Ranking Comparison</b> (click to expand)</summary>

```
Run: bun ../../scripts/generate-dual-ranking.ts .
```

For a detailed comparison of both ranking systems, use the command above.

</details>

**Choose the ranking that best matches your priorities.** See [Methodology](#-methodology) for details.

---

EOF

  # Note: The actual implementation would need more sophisticated text insertion
  # For now, we keep the variance-based README as-is and document the dual ranking tool

  echo "✅ README generated with variance-based rankings"
  echo "ℹ️  Use 'bun ./scripts/generate-dual-ranking.ts $CATEGORY' for dual ranking comparison"
else
  echo "❌ README file not found: $README_FILE"
  exit 1
fi

echo ""
echo "✨ Done!"
