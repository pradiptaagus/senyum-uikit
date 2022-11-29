import React from 'react';
import type { Icon } from '../type';
import Target1FilledIcon from './target-1-filled.svg';

export const Target1Filled = (props: Icon) => (
  <Target1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
