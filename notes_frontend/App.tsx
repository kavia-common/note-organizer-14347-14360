import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NotesProvider, useNotes } from './src/store/NotesContext';
import { Colors } from './src/theme/colors';
import { NotesListScreen, NoteEditorScreen, NoteViewerScreen, FolderManagerScreen, HelpScreen, AboutScreen } from './src/screens';
import type { Route } from './src/navigation';
import { Note } from './src/types';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { isOnboardingComplete, setOnboardingComplete } from './src/services/onboarding';

function Router() {
  const { loading } = useNotes();
  const [route, setRoute] = useState<Route>({ name: 'home' });
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const done = await isOnboardingComplete();
      setShowOnboarding(!done);
    })();
  }, []);

  const screen = useMemo(() => {
    if (loading) return <View style={{ flex: 1 }} />;

    if (showOnboarding) {
      return (
        <OnboardingScreen
          onContinue={async () => {
            await setOnboardingComplete();
            setShowOnboarding(false);
          }}
        />
      );
    }

    switch (route.name) {
      case 'home':
        return (
          <NotesListScreen
            onCreate={() => setRoute({ name: 'create' })}
            onOpen={(note) => setRoute({ name: 'view', note })}
            onManageFolders={() => setRoute({ name: 'folders' })}
            onHelp={() => setRoute({ name: 'help' })}
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
            onEdit={(note: Note) => setRoute({ name: 'edit', note })}
          />
        );
      case 'folders':
        return <FolderManagerScreen onBack={() => setRoute({ name: 'home' })} />;
      case 'help':
        return (
          <HelpScreen
            onClose={() => setRoute({ name: 'home' })}
            onAbout={() => setRoute({ name: 'about' })}
          />
        );
      case 'about':
        return <AboutScreen onClose={() => setRoute({ name: 'home' })} />;
      default:
        return null;
    }
  }, [route, loading, showOnboarding]);

  return <View style={styles.container}>{screen}</View>;
}

export default function App() {
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
