import React from 'react';
import type { Icon } from '../type';
import TrendDown2Icon from './trend-down-2.svg';
  
  export const TrendDown2 = (props: Icon) => (
    <TrendDown2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);