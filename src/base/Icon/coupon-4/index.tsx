import React from 'react';
import type { Icon } from '../type';
import Coupon4Icon from './coupon-4.svg';

export const Coupon4 = (props: Icon) => (
  <Coupon4Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
