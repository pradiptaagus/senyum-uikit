import React from 'react';
import type { Icon } from '../type';
import MobilePhoneFilledIcon from './mobile-phone-filled.svg';

export const MobilePhoneFilled = (props: Icon) => (
  <MobilePhoneFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
