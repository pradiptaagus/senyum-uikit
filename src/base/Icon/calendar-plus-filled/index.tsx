import React from 'react';
import type { Icon } from '../type';
import CalendarPlusFilledIcon from './calendar-plus-filled.svg';

export const CalendarPlusFilled = (props: Icon) => (
  <CalendarPlusFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
