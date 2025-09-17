# App State Diagram (Textual)

States:
- home (NotesList)
- create (NoteEditor new)
- edit (NoteEditor existing)
- view (NoteViewer)
- folders (FolderManager)

Transitions:
- home -> create (FAB/Add)
- home -> view (tap a note)
- view -> edit (Edit action)
- edit/create -> home (Save)
- view -> home (Back)
- home -> folders (Manage)
- folders -> home (Done)

Data:
- NotesContext holds notes[], folders[], selectedFolderId, sortMode
- CRUD operations persist to AsyncStorage via services/storage
- List is filtered/sorted by query/folder/sortMode

UI:
- AppBar top, FlatList notes, FAB for Add
- Ocean Professional theme: blue primary, amber accent, rounded corners, subtle shadows
