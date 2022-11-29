import React from 'react';
import type { Icon } from '../type';
import ArrowDiagonalUpLeftCircleFilledIcon from './arrow-diagonal-up-left-circle-filled.svg';

export const ArrowDiagonalUpLeftCircleFilled = (props: Icon) => (
  <ArrowDiagonalUpLeftCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
