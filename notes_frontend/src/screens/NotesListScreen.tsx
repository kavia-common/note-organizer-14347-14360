import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import AppBar from '../components/AppBar';
import FAB from '../components/FAB';
import NoteCard from '../components/NoteCard';
import EmptyState from '../components/EmptyState';
import FolderPill from '../components/FolderPill';
import SearchBar from '../components/SearchBar';
import ConfirmModal from '../components/ConfirmModal';
import { Colors, Spacing } from '../theme/colors';
import { useNotes } from '../store/NotesContext';
import { Note } from '../types';
import { useDebouncedValue } from '../utils/useDebouncedValue';

type Props = {
  onCreate: () => void;
  onOpen: (note: Note) => void;
  onEdit?: (note: Note) => void;
  onManageFolders: () => void;
  onHelp?: () => void;
};

// PUBLIC_INTERFACE
export default function NotesListScreen({ onCreate, onOpen, onEdit, onManageFolders, onHelp }: Props) {
  /** Main list of notes with search, sorting, and folder filters. */
  const {
    notes,
    folders,
    selectedFolderId,
    setSelectedFolderId,
    togglePin,
    deleteNote,
    sortMode,
    setSortMode,
  } = useNotes();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 200);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const lower = debouncedQuery.trim().toLowerCase();
    return notes.filter((n) => {
      const matchesFolder = selectedFolderId ? n.folderId === selectedFolderId : true;
      if (!lower) return matchesFolder;
      return (
        matchesFolder &&
        ((n.title && n.title.toLowerCase().includes(lower)) ||
          (n.content && n.content.toLowerCase().includes(lower)))
      );
    });
  }, [notes, debouncedQuery, selectedFolderId]);

  return (
    <View style={styles.container} accessibilityLabel="Notes list screen">
      <AppBar
        title="Notes"
        onAdd={onCreate}
        right={
          <Text style={styles.brand} accessibilityLabel="Brand">
            Ocean Pro
          </Text>
        }
      />
      <View style={styles.content}>
        <SearchBar query={query} onChangeQuery={setQuery} sort={sortMode} onChangeSort={setSortMode} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.foldersRow}>
          <FolderPill
            folder={null}
            active={!selectedFolderId}
            onPress={() => setSelectedFolderId(null)}
            style={{ marginRight: Spacing.sm }}
          />
          {folders.map((f) => (
            <FolderPill
              key={f.id}
              folder={f}
              active={selectedFolderId === f.id}
              onPress={() => setSelectedFolderId(f.id)}
            />
          ))}
          <Text onPress={onManageFolders} style={styles.manageFolders} accessibilityRole="button">
            + Manage
          </Text>
          {onHelp ? (
            <Text onPress={onHelp} style={styles.helpLink} accessibilityRole="button">
              Help
            </Text>
          ) : null}
        </ScrollView>

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NoteCard
                note={item}
                onPress={() => onOpen(item)}
                onPin={() => togglePin(item.id)}
                onDelete={() => setPendingDeleteId(item.id)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </View>

      <ConfirmModal
        visible={!!pendingDeleteId}
        title="Delete note?"
        message="This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onCancel={() => setPendingDeleteId(null)}
        onConfirm={() => {
          if (pendingDeleteId) deleteNote(pendingDeleteId);
          setPendingDeleteId(null);
        }}
      />

      <FAB onPress={onCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, padding: Spacing.xl },
  brand: { color: Colors.primary, fontWeight: '800' },
  foldersRow: { marginBottom: Spacing.md },
  manageFolders: {
    marginLeft: Spacing.sm,
    color: Colors.secondary,
    fontWeight: '800',
    alignSelf: 'center',
  },
  helpLink: {
    marginLeft: Spacing.lg,
    color: Colors.primary,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
