import React from 'react';
import type { Icon } from '../type';
import WarningCircleIcon from './warning-circle.svg';
  
  export const WarningCircle = (props: Icon) => (
    <WarningCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);