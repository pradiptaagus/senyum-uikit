import React from 'react';
import type { Icon } from '../type';
import ArrowUpCircleFilledIcon from './arrow-up-circle-filled.svg';

export const ArrowUpCircleFilled = (props: Icon) => (
  <ArrowUpCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
