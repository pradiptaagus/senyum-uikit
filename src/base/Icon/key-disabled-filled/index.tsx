import React from 'react';
import type { Icon } from '../type';
import KeyDisabledFilledIcon from './key-disabled-filled.svg';

export const KeyDisabledFilled = (props: Icon) => (
  <KeyDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
