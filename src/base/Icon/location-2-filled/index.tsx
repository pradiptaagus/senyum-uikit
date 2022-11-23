import React from 'react';
import type { Icon } from '../type';
import Location2FilledIcon from './location-2-filled.svg';

export const Location2Filled = (props: Icon) => (
  <Location2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
