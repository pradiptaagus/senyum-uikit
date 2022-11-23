import React from 'react';
import type { Icon } from '../type';
import Music2FilledIcon from './music-2-filled.svg';

export const Music2Filled = (props: Icon) => (
  <Music2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
