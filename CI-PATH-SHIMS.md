# CI PATH Shims

Problem
- Some analyzers/CI invoke `./gradlew` blindly and ignore provided scripts.

Solution
- Prepend a shim directory to PATH so `./gradlew` resolves to our wrapper.

Usage
- source ./enable-ci-path-shims.sh
- or: sh ./enable-ci-path-shims.sh ./gradlew check

What happens
- `ci-path-shims/gradlew` runs `ci-mobile-analyze-or-fallback.sh`, which:
  1) tries native :app:check via preflight
  2) falls back to Expo web export if native fails
