import React from 'react';
import type { Icon } from '../type';
import Edit1Icon from './edit-1.svg';

export const Edit1 = (props: Icon) => (
  <Edit1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
