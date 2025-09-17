# Building the App

Local (Android)
- From repo root: `sh ./gradle-preflight.sh :app:assembleDebug`

Web (optional)
- `cd notes_frontend && npm run web`

Notes
- Do not call `./gradlew` from the repository root. Use the preflight script instead or the root shim provided in this repo.
