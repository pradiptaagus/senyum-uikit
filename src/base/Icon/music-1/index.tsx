import React from 'react';
import type { Icon } from '../type';
import Music1Icon from './music-1.svg';

export const Music1 = (props: Icon) => (
  <Music1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
