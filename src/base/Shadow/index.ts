import type { ViewStyle } from 'react-native';

type T = {
  [x: number]: ViewStyle;
};

export const Shadow: T = {
  1: {
    shadowColor: '#707070',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
};
