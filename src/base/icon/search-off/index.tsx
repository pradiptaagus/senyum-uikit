import React from 'react';
import type { Icon } from '../type';
import SearchOffIcon from './search-off.svg';

export const SearchOff = (props: Icon) => (
  <SearchOffIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
