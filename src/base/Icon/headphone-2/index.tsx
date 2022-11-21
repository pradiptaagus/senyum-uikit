import React from 'react';
import type { Icon } from '../type';
import Headphone2Icon from './headphone-2.svg';

export const Headphone2 = (props: Icon) => (
  <Headphone2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
