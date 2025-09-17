#!/usr/bin/env bash
set -euo pipefail
chmod +x ./gradlew 2>/dev/null || true
chmod +x ./ci-gradle-check.sh 2>/dev/null || true
chmod +x ./ci-gradle-runner.sh 2>/dev/null || true
echo "Execution bits set on shims."
