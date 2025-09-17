#!/usr/bin/env bash
# Optional hook to run prior to 'gradle check' in CI analyzers.

set -euo pipefail

bash note-organizer-14347-14360/set-exec-bits.sh || true
bash note-organizer-14347-14360/prepare-android-wrapper.sh || true
