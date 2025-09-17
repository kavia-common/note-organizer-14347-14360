import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Elevation, Radii, Spacing } from '../theme/colors';
import { Note } from '../types';
import { Highlighted } from '../utils/highlight';

type Props = {
  note: Note;
  onPress: () => void;
  onPin: () => void;
  onDelete: () => void;
  query?: string;
};

// PUBLIC_INTERFACE
export default function NoteCardWithHighlight({ note, onPress, onPin, onDelete, query = '' }: Props) {
  /** Card displaying a note preview with actions and optional highlighted title. */
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.header}>
        <Highlighted
          text={note.title || 'Untitled'}
          query={query}
          textProps={{ numberOfLines: 1, style: styles.title }}
        />
        <View style={styles.actions}>
          <TouchableOpacity onPress={onPin} style={[styles.badge, note.pinned && styles.pinned]}>
            <Text style={[styles.badgeText, note.pinned && styles.pinnedText]}>
              {note.pinned ? 'Pinned' : 'Pin'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.delete}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.preview}>
        {note.content || 'No content'}
      </Text>
      <Text style={styles.meta}>{new Date(note.updatedAt).toLocaleString()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Elevation.sm,
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 16, fontWeight: '700', color: Colors.text, flex: 1, paddingRight: 8 },
  actions: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radii.xl,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  pinned: {
    backgroundColor: '#FEF3C7',
    borderColor: '#FDE68A',
  },
  badgeText: { color: Colors.primary, fontWeight: '600' },
  pinnedText: { color: Colors.secondary },
  delete: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radii.xl,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  deleteText: { color: Colors.error, fontWeight: '600' },
  preview: { color: Colors.textMuted, marginTop: 6 },
  meta: { color: Colors.textMuted, fontSize: 12, marginTop: 10 },
});
