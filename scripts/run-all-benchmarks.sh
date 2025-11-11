#!/bin/bash

# Run benchmarks for all libraries

LIBS=(
  "@reduxjs/toolkit"
  "zustand"
  "jotai"
  "mobx"
  "valtio"
  "@preact/signals"
  "solid-js"
  "@sylphx/zen"
)

for lib in "${LIBS[@]}"; do
  echo "================================"
  echo "Running benchmark for $lib..."
  echo "================================"
  npx tsx scripts/benchmark-single-library.ts "$lib" benchmarks/state-management
  echo ""
done

echo "✅ All benchmarks completed!"
