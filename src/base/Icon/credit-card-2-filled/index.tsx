import React from 'react';
import type { Icon } from '../type';
import CreditCard2FilledIcon from './credit-card-2-filled.svg';

export const CreditCard2Filled = (props: Icon) => (
  <CreditCard2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
