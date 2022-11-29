import React from 'react';
import type { Icon } from '../type';
import CircleCloseIcon from './circle-close.svg';

export const CircleClose = (props: Icon) => (
  <CircleCloseIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
