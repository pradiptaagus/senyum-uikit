import React from 'react';
import type { Icon } from '../type';
import ArrowUpIcon from './arrow-up.svg';

export const ArrowUp = (props: Icon) => (
  <ArrowUpIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
