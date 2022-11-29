import React from 'react';
import type { Icon } from '../type';
import Headphone1Icon from './headphone-1.svg';

export const Headphone1 = (props: Icon) => (
  <Headphone1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
