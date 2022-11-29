import React from 'react';
import type { Icon } from '../type';
import CreditCard1Icon from './credit-card-1.svg';

export const CreditCard1 = (props: Icon) => (
  <CreditCard1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
