import React from 'react';
import type { Icon } from '../type';
import LockFilledIcon from './lock-filled.svg';

export const LockFilled = (props: Icon) => (
  <LockFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
