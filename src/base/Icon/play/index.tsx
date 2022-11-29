import React from 'react';
import type { Icon } from '../type';
import PlayIcon from './play.svg';

export const Play = (props: Icon) => (
  <PlayIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
