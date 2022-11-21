import React from 'react';
import type { Icon } from '../type';
import Headphone2FilledIcon from './headphone-2-filled.svg';

export const Headphone2Filled = (props: Icon) => (
  <Headphone2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
