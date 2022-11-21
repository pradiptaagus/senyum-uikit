import React from 'react';
import type { Icon } from '../type';
import MinusCircleFilledIcon from './minus-circle-filled.svg';

export const MinusCircleFilled = (props: Icon) => (
  <MinusCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
