import React from 'react';
import type { Icon } from '../type';
import SearchIcon from './search.svg';

export const Search = (props: Icon) => (
  <SearchIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
