import React from 'react';
import type { Icon } from '../type';
import LoanFilledIcon from './loan-filled.svg';

export const LoanFilled = (props: Icon) => (
  <LoanFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
