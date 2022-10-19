import React from 'react';
import type { Icon } from '../type';
import ArrowForwardIcon from './arrow-forward.svg';

export const ArrowForward = (props: Icon) => (
  <ArrowForwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
