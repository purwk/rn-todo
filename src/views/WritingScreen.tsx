import React from 'react';
import {
  Button,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const styles = StyleSheet.create({
  input: {
    height: 1000,
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'black',
    fontWeight: '500',
  },
  placeholder: { color: 'gray' },
});

type AnuState = {
  autosave: boolean;
  saving: boolean;
  journalEntry: string;
  savedEntryHash: number;
};
const anu: NavigationStackScreenComponent<Partial<AnuState>> = ({
  navigation,
}) => {
  const [setParams, getParam] = [navigation.setParams, navigation.getParam];
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={!!getParam('saving')}
          enabled={!getParam('saving')}
          onRefresh={saveJournal(
            setParams,
            getParam('journalEntry'),
            getParam('savedEntryHash'),
          )}
        />
      }
    >
      <TextInput
        style={styles.input}
        placeholder="tulis note."
        placeholderTextColor={styles.placeholder.color}
        multiline={true}
        editable={!getParam('saving')}
        onChangeText={(text) => setParams({ journalEntry: text })}
        value={getParam('journalEntry')}
      />
    </ScrollView>
  );
};

anu.navigationOptions = ({ navigation }) => {
  const [setParams, getParam] = [navigation.setParams, navigation.getParam];
  return {
    title:
      !hasRefreshControlSupport() || getParam('autosave')
        ? 'what made you grateful today?'
        : 'pull ↓ to save, or toggle autosave →',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <Button
        title="date"
        onPress={() => navigation.navigate('DateSelectionScreen')}
      />
    ),
    headerRight: () =>
      hasRefreshControlSupport() ? (
        <Switch
          disabled={getParam('saving')}
          onValueChange={(nV) => setParams({ autosave: nV })}
          value={getParam('autosave')}
        />
      ) : (
        <Button
          disabled={!getParam('journalEntry') || getParam('saving')}
          title={
            hashCode(getParam('journalEntry') || '') ===
            getParam('savedEntryHash')
              ? 'saved!'
              : 'save'
          }
          onPress={saveJournal(
            setParams,
            getParam('journalEntry'),
            getParam('savedEntryHash'),
          )}
        />
      ),
  };
};

function hasRefreshControlSupport() {
  return ['ios', 'android'].includes(Platform.OS);
}

function saveJournal(
  setParams: (newParams: Partial<Partial<AnuState>>) => boolean,
  journalEntry: string | undefined,
  savedEntryHash: number | undefined,
): () => void {
  if (!journalEntry) {
    return () => {};
  }
  const newEntryHash = hashCode(journalEntry);
  if (newEntryHash === savedEntryHash) {
    return () => {};
  }
  return () => {
    setParams({ saving: true });
    // TODO: save somewhere
    setParams({ savedEntryHash: newEntryHash });
    setTimeout(() => setParams({ saving: false }), 2000);
  };
}

function hashCode(str: string): number {
  return Array.from(str).reduce(
    (s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
    0,
  );
}

export default anu;
