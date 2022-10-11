import React from 'react';
import type { Icon } from '../type';
import AccountCircleIcon from './account-circle.svg';

export const AccountCircle = (props: Icon) => (
  <AccountCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
