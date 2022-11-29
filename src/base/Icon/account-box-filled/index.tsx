import React from 'react';
import type { Icon } from '../type';
import AccountBoxFilledIcon from './account-box-filled.svg';

export const AccountBoxFilled = (props: Icon) => (
  <AccountBoxFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
