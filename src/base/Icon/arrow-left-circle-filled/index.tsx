import React from 'react';
import type { Icon } from '../type';
import ArrowLeftCircleFilledIcon from './arrow-left-circle-filled.svg';

export const ArrowLeftCircleFilled = (props: Icon) => (
  <ArrowLeftCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
