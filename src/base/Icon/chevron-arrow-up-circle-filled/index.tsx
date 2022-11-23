import React from 'react';
import type { Icon } from '../type';
import ChevronArrowUpCircleFilledIcon from './chevron-arrow-up-circle-filled.svg';

export const ChevronArrowUpCircleFilled = (props: Icon) => (
  <ChevronArrowUpCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
