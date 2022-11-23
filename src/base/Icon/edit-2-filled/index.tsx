import React from 'react';
import type { Icon } from '../type';
import Edit2FilledIcon from './edit-2-filled.svg';

export const Edit2Filled = (props: Icon) => (
  <Edit2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
