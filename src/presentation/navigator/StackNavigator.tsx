import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailScreen} from '../screens/detail/DetailScreen';
import {Place} from '../../domain/entities/place';

type DetailScreenParams = {
  place: Place;
};

export type RootStackParams = {
  Home: undefined;
  DetailScreen: DetailScreenParams;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        options={{headerTitle: 'Pronostico'}}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
