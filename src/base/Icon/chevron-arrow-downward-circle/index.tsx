import React from 'react';
import type { Icon } from '../type';
import ChevronArrowDownwardCircleIcon from './chevron-arrow-downward-circle.svg';

export const ChevronArrowDownwardCircle = (props: Icon) => (
  <ChevronArrowDownwardCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
