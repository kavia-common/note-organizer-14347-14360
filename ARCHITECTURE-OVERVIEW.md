# Architecture Overview

Layers
- UI (screens/components): Compose the Ocean Professional interface
- State (store/NotesContext): Holds notes/folders and exposes CRUD, filter/sort state
- Services (storage): AsyncStorage persistence for notes/folders
- Utils: Shared helpers (date, export/import, filtering, markdown, etc.)

Data Flow
- Screens render from NotesContext state
- Actions (create/edit/delete/pin, folder ops) call NotesContext methods
- Context writes changes to AsyncStorage via services/storage (debounced by React effects)
- List screens filter/sort via in-component logic or utils/filtering

Navigation
- Simple in-file Router (App.tsx) with routes: home, create, edit, view, folders

Theming
- Ocean Professional tokens in src/theme/colors.ts (colors, radii, spacing, elevation)
- Components read tokens directly; no external theme provider is required
