import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';
import { Folder } from '../types';

type Props = {
  folder: Folder | null; // null represents "All"
  active: boolean;
  onPress: () => void;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function FolderPill({ folder, active, onPress, style }: Props): JSX.Element {
  /** Selectable pill representing a folder (or All). */
  const label = folder ? folder.name : 'All';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.pill, active && styles.active, style]}
      accessibilityRole="button"
      accessibilityLabel={`Select folder ${label}`}
      testID={`folder-pill-${label}`}
    >
      <Text style={[styles.text, active && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.xl,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: Spacing.sm,
  },
  active: {
    backgroundColor: '#DBEAFE',
    borderColor: Colors.primary,
  },
  text: { color: Colors.textMuted, fontWeight: '600' },
  activeText: { color: Colors.primary },
});
