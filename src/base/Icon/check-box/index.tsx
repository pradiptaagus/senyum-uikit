import React from 'react';
import type { Icon } from '../type';
import CheckBoxIcon from './check-box.svg';

export const CheckBox = (props: Icon) => (
  <CheckBoxIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
