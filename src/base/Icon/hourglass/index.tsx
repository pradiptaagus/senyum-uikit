import React from 'react';
import type { Icon } from '../type';
import HourglassIcon from './hourglass.svg';

export const Hourglass = (props: Icon) => (
  <HourglassIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
