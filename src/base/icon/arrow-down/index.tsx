import React from 'react';
import type { Icon } from '../type';
import ArrowDownIcon from './arrow-down.svg';

export const ArrowDown = (props: Icon) => (
  <ArrowDownIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
