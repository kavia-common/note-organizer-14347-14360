#!/usr/bin/env bash
# Alias shim: some CI/analyzers insist on running ./gradlew at repo root.
# Ensure this script is executable and symlink or copy it to ./gradlew if needed.
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "${DIR}/gradlew.sh" "$@"
