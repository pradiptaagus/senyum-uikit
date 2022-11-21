import React from 'react';
import type { Icon } from '../type';
import ExitFullScreenIcon from './exit-full-screen.svg';

export const ExitFullScreen = (props: Icon) => (
  <ExitFullScreenIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
