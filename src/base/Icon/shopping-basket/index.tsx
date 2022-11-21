import React from 'react';
import type { Icon } from '../type';
import ShoppingBasketIcon from './shopping-basket.svg';
  
  export const ShoppingBasket = (props: Icon) => (
    <ShoppingBasketIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);