import React from 'react';
import type { Icon } from '../type';
import PhoneCallForwardFilledIcon from './phone-call-forward-filled.svg';

export const PhoneCallForwardFilled = (props: Icon) => (
  <PhoneCallForwardFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
