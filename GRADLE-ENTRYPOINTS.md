# Gradle Entrypoints (Android)

If your tooling expects to run Gradle from the repository root, use:
- sh ./ci-gradle-check.sh

Preferred general-purpose entrypoints:
- sh ./gradle-preflight.sh :app:check
- sh ./gradle-preflight.sh :app:assembleDebug

Direct (when android/ already exists):
- sh ./run-gradle-direct.sh :app:check
