import React from 'react';
import type { Icon } from '../type';
import WallIcon from './wall.svg';
  
  export const Wall = (props: Icon) => (
    <WallIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);