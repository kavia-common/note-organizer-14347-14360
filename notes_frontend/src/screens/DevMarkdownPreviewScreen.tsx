import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { Note } from '../types';
import { noteToMarkdown } from '../utils/markdown';

// PUBLIC_INTERFACE
export default function DevMarkdownPreviewScreen({
  note,
  onClose,
}: {
  note: Note;
  onClose: () => void;
}) {
  /** Developer screen to preview a note as Markdown and copy/export the string. */
  const md = useMemo(
    () => noteToMarkdown({ title: note.title, content: note.content, updatedAt: note.updatedAt }),
    [note],
  );

  const copy = async () => {
    try {
      // Lazy import to avoid adding to base bundle if unused
      const { setStringAsync } = await import('expo-clipboard');
      await setStringAsync(md);
      Alert.alert('Copied', 'Markdown copied to clipboard.');
    } catch (e) {
      Alert.alert('Copy failed', String(e));
    }
  };

  return (
    <View style={styles.container}>
      <AppBar title="Dev: Markdown" right={<Text style={styles.done} onPress={onClose}>Done</Text>} />
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity onPress={copy} style={[styles.btn, styles.primary]}>
            <Text style={styles.btnPrimaryText}>Copy</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          multiline
          textAlignVertical="top"
          editable={false}
          style={styles.textarea}
          value={md}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md, flex: 1 },
  done: { color: Colors.primary, fontWeight: '800' },
  row: { flexDirection: 'row', gap: Spacing.sm },
  btn: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, borderRadius: Radii.lg, borderWidth: 1 },
  primary: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  btnPrimaryText: { color: '#fff', fontWeight: '800' },
  textarea: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.lg,
    color: Colors.text,
    fontFamily: 'monospace',
  },
});
