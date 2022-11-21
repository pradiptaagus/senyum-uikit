import React from 'react';
import type { Icon } from '../type';
import PhoneDisabledIcon from './phone-disabled.svg';

export const PhoneDisabled = (props: Icon) => (
  <PhoneDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
