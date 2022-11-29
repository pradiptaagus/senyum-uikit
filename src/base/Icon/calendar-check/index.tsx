import React from 'react';
import type { Icon } from '../type';
import CalendarCheckIcon from './calendar-check.svg';

export const CalendarCheck = (props: Icon) => (
  <CalendarCheckIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
