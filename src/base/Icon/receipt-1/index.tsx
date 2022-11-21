import React from 'react';
import type { Icon } from '../type';
import Receipt1Icon from './receipt-1.svg';
  
  export const Receipt1 = (props: Icon) => (
    <Receipt1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);