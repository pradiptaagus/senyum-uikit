import React from 'react';
import type { Icon } from '../type';
import ShoppingCartMinusIcon from './shopping-cart-minus.svg';
  
  export const ShoppingCartMinus = (props: Icon) => (
    <ShoppingCartMinusIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);