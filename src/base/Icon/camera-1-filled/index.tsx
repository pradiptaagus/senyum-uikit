import React from 'react';
import type { Icon } from '../type';
import Camera1FilledIcon from './camera-1-filled.svg';

export const Camera1Filled = (props: Icon) => (
  <Camera1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
