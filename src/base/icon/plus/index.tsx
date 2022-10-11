import React from 'react';
import type { Icon } from '../type';
import PlusIcon from './plus.svg';

export const Plus = (props: Icon) => (
  <PlusIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
