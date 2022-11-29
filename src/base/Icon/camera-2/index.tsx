import React from 'react';
import type { Icon } from '../type';
import Camera2Icon from './camera-2.svg';

export const Camera2 = (props: Icon) => (
  <Camera2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
