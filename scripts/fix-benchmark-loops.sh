#!/usr/bin/env bash
# Fix benchmark loops - remove for loops from read/write tests

set -e

LIBS_DIR="benchmarks/state-management/libraries"

echo "🔧 Fixing benchmark loops in all libraries..."

for file in "$LIBS_DIR"/*.ts; do
  if [ "$file" = "$LIBS_DIR/zustand.ts" ]; then
    echo "  ✓ Skipping zustand.ts (already fixed)"
    continue
  fi

  filename=$(basename "$file")
  echo "  Fixing $filename..."

  # Use perl for multi-line replacements
  # Pattern: for loop with single statement
  perl -i -0pe '
    # moderateRead: for loop with 100 iterations
    s/\.implement\(tests\.moderateRead,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*100;\s*\w+\+\+\s*\)\s*\{[^\}]*?getState\(\)[^\}]*?\}\s*\}\);/.implement(tests.moderateRead, (ctx) => {\n  ctx.store.getState().counter;\n});/gs;

    # highFrequencyRead: for loop with 1000 iterations
    s/\.implement\(tests\.highFrequencyRead,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*1000;\s*\w+\+\+\s*\)\s*\{[^\}]*?getState\(\)[^\}]*?\}\s*\}\);/.implement(tests.highFrequencyRead, (ctx) => {\n  ctx.store.getState().counter;\n});/gs;

    # batchWrite: for loop with 10 iterations
    s/\.implement\(tests\.batchWrite,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*10;\s*\w+\+\+\s*\)\s*\{[^\}]*?setState[^\}]*?\}\s*\}\);/.implement(tests.batchWrite, (ctx) => {\n  ctx.store.setState((state) => ({ counter: state.counter + 1 }));\n});/gs;

    # burstWrite: for loop with 100 iterations
    s/\.implement\(tests\.burstWrite,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*100;\s*\w+\+\+\s*\)\s*\{[^\}]*?setState[^\}]*?\}\s*\}\);/.implement(tests.burstWrite, (ctx) => {\n  ctx.store.setState((state) => ({ counter: state.counter + 1 }));\n});/gs;

    # heavyWrite: for loop with 1000 iterations
    s/\.implement\(tests\.heavyWrite,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*1000;\s*\w+\+\+\s*\)\s*\{[^\}]*?setState[^\}]*?\}\s*\}\);/.implement(tests.heavyWrite, (ctx) => {\n  ctx.store.setState((state) => ({ counter: state.counter + 1 }));\n});/gs;

    # extremeRead: for loop with 10000 iterations
    s/\.implement\(tests\.extremeRead,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*10000;\s*\w+\+\+\s*\)\s*\{[^\}]*?getState\(\)[^\}]*?\}\s*\}\);/.implement(tests.extremeRead, (ctx) => {\n  ctx.store.getState().counter;\n});/gs;

    # extremeWrite: for loop with 10000 iterations
    s/\.implement\(tests\.extremeWrite,.*?\{\s*for\s*\(\s*let\s+\w+\s*=\s*0;\s*\w+\s*<\s*10000;\s*\w+\+\+\s*\)\s*\{[^\}]*?setState[^\}]*?\}\s*\}\);/.implement(tests.extremeWrite, (ctx) => {\n  ctx.store.setState((state) => ({ counter: state.counter + 1 }));\n});/gs;
  ' "$file"

  echo "  ✓ Fixed $filename"
done

echo "✅ All libraries fixed!"
