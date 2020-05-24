import React from 'react';
import { Button, StyleSheet, Switch, TextInput, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const styles = StyleSheet.create({
  input: {
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
};
const anu: NavigationStackScreenComponent<Partial<AnuState>> = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="tulis note."
        placeholderTextColor={styles.placeholder.color}
        multiline={true}
      />
    </View>
  );
};

anu.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('autosave')
    ? 'what made you grateful today?'
    : 'swipe ↓ to save, or toggle autosave →',
  headerTitleAlign: 'center',
  headerLeft: () => (
    // <TouchableOpacity />
    <Button
      title="date"
      onPress={() => navigation.navigate('DateSelectionScreen')}
    />
  ),
  headerRight: () => (
    <Switch
      thumbColor={navigation.getParam('autosave') ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={(nV) => navigation.setParams({ autosave: nV })}
      value={navigation.getParam('autosave')}
    />
  ),
});

export default anu;
