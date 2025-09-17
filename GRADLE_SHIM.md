This repository uses an Expo-managed React Native app in notes_frontend.
CI tools may try to execute ./gradlew from the repo root.

We provide a shim at ./gradlew which forwards calls to:
- notes_frontend/android/gradlew

If the wrapper is missing, run inside notes_frontend:
- npm install
- npm run prebuild:android
