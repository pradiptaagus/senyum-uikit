import React from 'react';
import type { Icon } from '../type';
import SearchOffFilledIcon from './search-off-filled.svg';

export const SearchOffFilled = (props: Icon) => (
  <SearchOffFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
