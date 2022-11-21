import React from 'react';
import type { Icon } from '../type';
import Microphone2Icon from './microphone-2.svg';

export const Microphone2 = (props: Icon) => (
  <Microphone2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
