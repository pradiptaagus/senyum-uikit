import React from 'react';
import type { Icon } from '../type';
import CheckIcon from './check.svg';

export const Check = (props: Icon) => (
  <CheckIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
