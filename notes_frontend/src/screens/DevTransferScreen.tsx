import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { exportAll, importAll } from '../utils/jsonTransfer';

// PUBLIC_INTERFACE
export default function DevTransferScreen({ onClose }: { onClose: () => void }) {
  /** Developer screen to export/import all notes as JSON for quick backups. */
  const [buffer, setBuffer] = useState('');

  const doExport = async () => {
    try {
      const json = await exportAll();
      setBuffer(json);
      Alert.alert('Exported', 'Data exported to text area. Copy as needed.');
    } catch (e) {
      Alert.alert('Export failed', String(e));
    }
  };

  const doImport = async () => {
    try {
      await importAll(buffer);
      Alert.alert('Imported', 'Data imported. Restart or navigate to refresh views.');
    } catch (e) {
      Alert.alert('Import failed', String(e));
    }
  };

  return (
    <View style={styles.container}>
      <AppBar title="Dev: Transfer" right={<Text style={styles.done} onPress={onClose}>Done</Text>} />
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity onPress={doExport} style={[styles.btn, styles.primary]}>
            <Text style={styles.btnPrimaryText}>Export</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={doImport} style={[styles.btn, styles.secondary]}>
            <Text style={styles.btnSecondaryText}>Import</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          multiline
          textAlignVertical="top"
          placeholder="Exported JSON will appear here, or paste JSON to import..."
          placeholderTextColor={Colors.textMuted}
          style={styles.textarea}
          value={buffer}
          onChangeText={setBuffer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md, flex: 1 },
  done: { color: Colors.primary, fontWeight: '800' },
  row: { flexDirection: 'row', gap: Spacing.sm },
  btn: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, borderRadius: Radii.lg, borderWidth: 1 },
  primary: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  btnPrimaryText: { color: '#fff', fontWeight: '800' },
  secondary: { backgroundColor: '#EFF6FF', borderColor: '#DBEAFE' },
  btnSecondaryText: { color: Colors.primary, fontWeight: '800' },
  textarea: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.lg,
    color: Colors.text,
  },
});
