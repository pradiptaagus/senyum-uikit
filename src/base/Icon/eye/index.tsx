import React from 'react';
import type { Icon } from '../type';
import EyeIcon from './eye.svg';

export const Eye = (props: Icon) => (
  <EyeIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
