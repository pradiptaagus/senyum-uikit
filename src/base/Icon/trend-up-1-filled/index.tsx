import React from 'react';
import type { Icon } from '../type';
import TrendUp1FilledIcon from './trend-up-1-filled.svg';

export const TrendUp1Filled = (props: Icon) => (
  <TrendUp1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
