# Gradle Args Normalizer

Use this when analyzers add flags like `--console=plain` or `--scan` causing failures:

- ./gradlew-defaults.sh
- ./gradlew-defaults.sh check
- ./gradlew-defaults.sh :app:check

What it does
- Filters noisy/interactive flags
- Picks a primary task (defaults to :app:check)
- Delegates to `gradle-preflight.sh` which runs Expo prebuild then Gradle
