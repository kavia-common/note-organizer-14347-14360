import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  message: string;
};

// PUBLIC_INTERFACE
export default function OnboardingTip({ message }: Props): JSX.Element {
  /** Subtle onboarding banner to guide first-time users. */
  return (
    <View style={styles.container} accessibilityRole="summary">
      <Text style={styles.emoji}>💡</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Spacing.sm,
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
    borderWidth: 1,
    borderRadius: Radii.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.md,
  },
  emoji: { fontSize: 16 },
  text: { color: Colors.text, opacity: 0.9 },
});
