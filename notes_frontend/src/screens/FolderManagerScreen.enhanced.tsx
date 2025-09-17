import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AppBar from '../components/AppBar';
import ConfirmModal from '../components/ConfirmModal';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';
import { Folder } from '../types';

// PUBLIC_INTERFACE
export default function FolderManagerScreenEnhanced({ onBack }: { onBack: () => void }) {
  /** Manage folders with note counts, create, rename, and protected delete. */
  const { folders, notes, createFolder, updateFolder, deleteFolder } = useNotes() as any;
  const [name, setName] = useState('');
  const [pendingDelete, setPendingDelete] = useState<Folder | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const n of notes as any[]) {
      if (n.folderId) map[n.folderId] = (map[n.folderId] ?? 0) + 1;
    }
    return map;
  }, [notes]);

  const onCreate = () => {
    const n = name.trim();
    if (!n) return;
    createFolder(n);
    setName('');
  };

  return (
    <View style={styles.container}>
      <AppBar title="Folders" right={<BackButton onPress={onBack} />} />
      <View style={styles.content}>
        <View style={styles.row}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="New folder name"
            placeholderTextColor={Colors.textMuted}
            style={styles.input}
            accessibilityLabel="New folder name"
          />
          <TouchableOpacity onPress={onCreate} style={styles.addBtn} accessibilityRole="button" accessibilityLabel="Add folder">
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={folders}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <FolderRow
              folder={item}
              count={counts[item.id] ?? 0}
              onRename={(n) => updateFolder(item.id, { name: n })}
              onDelete={() => setPendingDelete(item)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>

      <ConfirmModal
        visible={!!pendingDelete}
        title="Delete folder?"
        message={`Notes in this folder will be unassigned, not deleted.\nFolder: ${pendingDelete?.name ?? ''}`}
        confirmText="Delete folder"
        cancelText="Cancel"
        onCancel={() => setPendingDelete(null)}
        onConfirm={() => {
          if (pendingDelete) deleteFolder(pendingDelete.id);
          setPendingDelete(null);
        }}
      />
    </View>
  );
}

function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn} accessibilityRole="button" accessibilityLabel="Done">
      <Text style={styles.backText}>Done</Text>
    </TouchableOpacity>
  );
}

function FolderRow({
  folder,
  count,
  onRename,
  onDelete,
}: {
  folder: Folder;
  count: number;
  onRename: (name: string) => void;
  onDelete: () => void;
}) {
  const [value, setValue] = useState(folder.name);
  return (
    <View style={styles.rowItem}>
      <View style={{ flex: 1 }}>
        <TextInput
          value={value}
          onChangeText={setValue}
          onBlur={() => onRename(value.trim() || folder.name)}
          style={styles.rowInput}
          accessibilityLabel={`Folder name ${folder.name}`}
        />
        <Text style={styles.countText}>{count} {count === 1 ? 'note' : 'notes'}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.rowDel} accessibilityRole="button" accessibilityLabel="Delete folder">
        <Text style={styles.rowDelText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md, flex: 1 },
  row: { flexDirection: 'row', gap: Spacing.sm },
  input: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    color: Colors.text,
  },
  addBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: Colors.secondary,
  },
  addText: { color: '#111827', fontWeight: '800' },
  backBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  backText: { color: Colors.primary, fontWeight: '800' },
  rowItem: {
    flexDirection: 'row',
    gap: Spacing.sm,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.sm,
    alignItems: 'center',
  },
  rowInput: {
    color: Colors.text,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm,
  },
  countText: { color: Colors.textMuted, fontSize: 12, marginTop: 2 },
  rowDel: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  rowDelText: { color: Colors.error, fontWeight: '800' },
});
