import type { ModalBaseProps } from 'react-native';

export type TimepickerProps = {
  color?: string;
  animationType?: ModalBaseProps['animationType'];
  onTimeSet: (result: {
    hour: keyof typeof Hour;
    minute: keyof typeof Minute;
  }) => void;
};

export type TimepickerRef = {
  show: (params?: {
    hour: keyof typeof Hour;
    minute: keyof typeof Minute;
  }) => void;
};

export const Hour = {
  1: '01',
  2: '02',
  3: '03',
  4: '04',
  5: '05',
  6: '06',
  7: '07',
  8: '08',
  9: '09',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  21: '21',
  22: '22',
  23: '23',
  24: '00',
};

export interface HourSelectionProps {
  color?: string;
  selectedHour: keyof typeof Hour;
  setSelectedHour: (selectedHour: keyof typeof Hour) => void;
}

export interface HourOptionProps {
  hour: keyof typeof Hour;
  selectedHour?: keyof typeof Hour;
  size?: 'am' | 'pm';
  onPress?: (selectedHour: keyof typeof Hour) => void;
}

export interface HourClockWiseProps {
  color?: string;
  selectedHour: keyof typeof Hour;
}

export interface MinuteClockWiseProps {
  color?: string;
  selectedMinute: keyof typeof Minute;
}

export const Minute = {
  0: '00',
  5: '05',
  10: '10',
  15: '15',
  20: '20',
  25: '25',
  30: '30',
  35: '35',
  40: '40',
  45: '45',
  50: '50',
  55: '55',
};

export interface MinuteOptionProps {
  minute: keyof typeof Minute;
  selectedMinute?: keyof typeof Minute;
  onPress?: (selectedMinute: keyof typeof Minute) => void;
}

export interface MinuteSelectionProps {
  color?: string;
  selectedMinute: keyof typeof Minute;
  setSelectedMinute: (selectedMinute: keyof typeof Minute) => void;
}
