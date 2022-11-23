import React from 'react';
import type { Icon } from '../type';
import AccountFilledIcon from './account-filled.svg';

export const AccountFilled = (props: Icon) => (
  <AccountFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
