import React from 'react';
import type { Icon } from '../type';
import LaunchIcon from './launch.svg';

export const Launch = (props: Icon) => (
  <LaunchIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
