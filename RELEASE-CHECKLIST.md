# Release Checklist

Code
- [ ] Lint passes (npm run lint in notes_frontend)
- [ ] No unused imports or dangling dev screens in production build
- [ ] Public interfaces have docstrings and PUBLIC_INTERFACE comments where applicable

Theme & UI
- [ ] Visual check of Ocean Professional palette (blue primary, amber accents)
- [ ] App bar, list, FAB all operate correctly
- [ ] Create/Edit/View/Delete flows fully functional
- [ ] Folders (add/rename/delete) operate as expected

Data
- [ ] Export/import helpers tested on recent data
- [ ] Pinned notes appear at top and toggle works

Build
- [ ] Native: Use one of
      - sh ./gradle-preflight.sh :app:assembleDebug
      - sh ./run-gradle-direct.sh :app:assembleDebug
- [ ] Web: sh ./build-web.sh (optional)

Docs
- [ ] README, APP-USAGE.md, SECURITY-PRIVACY.md reviewed
- [ ] CHANGELOG and RELEASE-NOTES updated
