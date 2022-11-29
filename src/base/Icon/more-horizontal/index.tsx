import React from 'react';
import type { Icon } from '../type';
import MoreHorizontalIcon from './more-horizontal.svg';

export const MoreHorizontal = (props: Icon) => (
  <MoreHorizontalIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
