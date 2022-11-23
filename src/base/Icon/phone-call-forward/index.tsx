import React from 'react';
import type { Icon } from '../type';
import PhoneCallForwardIcon from './phone-call-forward.svg';

export const PhoneCallForward = (props: Icon) => (
  <PhoneCallForwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
