import React from 'react';
import type { Icon } from '../type';
import ChevronArrowBackwardCircleFilledIcon from './chevron-arrow-backward-circle-filled.svg';

export const ChevronArrowBackwardCircleFilled = (props: Icon) => (
  <ChevronArrowBackwardCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
