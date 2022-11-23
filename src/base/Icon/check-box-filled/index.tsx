import React from 'react';
import type { Icon } from '../type';
import CheckBoxFilledIcon from './check-box-filled.svg';

export const CheckBoxFilled = (props: Icon) => (
  <CheckBoxFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
