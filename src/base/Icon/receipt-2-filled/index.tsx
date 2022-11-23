import React from 'react';
import type { Icon } from '../type';
import Receipt2FilledIcon from './receipt-2-filled.svg';

export const Receipt2Filled = (props: Icon) => (
  <Receipt2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
