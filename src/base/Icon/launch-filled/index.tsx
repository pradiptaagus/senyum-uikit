import React from 'react';
import type { Icon } from '../type';
import LaunchFilledIcon from './launch-filled.svg';

export const LaunchFilled = (props: Icon) => (
  <LaunchFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
