import React from 'react';
import type { Icon } from '../type';
import PresentFilledIcon from './present-filled.svg';

export const PresentFilled = (props: Icon) => (
  <PresentFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
