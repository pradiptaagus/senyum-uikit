import React from 'react';
import type { Icon } from '../type';
import ShoppingCartFilledIcon from './shopping-cart-filled.svg';

export const ShoppingCartFilled = (props: Icon) => (
  <ShoppingCartFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
