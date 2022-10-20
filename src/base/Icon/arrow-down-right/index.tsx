import React from 'react';
import type { Icon } from '../type';
import ArrowDownRightIcon from './arrow-down-right.svg';

export const ArrowDownRight = (props: Icon) => (
  <ArrowDownRightIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
