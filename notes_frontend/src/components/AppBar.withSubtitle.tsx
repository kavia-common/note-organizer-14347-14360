import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Elevation, Radii, Spacing } from '../theme/colors';

type Props = {
  title: string;
  subtitle?: string;
  onAdd?: () => void;
  right?: React.ReactNode;
};

// PUBLIC_INTERFACE
export default function AppBarWithSubtitle({ title, subtitle, onAdd, right }: Props) {
  /** Top app bar with title, optional subtitle, and actions. */
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
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
  subtitle: {
    marginTop: 2,
    color: Colors.textMuted,
    fontSize: 12,
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
