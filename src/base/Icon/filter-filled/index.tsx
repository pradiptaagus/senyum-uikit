import React from 'react';
import type { Icon } from '../type';
import FilterFilledIcon from './filter-filled.svg';

export const FilterFilled = (props: Icon) => (
  <FilterFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
