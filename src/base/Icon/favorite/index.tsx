import React from 'react';
import type { Icon } from '../type';
import FavoriteIcon from './favorite.svg';

export const Favorite = (props: Icon) => (
  <FavoriteIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
