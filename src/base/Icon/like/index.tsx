import React from 'react';
import type { Icon } from '../type';
import LikeIcon from './like.svg';

export const Like = (props: Icon) => (
  <LikeIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
