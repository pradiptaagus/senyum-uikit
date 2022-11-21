import React from 'react';
import type { Icon } from '../type';
import YenIcon from './yen.svg';
  
  export const Yen = (props: Icon) => (
    <YenIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);