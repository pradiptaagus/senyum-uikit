import React from 'react';
import type { Icon } from '../type';
import ArrowDownwardIcon from './arrow-downward.svg';

export const ArrowDownward = (props: Icon) => (
  <ArrowDownwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
