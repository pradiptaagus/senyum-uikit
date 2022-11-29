import React from 'react';
import type { Icon } from '../type';
import ArrowDiagonalDownLeftCircleFilledIcon from './arrow-diagonal-down-left-circle-filled.svg';

export const ArrowDiagonalDownLeftCircleFilled = (props: Icon) => (
  <ArrowDiagonalDownLeftCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
