import React from 'react';
import type { Icon } from '../type';
import ArrowDiagonalUpRightCircleFilledIcon from './arrow-diagonal-up-right-circle-filled.svg';

export const ArrowDiagonalUpRightCircleFilled = (props: Icon) => (
  <ArrowDiagonalUpRightCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
