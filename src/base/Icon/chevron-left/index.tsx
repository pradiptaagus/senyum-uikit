import React from 'react';
import type { Icon } from '../type';
import ChevronLeftIcon from './chevron-left.svg';

export const ChevronLeft = (props: Icon) => (
  <ChevronLeftIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
