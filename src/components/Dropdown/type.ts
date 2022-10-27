import type { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

export type BorderType = 'success' | 'warning' | 'error';

export type DropdownProps = {
  value?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  borderType?: BorderType;
  inputContainerStyle?: StyleProp<ViewStyle>;
  disabledInputContainerStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label: string;
  labelProps?: TextProps;
  labelStyle?: StyleProp<TextStyle>;
  testID?: string;
  onPress?: () => void;
};
