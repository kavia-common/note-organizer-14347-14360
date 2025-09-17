import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Spacing } from '../theme/colors';
import { DevMenu } from '../components/DevMenu';
import { useNotes } from '../store/NotesContext';
import { seedDemoData } from '../utils/seed';
import { exportNotesToClipboard } from '../utils/export';

// PUBLIC_INTERFACE
export default function DeveloperScreen({ onBack }: { onBack?: () => void }) {
  /** Developer entrypoint that exposes a few quick actions via DevMenu. */
  const { notes, folders } = useNotes();
  const [status, setStatus] = useState<string>('');

  const items = [
    {
      key: 'seed',
      label: 'Seed demo data',
      onPress: async () => {
        await seedDemoData();
        setStatus('Seeded demo data');
      },
    },
    {
      key: 'export',
      label: 'Export to Clipboard',
      onPress: async () => {
        const ok = await exportNotesToClipboard({ notes, folders });
        setStatus(ok ? 'Exported to clipboard' : 'Export failed');
      },
    },
    {
      key: 'about',
      label: 'Show counts',
      onPress: () => {
        Alert.alert('Counts', `Notes: ${notes.length}\nFolders: ${folders.length}`);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <AppBar title="Developer" right={<DevMenu items={items} />} onAdd={onBack} />
      <View style={styles.content}>
        <Text style={styles.title}>Dev Utilities</Text>
        <Text style={styles.caption}>Use the ··· button to run quick actions.</Text>
        {status ? <Text style={styles.status}>{status}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  title: { fontSize: 18, fontWeight: '800', color: Colors.text },
  caption: { color: Colors.textMuted },
  status: { color: Colors.primary, fontWeight: '800', marginTop: Spacing.sm },
});
