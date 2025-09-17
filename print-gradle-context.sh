#!/usr/bin/env sh
set -eu
echo "PWD: $(pwd)"
echo "Listing top-level gradle files:"
ls -la ./gradlew || echo "missing: ./gradlew"
ls -la ./gradlew.bat || echo "missing: ./gradlew.bat"
ls -la ./gradle || echo "missing: ./gradle"
echo "If files are missing, ensure you are in the repository root."
echo "Try: bash note-organizer-14347-14360/set-exec-gradle.sh && ./gradlew help"
