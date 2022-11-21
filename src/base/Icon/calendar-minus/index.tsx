import React from 'react';
import type { Icon } from '../type';
import CalendarMinusIcon from './calendar-minus.svg';

export const CalendarMinus = (props: Icon) => (
  <CalendarMinusIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
