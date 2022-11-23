import React from 'react';
import type { Icon } from '../type';
import MinusTimeFilledIcon from './minus-time-filled.svg';

export const MinusTimeFilled = (props: Icon) => (
  <MinusTimeFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
