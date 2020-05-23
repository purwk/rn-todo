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
  NavigationParams &
    Partial<{
      autosave: boolean;
    }>
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
      thumbColor={navigation.state.params?.autosave ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={() =>
        navigation.setParams({ autosave: !navigation.state.params?.autosave })
      }
      value={navigation.state.params?.autosave}
    />
  ),
});

export default anu;
