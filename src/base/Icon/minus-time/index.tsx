import React from 'react';
import type { Icon } from '../type';
import MinusTimeIcon from './minus-time.svg';

export const MinusTime = (props: Icon) => (
  <MinusTimeIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
