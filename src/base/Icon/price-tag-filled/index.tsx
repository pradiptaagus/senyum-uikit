import React from 'react';
import type { Icon } from '../type';
import PriceTagFilledIcon from './price-tag-filled.svg';

export const PriceTagFilled = (props: Icon) => (
  <PriceTagFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
