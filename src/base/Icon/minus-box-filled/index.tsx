import React from 'react';
import type { Icon } from '../type';
import MinusBoxFilledIcon from './minus-box-filled.svg';

export const MinusBoxFilled = (props: Icon) => (
  <MinusBoxFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
