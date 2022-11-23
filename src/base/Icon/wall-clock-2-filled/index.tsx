import React from 'react';
import type { Icon } from '../type';
import WallClock2FilledIcon from './wall-clock-2-filled.svg';

export const WallClock2Filled = (props: Icon) => (
  <WallClock2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
