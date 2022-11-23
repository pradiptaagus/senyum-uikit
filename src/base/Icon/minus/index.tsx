import React from 'react';
import type { Icon } from '../type';
import MinusIcon from './minus.svg';

export const Minus = (props: Icon) => (
  <MinusIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
