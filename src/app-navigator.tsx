import { createStackNavigator } from 'react-navigation-stack';
import DateSelectionScreen from './views/DateSelectionScreen';
import WritingScreen from './views/WritingScreen';

const AppNavigator = createStackNavigator(
  {
    WritingScreen,
    DateSelectionScreen,
  },
  {
    initialRouteName: 'WritingScreen',
  },
);

export default AppNavigator;
