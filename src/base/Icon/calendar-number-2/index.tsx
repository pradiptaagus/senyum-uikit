import React from 'react';
import type { Icon } from '../type';
import CalendarNumber2Icon from './calendar-number-2.svg';

export const CalendarNumber2 = (props: Icon) => (
  <CalendarNumber2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
