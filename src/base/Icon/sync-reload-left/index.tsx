import React from 'react';
import type { Icon } from '../type';
import SyncReloadLeftIcon from './sync-reload-left.svg';

export const SyncReloadLeft = (props: Icon) => (
  <SyncReloadLeftIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
