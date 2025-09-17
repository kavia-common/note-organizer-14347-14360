import React from 'react';
import NotesListScreen from './NotesListScreen';
import { Note } from '../types';

// PUBLIC_INTERFACE
export default function NotesListScreenWithPinned(props: {
  onCreate: () => void;
  onOpen: (note: Note) => void;
  onEdit: (note: Note) => void;
  onManageFolders: () => void;
}) {
  /** Variant placeholder: delegates to default list. */
  return <NotesListScreen {...props} />;
}
