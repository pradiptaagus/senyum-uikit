import React from 'react';
import type { Icon } from '../type';
import History5FilledIcon from './history-5-filled.svg';

export const History5Filled = (props: Icon) => (
  <History5FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
