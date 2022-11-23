import React from 'react';
import type { Icon } from '../type';
import Camera3FilledIcon from './camera-3-filled.svg';

export const Camera3Filled = (props: Icon) => (
  <Camera3FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
