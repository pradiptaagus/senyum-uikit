import React from 'react';
import type { Icon } from '../type';
import Time2FilledIcon from './time-2-filled.svg';

export const Time2Filled = (props: Icon) => (
  <Time2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
