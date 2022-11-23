import React from 'react';
import type { Icon } from '../type';
import CalendarCancelFilledIcon from './calendar-cancel-filled.svg';

export const CalendarCancelFilled = (props: Icon) => (
  <CalendarCancelFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
