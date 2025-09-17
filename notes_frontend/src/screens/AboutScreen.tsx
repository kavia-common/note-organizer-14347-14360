import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

// PUBLIC_INTERFACE
export default function AboutScreen({ onBack }: { onBack?: () => void }) {
  /** Simple About page for Ocean Notes. */
  return (
    <View style={styles.container}>
      <AppBar title="About" right={undefined} onAdd={onBack} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.h1}>Ocean Notes</Text>
        <Text style={styles.p}>
          A modern, minimalist notes app with Ocean Professional theme — blue accents for primary actions and amber highlights.
        </Text>
        <Text style={styles.h2}>Features</Text>
        <Text style={styles.li}>• Create, edit, view, pin, and delete notes</Text>
        <Text style={styles.li}>• Organize with folders and quick search</Text>
        <Text style={styles.li}>• Local persistence, no sign-in required</Text>
        <Text style={styles.h2}>Design</Text>
        <Text style={styles.p}>Rounded corners, subtle gradients, and smooth transitions.</Text>
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
