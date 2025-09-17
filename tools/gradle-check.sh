#!/usr/bin/env bash
# Fallback gradle check runner for CI environments where ./gradlew cannot be executed.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
bash "${ROOT}/ensure-exec.sh"
bash "${ROOT}/gradlew.sh" check
