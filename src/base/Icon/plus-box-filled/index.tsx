import React from 'react';
import type { Icon } from '../type';
import PlusBoxFilledIcon from './plus-box-filled.svg';

export const PlusBoxFilled = (props: Icon) => (
  <PlusBoxFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
