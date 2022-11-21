import React from 'react';
import type { Icon } from '../type';
import ChevronRightCircleIcon from './chevron-right-circle.svg';

export const ChevronRightCircle = (props: Icon) => (
  <ChevronRightCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
