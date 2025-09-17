import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NotesProvider } from './src/store/NotesContext';
import { Colors } from './src/theme/colors';
import NotesListScreenWithPinned from './src/screens/NotesListScreen.withPinned';
import NoteEditorScreen from './src/screens/NoteEditorScreen';
import NoteViewerScreen from './src/screens/NoteViewerScreen';
import FolderManagerScreen from './src/screens/FolderManagerScreen';
import { Note } from './src/types';

type Route =
  | { name: 'home' }
  | { name: 'create' }
  | { name: 'edit'; note: Note }
  | { name: 'view'; note: Note }
  | { name: 'folders' };

function Router() {
  const [route, setRoute] = React.useState<Route>({ name: 'home' });

  switch (route.name) {
    case 'home':
      return (
        <NotesListScreenWithPinned
          onCreate={() => setRoute({ name: 'create' })}
          onOpen={(note) => setRoute({ name: 'view', note })}
          onManageFolders={() => setRoute({ name: 'folders' })}
        />
      );
    case 'create':
      return <NoteEditorScreen onClose={() => setRoute({ name: 'home' })} />;
    case 'edit':
      return <NoteEditorScreen note={route.note} onClose={() => setRoute({ name: 'home' })} />;
    case 'view':
      return (
        <NoteViewerScreen
          note={route.note}
          onEdit={(note) => setRoute({ name: 'edit', note })}
          onBack={() => setRoute({ name: 'home' })}
        />
      );
    case 'folders':
      return <FolderManagerScreen onBack={() => setRoute({ name: 'home' })} />;
    default:
      return null;
  }
}

export default function AppWithPinnedList() {
  return (
    <NotesProvider>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Router />
      </View>
    </NotesProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
});
