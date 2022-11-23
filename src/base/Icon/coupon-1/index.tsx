import React from 'react';
import type { Icon } from '../type';
import Coupon1Icon from './coupon-1.svg';

export const Coupon1 = (props: Icon) => (
  <Coupon1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
