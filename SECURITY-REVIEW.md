# Security Review Checklist

Data handling
- [ ] Notes/folders stored locally via AsyncStorage only
- [ ] No network calls or remote endpoints by default
- [ ] Export/share flows clearly initiated by user

Access & privacy
- [ ] No sensitive PII collected by default
- [ ] Clipboard/export actions labeled; user aware of data leaving the app
- [ ] Consider device-level protections (OS passcode/biometrics)

Dependencies
- [ ] Keep Expo/React Native and AsyncStorage up to date
- [ ] Review dependency licenses and known vulnerabilities

Future integrations
- [ ] If adding backend sync: enforce TLS, authentication, and data minimization
- [ ] Provide opt-in telemetry only; document events and retention

Build/CI
- [ ] Use provided preflight/ensure steps for native builds
- [ ] Avoid committing binary keys/secrets
