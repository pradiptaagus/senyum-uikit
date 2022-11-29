import React from 'react';
import type { Icon } from '../type';
import FilmReelFilledIcon from './film-reel-filled.svg';

export const FilmReelFilled = (props: Icon) => (
  <FilmReelFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
