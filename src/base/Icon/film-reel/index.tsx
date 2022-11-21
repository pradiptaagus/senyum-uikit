import React from 'react';
import type { Icon } from '../type';
import FilmReelIcon from './film-reel.svg';

export const FilmReel = (props: Icon) => (
  <FilmReelIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
