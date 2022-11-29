import React from 'react';
import type { Icon } from '../type';
import WallClock2Icon from './wall-clock-2.svg';

export const WallClock2 = (props: Icon) => (
  <WallClock2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
