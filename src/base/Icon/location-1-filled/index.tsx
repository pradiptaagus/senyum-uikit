import React from 'react';
import type { Icon } from '../type';
import Location1FilledIcon from './location-1-filled.svg';

export const Location1Filled = (props: Icon) => (
  <Location1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
