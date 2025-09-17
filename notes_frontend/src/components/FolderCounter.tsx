import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  count: number;
};

// PUBLIC_INTERFACE
export default function FolderCounter({ count }: Props) {
  /** Small badge to display a count near folder filter row. */
  return (
    <View style={styles.badge} accessibilityLabel={`Folder note count: ${count}`}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    marginLeft: Spacing.sm,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: Radii.xl,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
    alignSelf: 'center',
  },
  text: { color: Colors.primary, fontWeight: '800' },
});
