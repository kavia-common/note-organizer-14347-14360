import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';
import { generateSampleFolders, generateSampleNotes } from '../utils/sampleData';

type Props = {
  onClose: () => void;
  onAbout: () => void;
};

// PUBLIC_INTERFACE
export default function HelpScreenWithSeed({ onClose, onAbout }: Props) {
  /** Help screen with optional sample data seeding for first-run experience. */
  const { folders, notes, createFolder, createNote } = useNotes();

  const onSeed = () => {
    if (folders.length === 0) {
      const fs = generateSampleFolders();
      fs.forEach((f) => createFolder(f.name, f.color ?? null));
    }
    if (notes.length === 0) {
      const ns = generateSampleNotes(folders);
      ns.forEach((n) => createNote({ title: n.title, content: n.content, folderId: n.folderId ?? null, pinned: n.pinned }));
    }
    onClose();
  };

  return (
    <View style={styles.container}>
      <AppBar title="Help" right={<CloseBtn onPress={onClose} />} />
      <View style={styles.content}>
        <Text style={styles.title}>Getting Started</Text>
        <Text style={styles.text}>
          Create a note with the + button. Tap a note to view and edit. Organize with folders.
        </Text>
        <TouchableOpacity style={styles.cta} onPress={onAbout}>
          <Text style={styles.ctaText}>About this app</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cta, styles.seedBtn]} onPress={onSeed}>
          <Text style={styles.seedText}>Seed sample notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CloseBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeBtn}>
      <Text style={styles.closeText}>Done</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  title: { color: Colors.text, fontSize: 18, fontWeight: '800' },
  text: { color: Colors.text, opacity: 0.8, lineHeight: 20 },
  cta: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
  },
  ctaText: { color: Colors.text, fontWeight: '800' },
  seedBtn: { backgroundColor: '#EFF6FF', borderWidth: 1, borderColor: '#DBEAFE' },
  seedText: { color: Colors.primary, fontWeight: '800' },
  closeBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  closeText: { color: Colors.primary, fontWeight: '800' },
});
