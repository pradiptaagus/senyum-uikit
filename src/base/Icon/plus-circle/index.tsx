import React from 'react';
import type { Icon } from '../type';
import PlusCircleIcon from './plus-circle.svg';

export const PlusCircle = (props: Icon) => (
  <PlusCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
