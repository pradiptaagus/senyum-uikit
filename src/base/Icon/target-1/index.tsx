import React from 'react';
import type { Icon } from '../type';
import Target1Icon from './target-1.svg';
  
  export const Target1 = (props: Icon) => (
    <Target1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);