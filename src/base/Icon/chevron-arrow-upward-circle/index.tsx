import React from 'react';
import type { Icon } from '../type';
import ChevronArrowUpwardCircleIcon from './chevron-arrow-upward-circle.svg';

export const ChevronArrowUpwardCircle = (props: Icon) => (
  <ChevronArrowUpwardCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
