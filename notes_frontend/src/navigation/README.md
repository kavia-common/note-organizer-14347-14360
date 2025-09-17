# Navigation

This app uses a simple local router implemented in `App.tsx` with a typed `Route` union.

- Route type: `src/navigation/types.ts`
- Barrel export: `src/navigation/index.ts` for `Route`
- Router switch lives in `App.tsx`, driven by `useState<Route>`

This approach avoids external dependencies and keeps navigation minimal:
- `home` — Notes list
- `create` — Note editor (create)
- `edit` — Note editor (edit existing)
- `view` — Note viewer
- `folders` — Folder manager
- `help` — Help
- `about` — About

Update `Route` and the `App.tsx` switch together when adding new screens.
