import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  label?: string;
  onPress: () => void;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function BackButton({ label = 'Back', onPress, style }: Props) {
  /** Minimal back button consistent with Ocean Professional theme. */
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]} accessibilityRole="button" accessibilityLabel={label}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  text: { color: Colors.primary, fontWeight: '800' },
});
