import React from 'react';
import type { Icon } from '../type';
import Edit1FilledIcon from './edit-1-filled.svg';

export const Edit1Filled = (props: Icon) => (
  <Edit1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
