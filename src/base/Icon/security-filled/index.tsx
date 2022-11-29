import React from 'react';
import type { Icon } from '../type';
import SecurityFilledIcon from './security-filled.svg';

export const SecurityFilled = (props: Icon) => (
  <SecurityFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
