import React from 'react';
import type { Icon } from '../type';
import ArrowDiagonalDownLeftCircleIcon from './arrow-diagonal-down-left-circle.svg';

export const ArrowDiagonalDownLeftCircle = (props: Icon) => (
  <ArrowDiagonalDownLeftCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
