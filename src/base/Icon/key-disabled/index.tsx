import React from 'react';
import type { Icon } from '../type';
import KeyDisabledIcon from './key-disabled.svg';

export const KeyDisabled = (props: Icon) => (
  <KeyDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
