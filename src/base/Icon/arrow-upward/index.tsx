import React from 'react';
import type { Icon } from '../type';
import ArrowUpwardIcon from './arrow-upward.svg';

export const ArrowUpward = (props: Icon) => (
  <ArrowUpwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
