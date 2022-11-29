import React from 'react';
import type { Icon } from '../type';
import PlusBoxIcon from './plus-box.svg';

export const PlusBox = (props: Icon) => (
  <PlusBoxIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
