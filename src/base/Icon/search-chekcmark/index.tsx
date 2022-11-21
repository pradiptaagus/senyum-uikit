import React from 'react';
import type { Icon } from '../type';
import SearchChekcmarkIcon from './search-chekcmark.svg';
  
  export const SearchChekcmark = (props: Icon) => (
    <SearchChekcmarkIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);