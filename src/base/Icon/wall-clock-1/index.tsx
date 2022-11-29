import React from 'react';
import type { Icon } from '../type';
import WallClock1Icon from './wall-clock-1.svg';

export const WallClock1 = (props: Icon) => (
  <WallClock1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
