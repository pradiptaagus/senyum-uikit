import React from 'react';
import type { Icon } from '../type';
import FlashOnFilledIcon from './flash-on-filled.svg';

export const FlashOnFilled = (props: Icon) => (
  <FlashOnFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
