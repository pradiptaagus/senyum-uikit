import React from 'react';
import type { Icon } from '../type';
import EyeDisabledIcon from './eye-disabled.svg';

export const EyeDisabled = (props: Icon) => (
  <EyeDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
