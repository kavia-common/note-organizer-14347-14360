#!/usr/bin/env bash
# CI-friendly script to call the Android Gradle wrapper inside notes_frontend.

set -euo pipefail

cd "$(dirname "$0")/notes_frontend"
bash ./run_gradle.sh "$@"
