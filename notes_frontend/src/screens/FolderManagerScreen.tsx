import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';
import { Folder } from '../types';

type Props = {
  onBack: () => void;
};

// PUBLIC_INTERFACE
export default function FolderManagerScreen({ onBack }: Props): JSX.Element {
  /** Manage folders: create, rename, delete. */
  const { folders, createFolder, updateFolder, deleteFolder, notes } = useNotes();
  const [name, setName] = useState('');

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
          />
          <TouchableOpacity onPress={onCreate} style={styles.addBtn} accessibilityRole="button" accessibilityLabel="Add folder">
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={folders}
          keyExtractor={(i) => i.id || String(i.name)}
          renderItem={({ item }) => (
            <FolderRow
              folder={item}
              count={notes.filter((n) => n.folderId === item.id).length}
              onRename={(n) => updateFolder(item.id, { name: n })}
              onDelete={() => deleteFolder(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>
    </View>
  );
}

function BackButton({ onPress }: { onPress: () => void }): JSX.Element {
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
}): JSX.Element {
  const [value, setValue] = useState(folder.name);
  return (
    <View style={styles.rowItem}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          value={value}
          onChangeText={setValue}
          onBlur={() => onRename(value.trim() || folder.name)}
          style={[styles.rowInput, { flex: 1 }]}
        />
        <Text style={styles.rowCount} accessibilityLabel={`${count} notes in ${folder.name}`}>
          {count}
        </Text>
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
  rowDel: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  rowDelText: { color: Colors.error, fontWeight: '800' },
  rowCount: {
    marginLeft: Spacing.sm,
    color: Colors.textMuted,
    fontWeight: '700',
  },
});
