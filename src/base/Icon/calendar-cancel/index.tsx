import React from 'react';
import type { Icon } from '../type';
import CalendarCancelIcon from './calendar-cancel.svg';

export const CalendarCancel = (props: Icon) => (
  <CalendarCancelIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
