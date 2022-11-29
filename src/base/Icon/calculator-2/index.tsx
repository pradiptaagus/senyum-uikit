import React from 'react';
import type { Icon } from '../type';
import Calculator2Icon from './calculator-2.svg';

export const Calculator2 = (props: Icon) => (
  <Calculator2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
