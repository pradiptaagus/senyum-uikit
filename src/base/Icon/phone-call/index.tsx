import React from 'react';
import type { Icon } from '../type';
import PhoneCallIcon from './phone-call.svg';

export const PhoneCall = (props: Icon) => (
  <PhoneCallIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
