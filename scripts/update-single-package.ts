#!/usr/bin/env node
/**
 * Single Package Update Script
 * Updates packages incrementally with lightweight validation
 *
 * Strategy:
 * - Update one package at a time
 * - Validate each update with quick import test (not full benchmarks)
 * - Rollback if validation fails
 * - Track which packages were updated for selective benchmarking
 * - Full benchmarks should be run ONCE after all updates complete
 */

import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

interface VersionTracker {
  lastChecked: string;
  lastBenchmarkRun: string;
  testFilesHash: string;
  libraries: {
    [name: string]: {
      current: string;
      latest: string;
      lastUpdated: string;
      incompatible?: boolean;
      incompatibleVersion?: string;
      incompatibleReason?: string;
      size?: {
        gzip: number;
        minified: number;
        lastChecked: string;
      };
    };
  };
}

function backupFiles(benchmarkDir: string) {
  const packagePath = join(benchmarkDir, 'package.json');
  const lockPath = join(benchmarkDir, 'package-lock.json');

  copyFileSync(packagePath, packagePath + '.backup');
  if (existsSync(lockPath)) {
    copyFileSync(lockPath, lockPath + '.backup');
  }
}

function restoreFiles(benchmarkDir: string) {
  const packagePath = join(benchmarkDir, 'package.json');
  const lockPath = join(benchmarkDir, 'package-lock.json');

  copyFileSync(packagePath + '.backup', packagePath);
  if (existsSync(lockPath + '.backup')) {
    copyFileSync(lockPath + '.backup', lockPath);
  }
}

function getLibraryDisplayName(packageName: string, benchmarkDir: string): string {
  const metadataPath = join(benchmarkDir, 'library-metadata.json');
  if (!existsSync(metadataPath)) return packageName;

  const metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  return metadata[packageName]?.displayName || packageName;
}

async function testSinglePackage(packageName: string, benchmarkDir: string): Promise<{ success: boolean; error?: string }> {
  const displayName = getLibraryDisplayName(packageName, benchmarkDir);

  console.log(`\n🧪 Validating ${displayName}...`);

  try {
    // Quick validation: try to import and initialize the stores
    // This is much faster than running full benchmarks (30s vs 5min)
    const output = execSync(`npx tsx -e "import('./src/stores/index.ts').then(() => { console.log('✓ OK'); process.exit(0); }).catch((e) => { console.error('✗', e.message); process.exit(1); })"`, {
      cwd: benchmarkDir,
      encoding: 'utf-8',
      timeout: 30000, // 30 seconds
      stdio: 'pipe'
    });

    if (output.includes('✓ OK')) {
      console.log(`   ✅ ${displayName} validation passed`);
      return { success: true };
    } else {
      console.log(`   ⚠️  ${displayName} validation incomplete`);
      return { success: false, error: 'Validation did not complete successfully' };
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    console.log(`   ❌ ${displayName} validation failed: ${errorMsg}`);
    return { success: false, error: errorMsg };
  }
}

async function updateSinglePackage(packageName: string, benchmarkDir: string): Promise<boolean> {
  const versionsPath = join(benchmarkDir, 'versions.json');
  const packagePath = join(benchmarkDir, 'package.json');
  const displayName = getLibraryDisplayName(packageName, benchmarkDir);

  // Read current state
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));
  const packageInfo = versions.libraries[packageName];

  if (!packageInfo) {
    console.log(`\n⚠️  ${displayName} not found in versions.json`);
    return false;
  }

  // Get actual installed version from package.json
  const installedVersion = pkg.dependencies[packageName]?.replace(/^[\^~]/, '') || packageInfo.current;

  // Sync versions.json if out of sync with package.json
  if (installedVersion !== packageInfo.current) {
    console.log(`\n🔄 Syncing ${displayName}: versions.json shows ${packageInfo.current}, but package.json has ${installedVersion}`);
    versions.libraries[packageName].current = installedVersion;
    versions.libraries[packageName].lastUpdated = new Date().toISOString();
    writeFileSync(versionsPath, JSON.stringify(versions, null, 2));
    console.log(`   ✅ Synced to ${installedVersion}`);
  }

  // Check if update is needed
  if (installedVersion === packageInfo.latest) {
    console.log(`\n✓ ${displayName} is already up to date (${installedVersion})`);
    return false;
  }

  console.log(`\n📦 Updating ${displayName}: ${installedVersion} → ${packageInfo.latest}`);

  // Backup current state
  backupFiles(benchmarkDir);

  try {
    // Update package.json
    pkg.dependencies[packageName] = packageInfo.latest;
    writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');

    // Install the updated package
    console.log('   📥 Installing...');
    execSync('npm install', {
      cwd: benchmarkDir,
      stdio: 'pipe'
    });

    // Test the updated package
    const testResult = await testSinglePackage(packageName, benchmarkDir);

    if (testResult.success) {
      // Success! Update versions.json
      versions.libraries[packageName].current = packageInfo.latest;
      versions.libraries[packageName].lastUpdated = new Date().toISOString();
      delete versions.libraries[packageName].incompatible;
      delete versions.libraries[packageName].incompatibleVersion;
      delete versions.libraries[packageName].incompatibleReason;

      writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

      console.log(`   ✅ ${displayName} successfully updated to ${packageInfo.latest}\n`);
      return true;
    } else {
      // Test failed - rollback
      console.log(`   ⚠️  Tests failed, rolling back ${displayName}...`);
      restoreFiles(benchmarkDir);

      // Reinstall old version
      execSync('npm install', {
        cwd: benchmarkDir,
        stdio: 'pipe'
      });

      // Mark as incompatible in versions.json
      versions.libraries[packageName].incompatible = true;
      versions.libraries[packageName].incompatibleVersion = packageInfo.latest;
      versions.libraries[packageName].incompatibleReason = testResult.error || 'Tests failed';

      writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

      console.log(`   ❌ ${displayName} ${packageInfo.latest} is incompatible (kept ${packageInfo.current})\n`);
      return false;
    }
  } catch (error) {
    console.error(`   ❌ Error updating ${displayName}:`, error);

    // Rollback on error
    restoreFiles(benchmarkDir);
    execSync('npm install', {
      cwd: benchmarkDir,
      stdio: 'pipe'
    });

    return false;
  }
}

