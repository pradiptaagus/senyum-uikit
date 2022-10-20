import React from 'react';
import type { Icon } from '../type';
import CloseIcon from './close.svg';

export const Close = (props: Icon) => (
  <CloseIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
