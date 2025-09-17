import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';

// PUBLIC_INTERFACE
export default function StatsBadge({ style }: { style?: ViewStyle }) {
  /** Small badge showing total notes and pinned count for quick glance. */
  const { notes } = useNotes();
  const { total, pinned } = useMemo(
    () => ({ total: notes.length, pinned: notes.filter((n) => n.pinned).length }),
    [notes],
  );

  return (
    <View style={[styles.badge, style]} accessibilityLabel={`Notes: ${total}, Pinned: ${pinned}`}>
      <Text style={styles.text}>Total {total}</Text>
      <Text style={styles.sep}>•</Text>
      <Text style={styles.pin}>Pinned {pinned}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
    borderWidth: 1,
    borderRadius: Radii.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  text: { color: Colors.primary, fontWeight: '800' },
  sep: { color: Colors.textMuted, fontWeight: '800' },
  pin: { color: Colors.secondary, fontWeight: '800' },
});
