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
          onRefresh={savingJournal(setParams)}
        />
      }
    >
      <TextInput
        style={styles.input}
        placeholder="tulis note."
        placeholderTextColor={styles.placeholder.color}
        multiline={true}
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
          disabled={getParam('saving')}
          title="save"
          onPress={savingJournal(setParams)}
        />
      ),
  };
};

function hasRefreshControlSupport() {
  return ['ios', 'android'].includes(Platform.OS);
}

function savingJournal(
  setParams: (newParams: Partial<Partial<AnuState>>) => boolean,
): () => void {
  return () => {
    setParams({ saving: true });
    setTimeout(() => setParams({ saving: false }), 2000);
  };
}

export default anu;
