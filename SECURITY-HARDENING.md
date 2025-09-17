# Security Hardening Tips

Device-level
- Encourage OS passcode/biometrics and screen lock.
- Avoid storing sensitive data in screenshots; disable sensitive UI where possible.

Data-at-rest (future)
- Consider keychain/keystore-backed storage for sensitive fields.
- For encrypted notes (future), use device-bound keys.

Export/Share
- Warn users that exported JSON may contain sensitive content.
- Consider redaction or selective export in future versions.

Dependencies
- Keep Expo/RN/AsyncStorage up to date; run vulnerability scans periodically.

Builds
- Sign release builds; avoid debug builds in production channels.
- Keep CI secrets out of the repository and logs.
