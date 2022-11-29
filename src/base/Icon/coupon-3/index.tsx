import React from 'react';
import type { Icon } from '../type';
import Coupon3Icon from './coupon-3.svg';

export const Coupon3 = (props: Icon) => (
  <Coupon3Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
