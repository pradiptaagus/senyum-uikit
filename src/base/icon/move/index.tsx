import React from 'react';
import type { Icon } from '../type';
import MoveIcon from './move.svg';

export const Move = (props: Icon) => (
  <MoveIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
