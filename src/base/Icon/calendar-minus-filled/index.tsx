import React from 'react';
import type { Icon } from '../type';
import CalendarMinusFilledIcon from './calendar-minus-filled.svg';

export const CalendarMinusFilled = (props: Icon) => (
  <CalendarMinusFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
