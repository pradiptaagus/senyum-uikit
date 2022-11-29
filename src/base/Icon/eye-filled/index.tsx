import React from 'react';
import type { Icon } from '../type';
import EyeFilledIcon from './eye-filled.svg';

export const EyeFilled = (props: Icon) => (
  <EyeFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
