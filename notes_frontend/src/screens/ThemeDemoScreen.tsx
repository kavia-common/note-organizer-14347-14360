import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing, Elevation } from '../theme/colors';

// PUBLIC_INTERFACE
export default function ThemeDemoScreen({ onClose }: { onClose: () => void }) {
  /** Developer-only theme tokens visualization screen. */
  return (
    <View style={styles.container}>
      <AppBar title="Theme Demo" right={<Text style={styles.done} onPress={onClose}>Done</Text>} />
      <View style={styles.content}>
        <View style={[styles.row, styles.card]}>
          <View style={[styles.swatch, { backgroundColor: Colors.primary }]} />
          <Text style={styles.label}>Primary {Colors.primary}</Text>
        </View>
        <View style={[styles.row, styles.card]}>
          <View style={[styles.swatch, { backgroundColor: Colors.secondary }]} />
          <Text style={styles.label}>Secondary {Colors.secondary}</Text>
        </View>
        <View style={[styles.row, styles.card]}>
          <View style={[styles.swatch, { backgroundColor: Colors.error }]} />
          <Text style={styles.label}>Error {Colors.error}</Text>
        </View>
        <View style={[styles.row, styles.card]}>
          <View style={[styles.swatch, { backgroundColor: Colors.background, borderWidth: 1, borderColor: Colors.border }]} />
          <Text style={styles.label}>Background {Colors.background}</Text>
        </View>
        <View style={[styles.row, styles.card]}>
          <View style={[styles.swatch, { backgroundColor: Colors.surface, borderWidth: 1, borderColor: Colors.border }]} />
          <Text style={styles.label}>Surface {Colors.surface}</Text>
        </View>
        <Text style={[styles.label, { color: Colors.textMuted }]}>Text {Colors.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  done: { color: Colors.primary, fontWeight: '800' },
  row: { flexDirection: 'row', alignItems: 'center', gap: Spacing.lg },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.lg,
    ...Elevation.sm,
  },
  swatch: { width: 32, height: 32, borderRadius: Radii.md },
  label: { color: Colors.text, fontWeight: '700' },
});
