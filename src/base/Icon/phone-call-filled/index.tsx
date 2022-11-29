import React from 'react';
import type { Icon } from '../type';
import PhoneCallFilledIcon from './phone-call-filled.svg';

export const PhoneCallFilled = (props: Icon) => (
  <PhoneCallFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
