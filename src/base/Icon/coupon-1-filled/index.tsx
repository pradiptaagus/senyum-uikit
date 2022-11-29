import React from 'react';
import type { Icon } from '../type';
import Coupon1FilledIcon from './coupon-1-filled.svg';

export const Coupon1Filled = (props: Icon) => (
  <Coupon1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
