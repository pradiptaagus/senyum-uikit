import React from 'react';
import type { Icon } from '../type';
import FilterIcon from './filter.svg';

export const Filter = (props: Icon) => (
  <FilterIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
