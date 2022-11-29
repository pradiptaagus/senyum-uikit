import React from 'react';
import type { Icon } from '../type';
import ShieldCheckmarkIcon from './shield-checkmark.svg';

export const ShieldCheckmark = (props: Icon) => (
  <ShieldCheckmarkIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
