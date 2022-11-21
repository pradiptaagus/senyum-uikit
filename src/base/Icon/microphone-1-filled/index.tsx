import React from 'react';
import type { Icon } from '../type';
import Microphone1FilledIcon from './microphone-1-filled.svg';

export const Microphone1Filled = (props: Icon) => (
  <Microphone1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
