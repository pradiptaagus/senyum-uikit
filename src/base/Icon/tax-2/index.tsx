import React from 'react';
import type { Icon } from '../type';
import Tax2Icon from './tax-2.svg';
  
  export const Tax2 = (props: Icon) => (
    <Tax2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);