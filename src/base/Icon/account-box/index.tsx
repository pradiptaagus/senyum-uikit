import React from 'react';
import type { Icon } from '../type';
import AccountBoxIcon from './account-box.svg';

export const AccountBox = (props: Icon) => (
  <AccountBoxIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
