import React from 'react';
import type { Icon } from '../type';
import CalendarPlusIcon from './calendar-plus.svg';

export const CalendarPlus = (props: Icon) => (
  <CalendarPlusIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
