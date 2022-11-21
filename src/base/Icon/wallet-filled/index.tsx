import React from 'react';
import type { Icon } from '../type';
import WalletFilledIcon from './wallet-filled.svg';

export const WalletFilled = (props: Icon) => (
  <WalletFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
