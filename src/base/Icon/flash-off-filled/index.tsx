import React from 'react';
import type { Icon } from '../type';
import FlashOffFilledIcon from './flash-off-filled.svg';

export const FlashOffFilled = (props: Icon) => (
  <FlashOffFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
