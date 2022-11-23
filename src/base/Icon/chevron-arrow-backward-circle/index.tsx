import React from 'react';
import type { Icon } from '../type';
import ChevronArrowBackwardCircleIcon from './chevron-arrow-backward-circle.svg';

export const ChevronArrowBackwardCircle = (props: Icon) => (
  <ChevronArrowBackwardCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
