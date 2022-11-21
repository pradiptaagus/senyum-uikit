import React from 'react';
import type { Icon } from '../type';
import ShoppingBagFilledIcon from './shopping-bag-filled.svg';

export const ShoppingBagFilled = (props: Icon) => (
  <ShoppingBagFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
