import React from 'react';
import type { Icon } from '../type';
import ArrowDownLeftIcon from './arrow-down-left.svg';

export const ArrowDownLeft = (props: Icon) => (
  <ArrowDownLeftIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
