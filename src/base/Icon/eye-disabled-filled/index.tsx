import React from 'react';
import type { Icon } from '../type';
import EyeDisabledFilledIcon from './eye-disabled-filled.svg';

export const EyeDisabledFilled = (props: Icon) => (
  <EyeDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
