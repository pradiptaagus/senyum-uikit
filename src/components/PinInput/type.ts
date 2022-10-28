import type { StyleProp, ViewStyle } from 'react-native';

export type PinInputProps = {
  style?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
  length?: number;
  type?: 'outlined' | 'underlined';
  securedTextEntry?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  errorMessage?: string;
  initialValue?: string;
  onChangeText?: (text: string) => void;
  onComplete?: (text: string) => void;
};

export type PinInputFieldProps = {
  index: number;
  activeIndex: number;
  securedTextEntry?: boolean;
  type?: 'outlined' | 'underlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  value: string;
  onPress: () => void;
};
