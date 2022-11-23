import React from 'react';
import type { Icon } from '../type';
import FlashOnIcon from './flash-on.svg';

export const FlashOn = (props: Icon) => (
  <FlashOnIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
