import React from 'react';
import { Button, Text, View } from 'react-native';
import { CalendarList, DateObject } from 'react-native-calendars';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const styles = {
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
};

type AnuState = {
  activeDate: DateObject;
};
const anu: NavigationStackScreenComponent<Partial<AnuState>> = ({
  navigation,
}) => {
  return (
    <View>
      <CalendarList
        maxDate={new Date()}
        pastScrollRange={2}
        futureScrollRange={0}
        horizontal
        pagingEnabled
        showScrollIndicator
        onDayPress={(activeDate) => {
          navigation.setParams({ activeDate });
        }}
      />
      <Text>
        {navigation.getParam('activeDate')
          ? `On ${navigation.getParam('activeDate')?.dateString} you wrote:`
          : 'Select a date'}
      </Text>
    </View>
  );
};
anu.navigationOptions = {
  headerRight: () => <Button title="sync" onPress={() => {}} />,
};
export default anu;
