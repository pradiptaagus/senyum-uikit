import React from 'react';
import type { Icon } from '../type';
import LockIcon from './lock.svg';

export const Lock = (props: Icon) => (
  <LockIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
