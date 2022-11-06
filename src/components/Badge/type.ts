import type { StyleProp, ViewStyle } from 'react-native';

export type BadgeProps = {
  type: 'success' | 'warning' | 'error';
  text: string;
  numberOfLines?: number;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
};
