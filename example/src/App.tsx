import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import Button from './screens/Button';
import Home from './screens/Home';
import Icon from './screens/Icon';
import TextInput from './screens/TextInput';
import Dropdown from './screens/Dropdown';
import Checkbox from './screens/Checkbox';
import Radio from './screens/Radio';
import Dialog from './screens/Dialog';
import PINInput from './screens/PINInput';
import Appbar from './screens/Appbar';
import Datepicker from './screens/Datepicker';
import Badge from './screens/Badge';
import { Provider, DefaultTheme } from 'senyum-uikit';

export type RootStackParamList = {
  Home: undefined;
  Button: undefined;
  Checkbox: undefined;
  Icon: undefined;
  TextInput: undefined;
  Dropdown: undefined;
  Radio: undefined;
  Dialog: undefined;
  PINInput: undefined;
  Appbar: undefined;
  Datepicker: undefined;
  Badge: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeScreenProps = RootStackScreenProps<'Home'>;
export type AppbarScreenProps = RootStackScreenProps<'Appbar'>;

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Button" component={Button} />
          <Stack.Screen name="Checkbox" component={Checkbox} />
          <Stack.Screen name="Icon" component={Icon} />
          <Stack.Screen name="TextInput" component={TextInput} />
          <Stack.Screen name="Dropdown" component={Dropdown} />
          <Stack.Screen name="Radio" component={Radio} />
          <Stack.Screen name="Dialog" component={Dialog} />
          <Stack.Screen name="PINInput" component={PINInput} />
          <Stack.Screen
            name="Appbar"
            component={Appbar}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Datepicker" component={Datepicker} />
          <Stack.Screen name="Badge" component={Badge} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
