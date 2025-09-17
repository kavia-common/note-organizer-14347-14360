# Build entrypoint pointer for analyzers that read a BUILD file.
# Use the CI bootstrap script to generate the Android wrapper and run Gradle check.
RUN: bash note-organizer-14347-14360/ci-gradle-check.sh

# Alternate (ensures from repo root, fixes perms, delegates to hardened wrapper):
ALT: sh note-organizer-14347-14360/run-from-root-gradle-check.sh

# Web-only alternate (no Gradle):
WEB: bash note-organizer-14347-14360/build-web.sh
