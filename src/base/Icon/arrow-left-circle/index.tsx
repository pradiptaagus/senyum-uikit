import React from 'react';
import type { Icon } from '../type';
import ArrowLeftCircleIcon from './arrow-left-circle.svg';

export const ArrowLeftCircle = (props: Icon) => (
  <ArrowLeftCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
