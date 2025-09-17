# Data Model

Note
- id: string
- title: string
- content: string
- folderId?: string | null
- createdAt: number (epoch ms)
- updatedAt: number (epoch ms)
- pinned?: boolean
- color?: string | null

Folder
- id: string
- name: string
- color?: string | null
- createdAt: number
- updatedAt: number

Relationships
- Note.folderId references Folder.id (or null for no folder)

Persistence
- Local via AsyncStorage (see STORAGE-SCHEMA.md)
