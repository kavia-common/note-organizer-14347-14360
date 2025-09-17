import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing } from '../theme/colors';

type Props = {
  title: string;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function SectionHeader({ title, style }: Props) {
  /** Subtle section header for grouping (e.g., Pinned, Others). */
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: Spacing.sm, paddingHorizontal: 2 },
  text: { color: Colors.textMuted, fontWeight: '700', letterSpacing: 0.3 },
});
