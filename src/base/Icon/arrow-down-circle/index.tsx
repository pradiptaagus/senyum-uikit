import React from 'react';
import type { Icon } from '../type';
import ArrowDownCircleIcon from './arrow-down-circle.svg';

export const ArrowDownCircle = (props: Icon) => (
  <ArrowDownCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
