import React from 'react';
import type { Icon } from '../type';
import Location2Icon from './location-2.svg';

export const Location2 = (props: Icon) => (
  <Location2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
