import React from 'react';
import type { Icon } from '../type';
import ArrowExchange1Icon from './arrow-exchange-1.svg';

export const ArrowExchange1 = (props: Icon) => (
  <ArrowExchange1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
