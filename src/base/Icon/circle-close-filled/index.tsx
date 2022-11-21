import React from 'react';
import type { Icon } from '../type';
import CircleCloseFilledIcon from './circle-close-filled.svg';

export const CircleCloseFilled = (props: Icon) => (
  <CircleCloseFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
