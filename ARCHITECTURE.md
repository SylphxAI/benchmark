# Benchmark Architecture

This document describes the per-library benchmark architecture designed to minimize GitHub Actions compute usage while maintaining up-to-date benchmark results.

## 🎯 Goals

1. **Cost Efficiency**: Only benchmark libraries with new versions
2. **Hourly Updates**: Check for updates every hour instead of daily
3. **Independent Results**: Store each library's results separately
4. **Skip Existing**: Avoid re-running benchmarks for unchanged versions
5. **75-85% Cost Reduction**: Achieve significant savings in compute usage

## 📁 Directory Structure

```
benchmark-state/
├── .github/workflows/
│   ├── benchmarks.yml                    # Legacy: Full category benchmarks (kept for manual runs)
│   └── benchmarks-per-library.yml        # New: Hourly per-library checks
│
├── scripts/
│   ├── check-single-library.ts           # Check if library needs benchmarking
│   ├── benchmark-single-library.ts       # Run benchmark for single library
│   ├── generate-readme.ts                # Generate category README
│   └── generate-root-readme.ts           # Generate root README
│
└── benchmarks/
    └── state-management/
        ├── library-metadata.json         # Library definitions
        ├── versions.json                 # Version tracking
        ├── generate-readme.js            # Category README generator
        ├── groups/                       # Benchmark test groups
        │   ├── 01-read/
        │   ├── 02-write/
        │   └── ...
        └── results/                      # Per-library benchmark results
            ├── .gitkeep
            ├── jotai-benchmark.json
            ├── zustand-benchmark.json
            ├── sylphx-zen-benchmark.json # Scoped packages: @sylphx/zen
            └── ...
```

## 🔄 Workflow Architecture

### 1. Hourly Per-Library Checks (`.github/workflows/benchmarks-per-library.yml`)

**Schedule**: Runs every hour (`0 * * * *`)

**Process**:
```
1. Discover Libraries
   ↓
2. Matrix: Check Each Library (parallel, max 3)
   ├─ Check version with npm
   ├─ Compare with versions.json
   ├─ Check if benchmark exists
   └─ Output: needs_benchmark (true/false)
   ↓
3. Run Benchmarks (only if needed)
   ├─ Install dependencies
   ├─ Run vitest with library filter
   └─ Save to results/{library}-benchmark.json
   ↓
4. Generate README
   ├─ Download all results
   ├─ Merge versions.json
   ├─ Generate category README
   ├─ Generate root README
   └─ Commit and push
```

**Key Features**:
- **Dynamic Discovery**: Reads libraries from `library-metadata.json`
- **Parallel Execution**: Up to 3 libraries tested concurrently
- **Conditional Benchmarking**: Only runs if version changed or no results exist
- **Independent Results**: Each library saved to separate file

### 2. Legacy Full Category Benchmarks (`.github/workflows/benchmarks.yml`)

**Schedule**: Manual trigger or daily (kept for comprehensive testing)

**Use Cases**:
- Manual full benchmark runs
- Validating changes to benchmark infrastructure
- Comparing with per-library results

## 🛠️ Core Scripts

### `check-single-library.ts`

**Purpose**: Check if a library needs benchmarking

**Logic**:
```typescript
1. Load library metadata (npm package name)
2. Fetch latest version from npm
3. Compare with versions.json
4. Check if results/{library}-benchmark.json exists
5. If results exist and version matches → skip
6. Otherwise → needs_benchmark = true
```

**GitHub Actions Output**:
```bash
needs_benchmark=true|false
current_version=1.2.1
latest_version=1.2.1
has_new_version=true|false
```

**Usage**:
```bash
npx tsx scripts/check-single-library.ts "@sylphx/zen" benchmarks/state-management
```

### `benchmark-single-library.ts`

**Purpose**: Run benchmarks for a specific library

**Process**:
```typescript
1. Load library metadata (display name, version)
2. Run vitest with filter: vitest bench --run -t "Zen"
3. Collect results from all groups/*/results.json
4. Filter benchmarks containing library display name
5. Save to results/{sanitized-key}-benchmark.json
```

**Filename Sanitization**:
```typescript
@sylphx/zen → sylphx-zen-benchmark.json
@reduxjs/toolkit → reduxjs-toolkit-benchmark.json
zustand → zustand-benchmark.json
```

**Result Format**:
```json
{
  "library": "Zen",
  "libraryKey": "@sylphx/zen",
  "version": "1.2.1",
  "lastRun": "2025-11-11T03:26:21.716Z",
  "groups": {
    "01-read": { "files": [...] },
    "02-write": { "files": [...] },
    ...
  }
}
```

**Usage**:
```bash
npx tsx scripts/benchmark-single-library.ts "@sylphx/zen" benchmarks/state-management
```

### `generate-readme.js`

**Purpose**: Generate category README from benchmark results

