import React from 'react';
import type { Icon } from '../type';
import DollarIcon from './dollar.svg';

export const Dollar = (props: Icon) => (
  <DollarIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
