import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Elevation, Radii, Spacing } from '../theme/colors';
import { Note } from '../types';
import { formatDateTime } from '../utils/date';
import Badge from './Badge';
import ConfirmDialog from './ConfirmDialog';

type Props = {
  note: Note;
  onPress: () => void;
  onPin: () => void;
  onDelete: () => void;
};

// PUBLIC_INTERFACE
export default function NoteCard({ note, onPress, onPin, onDelete }: Props) {
  /** Card displaying a note preview with actions. */
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      accessibilityRole="button"
      accessibilityLabel={`Open note ${note.title || 'Untitled'}`}
    >
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.title}>
          {note.title || 'Untitled'}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity
            onPress={onPin}
            accessibilityRole="button"
            accessibilityLabel={note.pinned ? 'Unpin note' : 'Pin note'}
          >
            <Badge label={note.pinned ? 'Pinned' : 'Pin'} tone={note.pinned ? 'warn' : 'info'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setConfirmVisible(true)}
            style={styles.delete}
            accessibilityRole="button"
            accessibilityLabel="Delete note"
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text numberOfLines={2} style={styles.preview}>
        {note.content || 'No content'}
      </Text>
      <Text style={styles.meta}>{formatDateTime(note.updatedAt)}</Text>

      <ConfirmDialog
        visible={confirmVisible}
        title="Delete note"
        message="This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => {
          setConfirmVisible(false);
          onDelete();
        }}
        onCancel={() => setConfirmVisible(false)}
      />
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
