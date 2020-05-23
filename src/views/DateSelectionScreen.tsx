import React from 'react';
import { Button, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const anu: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Agenda
        renderEmptyDate={() => <View />}
        renderItem={(item, firstItemInDay) => <View />}
        rowHasChanged={(r1, r2) => {
          return r1 !== r2;
        }}
        markingType="simple"
        futureScrollRange={0}
      />
    </View>
  );
};
anu.navigationOptions = {
  headerRight: () => <Button title="sync" onPress={() => {}} disabled={true} />,
};
export default anu;
