import React from 'react';
import type { Icon } from '../type';
import SecurityIcon from './security.svg';
  
  export const Security = (props: Icon) => (
    <SecurityIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);