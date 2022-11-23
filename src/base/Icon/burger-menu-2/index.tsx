import React from 'react';
import type { Icon } from '../type';
import BurgerMenu2Icon from './burger-menu-2.svg';

export const BurgerMenu2 = (props: Icon) => (
  <BurgerMenu2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
