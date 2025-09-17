import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  query: string;
  onChangeQuery: (v: string) => void;
  sort: 'updated' | 'created' | 'title';
  onChangeSort: (v: 'updated' | 'created' | 'title') => void;
};

// PUBLIC_INTERFACE
export default function SearchBar({ query, onChangeQuery, sort, onChangeSort }: Props): JSX.Element {
  /** Search input and sort switcher. */
  return (
    <View style={styles.row}>
      <TextInput
        value={query}
        onChangeText={onChangeQuery}
        placeholder="Search notes..."
        placeholderTextColor={Colors.textMuted}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => onChangeSort(sort === 'updated' ? 'title' : sort === 'title' ? 'created' : 'updated')}
        style={styles.sortBtn}
      >
        <Text style={styles.sortText}>
          Sort: {sort === 'updated' ? 'Recent' : sort === 'created' ? 'Created' : 'Title'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.md },
  input: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    color: Colors.text,
  },
  sortBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
    borderWidth: 1,
    justifyContent: 'center',
  },
  sortText: { color: Colors.primary, fontWeight: '700' },
});
