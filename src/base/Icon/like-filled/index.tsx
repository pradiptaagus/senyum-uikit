import React from 'react';
import type { Icon } from '../type';
import LikeFilledIcon from './like-filled.svg';
  
  export const LikeFilled = (props: Icon) => (
    <LikeFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);