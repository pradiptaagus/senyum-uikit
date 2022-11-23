import React from 'react';
import type { Icon } from '../type';
import TrendDown1FilledIcon from './trend-down-1-filled.svg';

export const TrendDown1Filled = (props: Icon) => (
  <TrendDown1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
