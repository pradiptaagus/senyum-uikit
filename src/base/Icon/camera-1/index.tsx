import React from 'react';
import type { Icon } from '../type';
import Camera1Icon from './camera-1.svg';

export const Camera1 = (props: Icon) => (
  <Camera1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
