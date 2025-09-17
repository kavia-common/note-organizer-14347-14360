# Quickstart

This repository contains the Ocean Professional themed Notes app (Expo React Native).

## Run the App (Expo)

```
cd note-organizer-14347-14360/notes_frontend
npm install
npm start
```

- Android: `npm run android`
- iOS: `npm run ios`
- Web: `npm run web`

## Build Android (CI/Native)

From repo root:
```
bash note-organizer-14347-14360/prepare-android-wrapper.sh
bash note-organizer-14347-14360/build-android.sh
```

Or from app folder:
```
cd note-organizer-14347-14360/notes_frontend
npm run ci:bootstrap-android
npm run ci:build-android
```

If your analyzer/CI runs `./gradlew` at repo root, see:
- README-GRADLE-EXEC.md
- GRADLE-USAGE.md
- BUILDING.md
