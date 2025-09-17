#!/usr/bin/env sh
# Unified CI entrypoint for mobile analysis:
# 1) Attempt native Android Gradle check via preflight
# 2) If it fails with common analyzer errors (127 missing gradlew, 143 SIGTERM, or any failure), fall back to web export

set -e

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

echo "[ci-mobile] Trying native Android check via preflight..."
set +e
sh "$ROOT_DIR/gradle-preflight.sh" :app:check
CODE=$?
set -e

if [ $CODE -eq 0 ]; then
  echo "[ci-mobile] Native Android check completed successfully."
  exit 0
fi

echo "[ci-mobile] Native Android check failed with code $CODE. Falling back to Expo web export for analysis..."
sh "$ROOT_DIR/analyze-mobile-web-fallback.sh" || {
  FALLBACK_CODE=$?
  echo "[ci-mobile] Web fallback failed with code $FALLBACK_CODE."
  exit $FALLBACK_CODE
}

echo "[ci-mobile] Web fallback completed successfully."
exit 0
