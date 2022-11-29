import React from 'react';
import type { Icon } from '../type';
import Camera3Icon from './camera-3.svg';

export const Camera3 = (props: Icon) => (
  <Camera3Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
