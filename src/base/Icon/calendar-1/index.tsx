import React from 'react';
import type { Icon } from '../type';
import Calendar1Icon from './calendar-1.svg';

export const Calendar1 = (props: Icon) => (
  <Calendar1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
