#!/usr/bin/env sh
# Drop-in CI snippet: builds native Android debug
set -eu
sh ./gradle-preflight.sh :app:assembleDebug
