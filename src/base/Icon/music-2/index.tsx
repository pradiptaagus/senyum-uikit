import React from 'react';
import type { Icon } from '../type';
import Music2Icon from './music-2.svg';

export const Music2 = (props: Icon) => (
  <Music2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
