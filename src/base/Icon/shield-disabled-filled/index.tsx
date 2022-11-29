import React from 'react';
import type { Icon } from '../type';
import ShieldDisabledFilledIcon from './shield-disabled-filled.svg';

export const ShieldDisabledFilled = (props: Icon) => (
  <ShieldDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
