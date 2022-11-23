import React from 'react';
import type { Icon } from '../type';
import BestSeller2FilledIcon from './best-seller-2-filled.svg';

export const BestSeller2Filled = (props: Icon) => (
  <BestSeller2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
