# CI/Analyzer Wrapper Binaries

Preferred (from repository root)
- sh ./gradle-preflight.sh :app:check
- sh ./gradle-preflight.sh :app:assembleDebug

Alternatives (depending on CI constraints)
- ./gradlew :app:check               (shim → prebuild → notes_frontend/android/gradlew)
- ./gradle :app:check                (shim → prebuild → notes_frontend/android/gradlew)
- ./.gradlew :app:check              (hidden shim)
- ./gradlew.sh :app:check            (shim)
- ./gradlew.bat :app:check           (Windows shim)
- ./gradlew-linux :app:check         (shim)
- ./gradlew-wrapper :app:check       (wrapper)
- ./_gradlew :app:check              (fallback wrapper)
- sh ./ci-gradle-check.sh            (CI helper)
- sh ./run-gradle-check.sh           (Analyzer helper)
- make check                         (Makefile target)
- sh ./.github-gradle-check          (GitHub-like helper)
- sh ./gradle-check.sh               (Conventional helper)

Requirements
- Node available in CI (for `npx expo prebuild`)
- JDK 17 if building native Android locally in CI
- Consider EAS/Expo cloud builds for production pipelines
