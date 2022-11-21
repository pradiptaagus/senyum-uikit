import React from 'react';
import type { Icon } from '../type';
import ShoppingCartIcon from './shopping-cart.svg';
  
  export const ShoppingCart = (props: Icon) => (
    <ShoppingCartIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);