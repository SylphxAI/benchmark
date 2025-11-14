# Scripts Directory

This directory contains utility and analysis scripts that complement the main framework.

## Utility Scripts

### `fix-benchmark-loops.sh`
One-time utility for fixing benchmark implementation patterns across library test files.
- Removes unnecessary for-loops from read/write tests
- Standardizes test implementations

## Analysis Tools

### `generate-dual-ranking.ts`
Standalone analysis tool for comparing dual ranking systems.
- Compares variance-based vs hybrid weighted rankings
- Shows ranking changes and key insights
- Uses framework modules from `src/core/scoring.ts`

Usage:
```bash
bun scripts/generate-dual-ranking.ts benchmarks/state-management
```

## Framework Modules

All core functionality has been migrated to `src/core/`:
- ✅ `src/core/version-checker.ts` - Version checking and update detection
- ✅ `src/core/bundle-sizes.ts` - Bundle size measurement
- ✅ `src/core/scoring.ts` - Test weighting and scoring calculations
- ✅ `src/core/readme-generator.ts` - Category README generation
- ✅ `src/core/root-readme-generator.ts` - Root README generation

Use the CLI for all framework operations:
```bash
bun run src/cli.ts <command> [options]
```

See `bun run src/cli.ts help` for available commands.
