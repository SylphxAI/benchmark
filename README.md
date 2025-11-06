# JavaScript Library Benchmarks 🏆

Professional performance benchmarks for popular JavaScript libraries, automatically updated by GitHub Actions.

## 📊 Benchmark Categories

### [State Management](./benchmarks/state-management/)
Compare performance of popular state management libraries:
- **Libraries:** Zustand, Jotai, MobX, Redux Toolkit, Valtio, Preact Signals, Solid Signals, Recoil, @sylphx/zen
- **Tests:** Simple updates, computed values, nested updates, array operations, async operations, batch updates, and more
- **Status:** ✅ Active

### [Immutability](./benchmarks/immutability/)
Compare performance of immutability helper libraries:
- **Libraries:** Immer, Mutative, Immutable.js, Immutability Helper, Seamless Immutable, @sylphx/craft
- **Tests:** Simple updates, nested updates, array operations, deep nesting, large arrays, multiple updates
- **Status:** ✅ Active

### [Router](./benchmarks/router/)
Compare performance of React routing libraries:
- **Libraries:** React Router, TanStack Router, Wouter, @sylphx/zen-router
- **Tests:** Route matching, navigation, parameter parsing, nested routes
- **Status:** 🚧 In Development

## 🚀 Key Features

- **Automated Updates**: Daily checks for library version updates
- **Smart Execution**: Benchmarks only run when libraries update or tests change
- **Bundle Size Tracking**: Automatic tracking of minified + gzipped sizes via Bundlephobia API
- **Comprehensive Testing**: Multiple test scenarios for real-world usage patterns
- **Professional Reports**: Detailed READMEs with performance insights and comparisons

## 📋 Benchmark Methodology

Each benchmark suite uses:
- **Framework:** Vitest Bench for accurate performance measurement
- **Runs:** 3 complete runs averaged for statistical accuracy
- **Environment:** Node.js v20+, standardized hardware
- **Metrics:** Operations/sec, variance, mean time, p99, sample count

## 🏗️ Project Structure

```
benchmark/
├── benchmarks/
│   ├── state-management/    # State management libraries
│   ├── immutability/         # Immutability helpers
│   └── router/               # React routing libraries
├── scripts/
│   ├── check-versions.ts     # Shared version checker
│   └── generate-readme.ts    # Shared README generator
└── .github/workflows/        # GitHub Actions automation
```

## 📦 Running Benchmarks Locally

### Run All Categories
```bash
# Install dependencies
npm install

# Run state management benchmarks
cd benchmarks/state-management
npm install
npm run benchmark

# Run immutability benchmarks
cd ../immutability
npm install
npm run benchmark

# Run router benchmarks
cd ../router
npm install
npm run benchmark
```

### Generate Reports
```bash
# From project root
npx tsx scripts/generate-readme.ts benchmarks/state-management
npx tsx scripts/generate-readme.ts benchmarks/immutability
npx tsx scripts/generate-readme.ts benchmarks/router
```

## 🔄 Automation

Benchmarks automatically update when:
- ✅ A library releases a new version
- ✅ Test files are modified
- ✅ Manual workflow trigger

Each category has its own GitHub Actions workflow that:
1. Checks for version updates daily
2. Fetches package sizes from Bundlephobia
3. Runs benchmarks if updates are detected
4. Generates updated README with results
5. Commits and pushes changes

## 📈 Results Overview

Each category README includes:
- **Benchmark Information**: Last run date, environment details
- **Library Versions**: Current versions with last update dates
- **Bundle Size Comparison**: Minified + gzipped sizes ranked
- **Top Performers**: Quick overview of category winners
- **Detailed Results**: Complete performance data with insights

## 🤝 Contributing

Want to add a new benchmark category or library?

1. Create a new directory under `benchmarks/`
2. Add `package.json`, `library-metadata.json`, and `versions.json`
3. Create benchmark tests in `src/`
4. Add GitHub Actions workflow in `.github/workflows/`
5. Run initial benchmarks and generate README
6. Submit a pull request

## 📄 License

MIT

## 🙏 Credits

Developed and maintained by [Sylph](https://github.com/sylphxltd)

---

*Automated benchmarks running daily to help you make informed library choices* ⚡
