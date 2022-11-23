import React from 'react';
import type { Icon } from '../type';
import Calculator1Icon from './calculator-1.svg';

export const Calculator1 = (props: Icon) => (
  <Calculator1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
