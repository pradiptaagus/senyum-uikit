import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type DropdownStatus = 'success' | 'warning' | 'error';

export type DropdownProps = {
  value?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  status?: DropdownStatus;
  inputContainerStyle?: StyleProp<ViewStyle>;
  disabledInputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  testID?: string;
  onPress?: () => void;
};
