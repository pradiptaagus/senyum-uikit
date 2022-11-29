import React from 'react';
import type { Icon } from '../type';
import SafeDepositIcon from './safe-deposit.svg';

export const SafeDeposit = (props: Icon) => (
  <SafeDepositIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
