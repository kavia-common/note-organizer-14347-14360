#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

echo "== Gradle Diagnostics =="
echo "PWD: $(pwd)"
echo "Repo root: $ROOT_DIR"

echo
echo "-- Files --"
for f in "./gradlew" "./gradlew.bat" "./gradle/wrapper/gradle-wrapper.properties" "./gradle/wrapper/gradle-wrapper.jar"; do
  if [ -e "$f" ]; then
    ls -l "$f" || true
  else
    echo "Missing: $f"
  fi
done

echo
echo "-- Executable bits --"
for f in "./gradlew" "./gradlew.bat"; do
  if [ -e "$f" ]; then
    [ -x "$f" ] && echo "Executable: $f" || echo "Not executable: $f"
  fi
done

echo
echo "-- Suggestions --"
echo "1) Ensure exec bits, then run wrapper:"
echo "   sh note-organizer-14347-14360/set-exec-gradle.sh"
echo "   ./gradlew check"
echo
echo "2) Or run bootstrap + check:"
echo "   bash note-organizer-14347-14360/ci-gradle-check.sh"
echo
echo "3) Or fetch wrapper jar, then run:"
echo "   sh note-organizer-14347-14360/bootstrap-gradle-wrapper.sh"
echo "   ./gradlew help"
echo
echo "4) Alternate web export:"
echo "   bash note-organizer-14347-14360/build-web.sh"
echo
echo "If ./gradlew is still not found, confirm your CI uses the repository root as working directory."
