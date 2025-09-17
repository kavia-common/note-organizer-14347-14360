import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';

type Props = {
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function NewFolderQuickAction({ style }: Props) {
  /** Inline quick action to create a new folder from the list screen. */
  const { createFolder } = useNotes();
  const [name, setName] = useState('');

  const onCreate = () => {
    const n = name.trim();
    if (!n) return;
    createFolder(n);
    setName('');
  };

  return (
    <View style={[styles.row, style]}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="New folder"
        placeholderTextColor={Colors.textMuted}
        style={styles.input}
      />
      <TouchableOpacity onPress={onCreate} style={styles.addBtn}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  addText: { color: Colors.text, fontWeight: '800' },
});
