import React from 'react';
import type { Icon } from '../type';
import FavoriteFilledIcon from './favorite-filled.svg';

export const FavoriteFilled = (props: Icon) => (
  <FavoriteFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
