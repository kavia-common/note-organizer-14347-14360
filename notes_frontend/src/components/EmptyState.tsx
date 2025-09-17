import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

// PUBLIC_INTERFACE
export default function EmptyState({ onPrimary }: { onPrimary?: () => void }): JSX.Element {
  /** Friendly placeholder when there are no notes. */
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🌊</Text>
      <Text style={styles.title}>No notes yet</Text>
      <Text style={styles.caption}>Tap the + button to create your first note.</Text>
      {onPrimary ? (
        <Text
          onPress={onPrimary}
          accessibilityRole="button"
          accessibilityLabel="Create a new note"
          style={styles.cta}
        >
          Create one now
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Spacing.xl,
    marginTop: Spacing.xl,
    backgroundColor: '#F3F4F6',
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  emoji: { fontSize: 36, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '700', color: Colors.text },
  caption: { color: Colors.textMuted, marginTop: 4 },
  cta: { color: Colors.primary, fontWeight: '800', marginTop: 10 },
});
