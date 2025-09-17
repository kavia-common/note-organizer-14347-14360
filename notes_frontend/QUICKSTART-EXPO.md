# Quickstart (Expo)

1) Install
   cd notes_frontend
   npm install

2) Start (Expo)
   npm run start
   - Press "a" for Android emulator, "i" for iOS simulator (macOS), or "w" for web.

3) Native build (optional)
   From repository root (not inside notes_frontend):
   - sh ./gradle-preflight.sh :app:assembleDebug
   or
   - sh ./run-gradle-direct.sh :app:assembleDebug

Troubleshooting
- If the emulator is not detected, open Android Studio (or Xcode) and start a device first.
- Ensure Node 18+ and npm 10+ are available (see .tool-versions).
