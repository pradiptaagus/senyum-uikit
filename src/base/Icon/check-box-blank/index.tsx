import React from 'react';
import type { Icon } from '../type';
import CheckBoxBlankIcon from './check-box-blank.svg';
  
  export const CheckBoxBlank = (props: Icon) => (
    <CheckBoxBlankIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);