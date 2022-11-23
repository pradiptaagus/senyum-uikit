import React from 'react';
import type { Icon } from '../type';
import MinusCircleIcon from './minus-circle.svg';

export const MinusCircle = (props: Icon) => (
  <MinusCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
