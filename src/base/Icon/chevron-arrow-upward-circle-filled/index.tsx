import React from 'react';
import type { Icon } from '../type';
import ChevronArrowUpwardCircleFilledIcon from './chevron-arrow-upward-circle-filled.svg';

export const ChevronArrowUpwardCircleFilled = (props: Icon) => (
  <ChevronArrowUpwardCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
