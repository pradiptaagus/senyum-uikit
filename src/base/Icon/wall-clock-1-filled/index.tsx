import React from 'react';
import type { Icon } from '../type';
import WallClock1FilledIcon from './wall-clock-1-filled.svg';

export const WallClock1Filled = (props: Icon) => (
  <WallClock1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
