import React from 'react';
import type { Icon } from '../type';
import ArrowDownUpIcon from './arrow-down-up.svg';

export const ArrowDownUp = (props: Icon) => (
  <ArrowDownUpIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
