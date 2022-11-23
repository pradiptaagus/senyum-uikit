import React from 'react';
import type { Icon } from '../type';
import LockDisabledIcon from './lock-disabled.svg';

export const LockDisabled = (props: Icon) => (
  <LockDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
