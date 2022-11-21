import React from 'react';
import type { Icon } from '../type';
import ChevronLeftCircleIcon from './chevron-left-circle.svg';

export const ChevronLeftCircle = (props: Icon) => (
  <ChevronLeftCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
