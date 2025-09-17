import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors, Radii } from '../theme/colors';

type Props = {
  value: boolean;
  onValueChange: (v: boolean) => void;
  disabled?: boolean;
};

// PUBLIC_INTERFACE
export default function Toggle({ value, onValueChange, disabled }: Props) {
  /** Minimal, theme-aligned toggle switch. */
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => !disabled && onValueChange(!value)}
      style={[styles.track, value && styles.trackOn, disabled && styles.disabled]}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
    >
      <View style={[styles.thumb, value && styles.thumbOn]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 48,
    height: 28,
    borderRadius: Radii.round,
    backgroundColor: '#E5E7EB',
    padding: 3,
  },
  trackOn: {
    backgroundColor: Colors.primary,
  },
  thumb: {
    width: 22,
    height: 22,
    borderRadius: Radii.round,
    backgroundColor: '#fff',
    transform: [{ translateX: 0 }],
  },
  thumbOn: {
    transform: [{ translateX: 20 }],
  },
  disabled: {
    opacity: 0.5,
  },
});
