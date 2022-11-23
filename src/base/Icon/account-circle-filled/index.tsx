import React from 'react';
import type { Icon } from '../type';
import AccountCircleFilledIcon from './account-circle-filled.svg';

export const AccountCircleFilled = (props: Icon) => (
  <AccountCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
