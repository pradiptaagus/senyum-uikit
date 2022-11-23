import React from 'react';
import type { Icon } from '../type';
import Target2Icon from './target-2.svg';
  
  export const Target2 = (props: Icon) => (
    <Target2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);