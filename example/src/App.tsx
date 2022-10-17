import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import Button from './screens/Button';
import Home from './screens/Home';
import Icon from './screens/Icon';
import Checkbox from './screens/Checkbox';

export type RootStackParamList = {
  Home: undefined;
  Button: undefined;
  Checkbox: undefined;
  Icon: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="Checkbox" component={Checkbox} />
        <Stack.Screen name="Icon" component={Icon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