**New Feature - Per-Library Results Loading**:
```javascript
function loadPerLibraryResults() {
  // 1. Read all results/*-benchmark.json files
  const resultFiles = readdirSync(resultsPath)
    .filter(f => f.endsWith('-benchmark.json'))
    .sort();

  // 2. Merge into unified format
  resultFiles.forEach(file => {
    const libraryResult = JSON.parse(readFileSync(file));

    // Merge groups
    Object.entries(libraryResult.groups).forEach(([groupName, groupData]) => {
      if (!mergedResults[groupName]) {
        mergedResults[groupName] = groupData;
      } else {
        // Merge files arrays
        mergedResults[groupName].files =
          mergedResults[groupName].files.concat(groupData.files);
      }
    });
  });

  return mergedResults;
}
```

**Backward Compatibility**: Falls back to legacy group-based results if no per-library results found.

**Usage**:
```bash
cd benchmarks/state-management
node generate-readme.js
```

## 📊 Data Flow

### Version Tracking (`versions.json`)

```json
{
  "lastChecked": "2025-11-11T03:00:00.000Z",
  "lastBenchmarkRun": "2025-11-11T03:26:21.716Z",
  "libraries": {
    "@sylphx/zen": {
      "current": "1.2.1",
      "latest": "1.2.1",
      "lastUpdated": "2025-11-11T03:26:21.716Z"
    },
    "jotai": {
      "current": "2.10.3",
      "latest": "2.10.3",
      "lastUpdated": "2025-11-10T15:00:00.000Z"
    }
  }
}
```

### Library Metadata (`library-metadata.json`)

```json
{
  "libraries": {
    "@sylphx/zen": {
      "displayName": "Zen",
      "npm": "@sylphx/zen",
      "url": "https://github.com/sylphxai/zen"
    },
    "jotai": {
      "displayName": "Jotai",
      "npm": "jotai",
      "url": "https://github.com/pmndrs/jotai"
    }
  }
}
```

### Benchmark Result (`results/sylphx-zen-benchmark.json`)

```json
{
  "library": "Zen",
  "libraryKey": "@sylphx/zen",
  "version": "1.2.1",
  "lastRun": "2025-11-11T03:26:21.716Z",
  "groups": {
    "01-read": {
      "testResults": { "version": "...", "numTotalTests": 3 },
      "files": [{
        "name": "groups/01-read/read-x1.bench.ts",
        "groups": [{
          "fullName": "Read Operations - x1",
          "benchmarks": [{
            "name": "Simple Read - Zen",
            "hz": 138345.23,
            "mean": 0.00000723,
            "rme": 0.04,
            "samples": 69173
          }]
        }]
      }]
    }
  }
}
```

## 🔍 Benchmark Filtering

### Vitest Test Name Pattern

Benchmarks are filtered using vitest's `-t` flag (testNamePattern):

```bash
# Run only benchmarks containing "Zen"
npx vitest bench --run -t "Zen"
```

**Test Naming Convention**:
```typescript
// groups/01-read/read-x1.bench.ts
describe('Read Operations - x1', () => {
  bench('Simple Read - Zen', () => { ... });
  bench('Simple Read - Jotai', () => { ... });
  bench('Simple Read - Zustand', () => { ... });
});
```

The `-t "Zen"` flag will:
- ✅ Run: `Simple Read - Zen`
- ❌ Skip: `Simple Read - Jotai`
- ❌ Skip: `Simple Read - Zustand`

## 💰 Cost Analysis

### Before: Category-Wide Benchmarks

- **Frequency**: Daily
- **Scope**: All 8 libraries every time
- **Cost**: 8 full benchmark runs per day
- **Issue**: Wasted compute on unchanged libraries

### After: Per-Library Benchmarks

- **Frequency**: Hourly checks
- **Scope**: Only libraries with new versions
- **Cost**: ~1-2 benchmark runs per day
- **Savings**: 75-85% reduction

**Example Week**:
```
Before:
  7 days × 8 libraries = 56 benchmark runs

After:
  Monday: Zen updated → 1 run
  Tuesday: No updates → 0 runs
  Wednesday: Jotai updated → 1 run
  Thursday: No updates → 0 runs
  Friday: Zustand + MobX updated → 2 runs
  Weekend: No updates → 0 runs
  Total: 4 benchmark runs (93% reduction)
```

## 🚀 Adding New Libraries

### 1. Add to `library-metadata.json`

```json
{
  "libraries": {
    "new-library": {
      "displayName": "NewLibrary",
      "npm": "new-library",
      "url": "https://github.com/org/new-library"
    }
  }
}
```

### 2. Add Benchmark Implementations

For each test group in `groups/*/`:

```typescript
// groups/01-read/read-x1.bench.ts
describe('Read Operations - x1', () => {
  // Add new benchmark
  bench('Simple Read - NewLibrary', () => {
    // Implementation
  });
});
```

