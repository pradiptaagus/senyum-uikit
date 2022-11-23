import React from 'react';
import type { Icon } from '../type';
import PhoneCallbackFilledIcon from './phone-callback-filled.svg';

export const PhoneCallbackFilled = (props: Icon) => (
  <PhoneCallbackFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
