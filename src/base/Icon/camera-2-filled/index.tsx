import React from 'react';
import type { Icon } from '../type';
import Camera2FilledIcon from './camera-2-filled.svg';

export const Camera2Filled = (props: Icon) => (
  <Camera2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
