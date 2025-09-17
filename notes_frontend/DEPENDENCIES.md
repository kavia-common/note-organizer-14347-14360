# Dependencies

Core:
- expo ~53
- react 19
- react-native 0.79
- @react-native-async-storage/async-storage (local persistence)
- expo-status-bar

Dev:
- typescript
- eslint + plugins

Notes:
- AsyncStorage requires native modules in a standalone build; for Expo Go, it works via community package support.
- If you add expo-haptics or expo-linear-gradient, install the packages, and run `expo prebuild` again before native builds.
