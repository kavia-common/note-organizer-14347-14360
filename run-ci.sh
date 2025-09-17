#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
bash "${ROOT}/ensure-exec.sh"
exec bash "${ROOT}/ci-gradle-check.sh"
