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
import Radio from './screens/Radio';
import Dialog from './screens/Dialog';

export type RootStackParamList = {
  Home: undefined;
  Button: undefined;
  Checkbox: undefined;
  Icon: undefined;
  Radio: undefined;
  Dialog: undefined;
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
        <Stack.Screen name="Radio" component={Radio} />
        <Stack.Screen name="Dialog" component={Dialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