**Naming Convention**: Must include library's `displayName` for filtering to work.

### 3. Run Initial Benchmark

```bash
# Check if library is registered
npx tsx scripts/check-single-library.ts "new-library" benchmarks/state-management

# Run initial benchmark
npx tsx scripts/benchmark-single-library.ts "new-library" benchmarks/state-management

# Verify results
ls benchmarks/state-management/results/new-library-benchmark.json
```

### 4. Automatic Hourly Updates

Once added, the library will be:
- Checked every hour by GitHub Actions
- Benchmarked automatically when new versions are released
- Included in README generation

## 🧪 Testing Locally

### Test Single Library Workflow

```bash
# 1. Check version
npx tsx scripts/check-single-library.ts "@sylphx/zen" benchmarks/state-management

# 2. Run benchmark (if needed)
npx tsx scripts/benchmark-single-library.ts "@sylphx/zen" benchmarks/state-management

# 3. Verify result file
cat benchmarks/state-management/results/sylphx-zen-benchmark.json | jq

# 4. Check skip logic (should skip second time)
npx tsx scripts/check-single-library.ts "@sylphx/zen" benchmarks/state-management

# 5. Generate README with new results
cd benchmarks/state-management
node generate-readme.js
```

### Test README Generation

```bash
# With per-library results
cd benchmarks/state-management
node generate-readme.js

# Should output:
# 📊 Loading N per-library benchmark results...
#   ✓ Loaded Zen v1.2.1
#   ✓ Loaded Jotai v2.10.3
# ✅ Merged results from N libraries
# 📦 Using per-library benchmark results
# ✅ README.md generated successfully
```

## 🐛 Troubleshooting

### Benchmark Not Running

**Issue**: Library shows as needing benchmark but nothing happens

**Check**:
1. Verify library exists in `library-metadata.json`
2. Check npm package name is correct
3. Ensure test files include library's displayName
4. Verify vitest filtering: `npx vitest bench --run -t "LibraryName"`

### Filename Errors (Scoped Packages)

**Issue**: `ENOENT: no such file or directory, open 'results/@sylphx/zen-benchmark.json'`

**Solution**: Scripts automatically sanitize filenames:
```typescript
const safeLibraryKey = libraryKey.replace(/@/g, '').replace(/\//g, '-');
// @sylphx/zen → sylphx-zen-benchmark.json
```

### README Not Updating

**Issue**: New results not appearing in README

**Check**:
1. Verify result file exists in `results/` directory
2. Check filename matches pattern: `*-benchmark.json`
3. Ensure file contains valid JSON
4. Check console output: "Using per-library benchmark results"

### Version Not Updating

**Issue**: Library keeps showing old version

**Check**:
1. Verify `versions.json` is being committed
2. Check GitHub Actions artifact merging step
3. Ensure `lastUpdated` timestamp is current
4. Manually update if needed:
   ```bash
   # Update versions.json
   jq '.libraries["@sylphx/zen"].current = "1.2.1"' versions.json > tmp.json
   mv tmp.json versions.json
   ```

## 📝 Maintenance

### Regular Tasks

**Weekly**:
- Review GitHub Actions runs for failures
- Check artifact storage usage
- Verify all libraries are being checked

**Monthly**:
- Audit compute usage vs. baseline
- Review and update library list
- Check for deprecated libraries

**When Adding Libraries**:
- Test locally before pushing
- Verify initial benchmark runs
- Check README includes new library

### Monitoring

**GitHub Actions**:
- Check workflow runs: https://github.com/SylphxAI/benchmark/actions
- Monitor per-library job status
- Review artifact retention (7 days for results)

**Cost Tracking**:
```bash
# Count benchmark runs in last 7 days
gh run list --workflow=benchmarks-per-library.yml --limit 100 --json conclusion
```

## 🔮 Future Improvements

### Potential Optimizations

1. **Smart Scheduling**: Run benchmarks during low-traffic hours
2. **Partial Benchmarks**: Only re-run changed test groups
3. **Result Caching**: Cache common benchmark setups
4. **Parallel Groups**: Run multiple test groups concurrently
5. **Delta Reporting**: Show performance changes vs. previous version

### Scalability

Current architecture supports:
- ✅ Multiple categories (state-management, router, CSS frameworks)
- ✅ Hundreds of libraries per category
- ✅ Parallel execution with rate limiting
- ✅ Independent result storage

Limitations:
- GitHub Actions matrix max: 256 jobs
- Artifact retention: 7 days (configurable)
- Concurrent jobs: Limited by account plan

## 📚 References

- **Vitest Benchmarking**: https://vitest.dev/guide/features.html#benchmarking
- **GitHub Actions Matrix**: https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs
- **GitHub Actions Artifacts**: https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts

---

**Last Updated**: 2025-11-11
**Architecture Version**: 2.0 (Per-Library Benchmarking)
**Status**: Production
