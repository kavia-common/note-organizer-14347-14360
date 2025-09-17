import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';
import { Colors, Elevation, Radii } from '../theme/colors';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
  label?: string;
};

// PUBLIC_INTERFACE
export default function FAB({ onPress, style, label = '＋' }: Props) {
  /**
   * A circular floating action button for the primary screen action (e.g., create a note).
   * Params:
   *  - onPress: () => void — Callback when the button is pressed.
   *  - style?: ViewStyle — Optional custom style overrides.
   *  - label?: string — Optional label text/icon (default: plus sign).
   */
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress} style={[styles.fab, style]}>
      <Text style={styles.icon}>{label}</Text>
    </TouchableOpacity>
  );
}

const SIZE = 56;

const styles = StyleSheet.create({
  fab: {
    width: SIZE,
    height: SIZE,
    borderRadius: Radii.round,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 24,
    ...Elevation.md,
  },
  icon: { color: '#fff', fontSize: 28, fontWeight: '800', lineHeight: 30 },
});
