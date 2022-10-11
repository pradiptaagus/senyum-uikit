import React from 'react';
import type { Icon } from '../type';
import ArrowRightIcon from './arrow-right.svg';

export const ArrowRight = (props: Icon) => (
  <ArrowRightIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
