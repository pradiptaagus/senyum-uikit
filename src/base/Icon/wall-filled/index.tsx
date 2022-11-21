import React from 'react';
import type { Icon } from '../type';
import WallFilledIcon from './wall-filled.svg';

export const WallFilled = (props: Icon) => (
  <WallFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
