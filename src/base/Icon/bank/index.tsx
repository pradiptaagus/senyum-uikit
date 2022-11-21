import React from 'react';
import type { Icon } from '../type';
import BankIcon from './bank.svg';

export const Bank = (props: Icon) => (
  <BankIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
