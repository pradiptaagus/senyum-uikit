import React from 'react';
import type { Icon } from '../type';
import ShoppingCartAddFilledIcon from './shopping-cart-add-filled.svg';

export const ShoppingCartAddFilled = (props: Icon) => (
  <ShoppingCartAddFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
