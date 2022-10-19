import React from 'react';
import type { Icon } from '../type';
import ArrowLeftIcon from './arrow-left.svg';

export const ArrowLeft = (props: Icon) => (
  <ArrowLeftIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
