import React from 'react';
import type { Icon } from '../type';
import PhoneFilledIcon from './Phone-filled.svg';

export const PhoneFilled = (props: Icon) => (
  <PhoneFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
