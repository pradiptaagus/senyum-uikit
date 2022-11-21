import React from 'react';
import type { Icon } from '../type';
import Coupon4FilledIcon from './coupon-4-filled.svg';

export const Coupon4Filled = (props: Icon) => (
  <Coupon4FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
