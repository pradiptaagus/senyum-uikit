import React from 'react';
import type { Icon } from '../type';
import MoneyBagFilledIcon from './money-bag-filled.svg';

export const MoneyBagFilled = (props: Icon) => (
  <MoneyBagFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
