import React from 'react';
import type { Icon } from '../type';
import PersonAdd1FilledIcon from './person-add-1-filled.svg';

export const PersonAdd1Filled = (props: Icon) => (
  <PersonAdd1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
