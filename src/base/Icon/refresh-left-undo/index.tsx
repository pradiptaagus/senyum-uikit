import React from 'react';
import type { Icon } from '../type';
import RefreshLeftUndoIcon from './refresh-left-undo.svg';

export const RefreshLeftUndo = (props: Icon) => (
  <RefreshLeftUndoIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
