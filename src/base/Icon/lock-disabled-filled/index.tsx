import React from 'react';
import type { Icon } from '../type';
import LockDisabledFilledIcon from './lock-disabled-filled.svg';

export const LockDisabledFilled = (props: Icon) => (
  <LockDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
