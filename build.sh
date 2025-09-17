#!/usr/bin/env bash
# Generic build entrypoint for analyzers that look for ./build.sh
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
bash "${ROOT}/ensure-exec.sh" || true
exec bash "${ROOT}/ci-gradle-check.sh"
