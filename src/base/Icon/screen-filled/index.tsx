import React from 'react';
import type { Icon } from '../type';
import ScreenFilledIcon from './screen-filled.svg';

export const ScreenFilled = (props: Icon) => (
  <ScreenFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
