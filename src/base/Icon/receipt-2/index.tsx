import React from 'react';
import type { Icon } from '../type';
import Receipt2Icon from './receipt-2.svg';
  
  export const Receipt2 = (props: Icon) => (
    <Receipt2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);