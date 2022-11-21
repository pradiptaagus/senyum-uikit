import React from 'react';
import type { Icon } from '../type';
import MobilePhoneIcon from './mobile-phone.svg';

export const MobilePhone = (props: Icon) => (
  <MobilePhoneIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
