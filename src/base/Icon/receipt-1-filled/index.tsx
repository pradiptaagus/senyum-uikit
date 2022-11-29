import React from 'react';
import type { Icon } from '../type';
import Receipt1FilledIcon from './receipt-1-filled.svg';

export const Receipt1Filled = (props: Icon) => (
  <Receipt1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
