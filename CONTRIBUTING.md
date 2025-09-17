Contributing

- Code style: keep components small, themed via src/theme/colors.ts tokens.
- Public interfaces: add PUBLIC_INTERFACE comment + docstring above exported functions/components.
- State: use src/store/NotesContext.tsx for CRUD on notes/folders; keep screens stateless where possible.
- Persistence: interact via src/services/storage.ts only (AsyncStorage).
- Variants: place experimental screens under screens/*variant* files; export through their barrels.
- CI: If native builds are required, prefer sh ./run-gradle-direct.sh :app:assembleDebug over calling ./gradlew at repo root.
