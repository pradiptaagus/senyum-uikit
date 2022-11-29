import React from 'react';
import type { Icon } from '../type';
import PriceTagIcon from './price-tag.svg';

export const PriceTag = (props: Icon) => (
  <PriceTagIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
