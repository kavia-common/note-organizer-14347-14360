import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { loadNotes, loadFolders, saveNotes, saveFolders } from '../services/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Note, Folder } from '../types';

// Simple ID helper
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

type SortMode = 'updated' | 'created' | 'title';

type NotesContextType = {
  notes: Note[];
  folders: Folder[];
  selectedFolderId: string | null;
  sortMode: SortMode;
  loading: boolean;

  // CRUD
  createNote: (data?: Partial<Note>) => Note;
  updateNote: (id: string, data: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  togglePin: (id: string) => void;

  createFolder: (name: string, color?: string | null) => Folder;
  updateFolder: (id: string, data: Partial<Folder>) => void;
  deleteFolder: (id: string) => void;

  setSelectedFolderId: (id: string | null) => void;
  setSortMode: (mode: SortMode) => void;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

// PUBLIC_INTERFACE
export function useNotes() {
  /**
   * Access the Notes and Folders store, including CRUD operations and UI state.
   * Returns:
   *  - NotesContextType — the context value with notes, folders, filters, sort mode and actions.
   * Throws:
   *  - Error if used outside of <NotesProvider>.
   */
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error('useNotes must be used within NotesProvider');
  return ctx;
}

// PUBLIC_INTERFACE
export function NotesProvider({ children }: { children: React.ReactNode }): JSX.Element {
  /** Provider that loads, stores and persists notes/folders state. */
  const [notes, setNotes] = useState<Note[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>('updated');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [n, f] = await Promise.all([loadNotes(), loadFolders()]);
      const [savedSort, savedFolder] = await Promise.all([
        AsyncStorage.getItem('prefs.sortMode'),
        AsyncStorage.getItem('prefs.selectedFolderId'),
      ]);
      setNotes(n);
      setFolders(f);
      if (savedSort === 'updated' || savedSort === 'created' || savedSort === 'title') {
        setSortMode(savedSort);
      }
      if (savedFolder && savedFolder !== 'null') {
        setSelectedFolderId(savedFolder);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!loading) saveNotes(notes);
  }, [notes, loading]);

  useEffect(() => {
    if (!loading) saveFolders(folders);
  }, [folders, loading]);

  const createNote: NotesContextType['createNote'] = (data) => {
    const now = Date.now();
    const note: Note = {
      id: uid(),
      title: data?.title ?? '',
      content: data?.content ?? '',
      folderId: data?.folderId ?? selectedFolderId ?? null,
      createdAt: now,
      updatedAt: now,
      pinned: data?.pinned ?? false,
      color: data?.color ?? null,
    };
    setNotes((prev) => [note, ...prev]);
    return note;
  };

  const updateNote: NotesContextType['updateNote'] = (id, data) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, ...data, updatedAt: Date.now() } : n)),
    );
  };

  const deleteNote: NotesContextType['deleteNote'] = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const togglePin: NotesContextType['togglePin'] = (id) => {
    setNotes((prev) =>
      prev
        .map((n) => (n.id === id ? { ...n, pinned: !n.pinned, updatedAt: Date.now() } : n))
        .sort(sorter),
    );
  };

  const createFolder: NotesContextType['createFolder'] = (name, color) => {
    const now = Date.now();
    const folder: Folder = { id: uid(), name, color: color ?? null, createdAt: now, updatedAt: now };
    setFolders((prev) => [folder, ...prev]);
    return folder;
  };

  const updateFolder: NotesContextType['updateFolder'] = (id, data) => {
    setFolders((prev) => prev.map((f) => (f.id === id ? { ...f, ...data, updatedAt: Date.now() } : f)));
  };

  const deleteFolder: NotesContextType['deleteFolder'] = (id) => {
    // Remove folder assignment for notes in that folder
    setNotes((prev) => prev.map((n) => (n.folderId === id ? { ...n, folderId: null } : n)));
    setFolders((prev) => prev.filter((f) => f.id !== id));
    if (selectedFolderId === id) setSelectedFolderId(null);
  };

  const sorter = useMemo(() => {
    switch (sortMode) {
      case 'title':
        return (a: Note, b: Note) => a.title.localeCompare(b.title);
      case 'created':
        return (a: Note, b: Note) => b.createdAt - a.createdAt;
      case 'updated':
      default:
        return (a: Note, b: Note) => {
          if ((a.pinned ? 1 : 0) !== (b.pinned ? 1 : 0)) return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
          return b.updatedAt - a.updatedAt;
        };
    }
  }, [sortMode]);

  // Persist preferences when they change
  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem('prefs.sortMode', sortMode).catch(() => {});
    }
  }, [sortMode, loading]);

  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem('prefs.selectedFolderId', String(selectedFolderId)).catch(() => {});
    }
  }, [selectedFolderId, loading]);

  const value: NotesContextType = {
    notes: [...notes].sort(sorter),
    folders,
    selectedFolderId,
    sortMode,
    loading,
    createNote,
    updateNote,
    deleteNote,
    togglePin,
    createFolder,
    updateFolder,
    deleteFolder,
    setSelectedFolderId,
    setSortMode,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}
