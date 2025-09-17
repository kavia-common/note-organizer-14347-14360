# Node Gradle Shim

If your CI/analyzer cannot run shell scripts directly, use the Node-based shim:

- node note-organizer-14347-14360/gradlew.mjs check
- node note-organizer-14347-14360/gradlew.mjs assembleDebug

It proxies to `gradlew.sh`, which bootstraps the Android wrapper and delegates to the native Gradle wrapper.
