# Replace "gradlew check" in CI

If your CI calls:
- ./gradlew check

Replace with:
- ./gradlew-check

What happens:
- `gradlew-check` → `gradlew-defaults.sh check` → `gradle-preflight.sh :app:check`
- Ensures Expo prebuild runs and then calls the Android Gradle wrapper

Why:
- Many environments lack native Gradle wrapper at repo root in Expo projects.
- This shim prevents "No such file or directory" and handles analyzer flags safely.
