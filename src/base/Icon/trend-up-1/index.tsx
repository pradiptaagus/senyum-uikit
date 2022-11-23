import React from 'react';
import type { Icon } from '../type';
import TrendUp1Icon from './trend-up-1.svg';
  
  export const TrendUp1 = (props: Icon) => (
    <TrendUp1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);