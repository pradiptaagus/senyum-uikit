import React from 'react';
import type { Icon } from '../type';
import History2Icon from './history-2.svg';

export const History2 = (props: Icon) => (
  <History2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
