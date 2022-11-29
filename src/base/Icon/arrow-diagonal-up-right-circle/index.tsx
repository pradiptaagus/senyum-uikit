import React from 'react';
import type { Icon } from '../type';
import ArrowDiagonalUpRightCircleIcon from './arrow-diagonal-up-right-circle.svg';

export const ArrowDiagonalUpRightCircle = (props: Icon) => (
  <ArrowDiagonalUpRightCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
