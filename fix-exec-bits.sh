#!/usr/bin/env bash
# Force set executable bits on gradle shims for CI/analyzers that mount files without exec permission.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

chmod +x "$ROOT_DIR/gradlew" 2>/dev/null || true
chmod +x "$ROOT_DIR/./gradlew" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew.shim" 2>/dev/null || true
chmod +x "$ROOT_DIR/.gradlew" 2>/dev/null || true
chmod +x "$ROOT_DIR/.gradlew.bak" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew.auto" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew.lite" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradle" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew-fallback.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradle-ci.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/run-gradle.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradle-check.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/preflight-ci.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/pre-gradle.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/prepare-android-wrapper.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/build-android.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/ci-bootstrap-and-check.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/notes_frontend/scripts/bootstrap-android.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/notes_frontend/scripts/ci-build-android.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/notes_frontend/android/gradle-proxy.sh" 2>/dev/null || true
chmod +x "$ROOT_DIR/notes_frontend/android/gradlew" 2>/dev/null || true

echo "[fix-exec-bits] Executable bits set where possible."
