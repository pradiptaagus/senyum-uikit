import React from 'react';
import type { Icon } from '../type';
import Coupon3FilledIcon from './coupon-3-filled.svg';

export const Coupon3Filled = (props: Icon) => (
  <Coupon3FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
