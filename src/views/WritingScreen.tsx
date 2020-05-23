import React from 'react';
import { Button, StyleSheet, Switch, TextInput, View } from 'react-native';
import { NavigationParams } from 'react-navigation';
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

const anu: NavigationStackScreenComponent<
  NavigationParams & {
    autosave: boolean;
  }
> = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="tulais note."
        placeholderTextColor={styles.placeholder.color}
        multiline={true}
      />
    </View>
  );
};

anu.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params?.autosave
    ? 'gimana hari ini?'
    : 'swipe ↓ to save, or toggle autosave →',
  headerTitleAlign: 'center',
  headerLeft: () => (
    <Button
      title="date"
      onPress={() => navigation.navigate('DateSelectionScreen')}
    />
  ),
  headerRight: () => (
    <Switch
      thumbColor={navigation.state.params?.autosave ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={(prev) => navigation.setParams({ autosave: !prev })}
      value={navigation.state.params?.autosave}
    />
  ),
});

export default anu;
