import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type BadgeProps = {
  variant: 'success' | 'warning' | 'error';
  children: ReactNode;
  numberOfLines?: number;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
  testID?: string;
};
