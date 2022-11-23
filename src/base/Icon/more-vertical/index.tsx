import React from 'react';
import type { Icon } from '../type';
import MoreVerticalIcon from './more-vertical.svg';

export const MoreVertical = (props: Icon) => (
  <MoreVerticalIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
