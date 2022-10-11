import React from 'react';
import type { Icon } from '../type';
import ChevronDownIcon from './chevron-down.svg';

export const ChevronDown = (props: Icon) => (
  <ChevronDownIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
