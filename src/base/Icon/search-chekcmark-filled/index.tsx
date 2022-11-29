import React from 'react';
import type { Icon } from '../type';
import SearchChekcmarkFilledIcon from './search-chekcmark-filled.svg';

export const SearchChekcmarkFilled = (props: Icon) => (
  <SearchChekcmarkFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
