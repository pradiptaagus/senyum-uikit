import React from 'react';
import type { Icon } from '../type';
import BurgerMenu3Icon from './burger-menu-3.svg';

export const BurgerMenu3 = (props: Icon) => (
  <BurgerMenu3Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
