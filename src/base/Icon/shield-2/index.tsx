import React from 'react';
import type { Icon } from '../type';
import Shield2Icon from './shield-2.svg';

export const Shield2 = (props: Icon) => (
  <Shield2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
