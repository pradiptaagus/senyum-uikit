import React from 'react';
import type { Icon } from '../type';
import ChevronRightIcon from './chevron-right.svg';

export const ChevronRight = (props: Icon) => (
  <ChevronRightIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
