import React from 'react';
import type { Icon } from '../type';
import ChevronRightCircleFilledIcon from './chevron-right-circle-filled.svg';

export const ChevronRightCircleFilled = (props: Icon) => (
  <ChevronRightCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
