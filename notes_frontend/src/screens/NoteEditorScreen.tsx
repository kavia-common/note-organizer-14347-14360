import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';
import { Note } from '../types';

type Props = {
  onClose: () => void;
  note?: Note | null;
};

// PUBLIC_INTERFACE
export default function NoteEditorScreen({ note, onClose }: Props) {
  /** Screen to create or edit a note with title, content and folder. */
  const { createNote, updateNote, folders, selectedFolderId } = useNotes();
  const initial = useMemo(
    () => ({
      title: note?.title ?? '',
      content: note?.content ?? '',
      folderId: note?.folderId ?? selectedFolderId ?? null,
    }),
    [note, selectedFolderId],
  );
  const [title, setTitle] = useState(initial.title);
  const [content, setContent] = useState(initial.content);
  const [folderId, setFolderId] = useState<string | null>(initial.folderId);

  const onSave = () => {
    if (note) {
      updateNote(note.id, { title, content, folderId });
    } else {
      const created = createNote({ title, content, folderId });
      void created;
    }
    onClose();
  };

  return (
    <View style={styles.container}>
      <AppBar title={note ? 'Edit note' : 'New note'} right={<SaveButton onPress={onSave} />} />
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
        <TextInput
          style={styles.title}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          placeholderTextColor={Colors.textMuted}
        />
        <View style={styles.folderRow}>
          <Text style={styles.folderLabel}>Folder</Text>
          <ScrollChips
            items={[{ id: null, name: 'None' } as { id: string | null; name: string }].concat(
              folders.map(f => ({ id: f.id as string | null, name: f.name }))
            )}
            selectedId={folderId}
            onSelect={setFolderId}
          />
        </View>
        <TextInput
          style={styles.textarea}
          value={content}
          onChangeText={setContent}
          placeholder="Start writing..."
          placeholderTextColor={Colors.textMuted}
          multiline
          textAlignVertical="top"
        />
      </ScrollView>
    </View>
  );
}

function SaveButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.saveBtn}>
      <Text style={styles.saveText}>Save</Text>
    </TouchableOpacity>
  );
}

function ScrollChips({
  items,
  selectedId,
  onSelect,
}: {
  items: { id: string | null; name: string }[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {items.map((it) => {
        const active = selectedId === it.id;
        return (
          <TouchableOpacity
            key={String(it.id)}
            onPress={() => onSelect(it.id)}
            style={[styles.chip, active ? styles.chipActive : undefined]}
          >
            <Text style={[styles.chipText, active ? styles.chipActiveText : undefined]}>{it.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, padding: Spacing.xl, gap: Spacing.md },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  folderRow: { gap: 8 },
  folderLabel: { color: Colors.textMuted, fontWeight: '600' },
  textarea: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    color: Colors.text,
  },
  saveBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: Colors.secondary,
  },
  saveText: { color: '#111827', fontWeight: '800' },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radii.xl,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
  },
  chipActive: {
    backgroundColor: '#DBEAFE',
    borderColor: Colors.primary,
  },
  chipText: { color: Colors.textMuted, fontWeight: '700' },
  chipActiveText: { color: Colors.primary },
});
