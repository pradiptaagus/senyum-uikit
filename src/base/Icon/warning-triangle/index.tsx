import React from 'react';
import type { Icon } from '../type';
import WarningTriangleIcon from './warning-triangle.svg';
  
  export const WarningTriangle = (props: Icon) => (
    <WarningTriangleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);