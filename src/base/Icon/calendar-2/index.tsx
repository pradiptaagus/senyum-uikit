import React from 'react';
import type { Icon } from '../type';
import Calendar2Icon from './calendar-2.svg';

export const Calendar2 = (props: Icon) => (
  <Calendar2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
