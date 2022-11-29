import React from 'react';
import type { Icon } from '../type';
import ChevronArrowDownCircleFilledIcon from './chevron-arrow-down-circle-filled.svg';

export const ChevronArrowDownCircleFilled = (props: Icon) => (
  <ChevronArrowDownCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
