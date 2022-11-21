import React from 'react';
import type { Icon } from '../type';
import CheckCircleIcon from './check-circle.svg';

export const CheckCircle = (props: Icon) => (
  <CheckCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
