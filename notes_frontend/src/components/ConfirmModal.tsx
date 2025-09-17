import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  visible: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

// PUBLIC_INTERFACE
export default function ConfirmModal({
  visible,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: Props) {
  /** Basic confirmation modal with Ocean Professional styling. */
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onCancel}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          {message ? <Text style={styles.message}>{message}</Text> : null}
          <View style={styles.row}>
            <TouchableOpacity onPress={onCancel} style={[styles.btn, styles.secondary]}>
              <Text style={[styles.btnText, styles.secondaryText]}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={[styles.btn, styles.primary]}>
              <Text style={[styles.btnText, styles.primaryText]}>{confirmText}</Text>
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
    backgroundColor: 'rgba(17,24,39,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.xl,
    width: '100%',
    maxWidth: 420,
  },
  title: { fontSize: 18, fontWeight: '800', color: Colors.text },
  message: { color: Colors.text, opacity: 0.8, marginTop: Spacing.sm },
  row: { flexDirection: 'row', justifyContent: 'flex-end', gap: Spacing.sm, marginTop: Spacing.lg },
  btn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    borderWidth: 1,
  },
  secondary: { backgroundColor: '#EFF6FF', borderColor: '#DBEAFE' },
  secondaryText: { color: Colors.primary, fontWeight: '800' },
  primary: { backgroundColor: Colors.secondary, borderColor: Colors.secondary },
  primaryText: { color: Colors.text, fontWeight: '800' },
  btnText: { fontWeight: '700' },
});
