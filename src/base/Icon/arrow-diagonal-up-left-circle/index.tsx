import React from 'react';
import type { Icon } from '../type';
import ArrowDiagonalUpLeftCircleIcon from './arrow-diagonal-up-left-circle.svg';

export const ArrowDiagonalUpLeftCircle = (props: Icon) => (
  <ArrowDiagonalUpLeftCircleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
