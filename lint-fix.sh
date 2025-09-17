#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/notes_frontend"
npm run lint || true
