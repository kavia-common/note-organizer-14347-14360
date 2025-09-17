import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Elevation, Radii, Spacing } from '../theme/colors';

type Props = {
  title: string;
  onAdd?: () => void;
  right?: React.ReactNode;
};

// PUBLIC_INTERFACE
export default function AppBar({ title, onAdd, right }: Props) {
  /**
   * Top app bar with title on the left and optional action(s) on the right.
   * Params:
   *  - title: string — Title text to display.
   *  - onAdd?: () => void — Optional callback for a primary add action.
   *  - right?: React.ReactNode — Optional node to render on the right side (e.g., buttons).
   */
  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      <View style={styles.actions}>
        {right}
        {onAdd ? (
          <TouchableOpacity
            onPress={onAdd}
            accessibilityRole="button"
            accessibilityLabel="Add note"
            style={styles.addBtn}
          >
            <Text style={styles.addIcon}>＋</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: Spacing.xl,
    backgroundColor: Colors.surface,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Elevation.sm,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  addBtn: {
    marginLeft: 8,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radii.lg,
  },
  addIcon: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 20,
  },
});
