import React from 'react';
import type { Icon } from '../type';
import CreditCard2Icon from './credit-card-2.svg';

export const CreditCard2 = (props: Icon) => (
  <CreditCard2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
