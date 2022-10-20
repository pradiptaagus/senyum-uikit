import React from 'react';
import type { Icon } from '../type';
import ArrowBackwardIcon from './arrow-backward.svg';

export const ArrowBackward = (props: Icon) => (
  <ArrowBackwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
