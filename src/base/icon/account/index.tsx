import React from 'react';
import type { Icon } from '../type';
import AccountIcon from './account.svg';

export const Account = (props: Icon) => (
  <AccountIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
