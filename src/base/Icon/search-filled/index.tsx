import React from 'react';
import type { Icon } from '../type';
import SearchFilledIcon from './search-filled.svg';

export const SearchFilled = (props: Icon) => (
  <SearchFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
