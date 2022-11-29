import React from 'react';
import type { Icon } from '../type';
import Shield1Icon from './shield-1.svg';

export const Shield1 = (props: Icon) => (
  <Shield1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
