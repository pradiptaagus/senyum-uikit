import React from 'react';
import type { Icon } from '../type';
import Microphone1Icon from './microphone-1.svg';

export const Microphone1 = (props: Icon) => (
  <Microphone1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
