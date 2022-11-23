import React from 'react';
import type { Icon } from '../type';
import SafeDepositFilledIcon from './safe-deposit-filled.svg';

export const SafeDepositFilled = (props: Icon) => (
  <SafeDepositFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
