import React from 'react';
import type { Icon } from '../type';
import MoneyBagIcon from './money-bag.svg';

export const MoneyBag = (props: Icon) => (
  <MoneyBagIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
