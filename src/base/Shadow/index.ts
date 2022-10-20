import type { ViewStyle } from 'react-native';

type T = {
  [x: number]: ViewStyle;
};

export const Shadow: T = {
  1: {
    shadowColor: '#707070',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10,
  },
  2: {
    shadowColor: '#707070',
    shadowOpacity: 0.25,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10,
  },
  3: {
    shadowColor: '#D6D6D6',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
};
