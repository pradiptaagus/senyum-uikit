import React from 'react';
import type { Icon } from '../type';
import ChevronArrowDownCircleIcon from './chevron-arrow-down-circle.svg';

export const ChevronArrowDownCircle = (props: Icon) => (
  <ChevronArrowDownCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
