import React from 'react';
import type { Icon } from '../type';
import FullScreenIcon from './full-screen.svg';

export const FullScreen = (props: Icon) => (
  <FullScreenIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
