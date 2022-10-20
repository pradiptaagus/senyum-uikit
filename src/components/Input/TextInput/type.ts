import type {
  TextProps,
  TextStyle,
  ViewStyle,
  TextInputProps,
  StyleProp,
} from 'react-native';
import type { Icon } from '../../../base/Icon';
import type { HighlightType } from '../type';

export type TextInputIconProps = {
  icon: keyof typeof Icon;
};

export type InputProps = Omit<TextInputProps, 'style'> & {
  type?: 'small' | 'medium';
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  borderType?: HighlightType;
  inputContainerStyle?: StyleProp<ViewStyle>;
  disabledInputContainerStyle?: StyleProp<ViewStyle>;
  focusedInputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  labelProps?: TextProps;
  labelStyle?: StyleProp<TextStyle>;
  testID?: string;
  icon?: keyof typeof Icon;
};
