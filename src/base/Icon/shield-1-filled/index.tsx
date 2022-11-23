import React from 'react';
import type { Icon } from '../type';
import Shield1FilledIcon from './shield-1-filled.svg';

export const Shield1Filled = (props: Icon) => (
  <Shield1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
