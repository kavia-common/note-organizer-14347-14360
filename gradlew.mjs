#!/usr/bin/env node
/**
 * Node-based Gradle launcher shim.
 * Some CI/analyzers execute Node scripts more reliably than shell scripts.
 * This proxies to gradlew.sh which bootstraps and runs the Android wrapper.
 */
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const shim = join(__dirname, 'gradlew.sh');
const args = process.argv.slice(2);

const child = spawn(shim, args, { stdio: 'inherit', shell: false });
child.on('exit', (code) => process.exit(code ?? 1));
child.on('error', (err) => {
  console.error('[gradlew.mjs] Failed to spawn shim:', err);
  process.exit(127);
});
