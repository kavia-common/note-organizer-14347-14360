# Web Build Fallback

If your CI cannot execute `./gradlew`, use the web build fallback:

- sh ./build-web.sh

This will:
1) Install dependencies (if needed)
2) Export a static web build into notes_frontend/dist-web

Use this as a CI verification step until native checks are available in the environment.
