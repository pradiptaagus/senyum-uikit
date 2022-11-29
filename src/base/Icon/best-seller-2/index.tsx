import React from 'react';
import type { Icon } from '../type';
import BestSeller2Icon from './best-seller-2.svg';

export const BestSeller2 = (props: Icon) => (
  <BestSeller2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
