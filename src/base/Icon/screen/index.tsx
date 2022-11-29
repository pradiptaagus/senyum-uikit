import React from 'react';
import type { Icon } from '../type';
import ScreenIcon from './screen.svg';

export const Screen = (props: Icon) => (
  <ScreenIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
