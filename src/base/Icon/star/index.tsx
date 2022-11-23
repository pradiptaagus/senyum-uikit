import React from 'react';
import type { Icon } from '../type';
import StarIcon from './star.svg';
  
  export const Star = (props: Icon) => (
    <StarIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);