import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

// PUBLIC_INTERFACE
export default function SettingsHelpScreen({ onBack }: { onBack?: () => void }) {
  /** A simple information screen describing gestures and theme cues. */
  return (
    <View style={styles.container}>
      <AppBar title="Help" right={undefined} onAdd={onBack} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.h1}>Ocean Professional</Text>
        <Text style={styles.p}>
          Minimalist surfaces, rounded corners, subtle shadows, and blue/amber accents. Primary actions use blue, highlights use amber.
        </Text>

        <Text style={styles.h2}>Tips</Text>
        <Text style={styles.li}>• Tap + to create a note</Text>
        <Text style={styles.li}>• Use folders (Manage) to organize</Text>
        <Text style={styles.li}>• Pin notes to keep them at the top</Text>
        <Text style={styles.li}>• Use search and Sort to refine the list</Text>

        <Text style={styles.h2}>Accessibility</Text>
        <Text style={styles.p}>
          Large touch targets, clear color contrast, and screen reader labels are provided for core actions.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  h1: { fontSize: 20, fontWeight: '800', color: Colors.text },
  h2: { fontSize: 16, fontWeight: '800', color: Colors.text, marginTop: Spacing.lg },
  p: { color: Colors.textMuted, lineHeight: 20 },
  li: { color: Colors.textMuted, lineHeight: 20 },
});
