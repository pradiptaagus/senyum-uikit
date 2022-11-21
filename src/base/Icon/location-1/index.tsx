import React from 'react';
import type { Icon } from '../type';
import Location1Icon from './location-1.svg';

export const Location1 = (props: Icon) => (
  <Location1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
