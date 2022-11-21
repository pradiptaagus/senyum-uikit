import React from 'react';
import type { Icon } from '../type';
import ChevronLeftCircleFilledIcon from './chevron-left-circle-filled.svg';

export const ChevronLeftCircleFilled = (props: Icon) => (
  <ChevronLeftCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
