import React from 'react';
import type { Icon } from '../type';
import ChevronArrowDownwardCircleFilledIcon from './chevron-arrow-downward-circle-filled.svg';

export const ChevronArrowDownwardCircleFilled = (props: Icon) => (
  <ChevronArrowDownwardCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
