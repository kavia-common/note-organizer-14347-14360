import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { Note } from '../types';
import { useNotes } from '../store/NotesContext';
import { formatDateTime } from '../utils/date';

type Props = {
  note: Note;
  onEdit: (note: Note) => void;
  onBack: () => void;
};

// PUBLIC_INTERFACE
export default function NoteViewerScreen({ note, onEdit, onBack }: Props) {
  /** Read-only note display with quick pin and edit actions. */
  const { togglePin } = useNotes();

  return (
    <View style={styles.container}>
      <AppBar
        title={note.title || 'Untitled'}
        right={
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <BackButton onPress={onBack} />
            <TouchableOpacity onPress={() => togglePin(note.id)} style={styles.action}>
              <Text style={styles.actionText}>{note.pinned ? 'Unpin' : 'Pin'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onEdit(note)} style={[styles.action, styles.primary]}>
              <Text style={[styles.actionText, styles.primaryText]}>Edit</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.content}>
        <Text style={styles.meta}>Updated {formatDateTime(note.updatedAt)}</Text>
        <Text style={styles.body}>{note.content || 'No content'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  meta: { color: Colors.textMuted },
  body: {
    color: Colors.text,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.xl,
    lineHeight: 22,
  },
  action: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  actionText: { color: Colors.primary, fontWeight: '800' },
  primary: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  primaryText: { color: '#fff' },
});
