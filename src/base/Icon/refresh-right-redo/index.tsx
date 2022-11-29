import React from 'react';
import type { Icon } from '../type';
import RefreshRightRedoIcon from './refresh-right-redo.svg';

export const RefreshRightRedo = (props: Icon) => (
  <RefreshRightRedoIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
