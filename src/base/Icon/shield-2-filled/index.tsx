import React from 'react';
import type { Icon } from '../type';
import Shield2FilledIcon from './shield-2-filled.svg';

export const Shield2Filled = (props: Icon) => (
  <Shield2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
