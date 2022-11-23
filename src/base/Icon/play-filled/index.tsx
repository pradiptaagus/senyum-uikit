import React from 'react';
import type { Icon } from '../type';
import PlayFilledIcon from './play-filled.svg';

export const PlayFilled = (props: Icon) => (
  <PlayFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
