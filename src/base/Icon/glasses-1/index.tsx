import React from 'react';
import type { Icon } from '../type';
import Glasses1Icon from './glasses-1.svg';

export const Glasses1 = (props: Icon) => (
  <Glasses1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
