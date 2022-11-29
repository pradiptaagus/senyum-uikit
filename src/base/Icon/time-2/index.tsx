import React from 'react';
import type { Icon } from '../type';
import Time2Icon from './time-2.svg';

export const Time2 = (props: Icon) => (
  <Time2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
