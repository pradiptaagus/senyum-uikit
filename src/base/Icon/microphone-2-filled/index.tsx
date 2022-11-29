import React from 'react';
import type { Icon } from '../type';
import Microphone2FilledIcon from './microphone-2-filled.svg';

export const Microphone2Filled = (props: Icon) => (
  <Microphone2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
