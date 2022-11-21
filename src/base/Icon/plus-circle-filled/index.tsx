import React from 'react';
import type { Icon } from '../type';
import PlusCircleFilledIcon from './plus-circle-filled.svg';

export const PlusCircleFilled = (props: Icon) => (
  <PlusCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
