import React from 'react';
import type { Icon } from '../type';
import Glasses2Icon from './glasses-2.svg';

export const Glasses2 = (props: Icon) => (
  <Glasses2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
