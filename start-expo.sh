#!/usr/bin/env bash
# Start the Expo app from the repository root.

set -euo pipefail
cd "$(dirname "$0")/notes_frontend"
exec npm start
