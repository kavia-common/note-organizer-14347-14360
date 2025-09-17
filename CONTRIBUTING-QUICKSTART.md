# Contributing Quickstart

Setup
- cd notes_frontend
- npm install
- npm run start

Code
- Keep components small and themed via src/theme/colors.ts
- Document PUBLIC_INTERFACE exports with brief docstrings
- Use NotesContext for state/CRUD

Native build (CI-friendly)
- From repo root:
  sh ./gradle-preflight.sh :app:assembleDebug

PR Checklist
- Lint passes
- UI follows Ocean Professional tokens
- Docs updated (README/CHANGELOG if needed)
