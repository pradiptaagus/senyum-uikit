import React from 'react';
import type { Icon } from '../type';
import Home1FilledIcon from './home-1-filled.svg';

export const Home1Filled = (props: Icon) => (
  <Home1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
