import React from 'react';
import type { Icon } from '../type';
import ChevronArrowForwardCircleFilledIcon from './chevron-arrow-forward-circle-filled.svg';

export const ChevronArrowForwardCircleFilled = (props: Icon) => (
  <ChevronArrowForwardCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
