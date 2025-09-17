#!/usr/bin/env bash
# CI fallback alias that builds Android by delegating to the existing helper.

set -euo pipefail
exec bash "$(dirname "$0")/android-build.sh"
