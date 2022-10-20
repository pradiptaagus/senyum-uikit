import React from 'react';
import type { Icon } from '../type';
import Edit2Icon from './edit-2.svg';

export const Edit2 = (props: Icon) => (
  <Edit2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
