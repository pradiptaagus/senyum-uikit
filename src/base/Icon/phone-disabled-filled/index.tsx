import React from 'react';
import type { Icon } from '../type';
import PhoneDisabledFilledIcon from './phone-disabled-filled.svg';

export const PhoneDisabledFilled = (props: Icon) => (
  <PhoneDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
