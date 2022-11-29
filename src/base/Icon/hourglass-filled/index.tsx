import React from 'react';
import type { Icon } from '../type';
import HourglassFilledIcon from './hourglass-filled.svg';

export const HourglassFilled = (props: Icon) => (
  <HourglassFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
