import React from 'react';
import type { Icon } from '../type';
import FullscreenIcon from './fullscreen.svg';

export const Fullscreen = (props: Icon) => (
  <FullscreenIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
