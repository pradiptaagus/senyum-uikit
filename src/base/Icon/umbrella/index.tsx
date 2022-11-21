import React from 'react';
import type { Icon } from '../type';
import UmbrellaIcon from './umbrella.svg';
  
  export const Umbrella = (props: Icon) => (
    <UmbrellaIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);