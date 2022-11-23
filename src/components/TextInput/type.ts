import type {
  TextStyle,
  ViewStyle,
  TextInputProps as InputProps,
  StyleProp,
} from 'react-native';
import type { Icon } from '../../base/Icon';

type TextInputStatus = 'success' | 'warning' | 'error';

export type TextInputIconProps = {
  icon: keyof typeof Icon;
};

export type TextInputProps = Omit<InputProps, 'style'> & {
  size?: 'sm' | 'md';
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  status?: TextInputStatus;
  inputContainerStyle?: StyleProp<ViewStyle>;
  disabledInputContainerStyle?: StyleProp<ViewStyle>;
  focusedInputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  testID?: string;
  icon?: keyof typeof Icon;
};
