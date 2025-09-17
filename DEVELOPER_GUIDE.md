Developer Guide

Overview:
- This repository contains an Expo-managed React Native app in notes_frontend using the Ocean Professional theme.
- Features include: create, edit, view, organize (folders), pin, search, sort, delete, color tags, onboarding tip, inline rename, confirmation dialogs, and helpful screens.

Local run:
- bash ./start-expo.sh
  (or cd notes_frontend && npm install && npm start)

Building Android (CI or local native):
- bash ./android-build.sh
  (prepares Android wrapper and builds :app:assembleDebug)
- make build-android
- bash ./bootstrap-and-build-android.sh (one-shot)
- bash ./ci-build-android.sh

If CI calls ./gradlew at repository root:
- bash ./prepare-android-wrapper.sh
- chmod +x ./gradlew ./notes_frontend/android/gradlew || true
- ./gradlew :app:assembleDebug

Key docs:
- QUICKSTART.md, BUILDING.md, README-CI-CONFIG.md, README-CI-SEQUENCE.md, README-GRADLE-EXEC.md
- notes_frontend/FEATURES.md, ARCHITECTURE.md
- Theme docs: notes_frontend/src/theme/README.md
- Storage keys: notes_frontend/src/services/STORAGE_KEYS.md
