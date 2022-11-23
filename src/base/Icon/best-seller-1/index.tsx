import React from 'react';
import type { Icon } from '../type';
import BestSeller1Icon from './best-seller-1.svg';

export const BestSeller1 = (props: Icon) => (
  <BestSeller1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
