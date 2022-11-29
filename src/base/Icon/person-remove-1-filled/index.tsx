import React from 'react';
import type { Icon } from '../type';
import PersonRemove1FilledIcon from './person-remove-1-filled.svg';

export const PersonRemove1Filled = (props: Icon) => (
  <PersonRemove1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
