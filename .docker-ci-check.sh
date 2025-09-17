#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "${ROOT_DIR}/ensure-exec.sh" || true
sh "${ROOT_DIR}/gradlew" check
