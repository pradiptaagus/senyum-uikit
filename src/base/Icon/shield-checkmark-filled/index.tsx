import React from 'react';
import type { Icon } from '../type';
import ShieldCheckmarkFilledIcon from './shield-checkmark-filled.svg';

export const ShieldCheckmarkFilled = (props: Icon) => (
  <ShieldCheckmarkFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
