# Analysis Fallbacks

Native (preferred if Android toolchain available)
- sh ./gradle-preflight.sh :app:check
- sh ./run-noninteractive-gradle-check.sh
- sh ./analyze-mobile.sh

Web (fallback when native toolchain unavailable)
- sh ./analyze-mobile-web-fallback.sh
  - Runs `expo export --platform web` to statically build the app for web
  - Avoids Gradle/Android SDK requirements

Notes
- Choose the native flow only if CI has JDK 17 and Android SDK.
- For static code analysis, the web fallback often suffices.
- Ensure Node 18+ is available for all flows (Expo CLI).
