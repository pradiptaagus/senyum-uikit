import React from 'react';
import type { Icon } from '../type';
import ArrowDownCircleFilledIcon from './arrow-down-circle-filled.svg';

export const ArrowDownCircleFilled = (props: Icon) => (
  <ArrowDownCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
