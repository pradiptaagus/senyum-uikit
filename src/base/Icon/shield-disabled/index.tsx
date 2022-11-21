import React from 'react';
import type { Icon } from '../type';
import ShieldDisabledIcon from './shield-disabled.svg';
  
  export const ShieldDisabled = (props: Icon) => (
    <ShieldDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);