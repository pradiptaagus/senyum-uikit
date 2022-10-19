import type { TextProps, TextStyle, ViewStyle, TextInputProps } from "react-native";
import type { Icon } from '../../base/icon';

export type BorderType = 'success' | 'warning' | 'error';

export type InputProps = Omit<TextInputProps, 'style'> & {
  type?: 'small' | 'medium',
  containerStyle?: ViewStyle;
  disabled?: boolean;
  disabledInputStyle?: TextStyle;
  borderType?: BorderType;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  label?: string;
  labelProps?: TextProps;
  labelStyle?: TextStyle;
  testID?: string;
  icon?: keyof typeof Icon;
  onChangeText?: (text: string) => void;
}

export type TextInputIconProps = {
  icon: keyof typeof Icon;
}
