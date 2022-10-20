import React from 'react';
import type { Icon } from '../type';
import ArrowUpLeftIcon from './arrow-up-left.svg';

export const ArrowUpLeft = (props: Icon) => (
  <ArrowUpLeftIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
