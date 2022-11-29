import React from 'react';
import type { Icon } from '../type';
import LockOpenIcon from './lock-open.svg';

export const LockOpen = (props: Icon) => (
  <LockOpenIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
