import React from 'react';
import type { Icon } from '../type';
import LoanIcon from './loan.svg';

export const Loan = (props: Icon) => (
  <LoanIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
