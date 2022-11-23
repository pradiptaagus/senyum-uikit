import React from 'react';
import type { Icon } from '../type';
import ChevronArrowForwardCircleIcon from './chevron-arrow-forward-circle.svg';

export const ChevronArrowForwardCircle = (props: Icon) => (
  <ChevronArrowForwardCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
