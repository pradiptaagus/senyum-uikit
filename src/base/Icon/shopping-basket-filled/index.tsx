import React from 'react';
import type { Icon } from '../type';
import ShoppingBasketFilledIcon from './shopping-basket-filled.svg';

export const ShoppingBasketFilled = (props: Icon) => (
  <ShoppingBasketFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
