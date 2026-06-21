# SylphxAI Benchmark

SylphxAI/benchmark is a benchmark hub for JavaScript and TypeScript library performance research, result snapshots, scoring methodology, and supporting benchmark automation.

## Lifecycle

- State: `production`
- Layer: `research`
- Machine manifest: [`.doctrine/project.json`](./.doctrine/project.json)

## Goals

- Maintain reproducible benchmark categories for JavaScript and TypeScript libraries.
- Store benchmark result snapshots, methodology notes, and generated ranking documentation.
- Provide CLI and workflow surfaces for running, rebuilding, and publishing benchmark evidence.

## Non-Goals

- This repository does not own the libraries it benchmarks.
- This repository does not own application runtime behavior in products that consume benchmark findings.
- This repository does not own enterprise engineering doctrine.

## Boundary

This repository owns benchmark definitions, methodology, scripts, result snapshots, and benchmark documentation. Product repositories may consume the findings as evidence, but product dependency decisions and runtime changes belong in the consuming product repo.

## Public Surfaces

- Benchmark hub README: [`README.md`](./README.md)
- Benchmark framework CLI: [`src/cli.ts`](./src/cli.ts)
- Benchmark categories: [`benchmarks/`](./benchmarks/)
- Methodology and architecture docs: [`ARCHITECTURE.md`](./ARCHITECTURE.md), [`BENCHMARK_STANDARD.md`](./BENCHMARK_STANDARD.md)
- Scheduled/manual workflows: [`.github/workflows/`](./.github/workflows/)

## Delivery

The repository currently has no required status contexts on `main`. Benchmark proof is a successful local or GitHub workflow benchmark run plus committed result/readme snapshots. This manifest slice is documentation-only and does not change benchmark code, results, workflows, or release behavior.
