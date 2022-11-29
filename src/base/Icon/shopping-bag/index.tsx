import React from 'react';
import type { Icon } from '../type';
import ShoppingBagIcon from './shopping-bag.svg';

export const ShoppingBag = (props: Icon) => (
  <ShoppingBagIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
