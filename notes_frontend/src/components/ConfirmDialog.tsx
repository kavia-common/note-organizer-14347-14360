import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  visible: boolean;
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

// PUBLIC_INTERFACE
export default function ConfirmDialog({
  visible,
  title = 'Confirm',
  message = 'Are you sure you want to continue?',
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: Props) {
  /** Minimal confirm dialog consistent with the Ocean theme. */
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={onCancel} style={styles.secondaryBtn}>
              <Text style={styles.secondaryText}>{cancelLabel}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.dangerBtn}>
              <Text style={styles.dangerText}>{confirmLabel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  title: { fontSize: 18, fontWeight: '800', color: Colors.text },
  message: { marginTop: 8, color: Colors.textMuted },
  row: { marginTop: Spacing.lg, flexDirection: 'row', justifyContent: 'flex-end', gap: Spacing.sm },
  secondaryBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  secondaryText: { color: Colors.primary, fontWeight: '800' },
  dangerBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  dangerText: { color: '#B91C1C', fontWeight: '800' },
});
