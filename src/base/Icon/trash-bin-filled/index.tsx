import React from 'react';
import type { Icon } from '../type';
import TrashBinFilledIcon from './trash-bin-filled.svg';

export const TrashBinFilled = (props: Icon) => (
  <TrashBinFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
