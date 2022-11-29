import React from 'react';
import type { Icon } from '../type';
import CreditCard1FilledIcon from './credit-card-1-filled.svg';

export const CreditCard1Filled = (props: Icon) => (
  <CreditCard1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
