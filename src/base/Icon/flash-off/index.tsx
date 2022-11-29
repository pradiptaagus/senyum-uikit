import React from 'react';
import type { Icon } from '../type';
import FlashOffIcon from './flash-off.svg';

export const FlashOff = (props: Icon) => (
  <FlashOffIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
