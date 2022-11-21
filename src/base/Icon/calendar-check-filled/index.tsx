import React from 'react';
import type { Icon } from '../type';
import CalendarCheckFilledIcon from './calendar-check-filled.svg';

export const CalendarCheckFilled = (props: Icon) => (
  <CalendarCheckFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
