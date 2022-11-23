import React from 'react';
import type { Icon } from '../type';
import HistoryIcon from './history.svg';

export const History = (props: Icon) => (
  <HistoryIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
