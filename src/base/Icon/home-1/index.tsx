import React from 'react';
import type { Icon } from '../type';
import Home1Icon from './home-1.svg';

export const Home1 = (props: Icon) => (
  <Home1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
