import React from 'react';
import type { Icon } from '../type';
import TrashBinIcon from './trash-bin.svg';

export const TrashBin = (props: Icon) => (
  <TrashBinIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
