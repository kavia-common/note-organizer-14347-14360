# Alternate Build Path (Web)

If your CI/analyzer cannot run Android Gradle (e.g., `./gradlew` not available),
you can still validate and analyze the code by building the Expo app for the web:

Run:
  bash note-organizer-14347-14360/build-web.sh

This installs dependencies and exports a static web build to:
  note-organizer-14347-14360/notes_frontend/dist-web

Use this as an alternate verification path when native Android builds are not possible in your environment.
