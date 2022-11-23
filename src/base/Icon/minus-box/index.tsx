import React from 'react';
import type { Icon } from '../type';
import MinusBoxIcon from './minus-box.svg';

export const MinusBox = (props: Icon) => (
  <MinusBoxIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
