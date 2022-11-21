import React from 'react';
import type { Icon } from '../type';
import ChevronArrowUpCircleIcon from './chevron-arrow-up-circle.svg';

export const ChevronArrowUpCircle = (props: Icon) => (
  <ChevronArrowUpCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
