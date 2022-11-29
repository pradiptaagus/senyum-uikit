import React from 'react';
import type { Icon } from '../type';
import BankFilledIcon from './bank-filled.svg';

export const BankFilled = (props: Icon) => (
  <BankFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
