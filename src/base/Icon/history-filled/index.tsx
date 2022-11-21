import React from 'react';
import type { Icon } from '../type';
import HistoryFilledIcon from './history-filled.svg';

export const HistoryFilled = (props: Icon) => (
  <HistoryFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
