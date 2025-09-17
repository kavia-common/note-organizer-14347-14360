# NotesProvider — Quick Reference

Hook:
- const ctx = useNotes()

State:
- notes: Note[]
- folders: Folder[]
- selectedFolderId: string | null
- sortMode: 'updated' | 'created' | 'title'
- loading: boolean

Actions:
- createNote(data?: Partial<Note>): Note
- updateNote(id: string, data: Partial<Note>): void
- deleteNote(id: string): void
- togglePin(id: string): void
- createFolder(name: string, color?: string | null): Folder
- updateFolder(id: string, data: Partial<Folder>): void
- deleteFolder(id: string): void
- setSelectedFolderId(id: string | null): void
- setSortMode(mode: 'updated' | 'created' | 'title'): void

Persistence:
- AsyncStorage keys:
  - notes.data.v1
  - folders.data.v1
