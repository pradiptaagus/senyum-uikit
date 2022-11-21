import React from 'react';
import type { Icon } from '../type';
import Coupon2Icon from './coupon-2.svg';

export const Coupon2 = (props: Icon) => (
  <Coupon2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
