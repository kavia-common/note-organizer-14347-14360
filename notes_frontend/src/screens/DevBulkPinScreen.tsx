import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';

// PUBLIC_INTERFACE
export default function DevBulkPinScreen({ onClose }: { onClose: () => void }) {
  /** Developer utility: pin/unpin all notes from a simple screen to verify bulk actions. */
  const { notes, updateNote } = useNotes();

  const pinAll = () => {
    const now = Date.now();
    notes.forEach((n) => updateNote(n.id, { pinned: true, updatedAt: now }));
  };

  const unpinAll = () => {
    const now = Date.now();
    notes.forEach((n) => updateNote(n.id, { pinned: false, updatedAt: now }));
  };

  return (
    <View style={styles.container}>
      <AppBar
        title="Dev: Bulk Pin"
        right={
          <Text style={styles.done} onPress={onClose}>
            Done
          </Text>
        }
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity onPress={pinAll} style={[styles.btn, styles.primary]}>
            <Text style={styles.btnTextPrimary}>Pin all</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={unpinAll} style={[styles.btn, styles.secondary]}>
            <Text style={styles.btnTextSecondary}>Unpin all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={notes}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name} numberOfLines={1}>
                {item.title || 'Untitled'}
              </Text>
              <Text style={[styles.pill, item.pinned ? styles.pillPinned : styles.pillUnpinned]}>
                {item.pinned ? 'Pinned' : 'Not pinned'}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.lg, flex: 1 },
  done: { color: Colors.primary, fontWeight: '800' },
  row: { flexDirection: 'row', gap: Spacing.sm },
  btn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    borderWidth: 1,
  },
  primary: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  btnTextPrimary: { color: '#fff', fontWeight: '800' },
  secondary: { backgroundColor: '#EFF6FF', borderColor: '#DBEAFE' },
  btnTextSecondary: { color: Colors.primary, fontWeight: '800' },
  item: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: { color: Colors.text, fontWeight: '700', flex: 1, paddingRight: 8 },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radii.xl,
    borderWidth: 1,
    fontWeight: '700',
  } as any,
  pillPinned: { backgroundColor: '#FEF3C7', borderColor: '#FDE68A', color: Colors.secondary },
  pillUnpinned: { backgroundColor: '#EFF6FF', borderColor: '#DBEAFE', color: Colors.primary },
});
