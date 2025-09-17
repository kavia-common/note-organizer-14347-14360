# Root Gradle Wrapper Shim

Why
- Some CI/analyzers run `./gradlew` from repo root.
- Expo projects generate the actual wrapper under `notes_frontend/android/` after `expo prebuild`.

What
- A root-level `gradlew` shim ensures the native project exists, then forwards tasks to the real wrapper.

Usage
- Tools can keep calling `./gradlew :app:check` or `./gradlew :app:assembleDebug`.
- The shim runs `npx expo prebuild --platform android` when needed and then delegates.
