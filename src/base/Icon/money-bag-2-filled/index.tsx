import React from 'react';
import type { Icon } from '../type';
import MoneyBag2FilledIcon from './money-bag-2-filled.svg';

export const MoneyBag2Filled = (props: Icon) => (
  <MoneyBag2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
