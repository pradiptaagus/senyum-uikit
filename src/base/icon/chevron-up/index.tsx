import React from 'react';
import type { Icon } from '../type';
import ChevronUpIcon from './chevron-up.svg';

export const ChevronUp = (props: Icon) => (
  <ChevronUpIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
