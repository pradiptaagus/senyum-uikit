import React from 'react';
import type { Icon } from '../type';
import Glasses1FilledIcon from './glasses-1-filled.svg';

export const Glasses1Filled = (props: Icon) => (
  <Glasses1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
