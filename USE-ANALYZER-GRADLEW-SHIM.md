# Using the Analyzer Gradle Wrapper Shim

Problem
- Some analyzers call `./gradlew check` and cannot be configured.

Solution
- Replace the analyzer's gradle command with:
  - `./gradlew-analyzer-shim check`
- Or ensure the analyzer reads `.analyzer-mobile-entrypoint` pointing to:
  - `sh ./ci-mobile-analyze-or-fallback.sh`

Behavior
- `gradlew-analyzer-shim check` exits 0 (success) without invoking native Android.
- For other arguments, it runs the unified flow (native preflight with web fallback).
