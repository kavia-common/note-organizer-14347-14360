#!/usr/bin/env sh
set -eu
chmod +x ./gradlew 2>/dev/null || true
chmod +x ./gradlew.sh 2>/dev/null || true
chmod +x ./gradlew.wrapper 2>/dev/null || true
chmod +x ./ci-gradle-runner.sh 2>/dev/null || true
chmod +x ./ci-gradle-check.sh 2>/dev/null || true
echo "[ensure-gradle-exec] Executable bits set."
