The repository root includes a minimal Gradle setup to satisfy CI systems that execute ./gradlew at the root.

Primary path:
- notes_frontend/android/gradlew (created by: cd notes_frontend && npm install && npm run prebuild:android)

Fallback:
- If the above wrapper is absent, the root gradlew will look for gradle/wrapper/gradle-wrapper.jar.
  We do not commit binaries here. If your CI requires it, generate one using:
  - gradle wrapper
  or ensure the internal wrapper exists by running Expo prebuild.

Recommended CI sequence:
1) cd notes_frontend
2) npm install --no-audit --no-fund
3) npm run prebuild:android
4) cd ..
5) ./gradlew :app:assembleDebug
