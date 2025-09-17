#!/usr/bin/env sh
# A minimal shim that traps SIGTERM (143) and exits 0 to avoid false failures in static analyzers.
# It can be used in CI as a placeholder when native build is not required.

trap 'echo "[gradle-noop] Received SIGTERM (143); exiting 0 for analyzer."; exit 0' TERM

echo "[gradle-noop] No-op gradle step for static analysis environments."
# Sleep briefly to give analyzers a chance to send termination without causing failure
sleep 2
exit 0
