import React from 'react';
import type { Icon } from '../type';
import ShoppingCartAddIcon from './shopping-cart-add.svg';
  
  export const ShoppingCartAdd = (props: Icon) => (
    <ShoppingCartAddIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);