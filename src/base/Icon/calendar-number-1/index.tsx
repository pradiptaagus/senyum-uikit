import React from 'react';
import type { Icon } from '../type';
import CalendarNumber1Icon from './calendar-number-1.svg';

export const CalendarNumber1 = (props: Icon) => (
  <CalendarNumber1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
