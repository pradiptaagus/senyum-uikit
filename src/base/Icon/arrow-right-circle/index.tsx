import React from 'react';
import type { Icon } from '../type';
import ArrowRightCircleIcon from './arrow-right-circle.svg';

export const ArrowRightCircle = (props: Icon) => (
  <ArrowRightCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
