import React from 'react';
import type { Icon } from '../type';
import CalendarNumber2FilledIcon from './calendar-number-2-filled.svg';

export const CalendarNumber2Filled = (props: Icon) => (
  <CalendarNumber2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