async function updateAllPackages(benchmarkDir: string) {
  const versionsPath = join(benchmarkDir, 'versions.json');
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));

  console.log('🔄 Starting incremental package updates...\n');
  console.log('═'.repeat(60));

  let updatedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;
  const updatedPackages: string[] = [];
  const failedPackages: string[] = [];

  // Get packages that need updates
  const packagesToUpdate = Object.entries(versions.libraries)
    .filter(([_, info]) => info.current !== info.latest)
    .map(([name]) => name);

  if (packagesToUpdate.length === 0) {
    console.log('\n✨ All packages are already up to date!\n');

    // Output for GitHub Actions
    if (process.env.GITHUB_OUTPUT) {
      const output = [
        `updated_count=0`,
        `failed_count=0`,
        `has_updates=false`,
        `updated_packages=[]`,
        `failed_packages=[]`
      ].join('\n');
      writeFileSync(process.env.GITHUB_OUTPUT, output + '\n', { flag: 'a' });
    }

    return;
  }

  console.log(`Found ${packagesToUpdate.length} package(s) to update\n`);

  // Update each package independently
  for (const packageName of packagesToUpdate) {
    const success = await updateSinglePackage(packageName, benchmarkDir);

    if (success) {
      updatedCount++;
      updatedPackages.push(packageName);
    } else {
      // Re-read versions to check if it was marked incompatible
      const currentVersions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
      const packageInfo = currentVersions.libraries[packageName];

      if (packageInfo.incompatible) {
        failedCount++;
        failedPackages.push(packageName);
      } else {
        skippedCount++;
      }
    }
  }

  // Summary
  console.log('═'.repeat(60));
  console.log('\n📊 Update Summary:\n');
  console.log(`   ✅ Successfully updated: ${updatedCount}`);
  if (updatedPackages.length > 0) {
    console.log(`      ${updatedPackages.join(', ')}`);
  }
  console.log(`   ❌ Incompatible (rolled back): ${failedCount}`);
  if (failedPackages.length > 0) {
    console.log(`      ${failedPackages.join(', ')}`);
  }
  console.log(`   ⏭️  Skipped (already latest): ${skippedCount}`);
  console.log();

  // Output for GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    const output = [
      `updated_count=${updatedCount}`,
      `failed_count=${failedCount}`,
      `has_updates=${updatedCount > 0}`,
      `updated_packages=${JSON.stringify(updatedPackages)}`,
      `failed_packages=${JSON.stringify(failedPackages)}`
    ].join('\n');

    writeFileSync(process.env.GITHUB_OUTPUT, output + '\n', { flag: 'a' });
  }
}

// Main execution
const benchmarkDir = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');
updateAllPackages(benchmarkDir).then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
