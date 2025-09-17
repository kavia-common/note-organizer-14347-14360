Android CI build instructions (Expo-managed):

Use the repository root build helper instead of invoking ./gradlew at the root:
- bash ../build-android.sh

This will:
1) npm install (if needed)
2) expo prebuild --platform android (generate android/gradlew)
3) run ./android/gradlew :app:assembleDebug

Other options from repository root:
- make build-android
- bash ./ci-run-gradle.sh :app:assembleDebug
- bash ./gradlew-ci.sh :app:assembleDebug

Note: Direct ./gradlew at repo root is a shim, but some CI environments run in a non-executable context. Prefer the scripts above to avoid permission/path issues.
