import React from 'react';
import type { Icon } from '../type';
import Calendar2FilledIcon from './calendar-2-filled.svg';

export const Calendar2Filled = (props: Icon) => (
  <Calendar2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
