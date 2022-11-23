import React from 'react';
import type { Icon } from '../type';
import Headphone1FilledIcon from './headphone-1-filled.svg';

export const Headphone1Filled = (props: Icon) => (
  <Headphone1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
