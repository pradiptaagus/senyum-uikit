import React from 'react';
import type { Icon } from '../type';
import ArrowRightCircleFilledIcon from './arrow-right-circle-filled.svg';

export const ArrowRightCircleFilled = (props: Icon) => (
  <ArrowRightCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
