import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type MenuItem = {
  key: string;
  label: string;
  onPress: () => void;
};

type Props = {
  items: MenuItem[];
};

// PUBLIC_INTERFACE
export function DevMenu({ items }: Props) {
  /** Minimal developer overlay menu for quick actions. */
  const [open, setOpen] = useState(false);
  const handle = (fn: () => void) => {
    setOpen(false);
    setTimeout(fn, 0);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.anchor} accessibilityRole="button" accessibilityLabel="Developer Menu">
        <Text style={styles.anchorText}>⋮</Text>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <View style={styles.backdrop}>
          <View style={styles.card}>
            <Text style={styles.title}>Dev Menu</Text>
            {items.map((it) => (
              <TouchableOpacity key={it.key} onPress={() => handle(it.onPress)} style={styles.item}>
                <Text style={styles.itemText}>{it.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setOpen(false)} style={[styles.item, styles.close]}>
              <Text style={[styles.itemText, styles.closeText]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const SIZE = 40;

const styles = StyleSheet.create({
  anchor: {
    width: SIZE,
    height: SIZE,
    borderRadius: Radii.round,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
    borderWidth: 1,
  },
  anchorText: { color: Colors.primary, fontWeight: '900', fontSize: 18, lineHeight: 22 },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(17,24,39,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    padding: Spacing.xl,
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  title: { fontSize: 18, fontWeight: '800', color: Colors.text, marginBottom: Spacing.md },
  item: {
    paddingVertical: Spacing.sm,
    borderRadius: Radii.md,
  },
  itemText: { color: Colors.text, fontWeight: '600' },
  close: {
    marginTop: Spacing.md,
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
    borderWidth: 1,
    alignItems: 'center',
  },
  closeText: { color: Colors.primary, fontWeight: '800' },
});
