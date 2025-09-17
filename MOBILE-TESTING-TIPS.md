# Mobile Testing Tips

Emulators/Simulators
- Use recent Android Emulator images (API 34+) for best performance.
- Test on low-DPI and high-DPI configurations to catch layout issues.

Real Devices
- Test on at least one mid-range device for performance checks.
- Validate touch target sizes and font scaling (Accessibility settings).

Scenarios
- Rotate device (if orientation allowed).
- Background/foreground transitions preserve editor state.
- Airplane mode: app still works (local storage only).

Debugging
- Use React Native DevTools (Expo) and console logs sparingly.
- Capture device logs (adb logcat) when diagnosing native issues.
