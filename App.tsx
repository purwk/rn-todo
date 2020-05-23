import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/app-navigator';
import { createAppContainer } from 'react-navigation';

export default createAppContainer(AppNavigator);
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
