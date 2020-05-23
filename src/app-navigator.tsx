import { createStackNavigator } from 'react-navigation-stack';
import DateSelectionScreen from './views/DateSelectionScreen';
import { DetailsScreen } from './views/details';
import WritingScreen from './views/WritingScreen';

const AppNavigator = createStackNavigator(
  {
    WritingScreen,
    DateSelectionScreen,
    Details: {
      screen: DetailsScreen,
      navigationOptions: { title: 'Details' },
    },
  },
  {
    initialRouteName: 'WritingScreen',
  },
);

export default AppNavigator;
