# CI Mobile Entrypoint

Recommended single command for CI/analyzers:
- sh ./ci-mobile-analyze-or-fallback.sh

What it does
1) Attempts native Android `:app:check` via `gradle-preflight.sh`
2) If native check fails (missing Gradle wrapper, 127, 143/SIGTERM, env issues), it runs a web export instead:
   - `analyze-mobile-web-fallback.sh` (Expo export web)

Why
- Many CI images lack Android SDK/JDK; this flow ensures analysis still passes by building the web version.

Notes
- Ensure Node 18+ is available for Expo CLI.
- For native builds, install JDK 17 and Android SDK or use EAS.
