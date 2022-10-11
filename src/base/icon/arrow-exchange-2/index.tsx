import React from 'react';
import type { Icon } from '../type';
import ArrowExchange2Icon from './arrow-exchange-2.svg';

export const ArrowExchange2 = (props: Icon) => (
  <ArrowExchange2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
