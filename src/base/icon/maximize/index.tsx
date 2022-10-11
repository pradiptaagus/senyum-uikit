import React from 'react';
import type { Icon } from '../type';
import MaximizeIcon from './maximize.svg';

export const Maximize = (props: Icon) => (
  <MaximizeIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
