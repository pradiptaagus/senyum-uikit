import React from 'react';
import type { Icon } from '../type';
import PhoneIcon from './phone.svg';

export const Phone = (props: Icon) => (
  <PhoneIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
