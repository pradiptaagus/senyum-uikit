import React from 'react';
import type { Icon } from '../type';
import BestSeller1FilledIcon from './best-seller-1-filled.svg';

export const BestSeller1Filled = (props: Icon) => (
  <BestSeller1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
