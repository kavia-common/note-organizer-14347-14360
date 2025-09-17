import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { MiniMarkdown } from '../utils/markdown';
import { Note } from '../types';

// PUBLIC_INTERFACE
export default function MarkdownPreviewScreen({ note, onBack }: { note: Note; onBack?: () => void }) {
  /** Developer-friendly Markdown preview of a note's content. */
  const content = note?.content ?? '';
  return (
    <View style={styles.container}>
      <AppBar title="Markdown Preview" right={undefined} onAdd={onBack} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{note.title || 'Untitled'}</Text>
        <View style={styles.preview}>
          <MiniMarkdown text={content} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  title: { fontSize: 18, fontWeight: '800', color: Colors.text },
  preview: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.xl,
  },
});
