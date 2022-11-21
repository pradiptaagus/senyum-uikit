import React from 'react';
import type { Icon } from '../type';
import WalletIcon from './wallet.svg';
  
  export const Wallet = (props: Icon) => (
    <WalletIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);