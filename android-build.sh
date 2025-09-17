#!/usr/bin/env bash
# Simple Android build entrypoint for CI systems.
# Delegates to the existing build helper that runs Expo prebuild if necessary.

set -euo pipefail

exec bash "$(dirname "$0")/build-android.sh"
