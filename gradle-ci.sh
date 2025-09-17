#!/usr/bin/env bash
# CI alias script: prepares Android gradle wrapper and runs 'gradle check'.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -f "$ROOT_DIR/ci-bootstrap-and-check.sh" ]; then
  exec bash "$ROOT_DIR/ci-bootstrap-and-check.sh"
fi

echo "[gradle-ci] Missing ci-bootstrap-and-check.sh; try:"
echo "  bash note-organizer-14347-14360/build-android.sh"
exit 127
