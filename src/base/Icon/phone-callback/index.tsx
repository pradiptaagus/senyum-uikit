import React from 'react';
import type { Icon } from '../type';
import PhoneCallbackIcon from './phone-callback.svg';

export const PhoneCallback = (props: Icon) => (
  <PhoneCallbackIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
